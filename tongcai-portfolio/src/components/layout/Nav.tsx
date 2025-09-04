import { useState } from "react";
import { colors } from "../../styles/colors";
import type { CSSProperties } from "react";

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
];

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header style={styles.header}>
            <nav style={styles.nav}>
                <a href="#intro" style={styles.brand}>
                    Tong Cai
                </a>
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
                            <a href={link.href} style={styles.navLink}>
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
        maxWidth: "2000px",
        margin: "0 auto",
        padding: "16px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
    },
    brand: {
        fontSize: "1.25rem",
        fontWeight: 600,
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
