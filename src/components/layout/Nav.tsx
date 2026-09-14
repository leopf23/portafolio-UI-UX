"use client";

import { useState } from "react";
import { useLocale } from "@/context/LocaleContext";
import LanguageDropdown from "@/components/ui/LanguageDropdown";
import ThemeSwitch from "@/components/ui/ThemeSwitch";

export default function Nav() {
  const { t } = useLocale();
  const [open, setOpen] = useState(false);

  const links = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <header className="top-0 z-50 fixed inset-x-0 flex flex-col items-start px-[16px] sm:px-[24px] lg:px-[140px] py-[12px] w-full">
      <div className="relative flex items-center content-stretch gap-[16px] bg-[var(--c-nav-glass)] shadow-[0px_30px_80px_-30px_rgba(0,0,0,0.6)] backdrop-blur-[8px] px-[16px] sm:px-[21px] py-[11px] border border-[var(--c-border)] border-solid rounded-[24px] sm:rounded-[16777200px] w-full shrink-0">
        <a href="#" className="relative shrink-0" onClick={() => setOpen(false)}>
          <div className="relative flex items-center content-stretch gap-[10px] bg-clip-padding border-[transparent] border-0 border-solid size-full">    
            <div className="relative flex flex-col items-start content-stretch shrink-0">
              <div className="relative flex flex-col justify-center font-sans font-medium text-[14px] text-[var(--c-ink)] not-italic leading-[0] tracking-[-0.35px] whitespace-nowrap [word-break:break-word] shrink-0">
                <p>
                  <span className="leading-[20px]">Leonardo</span>
                  <span className="font-sans font-medium text-[var(--c-ink-muted)] not-italic leading-[20px]"> Perez Figueroa</span>
                </p>
              </div>
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex flex-1 justify-center items-center gap-[4px]">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="flex flex-col items-start px-[14px] py-[6px] rounded-[16777200px] text-[var(--c-ink-muted)] hover:text-[var(--c-ink)] transition-colors shrink-0"
            >
              <span className="font-sans font-normal text-[13px] leading-[19.5px]">{link.label}</span>
            </a>
          ))}
        </nav>

        <div className="flex flex-1 lg:flex-none justify-end items-center gap-[8px] sm:gap-[12px]">
          <ThemeSwitch />

          <LanguageDropdown />

          <a
            href="#contact"
            className="hidden relative sm:flex bg-[var(--c-cta-bg)] rounded-[16777200px] shrink-0"
          >
            <div className="relative flex items-center content-stretch gap-[8px] bg-clip-padding px-[16px] py-[8px] border-[transparent] border-0 border-solid size-full">
              <div className="relative flex flex-col justify-center font-sans font-medium text-[13px] text-[var(--c-cta-ink)] not-italic leading-[0] whitespace-nowrap [word-break:break-word] shrink-0">
                <p className="leading-[19.5px]">{t.nav.cta}</p>
              </div>
              <div className="relative size-[14px] shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="" className="block absolute inset-0 light:invert max-w-none size-full" src="/images/icon-arrow-portfolio.svg" />
              </div>
            </div>
          </a>

          <button
            type="button"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden relative flex flex-col justify-center items-center gap-[5px] bg-[var(--c-overlay-1)] rounded-[16777200px] size-[36px] shrink-0"
          >
            <span
              className={`block h-[1.5px] w-[16px] bg-[var(--c-ink)] transition-transform duration-200 ${
                open ? "translate-y-[3.25px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-[16px] bg-[var(--c-ink)] transition-transform duration-200 ${
                open ? "-translate-y-[3.25px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden flex flex-col gap-[4px] bg-[var(--c-menu-bg)] shadow-[0px_30px_80px_-30px_rgba(0,0,0,0.6)] backdrop-blur-[8px] mt-[8px] p-[12px] border border-[var(--c-border)] border-solid rounded-[20px] w-full">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="hover:bg-[var(--c-overlay-1)] px-[14px] py-[10px] rounded-[12px] w-full text-[var(--c-ink-muted)] hover:text-[var(--c-ink)] transition-colors"
            >
              <span className="font-sans font-normal text-[14px] leading-[20px]">{link.label}</span>
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="flex justify-center items-center gap-[8px] bg-[var(--c-cta-bg)] mt-[4px] px-[16px] py-[10px] rounded-[12px]"
          >
            <span className="font-sans font-medium text-[13px] text-[var(--c-cta-ink)] leading-[19.5px]">{t.nav.cta}</span>
            <div className="relative size-[14px] shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="" className="block absolute inset-0 light:invert max-w-none size-full" src="/images/icon-arrow-portfolio.svg" />
            </div>
          </a>
        </nav>
      )}
    </header>
  );
}
