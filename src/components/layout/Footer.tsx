const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/leonardo-p%C3%A9rez-figueroa-030760162/" },
  { label: "GitHub", href: "https://github.com/leopf23" },
];

export default function Footer() {
  return (
    <footer className="border-[rgba(255,255,255,0.06)] border-solid border-t relative w-full">
      <div className="max-w-[1280px] mx-auto px-[24px] py-[56px] flex flex-col gap-[48px]">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-[32px]">
          <div className="content-stretch flex flex-col leading-none select-none">
            <span
              className="font-poppins font-bold text-[44px] sm:text-[60px] lg:text-[76px] leading-[1.1] lg:leading-[85px] tracking-[-2px] lg:tracking-[-3.5px]"
              style={{
                color: "transparent",
                WebkitTextStroke: "1px rgba(255,255,255,0.15)",
              }}
            >
              UI/UX
            </span>
            <span className="font-poppins font-bold text-[40px] sm:text-[55px] lg:text-[70px] leading-[1.1] lg:leading-[85px] tracking-[-2px] lg:tracking-[-3.5px] text-white -mt-[4px] sm:-mt-[10px] lg:-mt-[16px]">
              DESIGNS
            </span>
          </div>

          <nav className="grid grid-cols-2 gap-x-[48px] gap-y-[8px] shrink-0">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-sans font-normal text-[14px] leading-[20px] text-[#a1a1aa] hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="border-[rgba(255,255,255,0.06)] border-solid border-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-[16px] pt-[25px]">
          <p className="font-sans font-normal text-[12px] leading-[16px] text-[#a1a1aa]">
            © 2026 Leonardo Perez F. All rights reserved.
          </p>
          <div className="flex items-center gap-[20px]">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans font-normal text-[12px] leading-[16px] text-[#a1a1aa] hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
