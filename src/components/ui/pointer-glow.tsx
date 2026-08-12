"use client";

import { useEffect, useRef } from "react";

import styles from "./pointer-glow.module.css";

export function PointerGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glowElement = glowRef.current;

    if (glowElement === null) {
      return;
    }

    const finePointer = window.matchMedia("(pointer: fine)");

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!finePointer.matches || reducedMotion.matches) {
      return;
    }

    let animationFrame = 0;

    const handlePointerMove = (event: PointerEvent) => {
      cancelAnimationFrame(animationFrame);

      animationFrame = requestAnimationFrame(() => {
        glowElement.style.setProperty("--pointer-x", `${event.clientX}px`);

        glowElement.style.setProperty("--pointer-y", `${event.clientY}px`);

        glowElement.dataset.visible = "true";
      });
    };

    const handlePointerLeave = () => {
      glowElement.dataset.visible = "false";
    };

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });

    document.documentElement.addEventListener("mouseleave", handlePointerLeave);

    return () => {
      cancelAnimationFrame(animationFrame);

      window.removeEventListener("pointermove", handlePointerMove);

      document.documentElement.removeEventListener(
        "mouseleave",
        handlePointerLeave,
      );
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className={styles.glow}
      data-visible="false"
      aria-hidden="true"
    />
  );
}
