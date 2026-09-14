"use client";

import { useTheme } from "@/context/ThemeContext";

function SunIcon({ className }: { className?: string }) {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M12 2.5v2.2M12 19.3v2.2M21.5 12h-2.2M4.7 12H2.5M18.4 5.6l-1.55 1.55M7.15 16.85 5.6 18.4M18.4 18.4l-1.55-1.55M7.15 7.15 5.6 5.6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <path
        d="M20.5 14.2A8.5 8.5 0 1 1 9.8 3.5a7 7 0 0 0 10.7 10.7Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isLight}
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
      onClick={toggleTheme}
      className="relative shrink-0 w-[52px] h-[28px] rounded-[16777200px] border border-[var(--c-border-strong)] bg-[var(--c-overlay-1)] transition-colors"
    >
      <span className="absolute left-[7px] top-1/2 -translate-y-1/2 text-[var(--c-ink-muted)]">
        <SunIcon />
      </span>
      <span className="absolute right-[7px] top-1/2 -translate-y-1/2 text-[var(--c-ink-muted)]">
        <MoonIcon />
      </span>
      <span
        className={`absolute top-[3px] left-[3px] flex items-center justify-center size-[20px] rounded-[16777200px] bg-white shadow-[0px_2px_6px_rgba(0,0,0,0.35)] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isLight ? "translate-x-0" : "translate-x-[24px]"
        }`}
      >
        <span className="text-[#7c3aed]">{isLight ? <SunIcon /> : <MoonIcon />}</span>
      </span>
    </button>
  );
}
