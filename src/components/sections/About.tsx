"use client";

import { motion } from 'framer-motion';
import AnimatedCounter from '../ui/AnimatedCounter';
import styles from './About.module.css';

const stats = [
    { value: 10, suffix: "+", label: "Jahre Erfahrung" },
    { value: 200, suffix: "+", label: "Projekte" },
    { value: 100, suffix: "%", label: "Zufriedenheit" },
];

const features = [
    {
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
        ),
        title: "Qualitätsgarantie",
        description: "Hochwertige Materialien und sorgfältige Ausführung"
    },
    {
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
            </svg>
        ),
        title: "Pünktlichkeit",
        description: "Zuverlässige Termineinhaltung bei jedem Projekt"
    },
    {
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
        title: "Persönliche Beratung",
        description: "Individuelle Lösungen für Ihre Wünsche"
    }
];

export default function About() {
    return (
        <section id="about" className={styles.section}>
            {/* Decorative background */}
            <div className={styles.bgDecoration}>
                <div className={styles.bgShape1} />
                <div className={styles.bgShape2} />
            </div>

            <div className={styles.container}>
                {/* Stats Section */}
                <motion.div
                    className={styles.statsSection}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className={styles.statsContent}>
                        <span className={styles.label}>Über uns</span>
                        <h2 className={styles.title}>
                            Ihr Experte für<br />
                            <span className={styles.highlight}>Gartenträume</span>
                        </h2>
                        <p className={styles.description}>
                            Sylwester Hulboj steht für Qualität, Zuverlässigkeit und kreative Lösungen
                            im Garten- und Hausmeisterservice. Mit Leidenschaft und Erfahrung verwandeln
                            wir Außenbereiche in Wohlfühloasen.
                        </p>
                    </div>

                    <div className={styles.statsGrid}>
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                className={styles.statCard}
                                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.6,
                                    delay: 0.2 + index * 0.1,
                                    ease: [0.16, 1, 0.3, 1]
                                }}
                            >
                                <h4>
                                    <AnimatedCounter
                                        target={stat.value}
                                        duration={2.5}
                                        suffix={stat.suffix}
                                    />
                                </h4>
                                <span>{stat.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Features Section */}
                <motion.div
                    className={styles.featuresSection}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                >
                    <div className={styles.featuresGrid}>
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                className={styles.featureCard}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.1 + index * 0.1,
                                    ease: [0.16, 1, 0.3, 1]
                                }}
                                whileHover={{ y: -5 }}
                            >
                                <div className={styles.featureIcon}>
                                    {feature.icon}
                                </div>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Visual Element */}
                <motion.div
                    className={styles.visualSection}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className={styles.visualCard}>
                        <div className={styles.visualContent}>
                            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                                <path d="M12 2L12 22" />
                                <path d="M17 7C17 7 15 9 12 9C9 9 7 7 7 7" />
                                <path d="M19 12C19 12 16 15 12 15C8 15 5 12 5 12" />
                                <path d="M20 17C20 17 17 20 12 20C7 20 4 17 4 17" />
                            </svg>
                            <h3>Leidenschaft für Gärten</h3>
                            <p>Wir lieben was wir tun – und das sieht man in jedem Projekt.</p>
                        </div>
                        <div className={styles.visualDecoration}>
                            <div className={styles.ring1} />
                            <div className={styles.ring2} />
                            <div className={styles.ring3} />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
