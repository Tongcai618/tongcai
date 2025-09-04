import type { ReactNode, CSSProperties } from 'react';
import { colors } from "../../styles/colors"; // adjust path as needed
import TypingText from '../animations/TypingText';

interface SectionProps {
    id: string;
    title?: string;
    subtitle?: string;
    children: ReactNode;
    layout?: "column" | "row";
    gap?: string | number;
}

export default function Section({ id, title, subtitle, children, layout = "column", gap = '2rem' }: SectionProps) {
    return (
        <section id={id} style={styles.section}>
            {title && (
                <TypingText
                    text={title}
                    as="h2"
                    speedMs={40}
                    cursor
                    startOnVisible
                    once
                    style={styles.title}
                />
            )}
            {subtitle && <p style={styles.subtitle}>{subtitle}</p>}
            <div
                style={{
                    ...styles.content,
                    flexDirection: layout,
                    gap,
                }}
            >
                {children}
            </div>
        </section>
    );
}

// --- Inline styles using shared colors ---
const styles: { [key: string]: CSSProperties } = {
    section: {
        backgroundColor: colors.bg,
        padding: "60px 20px",
    },
    title: {
        fontSize: "3rem",
        fontWeight: 1200,
        textAlign: "center",
        color: colors.text,
        margin: 0,
    },
    subtitle: {
        fontSize: "1.125rem",
        textAlign: "center",
        color: colors.textSecondary,
        marginTop: "0.75rem",
    },
    content: {
        marginTop: "2.5rem",
        display: "flex",
        justifyContent: "center", // ⬅️ center items horizontally
        alignItems: "center",     // ⬅️ center items vertically
        gap: "2rem",
        flexWrap: "wrap",         // ⬅️ keep it responsive
        width: "100%",            // ⬅️ allow centering within container
    },
};