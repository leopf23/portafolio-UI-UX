export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-[110px] gap-x-[40px] gap-y-[40px] grid grid-cols-1 lg:grid-cols-[repeat(12,minmax(0,1fr))] max-w-[1280px] pt-[80px] sm:pt-[100px] lg:pt-[128px] px-[24px] relative shrink-0 w-full mx-auto"
    >
      <div className="lg:col-[1/span_5] content-stretch flex flex-col items-start justify-self-stretch relative shrink-0">
        <div className="border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[20px] shrink-0 w-full">
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
                      <p className="leading-[20px]">Leonardo Perez Figueroa</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                    <div className="[word-break:break-word] flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#a1a1aa] text-[12px] whitespace-nowrap">
                      <p className="leading-[16px]">Senior Designer · Engineer</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
                  <div className="relative shrink-0 size-[12px]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src="/images/icon-location.svg" />
                  </div>
                  <div className="[word-break:break-word] flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#a1a1aa] text-[12px] whitespace-nowrap">
                    <p className="leading-[16px]">Rep.Dom, Sto Dgo</p>
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
            <div className="[word-break:break-word] flex flex-col font-mono font-normal justify-center leading-[0] relative shrink-0 text-[#a1a1aa] text-[11px] tracking-[2.64px] uppercase whitespace-nowrap">
              <p className="leading-[16.5px]">01 · ABOUT</p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
          <div className="[word-break:break-word] flex flex-col font-poppins justify-center leading-[0] not-italic relative shrink-0 text-[34px] sm:text-[44px] lg:text-[60px] text-white tracking-[-1.5px] w-full">
            <p className="font-poppins leading-[1.1] lg:leading-[63px] mb-0">I make software feel</p>
            <p className="leading-[1.1] lg:leading-[63px]">
              <span className="font-poppins text-[#7c3aed]">considered</span>
              <span className="font-poppins">{` `}</span>
              <span className="font-poppins">— not decorated.</span>
            </p>
          </div>
        </div>
        <div className="relative shrink-0 w-full">
          <div className="[word-break:break-word] flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#a1a1aa] text-[16px] sm:text-[17px] w-full">
            <p className="leading-[27.63px] mb-0">{`I'm Leonardo, a passionate UI/UX designer with over 7 years of experience creating digital products that users love. My approach combines user research, strategic thinking, and beautiful design to deliver solutions that not only look great but also drive business results.`}</p>
            <p className="leading-[27.63px]">{`When I'm not designing, you can find me exploring new design trends, contributing to open-source projects, or sharing knowledge through design communities and workshops.`}</p>
          </div>
        </div>
        <div className="bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.06)] border-solid overflow-clip relative rounded-[20px] shrink-0 w-full grid grid-cols-2">
          <div className="bg-[#070707] flex flex-col gap-[8px] p-[16px] sm:p-[24px]">
            <p className="font-sans font-normal text-[#a1a1aa] text-[11px] sm:text-[12px] tracking-[1.92px] uppercase">Email</p>
            <p className="font-sans font-medium text-[14px] sm:text-[16px] text-white break-words">Leonardoperezf23@gmail.com</p>
          </div>
          <div className="bg-[#070707] flex flex-col gap-[8px] p-[16px] sm:p-[24px] border-l border-[rgba(255,255,255,0.06)]">
            <p className="font-sans font-normal text-[#a1a1aa] text-[11px] sm:text-[12px] tracking-[1.92px] uppercase">Phone</p>
            <p className="font-sans font-medium text-[14px] sm:text-[16px] text-white">+1 (809) 370-0424</p>
          </div>
          <div className="bg-[#070707] flex flex-col gap-[8px] p-[16px] sm:p-[24px] border-t border-[rgba(255,255,255,0.06)]">
            <p className="font-sans font-normal text-[#a1a1aa] text-[11px] sm:text-[12px] tracking-[1.92px] uppercase">Location</p>
            <p className="font-sans font-medium text-[14px] sm:text-[16px] text-white">República Dominicana, SD</p>
          </div>
          <div className="bg-[#070707] flex flex-col gap-[8px] p-[16px] sm:p-[24px] border-t border-l border-[rgba(255,255,255,0.06)]">
            <p className="font-sans font-normal text-[#a1a1aa] text-[11px] sm:text-[12px] tracking-[1.92px] uppercase">specialty</p>
            <p className="font-sans font-medium text-[14px] sm:text-[16px] text-white">UI/UX Designer + Frond-end Dev</p>
          </div>
        </div>
      </div>
    </section>
  );
}
