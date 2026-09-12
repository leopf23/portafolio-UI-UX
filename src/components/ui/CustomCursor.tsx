"use client";

import { useEffect, useRef, useState } from "react";

const HOVER_SELECTOR =
  'a, button, [role="button"], label, summary, input, textarea, select, [data-cursor="hover"]';

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const arrowRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    setEnabled(finePointer.matches);

    const onChange = (e: MediaQueryListEvent) => setEnabled(e.matches);
    finePointer.addEventListener("change", onChange);
    return () => finePointer.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const arrow = arrowRef.current;
    const ring = ringRef.current;
    if (!arrow || !ring) return;

    const root = document.documentElement;
    root.classList.add("has-custom-cursor");

    const easing = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? 1
      : 0.18;

    let pointerX = window.innerWidth / 2;
    let pointerY = window.innerHeight / 2;
    let ringX = pointerX;
    let ringY = pointerY;
    let frame = 0;

    const render = () => {
      ringX += (pointerX - ringX) * easing;
      ringY += (pointerY - ringY) * easing;
      arrow.style.transform = `translate3d(${pointerX}px, ${pointerY}px, 0)`;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      frame = requestAnimationFrame(render);
    };
    frame = requestAnimationFrame(render);

    const onPointerMove = (event: PointerEvent) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      root.classList.add("cursor-visible");

      const target = event.target as Element | null;
      const overInteractive = Boolean(target?.closest?.(HOVER_SELECTOR));
      root.classList.toggle("cursor-hovering", overInteractive);
    };

    const onPointerDown = () => root.classList.add("cursor-pressed");
    const onPointerUp = () => root.classList.remove("cursor-pressed");
    const onPointerLeave = () => root.classList.remove("cursor-visible");

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerdown", onPointerDown, { passive: true });
    window.addEventListener("pointerup", onPointerUp, { passive: true });
    document.addEventListener("pointerleave", onPointerLeave);
    window.addEventListener("blur", onPointerLeave);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
      document.removeEventListener("pointerleave", onPointerLeave);
      window.removeEventListener("blur", onPointerLeave);
      root.classList.remove(
        "has-custom-cursor",
        "cursor-visible",
        "cursor-hovering",
        "cursor-pressed",
      );
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div ref={ringRef} aria-hidden className="cursor-ring" />
      <div ref={arrowRef} aria-hidden className="cursor-arrow">
        <svg viewBox="0 0 24 24" fill="none">
          <path
            d="M3 3 L19.4 13.8 C15.4 14 12.2 15.8 10.2 19.5 Z"
            strokeWidth="2.4"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </>
  );
}
