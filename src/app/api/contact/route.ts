import { NextResponse } from 'next/server';
import { z } from 'zod';

// Simple in-memory rate limiting (use Redis in production)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT_MAX = 5; // 5 requests per hour per IP

function getRateLimitKey(request: Request): string {
    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0].trim() : 'unknown';
    return ip;
}

function checkRateLimit(key: string): { allowed: boolean; remaining: number } {
    const now = Date.now();
    const record = rateLimitMap.get(key);

    if (!record || now > record.resetTime) {
        rateLimitMap.set(key, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
        return { allowed: true, remaining: RATE_LIMIT_MAX - 1 };
    }

    if (record.count >= RATE_LIMIT_MAX) {
        return { allowed: false, remaining: 0 };
    }

    record.count++;
    return { allowed: true, remaining: RATE_LIMIT_MAX - record.count };
}

// Validation schema
const contactSchema = z.object({
    name: z
        .string()
        .min(2, 'Name muss mindestens 2 Zeichen haben')
        .max(100, 'Name darf maximal 100 Zeichen haben')
        .regex(/^[a-zA-ZäöüÄÖÜßÀ-ÿ\s\-'.]+$/, 'Name enthält ungültige Zeichen'),
    email: z
        .string()
        .email('Ungültige E-Mail-Adresse')
        .max(255, 'E-Mail darf maximal 255 Zeichen haben')
        .toLowerCase(),
    service: z
        .enum(['pflaster', 'garten', 'zaun', 'pflege', ''])
        .optional()
        .default(''),
    message: z
        .string()
        .min(10, 'Nachricht muss mindestens 10 Zeichen haben')
        .max(5000, 'Nachricht darf maximal 5000 Zeichen haben'),
    // Honeypot field - should be empty
    website: z.string().max(0, 'Bot detected').optional().default(''),
});

// Sanitize HTML to prevent XSS
function sanitizeHtml(str: string): string {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

export async function POST(request: Request) {
    try {
        // Rate limiting
        const rateLimitKey = getRateLimitKey(request);
        const { allowed, remaining } = checkRateLimit(rateLimitKey);

        if (!allowed) {
            return NextResponse.json(
                { error: 'Zu viele Anfragen. Bitte versuchen Sie es später erneut.' },
                {
                    status: 429,
                    headers: {
                        'Retry-After': '3600',
                        'X-RateLimit-Remaining': '0',
                    },
                }
            );
        }

        const body = await request.json();

        // Validate with Zod
        const result = contactSchema.safeParse(body);

        if (!result.success) {
            const errors = result.error.issues.map(e => e.message).join(', ');
            return NextResponse.json(
                { error: errors },
                { status: 400 }
            );
        }

        const { name, email, service, message, website } = result.data;

        // Honeypot check - if website field is filled, it's a bot
        if (website && website.length > 0) {
            // Silently accept but don't send (fool the bot)
            return NextResponse.json(
                { success: true, message: 'Ihre Nachricht wurde erfolgreich gesendet!' },
                { status: 200 }
            );
        }

        // Sanitize user input for email HTML
        const safeName = sanitizeHtml(name);
        const safeEmail = sanitizeHtml(email);
        const safeMessage = sanitizeHtml(message);

        // Check if Resend API key is configured
        if (!process.env.RESEND_API_KEY) {
            // In development without API key, just return success
            if (process.env.NODE_ENV === 'development') {
                console.info('[DEV] Contact form submission:', { name: safeName, email: safeEmail, service });
                return NextResponse.json(
                    { success: true, message: 'Ihre Nachricht wurde erfolgreich gesendet!' },
                    {
                        status: 200,
                        headers: { 'X-RateLimit-Remaining': String(remaining) },
                    }
                );
            }
            // Outside development a missing key means the message cannot be delivered
            console.error('Contact form error: RESEND_API_KEY is not configured');
            return NextResponse.json(
                { error: 'Fehler beim Senden der Nachricht. Bitte versuchen Sie es später erneut.' },
                { status: 500 }
            );
        }

        // Dynamic import to avoid build errors
        const { Resend } = await import('resend');
        const resend = new Resend(process.env.RESEND_API_KEY);

        // Service labels
        const serviceLabels: Record<string, string> = {
            pflaster: 'Pflasterarbeiten',
            garten: 'Gartengestaltung',
            zaun: 'Zaunbau',
            pflege: 'Gartenpflege',
        };

        const serviceLabel = service ? serviceLabels[service] || service : 'Nicht angegeben';

        // Send email via Resend
        const { error } = await resend.emails.send({
            from: 'Sylwester Hulboj Website <onboarding@resend.dev>',
            to: ['hulboj-garten-hausmeisterservice@gmx.net'],
            replyTo: email,
            subject: `Neue Anfrage von ${safeName}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #1a472a; border-bottom: 2px solid #1a472a; padding-bottom: 10px;">
                        Neue Kontaktanfrage
                    </h2>
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; width: 120px;">Name:</td>
                            <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${safeName}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">E-Mail:</td>
                            <td style="padding: 10px 0; border-bottom: 1px solid #eee;">
                                <a href="mailto:${safeEmail}" style="color: #1a472a;">${safeEmail}</a>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Interesse:</td>
                            <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${serviceLabel}</td>
                        </tr>
                    </table>
                    <div style="margin-top: 20px;">
                        <h3 style="color: #1a472a; margin-bottom: 10px;">Nachricht:</h3>
                        <div style="background: #f5f5f0; padding: 15px; border-radius: 8px; line-height: 1.6;">
                            ${safeMessage.replace(/\n/g, '<br>')}
                        </div>
                    </div>
                    <hr style="margin-top: 30px; border: none; border-top: 1px solid #eee;">
                    <p style="color: #666; font-size: 12px; margin-top: 15px;">
                        Diese Nachricht wurde über das Kontaktformular auf der Website gesendet.
                    </p>
                </div>
            `,
        });

        if (error) {
            console.error('Resend API error:', error);
            return NextResponse.json(
                { error: 'Fehler beim Senden der Nachricht. Bitte versuchen Sie es später erneut.' },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { success: true, message: 'Ihre Nachricht wurde erfolgreich gesendet!' },
            {
                status: 200,
                headers: { 'X-RateLimit-Remaining': String(remaining) },
            }
        );

    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            { error: 'Ein unerwarteter Fehler ist aufgetreten.' },
            { status: 500 }
        );
    }
}
