import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import { colors } from "../../styles/colors";

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface TypingTextProps {
  text: string;
  as?: HeadingTag;          // restrict to headings to keep types small
  speedMs?: number;
  delayMs?: number;
  cursor?: boolean;
  startOnVisible?: boolean;
  once?: boolean;
  loop?: boolean;
  deleteSpeedMs?: number;
  pauseMs?: number;
  style?: CSSProperties;
  className?: string;
}

export default function TypingText({
  text,
  as = "h2",
  speedMs = 40,
  delayMs = 0,
  cursor = true,
  startOnVisible = true,
  once = true,
  loop = false,
  deleteSpeedMs = 40,
  pauseMs = 900,
  style,
  className,
}: TypingTextProps) {
  const Tag = as;
  const wrapperRef = useRef<HTMLDivElement | null>(null); // fixed element type
  const [output, setOutput] = useState("");
  const [started, setStarted] = useState(!startOnVisible);
  const [done, setDone] = useState(false);
  const [cursorOn, setCursorOn] = useState(true);
  const [deleting, setDeleting] = useState(false);

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined" || !window.matchMedia) return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  // Visibility trigger (on wrapper div)
  useEffect(() => {
    if (!startOnVisible || started || !wrapperRef.current) return;
    if (prefersReducedMotion) {
      setOutput(text);
      setDone(true);
      setStarted(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setStarted(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(wrapperRef.current);
    return () => obs.disconnect();
  }, [startOnVisible, started, prefersReducedMotion, text]);

  // Cursor blink
  useEffect(() => {
    if (!cursor || prefersReducedMotion) return;
    const t = setInterval(() => setCursorOn((v) => !v), 500);
    return () => clearInterval(t);
  }, [cursor, prefersReducedMotion]);

  // Typing / Deleting engine
  useEffect(() => {
    if (!started || prefersReducedMotion) return;

    const atFull = output.length === text.length;

    // Once-only
    if (once && !loop) {
      if (done) return;
      const timeout = setTimeout(() => {
        if (atFull) {
          setDone(true);
        } else {
          setOutput(text.slice(0, output.length + 1));
        }
      }, (output.length === 0 ? delayMs : 0) + speedMs);
      return () => clearTimeout(timeout);
    }

    // Loop
    if (loop) {
      if (!deleting) {
        if (!atFull) {
          const t = setTimeout(() => setOutput(text.slice(0, output.length + 1)), speedMs);
          return () => clearTimeout(t);
        } else {
          const t = setTimeout(() => setDeleting(true), pauseMs);
          return () => clearTimeout(t);
        }
      } else {
        if (output.length > 0) {
          const t = setTimeout(() => setOutput(text.slice(0, output.length - 1)), deleteSpeedMs);
          return () => clearTimeout(t);
        } else {
          setDeleting(false);
        }
      }
    }
  }, [
    started,
    prefersReducedMotion,
    output,
    text,
    speedMs,
    deleteSpeedMs,
    pauseMs,
    once,
    loop,
    delayMs,
    done,
  ]);

  // Reduced motion: just render text
  if (prefersReducedMotion) {
    return (
      <div ref={wrapperRef}>
        <Tag className={className} style={style}>{text}</Tag>
      </div>
    );
  }

  return (
    <div ref={wrapperRef}>
      <Tag className={className} style={style} aria-label={text}>
        {output}
        {cursor && (
          <span
            aria-hidden="true"
            style={{
              display: "inline-block",
              width: 2,
              height: "0.9em",
              backgroundColor: colors.primary,
              marginLeft: 4,
              transform: "translateY(2px)",
              opacity: cursorOn && !deleting ? 1 : 0,
              transition: "opacity 0.1s linear",
            }}
          />
        )}
      </Tag>
    </div>
  );
}
