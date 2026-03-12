"use client";

import { useState, useRef, useCallback, useEffect } from 'react';
import Image from 'next/image';
import styles from './BeforeAfterSlider.module.css';

interface BeforeAfterSliderProps {
    beforeImage: string;
    afterImage: string;
    beforeLabel?: string;
    afterLabel?: string;
    alt: string;
}

export default function BeforeAfterSlider({
    beforeImage,
    afterImage,
    beforeLabel = "Vorher",
    afterLabel = "Nachher",
    alt,
}: BeforeAfterSliderProps) {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const updateSliderPosition = useCallback((clientX: number) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = clientX - rect.left;
        const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100);
        setSliderPosition(percentage);
    }, []);

    const handleMouseDown = useCallback((e: React.MouseEvent) => {
        e.preventDefault();
        setIsDragging(true);
        updateSliderPosition(e.clientX);
    }, [updateSliderPosition]);

    const handleTouchStart = useCallback((e: React.TouchEvent) => {
        setIsDragging(true);
        updateSliderPosition(e.touches[0].clientX);
    }, [updateSliderPosition]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!isDragging) return;
            updateSliderPosition(e.clientX);
        };

        const handleTouchMove = (e: TouchEvent) => {
            if (!isDragging) return;
            updateSliderPosition(e.touches[0].clientX);
        };

        const handleEnd = () => {
            setIsDragging(false);
        };

        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleEnd);
            window.addEventListener('touchmove', handleTouchMove);
            window.addEventListener('touchend', handleEnd);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleEnd);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleEnd);
        };
    }, [isDragging, updateSliderPosition]);

    const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
        const step = 5;
        if (e.key === 'ArrowLeft') {
            setSliderPosition(prev => Math.max(prev - step, 0));
        } else if (e.key === 'ArrowRight') {
            setSliderPosition(prev => Math.min(prev + step, 100));
        }
    }, []);

    return (
        <div
            ref={containerRef}
            className={styles.container}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            role="slider"
            aria-label={`Vergleich: ${alt}`}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(sliderPosition)}
            tabIndex={0}
            onKeyDown={handleKeyDown}
        >
            {/* After Image (Background) */}
            <div className={styles.imageWrapper}>
                <Image
                    src={afterImage}
                    alt={`${alt} - ${afterLabel}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className={styles.image}
                    priority
                />
                <span className={`${styles.label} ${styles.afterLabel}`}>
                    {afterLabel}
                </span>
            </div>

            {/* Before Image (Clipped) */}
            <div
                className={styles.beforeWrapper}
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
                <Image
                    src={beforeImage}
                    alt={`${alt} - ${beforeLabel}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className={styles.image}
                    priority
                />
                <span className={`${styles.label} ${styles.beforeLabel}`}>
                    {beforeLabel}
                </span>
            </div>

            {/* Slider Handle */}
            <div
                className={`${styles.slider} ${isDragging ? styles.dragging : ''}`}
                style={{ left: `${sliderPosition}%` }}
            >
                <div className={styles.sliderLine} />
                <div className={styles.sliderHandle}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="15 18 9 12 15 6" />
                    </svg>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="9 18 15 12 9 6" />
                    </svg>
                </div>
            </div>

            {/* Instructions */}
            <div className={styles.instructions}>
                <span>← Ziehen zum Vergleichen →</span>
            </div>
        </div>
    );
}
