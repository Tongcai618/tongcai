import type { CSSProperties } from "react";
import { colors } from "../../styles/colors";
import Section from "../ui/Section";

export default function Intro() {
    return (
        <Section id="intro">
            <div style={styles.container}>
                <h1 style={styles.name}>Tong Cai</h1>
                <p style={styles.title}>Full Stack Engineer | Cloud Engineer</p>
                <p style={styles.description}>
                    Passionate about building scalable systems, designing new architectures, and mentoring engineering teams.
                    Currently focused on developing software using TypeScript, Spring Boot, and Python.
                </p>
            </div>
        </Section>
    );
}


const styles: { [key: string]: CSSProperties } = {
    container: {
        maxWidth: "800px",
        margin: "0 auto",
    },
    name: {
        fontSize: "3rem",
        fontWeight: 700,
        marginBottom: "0.5rem",
        color: colors.text,
    },
    title: {
        fontSize: "1.5rem",
        color: colors.textSecondary,
        marginBottom: "1.5rem",
    },
    description: {
        fontSize: "1.05rem",
        color: colors.muted,
        maxWidth: "600px",
        margin: "0 auto",
        lineHeight: 1.6,
    },
};
