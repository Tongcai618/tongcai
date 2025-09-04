import Section from "../ui/Section";
import type { CSSProperties, FormEvent } from "react";
import { colors } from "../../styles/colors";
import Card from "../ui/Card";

export default function Contact() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const message = form.get("message");
    // Simple mailto fallback (replace with API or Formspree later)
    window.location.href = `mailto:tongcai010618@gmail.com?subject=Message from ${name}&body=${message} (${email})`;
  };

  return (
    <Section id="contact" title="Contact Me" layout="row" gap="2rem">
      <div style={styles.left}>
        <h3 style={styles.heading}>Hi, nice to meet you</h3>
        <p style={styles.text}>
          I’m always interested in new opportunities and exciting projects.
        </p>
        <p style={styles.text}>
          Feel free to reach out!
        </p>
        <p style={styles.text}>
          📧 <a href="mailto:tongcai010618@gmail.com" style={styles.link}>tongcai010618@gmail.com</a>
        </p>
        <p style={styles.text}>
          📞 <a href="tel:+18574981548" style={styles.link}>857-498-1548</a>
        </p>

        <p style={styles.text}>📍 Boston, MA</p>
        <div style={styles.socials}>
          <a href="https://www.linkedin.com/in/tong-cai-4b1b00290/" target="_blank" rel="noopener noreferrer" style={styles.link}>LinkedIn</a>
          <a href="https://github.com/Tongcai618" target="_blank" rel="noopener noreferrer" style={styles.link}>GitHub</a>
        </div>
      </div>

      <Card>
        <form style={styles.form} onSubmit={handleSubmit}>
          <label style={styles.label}>
            Name
            <input type="text" name="name" required style={styles.input} />
          </label>
          <label style={styles.label}>
            Email
            <input type="email" name="email" required style={styles.input} />
          </label>
          <label style={styles.label}>
            Message
            <textarea name="message" rows={5} required style={styles.textarea} />
          </label>
          <button type="submit" style={styles.button}>Send Message</button>
        </form>
      </Card>
    </Section>
  );
}

const styles: { [k: string]: CSSProperties } = {
  left: {
    flex: "0 1 480px",
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
    textAlign: "left",
    alignSelf: "flex-start",
  },
  heading: {
    fontSize: "1.5rem",
    fontWeight: 600,
    color: colors.text,
    margin: 0,
  },
  text: {
    margin: 0,
    fontSize: "1rem",
    color: colors.textSecondary,
  },
  link: {
    color: colors.primary,
    textDecoration: "none",
  },
  socials: {
    marginTop: "0.5rem",
    display: "flex",
    gap: "1rem",
  },
  form: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    color: `${colors.bg}`,
  },
  label: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    fontWeight: 500,
    color: colors.text,
  },
  input: {
    padding: "0.5rem 0.75rem",
    border: `1px solid ${colors.border}`,
    borderRadius: "6px",
    fontSize: "1rem",
    color: colors.text,           // text color inside input
    backgroundColor: colors.bg,
  },
  textarea: {
    padding: "0.5rem 0.75rem",
    border: `1px solid ${colors.border}`,
    borderRadius: "6px",
    fontSize: "1rem",
    resize: "vertical",
    color: colors.text,           // text color inside input
    backgroundColor: colors.bg,
  },
  button: {
    marginTop: "0.5rem",
    padding: "0.6rem 1.2rem",
    borderRadius: "8px",
    border: "none",
    fontSize: "1rem",
    fontWeight: 600,
    backgroundColor: colors.primary,
    color: "#fff",
    cursor: "pointer",
  },
};
