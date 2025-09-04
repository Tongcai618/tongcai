import Section from "../ui/Section";
import { colors } from "../../styles/colors";
import type { CSSProperties } from "react";

const skillCategories = {
    "Languages": ["TypeScript", "JavaScript", "Python", "Java", "SQL"],
    "Frontend": ["React", "React Native", "HTML", "CSS", "Vite", "Expo"],
    "Backend": ["Spring Boot", "Node.js", "Express", "MongoDB", "Redis", "RabbitMQ"],
    "DevOps & Tools": ["Git", "Docker", "Postman", "AWS EC2"],
};

export default function Skills() {
    return (
        <Section id="skills" title="Skills & Technologies" subtitle="Things I use to build and ship software">
            <div style={styles.skillsGrid}>
                {Object.entries(skillCategories).map(([category, skills]) => (
                    <div key={category} style={styles.category}>
                        <h4 style={styles.categoryTitle}>{category}</h4>
                        <ul style={styles.skillList}>
                            {skills.map((skill) => (
                                <li key={skill} style={styles.skillItem}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    );
}

const styles: { [key: string]: CSSProperties } = {
    skillsGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "32px",
    },
    category: {
        backgroundColor: colors.surface,
        padding: "20px",
        borderRadius: "12px",
        border: `1px solid ${colors.border}`,
        boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
    },
    categoryTitle: {
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
