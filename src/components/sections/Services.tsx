type Service = {
  number: string;
  icon: string;
  title: string;
  description: string[];
};

const services: Service[] = [
  {
    number: "01",
    icon: "/images/icon-service-uiux.svg",
    title: "UI / UX Design",
    description: [
      "End-to-end product design — from messy",
      "whiteboard to polished, shippable interface.",
    ],
  },
  {
    number: "02",
    icon: "/images/icon-service-frontend.svg",
    title: "Frontend Development",
    description: [
      "Production React, TypeScript and Tailwind. The",
      "design you signed off on, in the browser.",
    ],
  },
  {
    number: "03",
    icon: "/images/icon-service-webdesign.svg",
    title: "Web Design",
    description: [
      "Marketing sites that earn attention. Editorial",
      "layouts, sharp typography, no template energy.",
    ],
  },
  {
    number: "04",
    icon: "/images/icon-service-designsystems.svg",
    title: "Design Systems",
    description: [
      "Token-driven libraries in Figma + code that",
      "scale across teams without entropy.",
    ],
  },
  {
    number: "05",
    icon: "/images/icon-service-brand.svg",
    title: "Brand Identity",
    description: [
      "Marks, type systems and visual languages that",
      "hold up across screens, print and motion.",
    ],
  },
  {
    number: "06",
    icon: "/images/icon-service-strategy.svg",
    title: "Product Strategy",
    description: [
      "Discovery sprints, audits, north-star definition.",
      "Decide what to build before building.",
    ],
  },
];

function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="flex flex-col gap-[12px] bg-[#111] p-[24px] sm:p-[28px] border border-[rgba(255,255,255,0.06)] border-solid rounded-[20px] h-full">
      <div className="flex justify-between items-center">
        <div className="flex flex-col justify-center items-center bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.1)] border-solid rounded-[12px] size-[44px] shrink-0">
          <div className="relative size-[20px] shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="" className="block absolute inset-0 max-w-none size-full" src={service.icon} />
          </div>
        </div>
        <p className="font-mono font-normal text-[#a1a1aa] text-[12px] leading-[16px]">{service.number}</p>
      </div>
      <div className="flex flex-col gap-[12px] pt-[16px] sm:pt-[28px]">
        <p className="font-sans font-medium text-[22px] text-white sm:text-[24px] leading-[32px] tracking-[-0.6px]">
          {service.title}
        </p>
        <div className="font-sans font-normal text-[#a1a1aa] text-[15px] leading-[24.38px]">
          {service.description.map((line, i) => (
            <p key={i} className={i < service.description.length - 1 ? "mb-0" : ""}>
              {line}
            </p>
          ))}
        </div>
        <div className="flex items-center gap-[6px] pt-[4px]">
          <span className="font-sans font-normal text-[#a1a1aa] text-[12px] leading-[16px]">Learn more</span>
          <div className="relative size-[12px] shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="" className="block absolute inset-0 max-w-none size-full" src="/images/icon-arrow-right.svg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      className="relative flex flex-col items-start px-[24px] sm:px-[48px] lg:px-[116px] pt-[80px] sm:pt-[123px] pb-[64px] sm:pb-[93px] border-[rgba(255,255,255,0.06)] border-t border-solid w-full scroll-mt-[110px] shrink-0"
    >
      <div className="relative flex flex-col gap-[48px] sm:gap-[64px] mx-auto w-full max-w-[1280px] shrink-0">
        <div className="flex flex-col gap-[24px]">
          <div className="flex items-center gap-[12px]">
            <div className="bg-[#7c3aed] w-[32px] h-px" />
            <p className="font-mono font-normal text-[#a1a1aa] text-[11px] uppercase leading-[16.5px] tracking-[2.64px]">
              02 · SERVICES
            </p>
          </div>
          <p className="font-poppins font-semibold text-[36px] sm:text-[48px] lg:text-[60px] leading-[1.1] lg:leading-[63px] tracking-[-1.5px]">
            <span className="text-[#7c3aed]">{`Skills `}</span>
            <span className="text-white">{`& Expertise`}</span>
          </p>
        </div>
        <div className="gap-[24px] sm:gap-[32px] lg:gap-[24px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full">
          {services.map((service) => (
            <ServiceCard key={service.number} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
