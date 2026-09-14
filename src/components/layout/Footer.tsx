"use client";

import { useLocale } from "@/context/LocaleContext";

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/leonardo-p%C3%A9rez-figueroa-030760162/" },
  { label: "GitHub", href: "https://github.com/leopf23" },
];

export default function Footer() {
  const { t } = useLocale();

  const footerLinks = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <footer className="border-[var(--c-border)] border-solid border-t relative w-full">
      <div className="max-w-[1280px] mx-auto px-[24px] py-[56px] flex flex-col gap-[48px]">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-[32px]">
          <div className="content-stretch flex flex-col leading-none select-none">
            <span
              className="font-poppins font-bold text-[44px] sm:text-[60px] lg:text-[76px] leading-[1.1] lg:leading-[85px] tracking-[-2px] lg:tracking-[-3.5px]"
              style={{
                color: "transparent",
                WebkitTextStroke: "1px var(--c-stroke)",
              }}
            >
              UI/UX
            </span>
            <span className="font-poppins font-bold text-[40px] sm:text-[55px] lg:text-[70px] leading-[1.1] lg:leading-[85px] tracking-[-2px] lg:tracking-[-3.5px] text-[var(--c-ink)] -mt-[4px] sm:-mt-[10px] lg:-mt-[16px]">
              {t.footer.wordmarkLine2}
            </span>
          </div>

          <nav className="grid grid-cols-2 gap-x-[48px] gap-y-[8px] shrink-0">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-sans font-normal text-[14px] leading-[20px] text-[var(--c-ink-muted)] hover:text-[var(--c-ink)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="border-[var(--c-border)] border-solid border-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-[16px] pt-[25px]">
          <p className="font-sans font-normal text-[12px] leading-[16px] text-[var(--c-ink-muted)]">{t.footer.rights}</p>
          <div className="flex items-center gap-[20px]">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans font-normal text-[12px] leading-[16px] text-[var(--c-ink-muted)] hover:text-[var(--c-ink)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
