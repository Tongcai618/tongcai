import type { ReactNode, CSSProperties } from 'react';
import { colors } from "../../styles/colors"; // adjust path as needed

interface SectionProps {
    id: string;
    title: string;
    subtitle?: string;
    children: ReactNode;
  }
  
  export default function Section({ id, title, subtitle, children }: SectionProps) {
    return (
      <section id={id} style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.title}>{title}</h2>
          {subtitle && <p style={styles.subtitle}>{subtitle}</p>}
          <div style={styles.content}>{children}</div>
        </div>
      </section>
    );
  }
  
  // --- Inline styles using shared colors ---
  const styles: { [key: string]: CSSProperties } = {
    section: {
      backgroundColor: colors.bg,
      padding: "60px 20px",
    },
    container: {
      maxWidth: "3000px",
      margin: "0 auto",
    },
    title: {
      fontSize: "2rem",
      fontWeight: 600,
      textAlign: "center",
      color: colors.text,
      margin: 0,
    },
    subtitle: {
      fontSize: "1.125rem",
      textAlign: "center",
      color: colors.textSecondary,
      marginTop: "0.75rem",
    },
    content: {
      marginTop: "2.5rem",
    },
  };