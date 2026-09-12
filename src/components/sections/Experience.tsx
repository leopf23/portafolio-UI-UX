type Job = {
  period: string;
  role: string;
  company: string;
  description: string;
};

const jobs: Job[] = [
  {
    period: "2019-2026",
    role: "Senior UI/UX Designer",
    company: "| UNPHU",
    description:
      "Led the design and development of institutional web systems, ensuring alignment with the university’s brand identity and user needs. Collaborated with academic and administrative departments to deliver intuitive digital experiences for students, faculty, and staff.",
  },
  {
    period: "2018 — 2019",
    role: "Front-End Developer & UI/UX Designer",
    company: "| Prixet Technology",
    description:
      "Responsible for designing and developing web interfaces for hotspot platforms and WiFi-based advertising systems. Contributed across the full process, from prototyping in Adobe XD to front-end implementation with HTML, CSS, and JavaScript.",
  },
  {
    period: "2014 — 2016",
    role: "Junior Designer",
    company: "| Dream Team Social media",
    description:
      "Held a versatile role within the multimedia team, combining graphic design with web development to support corporate and advertising projects. Created visual assets for digital and print media, and developed responsive websites optimized for multiple devices.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-[110px] border-[rgba(255,255,255,0.06)] border-solid border-t flex flex-col items-start pb-[64px] sm:pb-[128px] pt-[64px] sm:pt-[84px] px-[24px] sm:px-[48px] lg:px-[116px] relative shrink-0 w-full"
    >
      <div className="max-w-[1280px] relative shrink-0 w-full mx-auto flex flex-col gap-[48px] sm:gap-[64px]">
        <div className="flex flex-col gap-[24px] sm:gap-[32px]">
          <div className="flex gap-[12px] items-center">
            <div className="bg-[#7c3aed] h-px w-[32px]" />
            <p className="font-mono font-normal text-[#a1a1aa] text-[11px] tracking-[2.64px] uppercase leading-[16.5px]">
              03 · EXPERIENCE
            </p>
          </div>
          <p className="font-poppins text-[36px] sm:text-[48px] lg:text-[60px] text-white tracking-[-1.5px] leading-[1.1] lg:leading-[63px] max-w-[672px]">
            <span className="font-poppins">A decade of</span>
            <span className="font-poppins">{` `}</span>
            <span className="font-poppins text-[#7c3aed]">{`company `}</span>
            <span className="font-poppins">{`I'm proud of.`}</span>
          </p>
        </div>

        <div className="flex flex-col">
          {jobs.map((job, i) => (
            <div key={job.period} className="relative flex gap-[24px] sm:gap-[40px] pb-[40px] sm:pb-[48px] last:pb-0">
              <div className="relative flex flex-col items-center shrink-0 w-[16px]">
                <div className="bg-[#070707] flex items-center justify-center rounded-[16777200px] size-[16px] shrink-0">
                  <div className="bg-[#7c3aed] rounded-[16777200px] size-[8px] shadow-[0px_0px_80px_-10px_rgba(124,58,237,0.45)]" />
                </div>
                {i < jobs.length - 1 && (
                  <div className="absolute top-[16px] bottom-[-40px] sm:bottom-[-48px] left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-[rgba(255,255,255,0.2)] to-transparent" />
                )}
              </div>
              <div className="flex flex-col gap-[8px] sm:gap-[12px] sm:grid sm:grid-cols-[160px_1fr] sm:gap-x-[24px] w-full pt-0">
                <p className="font-mono font-normal text-[#a1a1aa] text-[12px] tracking-[1.2px] uppercase leading-[16px] pt-[2px]">
                  {job.period}
                </p>
                <div className="flex flex-col gap-[12px]">
                  <div className="flex flex-wrap gap-x-[12px] gap-y-[4px] items-baseline">
                    <p className="font-sans font-medium text-[20px] sm:text-[24px] text-white tracking-[-0.6px] leading-[1.3]">
                      {job.role}
                    </p>
                    <p className="font-poppins font-semibold text-[#a1a1aa] text-[18px] sm:text-[20px] leading-[28px]">
                      {job.company}
                    </p>
                  </div>
                  <p className="font-sans font-normal text-[#a1a1aa] text-[14px] sm:text-[15px] leading-[22.5px] max-w-[672px]">
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
