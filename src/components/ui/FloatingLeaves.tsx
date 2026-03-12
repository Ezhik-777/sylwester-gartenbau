"use client";

import { useMemo, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './FloatingLeaves.module.css';

interface Leaf {
    id: number;
    x: number;
    delay: number;
    duration: number;
    size: number;
    rotation: number;
    type: 'leaf1' | 'leaf2' | 'leaf3';
}

function generateLeaves(): Leaf[] {
    return Array(8).fill(null).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        delay: i * 1.5,
        duration: 12 + Math.random() * 8,
        size: 16 + Math.random() * 20,
        rotation: Math.random() * 360,
        type: ['leaf1', 'leaf2', 'leaf3'][Math.floor(Math.random() * 3)] as Leaf['type']
    }));
}

export default function FloatingLeaves() {
    const [isMounted, setIsMounted] = useState(false);
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    // Generate leaves only once using useMemo
    const leaves = useMemo(() => generateLeaves(), []);

    useEffect(() => {
        setIsMounted(true);
        // Check reduced motion preference
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        setPrefersReducedMotion(mediaQuery.matches);

        const handleChange = (e: MediaQueryListEvent) => {
            setPrefersReducedMotion(e.matches);
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    // Don't render on server or if user prefers reduced motion
    if (!isMounted || prefersReducedMotion) {
        return null;
    }

    return (
        <div className={styles.container} aria-hidden="true">
            {leaves.map((leaf) => (
                <motion.div
                    key={leaf.id}
                    className={`${styles.leaf} ${styles[leaf.type]}`}
                    style={{
                        left: `${leaf.x}%`,
                        width: leaf.size,
                        height: leaf.size,
                    }}
                    initial={{
                        y: -100,
                        x: 0,
                        rotate: leaf.rotation,
                        opacity: 0
                    }}
                    animate={{
                        y: ['0vh', '110vh'],
                        x: [0, 30, -20, 40, 0],
                        rotate: [leaf.rotation, leaf.rotation + 360],
                        opacity: [0, 0.8, 0.8, 0.6, 0]
                    }}
                    transition={{
                        duration: leaf.duration,
                        delay: leaf.delay,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
            ))}
        </div>
    );
}
