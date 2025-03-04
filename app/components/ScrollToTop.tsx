'use client';

import { useEffect, useState } from 'react';
import { ArrowUpIcon } from 'lucide-react';

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-6 right-6 p-3 bg-[#A436F1] text-white rounded-full shadow-lg transition-opacity duration-300 hover:bg-[#160F22] ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
            <ArrowUpIcon size={20} />
        </button>
    );
}
