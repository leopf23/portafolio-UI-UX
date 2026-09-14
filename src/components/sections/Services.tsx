"use client";

import { useLocale } from "@/context/LocaleContext";

const icons = [
  "/images/icon-service-uiux.svg",
  "/images/icon-service-frontend.svg",
  "/images/icon-service-webdesign.svg",
  "/images/icon-service-designsystems.svg",
  "/images/icon-service-brand.svg",
  "/images/icon-service-strategy.svg",
];

function ServiceCard({
  icon,
  number,
  title,
  description,
  learnMore,
}: {
  icon: string;
  number: string;
  title: string;
  description: [string, string];
  learnMore: string;
}) {
  return (
    <div className="flex flex-col gap-[12px] bg-[var(--c-surface)] p-[24px] sm:p-[28px] border border-[var(--c-border)] border-solid rounded-[20px] h-full">
      <div className="flex justify-between items-center">
        <div className="flex flex-col justify-center items-center bg-[var(--c-overlay-1)] border border-[var(--c-border-strong)] border-solid rounded-[12px] size-[44px] shrink-0">
          <div className="relative size-[20px] shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="" className="block absolute inset-0 max-w-none size-full light:invert" src={icon} />
          </div>
        </div>
        <p className="font-mono font-normal text-[var(--c-ink-muted)] text-[12px] leading-[16px]">{number}</p>
      </div>
      <div className="flex flex-col gap-[12px] pt-[16px] sm:pt-[28px]">
        <p className="font-sans font-medium text-[22px] text-[var(--c-ink)] sm:text-[24px] leading-[32px] tracking-[-0.6px]">
          {title}
        </p>
        <div className="font-sans font-normal text-[var(--c-ink-muted)] text-[15px] leading-[24.38px]">
          <p className="mb-0">{description[0]}</p>
          <p>{description[1]}</p>
        </div>
        <div className="flex items-center gap-[6px] pt-[4px]">
          <span className="font-sans font-normal text-[var(--c-ink-muted)] text-[12px] leading-[16px]">{learnMore}</span>
          <div className="relative size-[12px] shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="" className="block absolute inset-0 max-w-none size-full light:invert" src="/images/icon-arrow-right.svg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const { t } = useLocale();

  return (
    <section
      id="services"
      className="relative flex flex-col items-start px-[24px] sm:px-[48px] lg:px-[116px] pt-[80px] sm:pt-[123px] pb-[64px] sm:pb-[93px] border-[var(--c-border)] border-t border-solid w-full scroll-mt-[110px] shrink-0"
    >
      <div className="relative flex flex-col gap-[48px] sm:gap-[64px] mx-auto w-full max-w-[1280px] shrink-0">
        <div className="flex flex-col gap-[24px]">
          <div className="flex items-center gap-[12px]">
            <div className="bg-[#7c3aed] w-[32px] h-px" />
            <p className="font-mono font-normal text-[var(--c-ink-muted)] text-[11px] uppercase leading-[16.5px] tracking-[2.64px]">
              {t.services.kicker}
            </p>
          </div>
          <p className="font-poppins font-semibold text-[36px] sm:text-[48px] lg:text-[60px] leading-[1.1] lg:leading-[63px] tracking-[-1.5px]">
            <span className="text-[#7c3aed]">{t.services.headingAccent} </span>
            <span className="text-[var(--c-ink)]">{t.services.headingTrail}</span>
          </p>
        </div>
        <div className="gap-[24px] sm:gap-[32px] lg:gap-[24px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full">
          {t.services.items.map((service, i) => (
            <ServiceCard
              key={service.title}
              icon={icons[i]}
              number={String(i + 1).padStart(2, "0")}
              title={service.title}
              description={service.description}
              learnMore={t.services.learnMore}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
