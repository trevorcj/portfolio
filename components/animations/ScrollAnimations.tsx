"use client";

import { useLayoutEffect } from "react";

const CHARS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_#$%&@";

function getScrambledText(text: string, frame: number, totalFrames: number) {
  const revealPoint = Math.floor((frame / totalFrames) * text.length);

  return text
    .split("")
    .map((character, index) => {
      if (character === " ") return " ";
      if (index < revealPoint) return text[index];

      return CHARS[Math.floor(Math.random() * CHARS.length)];
    })
    .join("");
}

export default function ScrollAnimations() {
  useLayoutEffect(() => {
    const element = document.querySelector<HTMLElement>("[data-scramble]");

    let interval: number | undefined;

    if (element) {
      const finalText = element.dataset.scramble;

      if (finalText) {
        let frame = 0;
        const totalFrames = 24;
        const updateText = () => {
          element.textContent = getScrambledText(finalText, frame, totalFrames);
          frame++;
        };

        updateText();
        element.style.visibility = "visible";

        interval = window.setInterval(() => {
          updateText();

          if (frame > totalFrames) {
            window.clearInterval(interval);
            element.textContent = finalText;
          }
        }, 45);
      }
    }

    const linkCleanups = Array.from(
      document.querySelectorAll<HTMLAnchorElement>("a:not([data-no-scramble])"),
    ).map((link) => {
      const label = link.querySelector<HTMLElement>("span:last-child") ?? link;
      const originalText = label.textContent?.trim() ?? "";

      if (!originalText) return () => {};

      let hoverFrame = 0;
      let hoverInterval: number | undefined;

      const stopScramble = () => {
        if (hoverInterval !== undefined) {
          window.clearInterval(hoverInterval);
          hoverInterval = undefined;
        }

        label.textContent = originalText;
      };

      const startScramble = () => {
        stopScramble();
        hoverFrame = 0;
        label.textContent = getScrambledText(originalText, hoverFrame, 12);
        hoverFrame++;

        hoverInterval = window.setInterval(() => {
          label.textContent = getScrambledText(originalText, hoverFrame, 12);
          hoverFrame++;

          if (hoverFrame > 12) {
            stopScramble();
          }
        }, 35);
      };

      link.addEventListener("mouseenter", startScramble);
      link.addEventListener("mouseleave", stopScramble);

      return () => {
        link.removeEventListener("mouseenter", startScramble);
        link.removeEventListener("mouseleave", stopScramble);
        stopScramble();
      };
    });

    return () => {
      if (interval !== undefined) window.clearInterval(interval);
      linkCleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return null;
}
