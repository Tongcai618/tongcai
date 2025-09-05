// components/ui/SkillCard.tsx
import type { CSSProperties } from "react";
import { colors } from "../../styles/colors";
import Tag from "./Tag";

interface SkillCardProps {
    category: string;
    skills: string[];
}

export default function SkillCard({ category, skills }: SkillCardProps) {
    return (
        <div style={styles.card}>
            <h4 style={styles.title}>{category}</h4>
            <ul style={styles.skillList}>

                {skills.map((skill) => (
                    <Tag label={skill} size="md" variant="soft" asButton />
                ))}
            </ul>
        </div>
    );
}

const styles: { [key: string]: CSSProperties } = {
    card: {
        backgroundColor: colors.surface,
        padding: "20px",
        borderRadius: "12px",
        border: `1px solid ${colors.border}`,
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
        // Centering content
        display: "flex",
        flexDirection: "column",
        alignItems: "center",     // horizontally center
        textAlign: "center",      // optional: center text
    },
    title: {
        margin: "0 0 12px",
        fontSize: "1.1rem",
        color: colors.text,
    },
    skillList: {
        listStyle: "none",
        padding: 0,
        margin: 0,
        display: "flex",
        flexWrap: "wrap",
        gap: "8px",
    },
    skillItem: {
        backgroundColor: colors.codeBg,
        border: `1px solid ${colors.codeBorder}`,
        color: colors.muted,
        padding: "4px 10px",
        fontSize: "0.85rem",
        borderRadius: "6px",
    },
};
