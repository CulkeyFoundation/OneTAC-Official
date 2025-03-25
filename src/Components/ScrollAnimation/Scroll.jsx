'use client'

import { useEffect } from 'react';
import Lenis from 'lenis';

export default function Scroll() {
    useEffect(() => {
        const lenis = new Lenis();

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
        return () => {
            lenis.destroy();
        };
    }, []);

    return null;
}