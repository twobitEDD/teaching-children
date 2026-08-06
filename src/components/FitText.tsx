"use client";

import {
  useLayoutEffect,
  useRef,
  type CSSProperties,
  type ReactNode,
} from "react";

type FitProseProps = {
  children: ReactNode;
  className?: string;
  /** Recalculate when this key changes (e.g. page text). */
  fitKey?: string;
};

/** Shrinks font until all child text fits inside the container height. */
export function FitProse({ children, className = "", fitKey }: FitProseProps) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const fit = () => {
      let size = 17;
      const min = 8.5;
      el.style.fontSize = `${size}px`;
      while (size > min && el.scrollHeight > el.clientHeight + 1) {
        size -= 0.5;
        el.style.fontSize = `${size}px`;
      }
    };

    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(el);
    window.addEventListener("beforeprint", fit);
    return () => {
      ro.disconnect();
      window.removeEventListener("beforeprint", fit);
    };
  }, [fitKey, children]);

  return (
    <div ref={ref} className={`fit-prose ${className}`.trim()}>
      {children}
    </div>
  );
}

type FitWordProps = {
  word: string;
  className?: string;
};

/**
 * Image-word / cue that scales down for long words (Firebird, Inch-boy)
 * so it stays inside the same picture frame.
 */
export function FitWord({ word, className = "" }: FitWordProps) {
  const chars = Math.max(word.replace(/\s+/g, "").length, 1);
  const style = {
    ["--fit-chars" as string]: chars,
  } as CSSProperties;

  return (
    <span className={`fit-word ${className}`.trim()} style={style}>
      {word}
    </span>
  );
}
