import Section from "../ui/Section";
import { colors } from "../../styles/colors";
import type { CSSProperties } from "react";

const experienceItems = [
    {
        role: "Full Stack Engineer",
        company: "Ti¢ker",
        location: "Boston, MA",
        date: "Jan 2025 – Aug 2025",
        points: [
            "Led mobile initiatives and mentored 5 junior developers through weekly tech meetings and 1:1s.",
            "Designed and implemented a ticket management system, reducing assignment time by 50%.",
            "Built scalable backend services with Spring Boot, MongoDB, and Redis using a layered architecture.",
            "Developed React Native components with shared type definitions and standardized styling.",
        ],
    },
    {
        role: "Data Engineering Intern",
        company: "GF Fund Management",
        location: "Guangzhou, China",
        date: "Jul 2021 – Sep 2021",
        points: [
            "Optimized a fixed income investment backtesting program, reducing runtime by 99%.",
            "Automated overseas index data retrieval using Bloomberg and Python.",
        ],
    },
];

export default function Experience() {
    return (
        <Section id="experience" title="Experience" subtitle="Where I've worked and what I've built">
            <div style={styles.timeline}>
                {experienceItems.map((item, idx) => (
                    <div key={idx} style={styles.entry}>
                        <h3 style={styles.role}>{item.role}</h3>
                        <p style={styles.company}>
                            {item.company} • {item.location} ({item.date})
                        </p>
                        <ul style={styles.pointList}>
                            {item.points.map((point, i) => (
                                <li key={i} style={styles.point}>
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    );
}


const styles: { [key: string]: CSSProperties } = {
    timeline: {
        display: "flex",
        flexDirection: "column",
        gap: "40px",
    },
    entry: {
        borderLeft: `4px solid ${colors.border}`,
        paddingLeft: "20px",
    },
    role: {
        fontSize: "1.25rem",
        fontWeight: 600,
        color: colors.text,
        marginBottom: "0.25rem",
    },
    company: {
        fontSize: "0.95rem",
        color: colors.muted,
        marginBottom: "0.75rem",
    },
    pointList: {
        listStyleType: "disc",
        paddingLeft: "20px",
        margin: 0,
        color: colors.textSecondary,
    },
    point: {
        marginBottom: "0.5rem",
        fontSize: "0.95rem",
        lineHeight: 1.6,
    },
};
