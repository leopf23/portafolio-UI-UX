"use client";

import { useLocale } from "@/context/LocaleContext";

function Tag({ label, active }: { label: string; active: boolean }) {
  return active ? (
    <div className="bg-[rgba(124,58,237,0.1)] border border-[rgba(124,58,237,0.4)] border-solid content-stretch flex gap-[8px] items-center px-[13px] py-[7px] relative rounded-[10px] self-stretch shrink-0">
      <div className="bg-[#7c3aed] relative rounded-[16777200px] shrink-0 size-[6px]" />
      <div className="[word-break:break-word] flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[var(--c-ink)] whitespace-nowrap">
        <p className="leading-[19.5px]">{label}</p>
      </div>
    </div>
  ) : (
    <div className="bg-[var(--c-chip)] border border-[var(--c-border)] border-solid content-stretch flex items-center px-[13px] py-[7px] relative rounded-[10px] self-stretch shrink-0">
      <div className="[word-break:break-word] flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[var(--c-ink-soft)] whitespace-nowrap">
        <p className="leading-[19.5px]">{label}</p>
      </div>
    </div>
  );
}

export default function SkillsExpertise() {
  const { t } = useLocale();
  const { topSkills, breakdown } = t.skillsExpertise;

  return (
    <section id="skills" className="scroll-mt-[110px] border-[var(--c-border)] border-solid border-t content-stretch flex flex-col items-start pb-[64px] sm:pb-[128px] pt-[64px] sm:pt-[93px] px-[24px] sm:px-[48px] lg:px-[140px] relative shrink-0 w-full">
      <div className="relative shrink-0 w-full mx-auto max-w-[1512px]">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full flex flex-col lg:grid lg:grid-cols-2 gap-[40px]">
          <div className="content-stretch flex flex-col gap-[23.4px] items-start pb-[24px]">
            <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
              <div className="bg-[#7c3aed] h-px relative shrink-0 w-[32px]" />
              <div className="content-stretch flex flex-col items-start relative shrink-0">
                <div className="[word-break:break-word] flex flex-col font-mono font-normal justify-center leading-[0] relative shrink-0 text-[var(--c-ink-muted)] text-[11px] tracking-[2.64px] uppercase whitespace-nowrap">
                  <p className="leading-[16.5px]">{t.skillsExpertise.kicker}</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start pt-[0.6px] relative shrink-0 w-full">
              <div className="[word-break:break-word] flex flex-col font-poppins justify-center leading-[0] not-italic relative shrink-0 text-[36px] sm:text-[48px] lg:text-[60px] text-[var(--c-ink)] tracking-[-1.5px] w-full">
                <p className="leading-[1.1] lg:leading-[63px]">
                  <span className="text-[#7c3aed]">{t.skillsExpertise.headingAccent}</span>
                  <span>{" "}{t.skillsExpertise.headingTrail}</span>
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start max-w-[448px] pb-[16.59px] relative shrink-0">
              <div className="[word-break:break-word] flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[var(--c-ink-muted)] text-[15px]">
                <p className="leading-[24.38px] mb-0">{t.skillsExpertise.intro[0]}</p>
                <p className="leading-[24.38px] mb-0">{t.skillsExpertise.intro[1]}</p>
                <p className="leading-[24.38px]">{t.skillsExpertise.intro[2]}</p>
              </div>
            </div>
            <div className="bg-[var(--c-surface)] border border-[var(--c-border)] border-solid content-stretch flex flex-col gap-[16px] items-start p-[25px] relative rounded-[20px] shrink-0 w-full">
              <div className="relative shrink-0 w-full">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
                  <div className="content-stretch flex flex-col items-start relative shrink-0">
                    <div className="[word-break:break-word] flex flex-col font-sans font-medium justify-center leading-[0] not-italic relative shrink-0 text-[var(--c-ink-muted)] text-[12px] tracking-[2.16px] uppercase whitespace-nowrap">
                      <p className="leading-[16px]">{t.skillsExpertise.topSkillsLabel}</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0">
                    <div className="[word-break:break-word] flex flex-col font-mono font-normal justify-center leading-[0] relative shrink-0 text-[var(--c-ink-muted)] text-[11px] whitespace-nowrap">
                      <p className="leading-[16.5px]">{t.skillsExpertise.topSkillsSub}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-[8px] w-full">
                {topSkills.map((skill) => (
                  <div
                    key={skill}
                    className="bg-[rgba(124,58,237,0.1)] border border-[rgba(124,58,237,0.3)] border-solid flex gap-[6px] items-center px-[13px] py-[5px] rounded-[16777200px] shrink-0"
                  >
                    <div className="bg-[#7c3aed] rounded-[16777200px] shrink-0 size-[4px]" />
                    <span className="font-sans font-normal text-[12px] text-[var(--c-ink)] leading-[18px] whitespace-nowrap">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="content-stretch flex flex-col items-start">
            <div className="bg-[var(--c-surface)] border border-[var(--c-border)] border-solid content-stretch flex flex-col items-start relative rounded-[20px] shrink-0 w-full overflow-hidden">
              {breakdown.map((item, i) => (
                <div
                  key={item.name}
                  className={`grid grid-cols-1 sm:grid-cols-12 gap-[24px] px-[28px] py-[32px] relative shrink-0 w-full ${
                    i < breakdown.length - 1 ? "border-[var(--c-border)] border-b border-solid" : ""
                  }`}
                >
                  <div className="sm:col-span-4 content-stretch flex flex-col gap-[11.31px] items-start">
                    <div className="[word-break:break-word] content-stretch flex gap-[12px] items-baseline leading-[0] relative shrink-0 w-full whitespace-nowrap">
                      <div className="flex flex-col font-mono font-normal justify-center relative shrink-0 text-[var(--c-ink-muted)] text-[12px]">
                        <p className="leading-[16px]">{String(i + 1).padStart(2, "0")}</p>
                      </div>
                      <div className="flex flex-col font-poppins justify-center not-italic relative shrink-0 text-[24px] text-[var(--c-ink)] tracking-[-0.6px]">
                        <p className="leading-[24px]">{item.name}</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                      <div className="[word-break:break-word] flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[var(--c-ink-muted)] text-[13px] w-full">
                        <p className="leading-[21.13px] mb-0">{item.description[0]}</p>
                        <p className="leading-[21.13px]">{item.description[1]}</p>
                      </div>
                    </div>
                  </div>
                  <div className="sm:col-span-8 content-stretch flex flex-col items-start">
                    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full flex-wrap">
                      {item.tags.map((tag) => (
                        <Tag key={tag.label} label={tag.label} active={tag.active} />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
