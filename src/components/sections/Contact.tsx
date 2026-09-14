"use client";

import { useLocale } from "@/context/LocaleContext";

const contactLinks = [
  {
    icon: "/images/icon-email.svg",
    label: "leonardoperezf23@gmail.com",
    href: "mailto:leonardoperezf23@gmail.com",
  },
  {
    icon: "/images/icon-whatsapp.svg",
    label: "809-370-0424 — WhatsApp",
    href: "https://wa.me/18093700424",
  },
  {
    icon: "/images/icon-linkedin.svg",
    label: "https://www.linkedin.com/in/leonardo-pérez-figueroa-030760162/",
    href: "https://www.linkedin.com/in/leonardo-p%C3%A9rez-figueroa-030760162/",
  },
  {
    icon: "/images/icon-github.svg",
    label: "https://github.com/leopf23",
    href: "https://github.com/leopf23",
  },
];

export default function Contact() {
  const { t } = useLocale();
  return (
    <section
      id="contact"
      className="scroll-mt-[110px] border-[var(--c-border)] border-solid border-t content-stretch flex flex-col gap-[64px] lg:gap-[159px] items-center px-[24px] sm:px-[48px] lg:px-[140px] py-[64px] relative w-full"
    >
      <div className="bg-gradient-to-r from-[rgba(124,58,237,0)] h-px relative shrink-0 to-[rgba(124,58,237,0)] via-[rgba(124,58,237,0.6)] w-full max-w-[768px]" />
      <div className="relative shrink-0 w-full max-w-[1232px]">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-[48px] lg:gap-[36px] w-full">
          <div className="content-stretch flex flex-col gap-[24px] items-start">
            <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
              <div className="bg-[#7c3aed] h-px relative shrink-0 w-[32px]" />
              <div className="content-stretch flex flex-col items-start relative shrink-0">
                <div className="[word-break:break-word] flex flex-col font-mono font-normal justify-center leading-[0] relative shrink-0 text-[var(--c-ink-muted)] text-[11px] tracking-[2.64px] uppercase whitespace-nowrap">
                  <p className="leading-[16.5px]">{t.contact.kicker}</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <div className="[word-break:break-word] flex flex-col font-poppins justify-center leading-[0] not-italic relative shrink-0 text-[var(--c-ink)] tracking-[-1px] sm:tracking-[-1.9px] w-full">
                <p className="leading-[1.25] sm:leading-[65px] mb-0 text-[32px] sm:text-[40px] lg:text-[51px]">{t.contact.heading1}</p>
                <p className="leading-[1.25] sm:leading-[65px] text-[32px] sm:text-[40px] lg:text-[51px] font-medium">
                  <span className="text-[#7c3aed]">{t.contact.headingAccent}</span>
                  <span>{" "}{t.contact.headingTrail}</span>
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <div className="[word-break:break-word] flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[var(--c-ink-muted)] text-[17px]">
                <p className="leading-[27.63px] mb-0">{t.contact.intro[0]}</p>
                <p className="leading-[27.63px] mb-0">{t.contact.intro[1]}</p>
                <p className="leading-[27.63px]">{t.contact.intro[2]}</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[16px] sm:gap-[25px] items-start w-full">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="bg-[var(--c-surface)] border border-[var(--c-border)] border-solid content-stretch flex items-center justify-between gap-[16px] px-[21px] py-[17px] relative rounded-[16px] shrink-0 w-full"
              >
                <div className="relative shrink-0 min-w-0">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
                    <div className="relative shrink-0 size-[16px]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img alt="" className="absolute block inset-0 max-w-none size-full light:invert" src={link.icon} />
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 min-w-0">
                      <div className="[word-break:break-word] flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[var(--c-ink)] truncate w-full">
                        <p className="leading-[20px] truncate">{link.label}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0 size-[16px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt="" className="absolute block inset-0 max-w-none size-full light:invert" src="/images/icon-arrow-up-right.svg" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
