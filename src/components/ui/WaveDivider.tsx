"use client";

import { motion } from 'framer-motion';
import styles from './WaveDivider.module.css';

interface WaveDividerProps {
    flip?: boolean;
    color?: string;
    bgColor?: string;
    variant?: 'wave' | 'organic' | 'hills';
}

export default function WaveDivider({
    flip = false,
    color = 'var(--color-white)',
    bgColor,
    variant = 'wave'
}: WaveDividerProps) {
    const paths = {
        wave: "M0,64 C180,120 360,0 540,64 C720,128 900,0 1080,64 C1260,128 1440,32 1440,64 L1440,120 L0,120 Z",
        organic: "M0,80 C120,100 240,40 360,60 C480,80 600,20 720,50 C840,80 960,30 1080,55 C1200,80 1320,45 1440,70 L1440,120 L0,120 Z",
        hills: "M0,90 Q180,30 360,70 T720,60 T1080,75 T1440,55 L1440,120 L0,120 Z"
    };

    return (
        <div
            className={`${styles.divider} ${flip ? styles.flip : ''}`}
            style={bgColor ? { backgroundColor: bgColor } : undefined}
        >
            <motion.svg
                viewBox="0 0 1440 120"
                preserveAspectRatio="none"
                className={styles.svg}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <motion.path
                    d={paths[variant]}
                    fill={color}
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                />
            </motion.svg>
        </div>
    );
}
