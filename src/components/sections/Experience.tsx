"use client";

import { useLocale } from "@/context/LocaleContext";

export default function Experience() {
  const { t } = useLocale();
  const jobs = t.experience.jobs;

  return (
    <section
      id="experience"
      className="scroll-mt-[110px] border-[var(--c-border)] border-solid border-t flex flex-col items-start pb-[64px] sm:pb-[128px] pt-[64px] sm:pt-[84px] px-[24px] sm:px-[48px] lg:px-[116px] relative shrink-0 w-full"
    >
      <div className="max-w-[1280px] relative shrink-0 w-full mx-auto flex flex-col gap-[48px] sm:gap-[64px]">
        <div className="flex flex-col gap-[24px] sm:gap-[32px]">
          <div className="flex gap-[12px] items-center">
            <div className="bg-[#7c3aed] h-px w-[32px]" />
            <p className="font-mono font-normal text-[var(--c-ink-muted)] text-[11px] tracking-[2.64px] uppercase leading-[16.5px]">
              {t.experience.kicker}
            </p>
          </div>
          <p className="font-poppins text-[36px] sm:text-[48px] lg:text-[60px] text-[var(--c-ink)] tracking-[-1.5px] leading-[1.1] lg:leading-[63px] max-w-[672px]">
            <span className="font-poppins">{t.experience.heading1}</span>
            <span className="font-poppins">{" "}</span>
            <span className="font-poppins text-[#7c3aed]">{t.experience.headingAccent} </span>
            <span className="font-poppins">{t.experience.headingTrail}</span>
          </p>
        </div>

        <div className="flex flex-col">
          {jobs.map((job, i) => (
            <div key={job.period} className="relative flex gap-[24px] sm:gap-[40px] pb-[40px] sm:pb-[48px] last:pb-0">
              <div className="relative flex flex-col items-center shrink-0 w-[16px]">
                <div className="bg-[var(--c-bg)] flex items-center justify-center rounded-[16777200px] size-[16px] shrink-0">
                  <div className="bg-[#7c3aed] rounded-[16777200px] size-[8px] shadow-[0px_0px_80px_-10px_rgba(124,58,237,0.45)]" />
                </div>
                {i < jobs.length - 1 && (
                  <div className="absolute top-[16px] bottom-[-40px] sm:bottom-[-48px] left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-[rgba(255,255,255,0.2)] light:from-[rgba(15,15,20,0.18)] to-transparent" />
                )}
              </div>
              <div className="flex flex-col gap-[8px] sm:gap-[12px] sm:grid sm:grid-cols-[160px_1fr] sm:gap-x-[24px] w-full pt-0">
                <p className="font-mono font-normal text-[var(--c-ink-muted)] text-[12px] tracking-[1.2px] uppercase leading-[16px] pt-[2px]">
                  {job.period}
                </p>
                <div className="flex flex-col gap-[12px]">
                  <div className="flex flex-wrap gap-x-[12px] gap-y-[4px] items-baseline">
                    <p className="font-sans font-medium text-[20px] sm:text-[24px] text-[var(--c-ink)] tracking-[-0.6px] leading-[1.3]">
                      {job.role}
                    </p>
                    <p className="font-poppins font-semibold text-[var(--c-ink-muted)] text-[18px] sm:text-[20px] leading-[28px]">
                      {job.company}
                    </p>
                  </div>
                  <p className="font-sans font-normal text-[var(--c-ink-muted)] text-[14px] sm:text-[15px] leading-[22.5px] max-w-[672px]">
                    {job.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
