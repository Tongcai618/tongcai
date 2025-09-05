import type { ReactNode, CSSProperties } from "react";
import { colors } from "../../styles/colors";
import { fontFamily } from "../../styles/fonts";

interface CardProps {
    children: ReactNode;
    style?: CSSProperties; // allow external overrides
}

export default function Card({ children, style }: CardProps) {
    return (
        <div style={{ ...styles.card, ...style }}>
            <div style={styles.body}>{children}</div>
        </div>
    );
}


const styles: { [key: string]: CSSProperties } = {
    card: {
        backgroundColor: colors.surface,
        border: `1px solid ${colors.border}`,
        borderRadius: "12px",
        padding: "20px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
        color: colors.text,
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        maxWidth: "400px",
    },
    body: {
        fontFamily: fontFamily.body,
        textAlign: "left",
        fontSize: "1rem",
        lineHeight: 1.6,
        color: colors.textSecondary,
        display: "flex", 
        flexDirection: "column", 
        gap: 30
    },
};
