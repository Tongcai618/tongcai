import { useEffect, useMemo, useState } from "react";
import { colors } from "../../styles/colors";
import type { CSSProperties } from "react";
import AnimatedBrand from "../animations/AnimatedBrand";

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
    { label: "Resume", href: "/Tong_SDE_Resume.pdf", download: true },
];

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState<string>("#about");

    const prefersReducedMotion = useMemo(() => {
        if (typeof window === "undefined" || !window.matchMedia) return false;
        return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }, []);

    // Smooth scroll handler with sticky header offset
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        // Let the browser handle external/non-hash links (e.g., resume)
        if (!href.startsWith("#")) return;

        e.preventDefault();
        const id = href.slice(1);
        const el = document.getElementById(id);
        if (!el) return;

        // Estimate sticky header height; tweak as needed
        const header = document.querySelector("header");
        const headerH = header ? (header as HTMLElement).offsetHeight : 0;

        const top = el.getBoundingClientRect().top + window.pageYOffset - headerH - 6; // small extra offset
        if (prefersReducedMotion) {
            window.scrollTo(0, top);
        } else {
            window.scrollTo({ top, behavior: "smooth" });
        }
        setIsOpen(false);
    };

    // Scroll spy (highlights active link while scrolling)
    useEffect(() => {
        const sections = navLinks
            .map(l => l.href)
            .filter(h => h.startsWith("#"))
            .map(h => document.getElementById(h.slice(1)))
            .filter(Boolean) as HTMLElement[];

        if (sections.length === 0) return;

        const header = document.querySelector("header");
        const headerH = header ? (header as HTMLElement).offsetHeight : 0;

        const obs = new IntersectionObserver(
            entries => {
                // Pick the most visible in view
                const visible = entries
                    .filter(e => e.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
                if (visible?.target?.id) {
                    setActive("#" + visible.target.id);
                }
            },
            {
                // Trigger when section top passes under header area
                root: null,
                threshold: [0.25, 0.5, 0.75],
                rootMargin: `-${headerH + 10}px 0px -40% 0px`,
            }
        );

        sections.forEach(s => obs.observe(s));
        return () => obs.disconnect();
    }, []);

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
                    {navLinks.map(link => {
                        const isActive = link.href.startsWith("#") && active === link.href;
                        return (
                            <li key={link.href} style={styles.navItem}>
                                <a
                                    href={link.href}
                                    style={{
                                        ...styles.navLink,
                                        ...(isActive ? styles.navLinkActive : {}),
                                        ...(link.label === "Resume" ? styles.resumeButton : {}),
                                    }}
                                    onClick={e => handleNavClick(e, link.href)}
                                    {...(link.download
                                        ? { download: true, target: "_blank", rel: "noopener noreferrer" }
                                        : {})}
                                >
                                    {link.label}
                                    {/* underline bar */}
                                    <span
                                        style={{
                                            ...styles.activeBar,
                                            transform: isActive ? "scaleX(1)" : "scaleX(0)",
                                        }}
                                    />
                                </a>
                            </li>
                        );
                    })}
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
    menuButton: {
        fontSize: "1.5rem",
        background: "none",
        border: "none",
        color: colors.text,
        cursor: "pointer",
        display: "none",
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
        position: "relative",
        textDecoration: "none",
        color: colors.textSecondary,
        fontSize: "1rem",
        padding: "8px 0",
        display: "inline-flex",
        alignItems: "center",
    },
    navLinkActive: {
        color: colors.text,
        fontWeight: 600,
    },
    activeBar: {
        position: "absolute",
        left: 0,
        bottom: 0,
        height: 2,
        width: "100%",
        backgroundColor: colors.primary,
        transformOrigin: "left center",
        transition: "transform 220ms ease",
    },
    resumeButton: {
        backgroundColor: colors.primary,
        color: "#fff",
        padding: "6px 12px",
        borderRadius: "6px",
        fontWeight: 500,
        textDecoration: "none",
    },
};
