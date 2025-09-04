import Section from "../ui/Section";
import type { CSSProperties } from "react";
import { colors } from "../../styles/colors";

export default function About() {
    return (
      <Section id="about" title="About Me" subtitle="Who I am and what I do">
        <div style={styles.paragraphs}>
          <p style={styles.p}>
            Hello! I’m <strong>Tong Cai</strong>, a passionate software engineer
            with experience in full-stack development, system design, and building
            scalable applications. I enjoy solving real-world problems with clean,
            maintainable code.
          </p>
          <p style={styles.p}>
            Currently, I’m working at <strong>Alira Health</strong> where I focus on
            <em> real-world evidence analysis</em>, healthcare data pipelines, and
            collaborative research with cross-functional teams. Previously, I’ve led
            development for a social stock-trading app and contributed to multiple
            personal projects.
          </p>
          <p style={styles.p}>
            Outside of coding, I enjoy reading, hiking, and exploring new technologies —
            especially in AI, healthtech, and design systems.
          </p>
        </div>
      </Section>
    );
  }

const styles: { [key: string]: CSSProperties } = {
    paragraphs: {
      display: "flex",
      flexDirection: "column",
      gap: "1.25rem",
    },
    p: {
      fontSize: "1rem",
      lineHeight: 1.7,
      color: colors.textSecondary,
      margin: 0,
    },
  };
  