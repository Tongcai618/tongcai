import { useState } from "react";
import { colors } from "../../styles/colors";
import type { CSSProperties } from "react";
import AnimatedBrand from "../animations/AnimatedBrand";

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
    { label: "Resume", href: "/Tong_SDE_Resume.pdf", download: true }
];

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header style={styles.header}>
            <nav style={styles.nav}>
                <AnimatedBrand href="#intro" />

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    style={styles.menuButton}
                    aria-label="Toggle Menu"
                >
                    ☰
                </button>
                <ul style={{ ...styles.navList, ...(isOpen ? styles.navListOpen : {}) }}>
                    {navLinks.map((link) => (
                        <li key={link.href} style={styles.navItem}>
                            <a
                                href={link.href}
                                style={{
                                    ...styles.navLink,
                                    ...(link.label === "Resume" ? styles.navItem : {}),
                                }}
                                {...(link.download ? { download: true, target: "_blank", rel: "noopener noreferrer" } : {})}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

            </nav>
        </header>
    );
}


const styles: { [key: string]: CSSProperties } = {
    header: {
        backgroundColor: colors.bg,
        borderBottom: `1px solid ${colors.border}`,
        position: "sticky",
        top: 0,
        zIndex: 999,
    },
    nav: {
        margin: "0 auto",
        padding: "16px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
    },
    brand: {
        fontFamily: "'Montserrat', sans-serif",
        fontSize: "2.25rem",
        fontWeight: 700,
        letterSpacing: "-0.5px",
        color: colors.text,
        textDecoration: "none",
    },
    menuButton: {
        fontSize: "1.5rem",
        background: "none",
        border: "none",
        color: colors.text,
        cursor: "pointer",
        display: "none", // will show on small screens (you can override with media queries later)
    },
    navList: {
        display: "flex",
        gap: "20px",
        listStyle: "none",
        margin: 0,
        padding: 0,
        transition: "max-height 0.3s ease",
    },
    navListOpen: {
        display: "block",
    },
    navItem: {},
    navLink: {
        textDecoration: "none",
        color: colors.textSecondary,
        fontSize: "1rem",
        padding: "8px 0",
    },
};
