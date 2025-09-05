// components/ui/AnimatedBrand.tsx
import type { CSSProperties } from "react";
import { useState, useEffect } from "react";
import { colors } from "../../styles/colors";
import { fontFamily } from "../../styles/fonts";

type Phase = "typing" | "pausing" | "deleting";

interface AnimatedBrandProps {
    href?: string;
    variants?: string[];
    typeSpeedMs?: number;  // typing speed per char
    deleteSpeedMs?: number; // delete speed per char
    pauseMs?: number;       // pause when a word is fully typed
    style?: CSSProperties;  // external overrides
}

export default function AnimatedBrand({
    href = "#intro",
    variants = ["> Tong", "<Tong/>", "Tong()", "{ Tong }", "new Tong()", "~/ $ tong"],
    typeSpeedMs = 75,
    deleteSpeedMs = 45,
    pauseMs = 900,
    style,
}: AnimatedBrandProps) {
    const [index, setIndex] = useState(0);
    const [phase, setPhase] = useState<Phase>("typing");
    const [sub, setSub] = useState("");
    const [cursorVisible, setCursorVisible] = useState(true);

    // Blink the cursor
    useEffect(() => {
        const t = setInterval(() => setCursorVisible(v => !v), 500);
        return () => clearInterval(t);
    }, []);

    // Type/Delete engine
    useEffect(() => {
        const full = variants[index];

        if (phase === "typing") {
            if (sub === full) {
                const t = setTimeout(() => setPhase("pausing"), pauseMs);
                return () => clearTimeout(t);
            }
            const t = setTimeout(() => {
                setSub(full.slice(0, sub.length + 1));
            }, typeSpeedMs);
            return () => clearTimeout(t);
        }

        if (phase === "deleting") {
            if (sub === "") {
                setIndex((i) => (i + 1) % variants.length);
                setPhase("typing");
                return;
            }
            const t = setTimeout(() => {
                setSub(sub.slice(0, sub.length - 1));
            }, deleteSpeedMs);
            return () => clearTimeout(t);
        }

        if (phase === "pausing") {
            const t = setTimeout(() => setPhase("deleting"), pauseMs);
            return () => clearTimeout(t);
        }
    }, [sub, phase, index, variants, typeSpeedMs, deleteSpeedMs, pauseMs]);

    return (
        <a href={href} style={{ ...styles.brand, ...style }}>
            <span style={styles.text}>{sub}</span>
            <span style={{ ...styles.cursor, opacity: cursorVisible ? 1 : 0 }}>|</span>
        </a>
    );
}

const styles: { [k: string]: CSSProperties } = {
    brand: {
        display: "inline-flex",
        alignItems: "center",
        gap: "4px",
        fontFamily: fontFamily.code,
        fontSize: "2rem",
        fontWeight: 700,
        color: colors.text,
        textDecoration: "none",
        letterSpacing: "-0.3px",
        transition: "transform 0.2s ease, color 0.2s ease",
    },
    text: {
        color: colors.text,
    },
    cursor: {
        display: "inline-block",
        width: "2px",
        height: "1em",
        backgroundColor: colors.primary,
        transform: "translateY(1px)",
    },
};
