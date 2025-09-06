import type { CSSProperties } from "react";
import { colors } from "../../styles/colors";
import { fontFamily } from "../../styles/fonts";
import SkillTile from "./SkillTile";
import { FadeInUp } from "../animations/FadeInUp";
import { StaggerContainer } from "./StaggerContainer";

export interface SkillItem {
    name: string;
    iconSrc?: string;        // image URL
    icon?: React.ReactNode;  // or React node
}

interface SkillsGridProps {
    title?: string;
    items: SkillItem[];
}

export default function SkillsGrid({ items }: SkillsGridProps) {
    return (
        <section style={styles.wrap}>
            <div style={styles.grid}>
                {items.map((s) => (
                    <StaggerContainer
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                            gap: 60,
                        }}
                    >
                        <FadeInUp key={s.name}>
                            <SkillTile key={s.name} name={s.name} iconSrc={s.iconSrc} icon={s.icon} />
                        </FadeInUp>
                    </StaggerContainer>
                ))}
            </div>
        </section>
    );
}

const styles: { [k: string]: CSSProperties } = {
    wrap: {
        background: colors.bg,
        padding: "32px 20px",
    },
    title: {
        fontFamily: fontFamily.heading,
        color: colors.text,
        fontSize: "1.6rem",
        textAlign: "center",
        margin: "0 0 24px",
    },
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
        gap: 20,
        maxWidth: 980,
        margin: "0 auto",
    },
};
