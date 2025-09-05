import type { ReactNode, CSSProperties } from "react";
import { colors } from "../../styles/colors";
import { fontFamily } from "../../styles/fonts";

interface ProjectCardProps {
    title: string;
    description: string;
    techStack?: string[];
    link?: string;
    image?: string;
    children?: ReactNode;
}

export default function ProjectCard({
    title,
    description,
    techStack,
    link,
    image,
    children,
}: ProjectCardProps) {
    return (
        <div style={styles.card}>
            {image && <img src={image} alt={title} style={styles.image} />}

            <div style={styles.content}>
                <h3 style={styles.title}>
                    {link ? (
                        <a href={link} target="_blank" rel="noopener noreferrer" style={styles.link}>
                            {title}
                        </a>
                    ) : (
                        title
                    )}
                </h3>

                <p style={styles.description}>{description}</p>

                {techStack && (
                    <ul style={styles.techStack}>
                        {techStack.map((tech) => (
                            <li key={tech} style={styles.techItem}>
                                {tech}
                            </li>
                        ))}
                    </ul>
                )}

                {children}
            </div>
        </div>
    );
}

// --- Inline Styles using colors ---
const styles: { [key: string]: CSSProperties } = {
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "24px",
    },

    card: {
        display: "flex",
        flexDirection: "row",
        gap: "20px",
        border: `1px solid ${colors.border}`,
        borderRadius: "12px",
        padding: "20px",
        backgroundColor: colors.surface,
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
        transition: "transform 0.2s ease",
        maxWidth: "500px",

    },

    image: {
        width: "120px",
        height: "120px",
        objectFit: "cover",
        borderRadius: "8px",
        flexShrink: 0,
    },
    content: {
        flex: 1,
    },
    title: {
        fontSize: "1.2rem",
        fontFamily: fontFamily.heading,
        margin: "0 0 0.5rem",
        color: colors.text,
    },
    link: {
        color: colors.primary,
        textDecoration: "none",
    },
    description: {
        fontSize: "0.95rem",
        fontFamily: fontFamily.body,
        color: colors.textSecondary,
        marginBottom: "0.5rem",
        textAlign: "left",
    },
    techStack: {
        display: "flex",
        flexWrap: "wrap",
        listStyle: "none",
        padding: 0,
        margin: 0,
        gap: "8px",
    },
    techItem: {
        backgroundColor: colors.codeBg,
        border: `1px solid ${colors.codeBorder}`,
        padding: "4px 8px",
        fontSize: "0.8rem",
        borderRadius: "6px",
        color: colors.muted,
    },
};
