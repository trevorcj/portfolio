"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

type MagneticButtonProps = {
  children: React.ReactNode;
  href?: string;
  className?: string;
  strength?: number;
};

export default function MagneticButton({
  children,
  href = "#",
  className = "",
  strength = 0.1,
}: MagneticButtonProps) {
  const zoneRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  const xTo = useRef<((value: number) => void) | null>(null);
  const yTo = useRef<((value: number) => void) | null>(null);
  const labelXTo = useRef<((value: number) => void) | null>(null);
  const labelYTo = useRef<((value: number) => void) | null>(null);

  useEffect(() => {
    const button = buttonRef.current;
    const label = labelRef.current;

    if (!button || !label) return;

    gsap.set(button, {
      x: 0,
      y: 0,
      scale: 1,
    });

    gsap.set(label, {
      x: 0,
      y: 0,
      scale: 1,
    });

    xTo.current = gsap.quickTo(button, "x", {
      duration: 0.2,
      ease: "power2.out",
    });

    yTo.current = gsap.quickTo(button, "y", {
      duration: 0.2,
      ease: "power2.out",
    });

    labelXTo.current = gsap.quickTo(label, "x", {
      duration: 0.2,
      ease: "power2.out",
    });

    labelYTo.current = gsap.quickTo(label, "y", {
      duration: 0.2,
      ease: "power2.out",
    });

    return () => {
      gsap.killTweensOf(button);
      gsap.killTweensOf(label);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const zone = zoneRef.current;

    if (!zone) return;

    const rect = zone.getBoundingClientRect();

    const x = gsap.utils.mapRange(
      rect.left,
      rect.right,
      -rect.width / 2,
      rect.width / 2,
      e.clientX,
    );

    const y = gsap.utils.mapRange(
      rect.top,
      rect.bottom,
      -rect.height / 2,
      rect.height / 2,
      e.clientY,
    );

    xTo.current?.(x * strength);
    yTo.current?.(y * strength);

    labelXTo.current?.(x * 0.24);
    labelYTo.current?.(y * 0.24);
  };

  const handleMouseLeave = () => {
    const button = buttonRef.current;
    const label = labelRef.current;

    if (!button || !label) return;

    gsap.to(button, {
      x: 0,
      y: 0,
      duration: 0.7,
      ease: "elastic.out(1, 0.4)",
    });

    gsap.to(label, {
      x: 0,
      y: 0,
      duration: 0.7,
      ease: "elastic.out(1, 0.4)",
    });
  };

  return (
    <div
      ref={zoneRef}
      className="relative inline-flex mt-8"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}>
      <a
        ref={buttonRef}
        href={href}
        className={`group relative flex h-9 items-center justify-center overflow-hidden rounded-full px-4 text-sm will-change-transform ${className}`}
        style={{
          backgroundImage: "linear-gradient(to top, #ffffff26, #ffffff08)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
          boxShadow: "0 0 0 0.5px #ffffff30",
        }}>
        <span
          className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
          style={{
            backgroundImage: "linear-gradient(to top, transparent, #ffffff10)",
          }}
        />

        <span
          ref={labelRef}
          className="relative z-10 will-change-transform text-[#c6c6c6]">
          {children}
        </span>
      </a>
    </div>
  );
}
