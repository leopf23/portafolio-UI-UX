"use client";

import { useLocale } from "@/context/LocaleContext";

export default function Hero() {
  const { t } = useLocale();
  return (
    <section className="relative w-full overflow-hidden shrink-0">
      <div
        className="absolute inset-0 mask-size-[100%_100%] mask-alpha mask-intersect mask-no-clip mask-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(90deg, var(--c-grid-line) 1.5625%, rgba(255, 255, 255, 0) 1.5625%), linear-gradient(180deg, var(--c-grid-line) 1.5625%, rgba(255, 255, 255, 0) 1.5625%)",
          maskImage: 'url("/images/grid-gradient-mask.svg")',
        }}
      />
      <div className="top-[80px] left-[-160px] absolute bg-[rgba(124,58,237,0.25)] blur-[70px] rounded-[16777200px] size-[300px] sm:size-[400px] lg:size-[520px]" />
      <div className="right-[-128px] bottom-0 absolute bg-[rgba(6,182,212,0.23)] blur-[70px] rounded-[16777200px] size-[240px] sm:size-[320px] lg:size-[420px]" />

      <div className="relative flex xl:flex-row flex-col xl:items-center gap-[40px] xl:gap-[48px] mx-auto px-[24px] sm:px-[48px] lg:px-[64px] pt-[128px] xl:pt-0 xl:pr-[24px] pb-[64px] xl:pb-0 xl:pl-[92px] max-w-[1512px] xl:min-h-[989px]">
        <div className="z-10 relative flex flex-col gap-[24px] xl:gap-[28px] xl:w-[609px] xl:shrink-0">
          <div className="flex items-center self-start gap-[10px] bg-[var(--c-overlay-1)] px-[12px] border border-[var(--c-border-strong)] border-solid rounded-[16777200px] h-[30px]">
            <div className="relative flex justify-center items-center size-[6px] shrink-0">
              <div className="absolute inset-0 bg-[#11c18a] opacity-75 rounded-[16777200px]" />
              <div className="relative bg-[#11c18a] rounded-[16777200px] size-[6px] shrink-0" />
            </div>
            <p className="font-sans font-normal text-[var(--c-ink-muted)] text-[12px] leading-[16px] whitespace-nowrap">
              {t.hero.badge}
            </p>
          </div>

          <h1 className="font-sans font-semibold text-[55px] sm:text-[52px] lg:text-[64px] xl:text-[76px] leading-[1.08] xl:leading-[86.6px] tracking-[-1.5px] sm:tracking-[-2.4px] xl:tracking-[-3.52px]">
            <span className="block hero-line hero-line-1 hero-line-accent">{t.hero.headingLine1}</span>
            <span className="block text-[var(--c-ink)] hero-line hero-line-2">{t.hero.headingLine2}</span>
            <span className="block text-[var(--c-ink)] hero-line hero-line-3">{t.hero.headingLine3}</span>
          </h1>

          <p className="max-w-xl font-sans font-normal text-[var(--c-ink-muted)] text-[16px] sm:text-[17px] leading-[1.6]">
            {t.hero.description}
          </p>

          <div className="flex flex-wrap gap-[16px] sm:gap-[25px]">
            <a
              href="/leonardo-perez-cv.pdf"
              download
              className="flex items-center gap-[4px] bg-[#7c3aed] shadow-[0px_0px_80px_-10px_rgba(124,58,237,0.45)] px-[20px] py-[12px] rounded-[16777200px]"
            >
              <span className="font-sans font-medium text-[14px] text-white leading-[20px] whitespace-nowrap">
                {t.hero.downloadCv}
              </span>
              <div className="relative size-[18px] shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="" className="block absolute inset-0 max-w-none size-full light:invert" src="/images/icon-download.svg" />
              </div>
            </a>
            <a
              href="#contact"
              className="flex items-center bg-[var(--c-overlay-1)] px-[21px] py-[13px] border border-[var(--c-border-strong)] border-solid rounded-[16777200px]"
            >
              <span className="font-sans font-medium text-[14px] text-[var(--c-ink)] leading-[20px] whitespace-nowrap">
                {t.hero.contactMe}
              </span>
            </a>
          </div>

          <div className="flex gap-[32px] sm:gap-[48px] pt-[24px] sm:pt-[33px] border-[var(--c-border)] border-t border-solid">
            <div className="flex flex-col gap-[4px]">
              <p className="font-poppins text-[#7c3aed] text-[32px] sm:text-[36px] leading-[40px] tracking-[-0.9px]">
                <span>+</span>
                <span className="text-[var(--c-ink)]">7</span>
              </p>
              <p className="font-sans font-normal text-[var(--c-ink-muted)] text-[12px] uppercase leading-[16px] tracking-[1.92px]">
                {t.hero.statYearsLabel}
              </p>
            </div>
            <div className="flex flex-col gap-[4px]">
              <p className="font-poppins text-[#7c3aed] text-[32px] sm:text-[36px] leading-[40px] tracking-[-0.9px]">
                <span>+</span>
                <span className="text-[var(--c-ink)]">20</span>
              </p>
              <p className="font-sans font-normal text-[var(--c-ink-muted)] text-[12px] uppercase leading-[16px] tracking-[1.92px]">
                {t.hero.statProjectsLabel1} {t.hero.statProjectsLabel2}
              </p>
            </div>
          </div>
        </div>

        <div className="hidden xl:block relative flex-1 rounded-[20px] h-187.5 overflow-hidden hero-line hero-line-image">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="Leonardo Perez Figueroa portrait"
            className="hidden xl:block absolute inset-0 opacity-54 size-full object-cover"
            src="/images/hero-portrait.png"
          />
        </div>
      </div>
    </section>
  );
}
