"use client";

import { useEffect } from "react";

interface ErrorProps {
    error: Error & { digest?: string };
    reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
    useEffect(() => {
        // Log error to error reporting service in production
        if (process.env.NODE_ENV === "production") {
            console.error("Application error:", error);
        }
    }, [error]);

    return (
        <main
            style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "2rem",
                background: "linear-gradient(135deg, #1a472a 0%, #2c5e40 100%)",
                color: "white",
                textAlign: "center",
            }}
        >
            <div
                style={{
                    maxWidth: "500px",
                    background: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(10px)",
                    padding: "3rem",
                    borderRadius: "24px",
                }}
            >
                <svg
                    width="64"
                    height="64"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    style={{ marginBottom: "1.5rem", opacity: 0.9 }}
                >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>

                <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
                    Etwas ist schiefgelaufen
                </h1>

                <p
                    style={{
                        opacity: 0.9,
                        marginBottom: "2rem",
                        lineHeight: 1.6,
                    }}
                >
                    Es tut uns leid, aber ein unerwarteter Fehler ist aufgetreten.
                    Bitte versuchen Sie es erneut.
                </p>

                <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                    <button
                        onClick={reset}
                        style={{
                            padding: "14px 28px",
                            background: "white",
                            color: "#1a472a",
                            border: "none",
                            borderRadius: "9999px",
                            fontWeight: 600,
                            cursor: "pointer",
                            transition: "transform 0.2s",
                        }}
                        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                    >
                        Erneut versuchen
                    </button>

                    <a
                        href="/"
                        style={{
                            padding: "14px 28px",
                            background: "transparent",
                            color: "white",
                            border: "2px solid white",
                            borderRadius: "9999px",
                            fontWeight: 600,
                            textDecoration: "none",
                            transition: "all 0.2s",
                        }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.background = "white";
                            e.currentTarget.style.color = "#1a472a";
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.background = "transparent";
                            e.currentTarget.style.color = "white";
                        }}
                    >
                        Zur Startseite
                    </a>
                </div>
            </div>
        </main>
    );
}
