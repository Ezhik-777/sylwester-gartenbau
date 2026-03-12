"use client";

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import styles from './Contact.module.css';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

interface FormData {
    name: string;
    email: string;
    service: string;
    message: string;
    website: string; // Honeypot field
}

export default function Contact() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        service: '',
        message: '',
        website: '', // Honeypot - should stay empty
    });
    const [status, setStatus] = useState<FormStatus>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        setErrorMessage('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Fehler beim Senden');
            }

            setStatus('success');
            setFormData({ name: '', email: '', service: '', message: '', website: '' });
        } catch (error) {
            setStatus('error');
            setErrorMessage(
                error instanceof Error ? error.message : 'Ein Fehler ist aufgetreten'
            );
        }
    };

    return (
        <section id="contact" className={styles.section}>
            <div className={styles.container}>
                <motion.div
                    className={styles.info}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>Kontaktieren Sie uns</h2>
                    <p>Wir freuen uns auf Ihre Anfrage. Lassen Sie uns gemeinsam Ihren Traumgarten realisieren.</p>

                    <ul className={styles.contactList} aria-label="Kontaktinformationen">
                        <li>
                            <span className={styles.contactIcon} aria-hidden="true">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                                </svg>
                            </span>
                            <a href="tel:+4915750720150" aria-label="Telefon: 0157 507 20150">0157 507 20150</a>
                        </li>
                        <li>
                            <span className={styles.contactIcon} aria-hidden="true">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                                    <polyline points="22,6 12,13 2,6"/>
                                </svg>
                            </span>
                            <a href="mailto:hulboj-garten-hausmeisterservice@gmx.net" aria-label="E-Mail senden an hulboj-garten-hausmeisterservice@gmx.net">hulboj-garten-hausmeisterservice@gmx.net</a>
                        </li>
                        <li>
                            <span className={styles.contactIcon} aria-hidden="true">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                                    <circle cx="12" cy="10" r="3"/>
                                </svg>
                            </span>
                            <address style={{ fontStyle: 'normal' }}>Sprengerstr. 4/2, 71686 Remseck am Neckar</address>
                        </li>
                    </ul>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {status === 'success' ? (
                        <div className={styles.successMessage} role="status" aria-live="polite">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                                <polyline points="22 4 12 14.01 9 11.01"/>
                            </svg>
                            <h3>Vielen Dank!</h3>
                            <p>Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns in Kürze bei Ihnen.</p>
                            <button
                                onClick={() => setStatus('idle')}
                                className={styles.resetBtn}
                            >
                                Neue Nachricht senden
                            </button>
                        </div>
                    ) : (
                        <form className={styles.form} onSubmit={handleSubmit} aria-label="Kontaktformular" noValidate>
                            <div className={styles.inputGroup}>
                                <label htmlFor="contact-name" className={styles.label}>
                                    Name <span aria-hidden="true">*</span>
                                    <span className={styles.srOnly}>(Pflichtfeld)</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="contact-name"
                                    placeholder="Ihr vollständiger Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    disabled={status === 'submitting'}
                                    aria-required="true"
                                    aria-describedby={status === 'error' ? 'form-error' : undefined}
                                    autoComplete="name"
                                />
                            </div>
                            <div className={styles.inputGroup}>
                                <label htmlFor="contact-email" className={styles.label}>
                                    E-Mail <span aria-hidden="true">*</span>
                                    <span className={styles.srOnly}>(Pflichtfeld)</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="contact-email"
                                    placeholder="ihre.email@beispiel.de"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    disabled={status === 'submitting'}
                                    aria-required="true"
                                    aria-describedby={status === 'error' ? 'form-error' : undefined}
                                    autoComplete="email"
                                />
                            </div>
                            <div className={styles.inputGroup}>
                                <label htmlFor="contact-service" className={styles.label}>
                                    Interesse
                                </label>
                                <select
                                    name="service"
                                    id="contact-service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    disabled={status === 'submitting'}
                                >
                                    <option value="">Woran sind Sie interessiert?</option>
                                    <option value="pflaster">Pflasterarbeiten</option>
                                    <option value="garten">Gartengestaltung</option>
                                    <option value="zaun">Zaunbau</option>
                                    <option value="pflege">Gartenpflege</option>
                                </select>
                            </div>
                            <div className={styles.inputGroup}>
                                <label htmlFor="contact-message" className={styles.label}>
                                    Nachricht <span aria-hidden="true">*</span>
                                    <span className={styles.srOnly}>(Pflichtfeld)</span>
                                </label>
                                <textarea
                                    name="message"
                                    id="contact-message"
                                    placeholder="Beschreiben Sie Ihr Projekt oder Anliegen..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    disabled={status === 'submitting'}
                                    aria-required="true"
                                    aria-describedby={status === 'error' ? 'form-error' : undefined}
                                    rows={5}
                                />
                            </div>

                            {/* Honeypot field - hidden from real users */}
                            <div className={styles.honeypot} aria-hidden="true">
                                <label htmlFor="website">Website (leave empty)</label>
                                <input
                                    type="text"
                                    name="website"
                                    id="website"
                                    value={formData.website}
                                    onChange={handleChange}
                                    tabIndex={-1}
                                    autoComplete="off"
                                />
                            </div>

                            {status === 'error' && (
                                <div
                                    id="form-error"
                                    className={styles.errorMessage}
                                    role="alert"
                                    aria-live="assertive"
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                        <circle cx="12" cy="12" r="10"/>
                                        <line x1="12" y1="8" x2="12" y2="12"/>
                                        <line x1="12" y1="16" x2="12.01" y2="16"/>
                                    </svg>
                                    {errorMessage}
                                </div>
                            )}

                            <button
                                type="submit"
                                className={styles.submitBtn}
                                disabled={status === 'submitting'}
                            >
                                {status === 'submitting' ? (
                                    <span className={styles.loadingSpinner}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="12" r="10" strokeOpacity="0.25"/>
                                            <path d="M12 2a10 10 0 0 1 10 10" strokeLinecap="round">
                                                <animateTransform
                                                    attributeName="transform"
                                                    type="rotate"
                                                    from="0 12 12"
                                                    to="360 12 12"
                                                    dur="1s"
                                                    repeatCount="indefinite"
                                                />
                                            </path>
                                        </svg>
                                        Wird gesendet...
                                    </span>
                                ) : (
                                    'Absenden'
                                )}
                            </button>

                            <p className={styles.privacyNote}>
                                Mit dem Absenden stimmen Sie unserer{' '}
                                <a href="/datenschutz">Datenschutzerklärung</a> zu.
                            </p>
                        </form>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
