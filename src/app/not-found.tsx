import Link from "next/link";

export default function NotFound() {
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
                <div
                    style={{
                        fontSize: "6rem",
                        fontWeight: 700,
                        lineHeight: 1,
                        marginBottom: "1rem",
                        background: "linear-gradient(135deg, #fff 0%, #d2b48c 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                    }}
                >
                    404
                </div>

                <h1 style={{ fontSize: "1.75rem", marginBottom: "1rem" }}>
                    Seite nicht gefunden
                </h1>

                <p
                    style={{
                        opacity: 0.9,
                        marginBottom: "2rem",
                        lineHeight: 1.6,
                    }}
                >
                    Die angeforderte Seite existiert nicht oder wurde verschoben.
                    Kehren Sie zur Startseite zurück, um fortzufahren.
                </p>

                <Link
                    href="/"
                    style={{
                        display: "inline-block",
                        padding: "14px 32px",
                        background: "white",
                        color: "#1a472a",
                        border: "none",
                        borderRadius: "9999px",
                        fontWeight: 600,
                        textDecoration: "none",
                        transition: "transform 0.2s",
                    }}
                >
                    Zur Startseite
                </Link>
            </div>
        </main>
    );
}
