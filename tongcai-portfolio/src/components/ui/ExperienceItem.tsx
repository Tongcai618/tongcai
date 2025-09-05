import type { CSSProperties, ReactNode } from "react";
import { colors } from "../../styles/colors";
import { fontFamily } from "../../styles/fonts";

export interface ExperienceItemProps {
    role: string;
    company: string;
    location?: string;
    date?: string;
    points?: string[];
    href?: string;          // optional link to company or project
    logoSrc?: string;       // optional company logo
    rightExtra?: ReactNode; // optional right-aligned extra (e.g., tags)
}

export default function ExperienceItem({
    role,
    company,
    location,
    date,
    points = [],
    href,
    logoSrc,
    rightExtra,
}: ExperienceItemProps) {
    return (
        <div style={styles.wrap}>
            {/* timeline dot */}
            <div style={styles.dot} aria-hidden />

            <div style={styles.card}>
                <div style={styles.headerRow}>
                    <div style={styles.left}>
                        <div style={styles.titleRow}>
                            {logoSrc && (
                                <img
                                    src={logoSrc}
                                    alt={`${company} logo`}
                                    style={styles.logo}
                                    loading="lazy"
                                />
                            )}

                            <h3 style={styles.role}>
                                {role}{" "}
                                <span style={styles.at}>
                                    @{" "}
                                    {href ? (
                                        <a href={href} target="_blank" rel="noopener noreferrer" style={styles.companyLink}>
                                            {company}
                                        </a>
                                    ) : (
                                        company
                                    )}
                                </span>
                            </h3>
                        </div>

                        {(location || date) && (
                            <p style={styles.meta}>
                                {location ? `${location}` : ""}
                                {location && date ? " • " : ""}
                                {date ? `(${date})` : ""}
                            </p>
                        )}
                    </div>

                    {rightExtra && <div style={styles.right}>{rightExtra}</div>}
                </div>

                {points.length > 0 && (
                    <ul style={styles.points}>
                        {points.map((p, idx) => (
                            <li key={idx} style={styles.point}>
                                {p}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

const styles: { [k: string]: CSSProperties } = {
    wrap: {
        position: "relative",
        paddingLeft: "28px",                // space for dot + line
        borderLeft: `4px solid ${colors.border}`,
    },
    dot: {
        position: "absolute",
        left: "-8px",                       // centers dot over the border
        top: "8px",
        width: "14px",
        height: "14px",
        borderRadius: "50%",
        backgroundColor: colors.surface,
        border: `3px solid ${colors.primary}`,
        boxSizing: "border-box",
    },
    card: {
        paddingLeft: "12px",
        fontFamily: fontFamily.body
    },
    headerRow: {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        gap: "12px",
        fontFamily: fontFamily.heading
    },
    left: {
        minWidth: 0,
    },
    right: {
        flexShrink: 0,
    },
    titleRow: {
        display: "flex",
        alignItems: "center",
        gap: "10px",
        flexWrap: "wrap",
    },
    logo: {
        width: "28px",
        height: "28px",
        objectFit: "contain",
        borderRadius: "6px",
        background: colors.surface,
        border: `1px solid ${colors.border}`,
    },
    role: {
        fontSize: "1.1rem",
        fontWeight: 600,
        color: colors.text,
        margin: 0,
    },
    at: {
        fontWeight: 500,
        color: colors.textSecondary,
    },
    companyLink: {
        color: colors.primary,
        textDecoration: "none",
    },
    meta: {
        margin: "6px 0 0",
        fontSize: "0.95rem",
        textAlign: "left",
        color: colors.muted,
    },
    points: {
        margin: "10px 0 0",
        paddingLeft: "20px",
        textAlign: "left",
        color: colors.textSecondary,
    },
    point: {
        marginBottom: "6px",
        lineHeight: 1.6,
        fontSize: "0.95rem",
    },
};
