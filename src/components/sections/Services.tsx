"use client";

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import styles from './Services.module.css';

const services = [
    {
        id: 1,
        title: "Pflasterarbeiten",
        description: "Hochwertige Pflasterungen für Einfahrten, Wege und Terrassen. Wir arbeiten mit Naturstein und Betonstein.",
        details: ["Einfahrten & Wege", "Terrassenbau", "Natursteinverlegung", "Reparatur & Sanierung"],
        image: "/project-pflaster-1.jpg",
        icon: (
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
            </svg>
        ),
    },
    {
        id: 2,
        title: "Gartengestaltung",
        description: "Individuelle Planung und Neuanlage Ihres Traumgartens. Von der Skizze bis zur Bepflanzung.",
        details: ["Konzeption & Planung", "Rollrasen & Pflanzung", "Beetgestaltung", "Lichtkonzepte"],
        image: "/project-garten-1.jpg",
        icon: (
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L12 22" />
                <path d="M17 7C17 7 15 9 12 9C9 9 7 7 7 7" />
                <path d="M19 12C19 12 16 15 12 15C8 15 5 12 5 12" />
                <path d="M20 17C20 17 17 20 12 20C7 20 4 17 4 17" />
            </svg>
        ),
    },
    {
        id: 3,
        title: "Zaun & Sichtschutz",
        description: "Privatsphäre und Sicherheit mit stilvollen Zaunsystemen und Sichtschutzlösungen.",
        details: ["Holzzäune", "Doppelstabmatten", "Gabionen", "Heckenpflanzung"],
        image: "/project-zaun-1.jpg",
        icon: (
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" y1="4" x2="4" y2="20" />
                <line x1="12" y1="4" x2="12" y2="20" />
                <line x1="20" y1="4" x2="20" y2="20" />
                <line x1="2" y1="8" x2="22" y2="8" />
                <line x1="2" y1="16" x2="22" y2="16" />
            </svg>
        ),
    },
    {
        id: 4,
        title: "Gartenpflege",
        description: "Professionelle Pflege, damit Ihr Garten das ganze Jahr über strahlt.",
        details: ["Rasenschnitt & Vertikutieren", "Hecke schneiden", "Baumpflege", "Saisonpflege"],
        image: "/project-pflege-1.jpg",
        icon: (
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 2v4" />
                <path d="M12 18v4" />
                <path d="M4.93 4.93l2.83 2.83" />
                <path d="M16.24 16.24l2.83 2.83" />
                <path d="M2 12h4" />
                <path d="M18 12h4" />
                <path d="M4.93 19.07l2.83-2.83" />
                <path d="M16.24 7.76l2.83-2.83" />
            </svg>
        ),
    }
];

interface Service {
    id: number;
    title: string;
    description: string;
    details: string[];
    image: string;
    icon: React.ReactNode;
}

function ServiceCard({ service, index, scrollYProgress }: {
    service: Service;
    index: number;
    scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress'];
}) {
    const cardRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring animations for tilt
    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), { stiffness: 200, damping: 30 });
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), { stiffness: 200, damping: 30 });

    // Scale based on scroll position
    const cardProgress = useTransform(
        scrollYProgress,
        [index * 0.2, (index + 0.5) * 0.2, (index + 1) * 0.2],
        [0.95, 1, 0.95]
    );

    // Glow effect intensity
    const glowOpacity = useTransform(
        scrollYProgress,
        [index * 0.2, (index + 0.5) * 0.2, (index + 1) * 0.2],
        [0, 1, 0]
    );

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        mouseX.set(x);
        mouseY.set(y);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <motion.div
            ref={cardRef}
            className={styles.card}
            style={{
                top: `calc(12vh + ${index * 25}px)`,
                scale: cardProgress,
                rotateX,
                rotateY,
                transformPerspective: 1000,
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 60, rotateX: 10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
            {/* Progress indicator */}
            <motion.div
                className={styles.progressLine}
                style={{ scaleY: glowOpacity }}
            />

            {/* Glow effect */}
            <motion.div
                className={styles.cardGlow}
                style={{ opacity: glowOpacity }}
            />

            <div className={styles.cardContent}>
                <motion.div
                    className={styles.cardHeader}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                    <span className={styles.cardNumber}>0{index + 1}</span>
                    <span className={styles.cardIcon}>{service.icon}</span>
                    <h3>{service.title}</h3>
                </motion.div>

                <div className={styles.cardBody}>
                    <p>{service.description}</p>
                    <ul className={styles.detailsList}>
                        {service.details.map((detail, i) => (
                            <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: 0.4 + i * 0.05 }}
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                                {detail}
                            </motion.li>
                        ))}
                    </ul>
                </div>

                <div className={styles.cardFooter}>
                    <motion.a
                        href="#contact"
                        className={styles.link}
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Anfrage stellen
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                        </svg>
                    </motion.a>
                </div>
            </div>

            <div className={styles.cardImageContainer}>
                <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: 'cover' }}
                />
                <div className={styles.cardImageOverlay} />
            </div>
        </motion.div>
    );
}

export default function Services() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <section id="services" className={styles.section} ref={containerRef}>
            {/* Decorative background elements */}
            <div className={styles.bgDecoration}>
                <div className={styles.bgCircle1} />
                <div className={styles.bgCircle2} />
            </div>

            <motion.div
                className={styles.header}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
                <span className={styles.label}>Was wir bieten</span>
                <h2 className={styles.title}>Unsere Leistungen</h2>
                <p className={styles.subtitle}>
                    Kompetenz in jedem Detail. Entdecken Sie unser umfassendes Angebot
                    für Ihren perfekten Außenbereich.
                </p>
            </motion.div>

            <div className={styles.cardsContainer}>
                {services.map((service, index) => (
                    <ServiceCard
                        key={service.id}
                        service={service}
                        index={index}
                        scrollYProgress={scrollYProgress}
                    />
                ))}
            </div>
        </section>
    );
}
