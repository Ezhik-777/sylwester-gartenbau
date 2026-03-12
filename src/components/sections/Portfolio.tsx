"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Portfolio.module.css';
import BeforeAfterSlider from '@/components/ui/BeforeAfterSlider';

const projects = [
    { id: 1, title: "Moderne Terrasse", category: "Pflaster", image: "/project-pflaster-1.jpg", description: "Natursteinpflaster mit LED-Beleuchtung" },
    { id: 2, title: "Gartenparadies", category: "Garten", image: "/project-garten-1.jpg", description: "Geschwungener Weg mit Beetbepflanzung" },
    { id: 3, title: "Eleganter Sichtschutz", category: "Zaun", image: "/project-zaun-1.jpg", description: "Sichtschutzzaun aus Lärchenholz" },
    { id: 4, title: "Einfahrt Sanierung", category: "Pflaster", image: "/project-pflaster-2.jpg", description: "Komplette Neugestaltung der Einfahrt" },
    { id: 5, title: "Grüne Oase", category: "Garten", image: "/project-garten-2.jpg", description: "Zen-Garten mit Wasserelement" },
    { id: 6, title: "Rasenpflege", category: "Pflege", image: "/project-pflege-1.jpg", description: "Regelmäßige Gartenpflege" },
];

const beforeAfterProjects = [
    {
        id: 1,
        title: "Gartenumgestaltung",
        before: "/portfolio/before-1.jpg",
        after: "/portfolio/after-1.jpg",
    },
    {
        id: 2,
        title: "Pflasterarbeiten Einfahrt",
        before: "/portfolio/before-2.jpg",
        after: "/portfolio/after-2.jpg",
    },
    {
        id: 3,
        title: "Zaunbau & Bepflanzung",
        before: "/portfolio/before-3.jpg",
        after: "/portfolio/after-3.jpg",
    },
];

const categories = ["Alle", "Pflaster", "Garten", "Zaun", "Pflege"];

export default function Portfolio() {
    const [filter, setFilter] = useState("Alle");

    const filteredProjects = filter === "Alle"
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <section id="projects" className={styles.section}>
            {/* Background decoration */}
            <div className={styles.bgDecoration}>
                <div className={styles.bgShape1} />
                <div className={styles.bgShape2} />
            </div>

            <div className={styles.container}>
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <span className={styles.label}>Portfolio</span>
                    <h2 className={styles.title}>Unsere Projekte</h2>
                    <p className={styles.subtitle}>
                        Entdecken Sie eine Auswahl unserer realisierten Gartenprojekte
                        und lassen Sie sich inspirieren.
                    </p>

                    <div className={styles.controls} role="tablist" aria-label="Portfolio Filter">
                        {categories.map(cat => (
                            <motion.button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`${styles.filterBtn} ${filter === cat ? styles.active : ''}`}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                role="tab"
                                aria-selected={filter === cat}
                                aria-controls="portfolio-grid"
                            >
                                {cat}
                            </motion.button>
                        ))}
                    </div>
                </motion.div>

                <motion.div layout className={styles.grid} id="portfolio-grid" role="tabpanel" aria-label="Projektgalerie">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                layout
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.08,
                                    ease: [0.16, 1, 0.3, 1]
                                }}
                                className={styles.item}
                                whileHover={{ y: -8 }}
                            >
                                <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className={styles.itemImage}
                                    />

                                <div className={styles.overlay}>
                                    <motion.span
                                        className={styles.category}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 }}
                                    >
                                        {project.category}
                                    </motion.span>
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <div className={styles.viewMore}>
                                        <span>Details ansehen</span>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <line x1="5" y1="12" x2="19" y2="12" />
                                            <polyline points="12 5 19 12 12 19" />
                                        </svg>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Before/After Section */}
                <motion.div
                    className={styles.beforeAfterSection}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h3 className={styles.beforeAfterTitle}>
                        <span className={styles.labelSmall}>Transformation</span>
                        Vorher / Nachher
                    </h3>
                    <p className={styles.beforeAfterSubtitle}>
                        Ziehen Sie den Regler, um die Transformation zu sehen
                    </p>

                    <div className={styles.beforeAfterGrid}>
                        {beforeAfterProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                className={styles.beforeAfterItem}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                            >
                                <BeforeAfterSlider
                                    beforeImage={project.before}
                                    afterImage={project.after}
                                    alt={project.title}
                                />
                                <h4 className={styles.beforeAfterItemTitle}>{project.title}</h4>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
