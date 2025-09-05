import React, { useState, type CSSProperties, type HTMLAttributes } from "react";
import { colors } from "../../styles/colors";
import { fontFamily } from "../../styles/fonts";

type TagSize = "sm" | "md";
type TagVariant = "solid" | "soft" | "outline";

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
    label: string;
    size?: TagSize;
    variant?: TagVariant;
    selected?: boolean;
    asButton?: boolean;
}

export default function Tag({
    label,
    size = "sm",
    variant = "soft",
    selected = false,
    asButton = false,
    style,
    onMouseEnter,
    onMouseLeave,
    onFocus,
    onBlur,
    ...rest
}: TagProps) {
    const Comp: keyof React.JSX.IntrinsicElements = asButton ? "button" : "span";

    const [hovered, setHovered] = useState(false);
    const [focused, setFocused] = useState(false);
    const active = hovered || focused;

    // sizing
    const padding = size === "md" ? "8px 12px" : "4px 10px";
    const fontSize = size === "md" ? "0.9rem" : "0.85rem";

    // base colors
    const baseBorder = selected ? colors.primary : colors.codeBorder;
    const baseBg =
        variant === "solid" ? colors.primary :
            variant === "outline" ? "transparent" : colors.codeBg;
    const baseText =
        variant === "solid" ? colors.bg :
            selected ? colors.primary : colors.muted;

    // hover/focus colors
    const hoverBorder =
        variant === "outline" || variant === "soft" ? colors.primary : colors.primary; // solid keeps primary tone too
    const hoverBg =
        variant === "solid" ? colors.primaryHover :
            variant === "outline" ? "transparent" : colors.codeBg; // keep soft bg
    const hoverText =
        variant === "solid" ? colors.bg : colors.primary;

    // final (active vs base)
    const borderColor = active ? hoverBorder : baseBorder;
    const background = active ? hoverBg : baseBg;
    const textColor = active ? hoverText : baseText;

    const tagStyles: CSSProperties = {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 6,
        padding,
        fontSize,
        borderRadius: 999,
        border: `1px solid ${borderColor}`,
        background,
        color: textColor,
        lineHeight: 1.1,
        whiteSpace: "nowrap",
        userSelect: "none",
        fontFamily: fontFamily.body,
        ...(asButton
            ? {
                cursor: "pointer",
                transition:
                    "background 140ms ease, color 140ms ease, border-color 140ms ease, transform 120ms ease, box-shadow 120ms ease",
            }
            : {}),
        ...style,
    };

    const handleEnter: React.MouseEventHandler<HTMLElement> = (e) => {
        if (!asButton) return;
        setHovered(true);
        onMouseEnter?.(e as any);
    };
    const handleLeave: React.MouseEventHandler<HTMLElement> = (e) => {
        if (!asButton) return;
        setHovered(false);
        onMouseLeave?.(e as any);
    };
    const handleFocus: React.FocusEventHandler<HTMLElement> = (e) => {
        if (!asButton) return;
        setFocused(true);
        onFocus?.(e as any);
    };
    const handleBlur: React.FocusEventHandler<HTMLElement> = (e) => {
        if (!asButton) return;
        setFocused(false);
        onBlur?.(e as any);
    };

    return (
        <Comp
            type={asButton ? "button" : undefined}
            aria-pressed={asButton ? selected : undefined}
            style={tagStyles}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...rest}
        >
            {label}
        </Comp>
    );
}
