import Section from "../ui/Section";
import Card from "../ui/Card";
import type { CSSProperties } from "react";
import { colors } from "../../styles/colors";

export default function Contact() {
  return (
    <Section id="contact" title="Contact Me">
      <Card>
        <p style={styles.p}>
          I'd love to hear from you! Whether you have a question about a project,
          want to collaborate, or just want to connect, feel free to reach out.
        </p>

        <div style={styles.infoGroup}>
          <p style={styles.label}>📧 Email:</p>
          <a href="mailto:tongcai617@gmail.com" style={styles.link}>
            tongcai617@gmail.com
          </a>
        </div>

        <div style={styles.infoGroup}>
          <p style={styles.label}>💼 LinkedIn:</p>
          <a
            href="https://www.linkedin.com/in/tongcai/"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            linkedin.com/in/tongcai
          </a>
        </div>

        <div style={styles.infoGroup}>
          <p style={styles.label}>📁 GitHub:</p>
          <a
            href="https://github.com/Tongcai618"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            github.com/Tongcai618
          </a>
        </div>
      </Card>
    </Section>
  );
}

const styles: { [key: string]: CSSProperties } = {
  p: {
    fontSize: "1rem",
    lineHeight: 1.7,
    color: colors.textSecondary,
    marginBottom: "1.5rem",
  },
  infoGroup: {
    marginBottom: "1rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",     // horizontally center
    textAlign: "center",      // optional: center text
  },
  label: {
    margin: 0,
    fontWeight: 600,
    color: colors.text,
    fontSize: "1rem",
  },
  link: {
    color: colors.primary,
    textDecoration: "none",
    fontSize: "0.95rem",
  },
};
