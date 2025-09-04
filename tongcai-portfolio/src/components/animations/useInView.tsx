import { useEffect, useRef, useState } from "react";

export function useInView<T extends HTMLElement>(
    { threshold = 0.15, rootMargin = "0px", once = true } = {}
) {
    const ref = useRef<T | null>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const obs = new IntersectionObserver(
            (entries) => {
                const isIntersecting = entries.some(e => e.isIntersecting);
                if (isIntersecting) {
                    setInView(true);
                    if (once) obs.disconnect();
                } else if (!once) {
                    setInView(false);
                }
            },
            { threshold, rootMargin }
        );

        obs.observe(el);
        return () => obs.disconnect();
    }, [threshold, rootMargin, once]);

    return { ref, inView };
}
