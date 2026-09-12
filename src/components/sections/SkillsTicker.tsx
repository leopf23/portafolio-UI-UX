const skills = [
  "Vector 2D",
  "UX Designer",
  "UI Designer",
  "Graphic Designer",
  "Ilustrator",
  "Frond End",
  "Video Edit",
];

export default function SkillsTicker() {
  return (
    <section className="bg-[rgba(17,17,17,0.4)] border-[rgba(255,255,255,0.06)] border-b border-solid border-t content-stretch flex flex-col items-start px-[24px] sm:px-[48px] lg:px-[116px] py-[28px] sm:py-[41px] relative shrink-0 w-full">
      <div className="max-w-[1280px] relative shrink-0 w-full mx-auto">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start max-w-[inherit] px-[24px] relative size-full">
          <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
            <div className="[word-break:break-word] flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#a1a1aa] text-[11px] text-center tracking-[2.64px] uppercase whitespace-nowrap">
              <p className="leading-[16.5px]">My Skills</p>
            </div>
          </div>
          <div className="h-[36px] relative shrink-0 w-full overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
            <div className="absolute flex items-start left-0 top-0 animate-skills-marquee w-max">
              {[0, 1].map((loop) => (
                <div key={loop} className="content-stretch flex gap-[64px] items-start pr-[64px] shrink-0">
                  {skills.map((skill) => (
                    <div
                      key={`${loop}-${skill}`}
                      className="content-stretch flex flex-col items-start relative self-stretch shrink-0"
                    >
                      <div className="[word-break:break-word] flex flex-col font-poppins font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[22px] text-[rgba(161,161,170,0.6)] whitespace-nowrap">
                        <p className="leading-[36px]">{skill}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
