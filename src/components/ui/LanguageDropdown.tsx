"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale } from "@/context/LocaleContext";
import type { Locale } from "@/locales/dictionary";

const options: { value: Locale; label: string }[] = [
  { value: "en", label: "English" },
  { value: "es", label: "Español" },
];

export default function LanguageDropdown() {
  const { locale, setLocale, t } = useLocale();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onPointerDown(e: PointerEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <div ref={ref} className="relative shrink-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t.nav.langLabel}
        className="flex items-center gap-[6px] px-[10px] sm:px-[12px] h-[32px] rounded-[16777200px] border border-[var(--c-border-strong)] bg-[var(--c-overlay-1)] text-[var(--c-ink-muted)] hover:text-[var(--c-ink)] transition-colors"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden className="shrink-0">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
          <path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.7-3.8-9s1.3-6.4 3.8-9Z" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        <span className="font-sans font-medium text-[12px] uppercase tracking-[0.5px]">{locale}</span>
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          aria-hidden
          className={`shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div
        role="listbox"
        className={`absolute right-0 top-[calc(100%+8px)] min-w-[136px] rounded-[14px] border border-[var(--c-border)] bg-[var(--c-menu-bg)] backdrop-blur-[10px] p-[6px] shadow-[0px_20px_60px_-20px_rgba(0,0,0,0.7)] origin-top-right transition-all duration-150 ease-out ${
          open ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        {options.map((option) => {
          const active = option.value === locale;
          return (
            <button
              key={option.value}
              type="button"
              role="option"
              aria-selected={active}
              onClick={() => {
                setLocale(option.value);
                setOpen(false);
              }}
              className={`flex items-center justify-between gap-[12px] w-full px-[12px] py-[8px] rounded-[9px] text-left transition-colors ${
                active
                  ? "bg-[rgba(124,58,237,0.12)] text-[var(--c-ink)]"
                  : "text-[var(--c-ink-muted)] hover:text-[var(--c-ink)] hover:bg-[var(--c-overlay-1)]"
              }`}
            >
              <span className="font-sans font-normal text-[13px] leading-[19px]">{option.label}</span>
              {active && (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden className="shrink-0 text-[#8d51f4]">
                  <path d="M2 6.2l2.6 2.6L10 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
