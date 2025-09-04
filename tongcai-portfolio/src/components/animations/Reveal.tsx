import type { CSSProperties, ReactNode } from "react";
import { useInView } from "./useInView";

type Kind = "fade-in" | "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in";

interface RevealProps {
    children: ReactNode;
    kind?: Kind;
    durationMs?: number;
    delayMs?: number;
    distance?: number;     // px for slide variants
    once?: boolean;
    style?: CSSProperties; // optional extra styles
}

export default function Reveal({
    children,
    kind = "fade-up",
    durationMs = 600,
    delayMs = 0,
    distance = 24,
    once = true,
    style,
}: RevealProps) {
    const prefersReducedMotion =
        typeof window !== "undefined" &&
        window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.18, once });

    // initial transform based on kind
    const offset = (() => {
        switch (kind) {
            case "fade-up": return `translateY(${distance}px)`;
            case "fade-down": return `translateY(-${distance}px)`;
            case "fade-left": return `translateX(${distance}px)`;
            case "fade-right": return `translateX(-${distance}px)`;
            case "zoom-in": return "scale(0.95)";
            default: return "none";
        }
    })();

    const base: CSSProperties = {
        willChange: "opacity, transform",
        transition: `opacity ${durationMs}ms ease, transform ${durationMs}ms cubic-bezier(.2,.7,.2,1)`,
        transitionDelay: `${delayMs}ms`,
    };

    const hidden: CSSProperties = {
        opacity: 0,
        transform: offset,
    };

    const visible: CSSProperties = {
        opacity: 1,
        transform: "none",
    };

    // Respect reduced motion
    const finalStyle: CSSProperties = prefersReducedMotion
        ? { opacity: 1, transform: "none", ...style }
        : { ...base, ...(inView ? visible : hidden), ...style };

    return (
        <div ref={ref} style={finalStyle} aria-hidden={false}>
            {children}
        </div>
    );
}
