import type { CSSProperties } from "react";
import { colors } from "../../styles/colors";

export default function Intro() {
    return (
        <section id="intro" style={styles.section}>
            <div style={styles.container}>
                <h1 style={styles.name}>Tong Cai</h1>
                <p style={styles.title}>Full Stack Engineer | Real-World Evidence Analyst</p>
                <p style={styles.description}>
                    Passionate about building scalable systems, analyzing healthcare data, and mentoring teams.
                    Currently developing fintech & clinical research software with TypeScript, Spring Boot, and Python.
                </p>
            </div>
        </section>
    );
}


const styles: { [key: string]: CSSProperties } = {
    section: {
        backgroundColor: colors.bg,
        padding: "100px 20px 80px",
        textAlign: "center",
    },
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
