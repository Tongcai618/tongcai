import type { CSSProperties } from "react";
import { colors } from "../../styles/colors";

interface PhotoContainerProps {
  src: string;
  alt: string;
  size?: number; // default size in px
  rounded?: boolean; // circular vs square
  shadow?: boolean; // toggle shadow
}

export default function PhotoContainer({
  src,
  alt,
  size = 160,
  rounded = true,
  shadow = true,
}: PhotoContainerProps) {
  return (
    <div
      style={{
        ...styles.container,
        width: size,
        height: size,
        borderRadius: rounded ? "50%" : "12px",
        boxShadow: shadow ? styles.container.boxShadow : "none",
      }}
    >
      <img src={src} alt={alt} style={styles.image} />
    </div>
  );
}

const styles: { [key: string]: CSSProperties } = {
  container: {
    overflow: "hidden",
    border: `2px solid ${colors.border}`,
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
};
