import type { CSSProperties, HTMLAttributes } from "react";
import { colors } from "../../styles/colors";
import { fontFamily } from "../../styles/fonts";
import React from "react";

export interface SkillTileProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  iconSrc?: string;        // <img> icon
  icon?: React.ReactNode;  // or a React SVG node
}

export default function SkillTile({ name, iconSrc, icon, style, ...rest }: SkillTileProps) {
  return (
    <div style={{ ...styles.wrap, ...style }} {...rest}>
      <div style={styles.iconWrap}>
        {icon ?? (iconSrc ? <img src={iconSrc} alt={`${name} icon`} style={styles.iconImg} /> : null)}
      </div>
      <div style={styles.name}>{name}</div>
    </div>
  );
}

const styles: { [k: string]: CSSProperties } = {
  wrap: {
    background: "transparent",
    border: "none",
    padding: 0,
    width: 140,
    height: 140,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    textAlign: "center",
    cursor: "default",          // not interactive
  },
  iconWrap: {
    width: 56,
    height: 56,
    display: "grid",
    placeItems: "center",
    borderRadius: 12,
    background: colors.bg,
    overflow: "hidden",
  },
  iconImg: {
    width: "70%",
    height: "70%",
    objectFit: "contain",
    display: "block",
  },
  name: {
    fontFamily: fontFamily.body,
    color: colors.textSecondary,
    fontSize: "0.95rem",
  },
};
