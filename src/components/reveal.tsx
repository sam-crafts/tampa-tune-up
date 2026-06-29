import { useEffect, useRef, useState, type ReactNode, type ElementType, type CSSProperties } from "react";
import { cn } from "@/lib/utils";

type Variant = "fade-up" | "fade" | "scale" | "slide-left" | "slide-right" | "blur-up" | "zoom-in";

export function Reveal({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 700,
  className,
  as: Tag = "div",
  once = true,
  threshold = 0.15,
}: {
  children: ReactNode;
  variant?: Variant;
  delay?: number;
  duration?: number;
  className?: string;
  as?: ElementType;
  once?: boolean;
  threshold?: number;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) io.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once, threshold]);

  const style: CSSProperties = {
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
    transitionProperty: "opacity, transform, filter",
    transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
    willChange: "opacity, transform, filter",
  };

  return (
    <Tag
      ref={ref as never}
      data-variant={variant}
      data-visible={visible ? "true" : "false"}
      style={style}
      className={cn("reveal", className)}
    >
      {children}
    </Tag>
  );
}

/** Stagger children: each direct child gets an incrementing delay. */
export function RevealStagger({
  children,
  variant = "fade-up",
  step = 90,
  startDelay = 0,
  duration = 650,
  className,
}: {
  children: ReactNode[];
  variant?: Variant;
  step?: number;
  startDelay?: number;
  duration?: number;
  className?: string;
}) {
  return (
    <div className={className}>
      {children.map((c, i) => (
        <Reveal key={i} variant={variant} delay={startDelay + i * step} duration={duration}>
          {c}
        </Reveal>
      ))}
    </div>
  );
}
