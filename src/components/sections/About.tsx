"use client";

import { useLocale } from "@/context/LocaleContext";

export default function About() {
  const { t } = useLocale();
  return (
    <section
      id="about"
      className="scroll-mt-[110px] gap-x-[40px] gap-y-[40px] grid grid-cols-1 lg:grid-cols-[repeat(12,minmax(0,1fr))] max-w-[1280px] pt-[80px] sm:pt-[100px] lg:pt-[128px] px-[24px] relative shrink-0 w-full mx-auto"
    >
      <div className="lg:col-[1/span_5] content-stretch flex flex-col items-start justify-self-stretch relative shrink-0">
        <div className="border border-[var(--c-border-strong)] border-solid content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[20px] shrink-0 w-full">
          <div className="aspect-[488/732] sm:aspect-[16/10] lg:aspect-[488/732] relative shrink-0 w-full">
            <div aria-hidden className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 pointer-events-none">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Leonardo Perez Figueroa"
                className="absolute bg-clip-padding border-0 border-[transparent] border-solid max-w-none object-cover size-full"
                src="/images/about-portrait.png"
              />
              <div className="absolute bg-clip-padding bg-white border-0 border-[transparent] border-solid inset-0 mix-blend-saturation" />
            </div>
          </div>
          <div className="absolute bg-gradient-to-t bottom-0 from-[rgba(7,7,7,0.9)] left-0 right-0 to-[rgba(7,7,7,0)]">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[20px] sm:p-[24px] relative size-full">
              <div className="content-stretch flex flex-wrap items-center justify-between gap-[8px] relative shrink-0 w-full">
                <div className="content-stretch flex flex-col gap-[7px] items-start relative shrink-0">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                    <div className="[word-break:break-word] flex flex-col font-sans font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
                      <p className="leading-[20px]">{t.about.name}</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                    <div className="[word-break:break-word] flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#a1a1aa] text-[12px] whitespace-nowrap">
                      <p className="leading-[16px]">{t.about.role}</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
                  <div className="relative shrink-0 size-[12px]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img alt="" className="absolute block inset-0 max-w-none size-full light:invert" src="/images/icon-location.svg" />
                  </div>
                  <div className="[word-break:break-word] flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#a1a1aa] text-[12px] whitespace-nowrap">
                    <p className="leading-[16px]">{t.about.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:col-[6/span_7] content-stretch flex flex-col gap-[24px] items-start justify-self-stretch pb-[15.5px] relative shrink-0">
        <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
          <div className="bg-[#7c3aed] h-px relative shrink-0 w-[32px]" />
          <div className="content-stretch flex flex-col items-start relative shrink-0">
            <div className="[word-break:break-word] flex flex-col font-mono font-normal justify-center leading-[0] relative shrink-0 text-[var(--c-ink-muted)] text-[11px] tracking-[2.64px] uppercase whitespace-nowrap">
              <p className="leading-[16.5px]">{t.about.kicker}</p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
          <div className="[word-break:break-word] flex flex-col font-poppins justify-center leading-[0] not-italic relative shrink-0 text-[34px] sm:text-[44px] lg:text-[60px] text-[var(--c-ink)] tracking-[-1.5px] w-full">
            <p className="font-poppins leading-[1.1] lg:leading-[63px] mb-0">{t.about.heading1}</p>
            <p className="leading-[1.1] lg:leading-[63px]">
              <span className="font-poppins text-[#7c3aed]">{t.about.headingAccent}</span>
              <span className="font-poppins">{` `}</span>
              <span className="font-poppins">{t.about.headingTrail}</span>
            </p>
          </div>
        </div>
        <div className="relative shrink-0 w-full">
          <div className="[word-break:break-word] flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[var(--c-ink-muted)] text-[16px] sm:text-[17px] w-full">
            <p className="leading-[27.63px] mb-0">{t.about.p1}</p>
            <p className="leading-[27.63px]">{t.about.p2}</p>
          </div>
        </div>
        <div className="bg-[var(--c-overlay-2)] border border-[var(--c-border)] border-solid overflow-clip relative rounded-[20px] shrink-0 w-full grid grid-cols-2">
          <div className="bg-[var(--c-bg)] flex flex-col gap-[8px] p-[16px] sm:p-[24px]">
            <p className="font-sans font-normal text-[var(--c-ink-muted)] text-[11px] sm:text-[12px] tracking-[1.92px] uppercase">{t.about.emailLabel}</p>
            <p className="font-sans font-medium text-[14px] sm:text-[16px] text-[var(--c-ink)] break-words">Leonardoperezf23@gmail.com</p>
          </div>
          <div className="bg-[var(--c-bg)] flex flex-col gap-[8px] p-[16px] sm:p-[24px] border-l border-[var(--c-border)]">
            <p className="font-sans font-normal text-[var(--c-ink-muted)] text-[11px] sm:text-[12px] tracking-[1.92px] uppercase">{t.about.phoneLabel}</p>
            <p className="font-sans font-medium text-[14px] sm:text-[16px] text-[var(--c-ink)]">+1 (809) 370-0424</p>
          </div>
          <div className="bg-[var(--c-bg)] flex flex-col gap-[8px] p-[16px] sm:p-[24px] border-t border-[var(--c-border)]">
            <p className="font-sans font-normal text-[var(--c-ink-muted)] text-[11px] sm:text-[12px] tracking-[1.92px] uppercase">{t.about.locationLabel}</p>
            <p className="font-sans font-medium text-[14px] sm:text-[16px] text-[var(--c-ink)]">{t.about.locationValue}</p>
          </div>
          <div className="bg-[var(--c-bg)] flex flex-col gap-[8px] p-[16px] sm:p-[24px] border-t border-l border-[var(--c-border)]">
            <p className="font-sans font-normal text-[var(--c-ink-muted)] text-[11px] sm:text-[12px] tracking-[1.92px] uppercase">{t.about.specialtyLabel}</p>
            <p className="font-sans font-medium text-[14px] sm:text-[16px] text-[var(--c-ink)]">{t.about.specialtyValue}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
