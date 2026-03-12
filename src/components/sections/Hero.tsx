"use client";

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './Hero.module.css';

export default function Hero() {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    // Layered parallax - different speeds for depth effect
    // Background layer (slowest - furthest away)
    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

    // Middle layer (medium speed)
    const midY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const midOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    // Foreground layer (fastest - closest to viewer)
    const fgY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
    const fgOpacity = useTransform(scrollYProgress, [0, 0.3], [0.5, 0]);

    // Overlay gradient animation
    const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

    // Content animation
    const contentY = useTransform(scrollYProgress, [0, 0.5], ["0%", "30%"]);
    const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

    return (
        <section className={styles.hero} ref={containerRef}>
            {/* Sky gradient layer (background) */}
            <div className={styles.skyLayer} />

            {/* Main background image layer */}
            <motion.div
                className={styles.backgroundLayer}
                style={{ y: bgY, scale: bgScale }}
            >
                <Image
                    src="/hero-bg.jpg"
                    alt="Gepflegter Garten mit modernem Landschaftsdesign"
                    fill
                    priority
                    sizes="100vw"
                    style={{ objectFit: 'cover' }}
                    quality={90}
                />
            </motion.div>

            {/* Decorative middle layer - organic shapes */}
            <motion.div
                className={styles.middleLayer}
                style={{ y: midY, opacity: midOpacity }}
            >
                <div className={styles.organicShape1} />
                <div className={styles.organicShape2} />
            </motion.div>

            {/* Gradient overlay */}
            <motion.div
                className={styles.overlay}
                style={{ opacity: overlayOpacity }}
            />

            {/* Foreground decorative elements */}
            <motion.div
                className={styles.foregroundLayer}
                style={{ y: fgY, opacity: fgOpacity }}
            >
                <div className={styles.leaf1} />
                <div className={styles.leaf2} />
                <div className={styles.leaf3} />
            </motion.div>

            {/* Main content */}
            <motion.div
                className={styles.content}
                style={{ y: contentY, opacity: contentOpacity }}
            >
                <motion.div
                    className={styles.badge}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    Ihr Partner für Garten & Haus
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                >
                    Sylwester Hulboj
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                    className={styles.subtitle}
                >
                    Professioneller Garten- & Hausmeisterservice
                    <span className={styles.location}>in Remseck am Neckar</span>
                </motion.p>

                <motion.div
                    className={styles.ctaGroup}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                >
                    <Link href="#contact" className={styles.ctaPrimary}>
                        <span>Kostenloses Angebot</span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                    <Link href="#services" className={styles.ctaSecondary}>
                        Leistungen entdecken
                    </Link>
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                className={styles.scrollIndicator}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
            >
                <motion.div
                    className={styles.scrollMouse}
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <div className={styles.scrollWheel} />
                </motion.div>
                <span>Scrollen</span>
            </motion.div>
        </section>
    );
}
