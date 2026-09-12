type Project = {
  image: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
};

const projects: Project[] = [
  {
    image: "/images/project-constella.png",
    category: "BRAND",
    title: "Constella Identity",
    description: "Mark, type, and motion system for a developer tools startup.",
    tags: ["Branding", "Motion"],
  },
  {
    image: "/images/project-wayward.png",
    category: "TRAVEL · MOBILE",
    title: "Wayward",
    description: "Itinerary-first travel companion for slow travelers.",
    tags: ["React Native", "Mapbox"],
  },
  {
    image: "/images/project-wayward.png",
    category: "TRAVEL · MOBILE",
    title: "Wayward",
    description: "Itinerary-first travel companion for slow travelers.",
    tags: ["React Native", "Mapbox"],
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-[#111] border border-[rgba(255,255,255,0.06)] border-solid content-stretch flex flex-col items-start relative rounded-[20px] shrink-0 w-full overflow-hidden">
      <div className="relative shrink-0 w-full">
        <div className="h-[245px] relative shrink-0 w-full overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt={project.title} className="absolute h-[120%] left-0 max-w-none top-[-10%] w-full object-cover" src={project.image} />
        </div>
        <div className="absolute bg-gradient-to-t from-[rgba(7,7,7,0.8)] inset-0 to-[rgba(7,7,7,0)]" />
      </div>
      <div className="relative shrink-0 w-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start p-[24px] relative size-full">
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
            <div className="content-stretch flex flex-col items-start relative shrink-0">
              <div className="[word-break:break-word] flex flex-col font-mono font-normal justify-center leading-[0] relative shrink-0 text-[#a1a1aa] text-[11px] tracking-[1.1px] uppercase whitespace-nowrap">
                <p className="leading-[16.5px]">{project.category}</p>
              </div>
            </div>
            <div className="relative shrink-0 size-[16px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="" className="absolute block inset-0 max-w-none size-full" src="/images/icon-external-link.svg" />
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full">
            <div className="[word-break:break-word] flex flex-col font-sans font-medium justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white tracking-[-0.5px] w-full">
              <p className="leading-[28px]">{project.title}</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
            <div className="[word-break:break-word] flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] w-full">
              <p className="leading-[22.75px]">{project.description}</p>
            </div>
          </div>
          <div className="content-stretch flex gap-[6px] items-start pt-[12px] relative shrink-0 w-full flex-wrap">
            {project.tags.map((tag) => (
              <div
                key={tag}
                className="bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex flex-col items-start px-[11px] py-[5px] relative rounded-[16777200px] self-stretch shrink-0"
              >
                <div className="[word-break:break-word] flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#a1a1aa] text-[11px] whitespace-nowrap">
                  <p className="leading-[16.5px]">{tag}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-[110px] border-[rgba(255,255,255,0.06)] border-solid border-t content-stretch flex flex-col items-start pb-[64px] sm:pb-[128px] pt-[64px] sm:pt-[129px] px-[24px] sm:px-[48px] lg:px-[116px] relative shrink-0 w-full">
      <div className="max-w-[1280px] relative shrink-0 w-full mx-auto">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[56px] items-start max-w-[inherit] px-[24px] relative size-full">
          <div className="content-stretch flex flex-col sm:flex-row sm:items-end sm:justify-between gap-[24px] relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[24px] items-start">
              <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
                <div className="bg-[#7c3aed] h-px relative shrink-0 w-[32px]" />
                <div className="content-stretch flex flex-col items-start relative shrink-0">
                  <div className="[word-break:break-word] flex flex-col font-mono font-normal justify-center leading-[0] relative shrink-0 text-[#a1a1aa] text-[11px] tracking-[2.64px] uppercase whitespace-nowrap">
                    <p className="leading-[16.5px]">05 · SELECTED WORK</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start max-w-[768px] relative shrink-0 w-full">
                <div className="[word-break:break-word] flex flex-col font-poppins justify-center leading-[0] not-italic relative shrink-0 text-[36px] sm:text-[48px] lg:text-[60px] text-white tracking-[-1.5px]">
                  <p className="leading-[1.1] lg:leading-[63px]">
                    <span className="text-[#7c3aed]">Featured</span>
                    <span>{` Projects`}</span>
                  </p>
                </div>
              </div>
            </div>
            <a
              href="#projects"
              className="border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex gap-[8px] items-center justify-center px-[17px] py-[9px] rounded-[16777200px] shrink-0"
            >
              <div className="[word-break:break-word] flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
                <p className="leading-[20px]">View all</p>
              </div>
              <div className="relative shrink-0 size-[14px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="" className="absolute block inset-0 max-w-none size-full" src="/images/icon-arrow-up-right-sm.svg" />
              </div>
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px] relative shrink-0 w-full">
            {projects.map((project, i) => (
              <ProjectCard key={`${project.title}-${i}`} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
