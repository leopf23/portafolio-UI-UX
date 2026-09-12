"use client";

import { useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex flex-col items-start px-[16px] sm:px-[24px] lg:px-[140px] py-[12px] w-full">
      <div className="backdrop-blur-[8px] bg-[rgba(22,22,22,0.6)] border border-[rgba(255,255,255,0.06)] border-solid content-stretch flex items-center justify-between px-[16px] sm:px-[21px] py-[11px] relative rounded-[24px] sm:rounded-[16777200px] shrink-0 w-full shadow-[0px_30px_80px_-30px_rgba(0,0,0,0.6)]">
        <a href="#" className="relative shrink-0" onClick={() => setOpen(false)}>
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center relative size-full">
            <div className="bg-[#161616] content-stretch flex flex-col items-center justify-center py-[4px] relative rounded-[12px] shrink-0 size-[32px] overflow-hidden">
              <div
                className="absolute inset-0 rounded-[12px]"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, rgba(124, 58, 237, 0.4) 0%, rgba(124, 58, 237, 0) 100%)",
                }}
              />
              <div className="[word-break:break-word] flex flex-col font-sans font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
                <p className="leading-[24px]">L</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0">
              <div className="[word-break:break-word] flex flex-col font-sans font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.35px] whitespace-nowrap">
                <p>
                  <span className="leading-[20px]">Leonardo</span>
                  <span className="font-sans font-medium leading-[20px] not-italic text-[#a1a1aa]">.PF</span>
                </p>
              </div>
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-[4px]">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="flex flex-col items-start px-[14px] py-[6px] rounded-[16777200px] shrink-0 text-[#a1a1aa] hover:text-white transition-colors"
            >
              <span className="font-sans font-normal text-[13px] leading-[19.5px]">{link.label}</span>
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden sm:flex bg-white relative rounded-[16777200px] shrink-0"
        >
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-sans font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#070707] text-[13px] whitespace-nowrap">
              <p className="leading-[19.5px]">go to portfolio</p>
            </div>
            <div className="relative shrink-0 size-[14px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="" className="absolute block inset-0 max-w-none size-full" src="/images/icon-arrow-portfolio.svg" />
            </div>
          </div>
        </a>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden relative shrink-0 size-[36px] flex flex-col items-center justify-center gap-[5px] rounded-[16777200px] bg-white/5"
        >
          <span
            className={`block h-[1.5px] w-[16px] bg-white transition-transform duration-200 ${
              open ? "translate-y-[3.25px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[1.5px] w-[16px] bg-white transition-transform duration-200 ${
              open ? "-translate-y-[3.25px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <nav className="lg:hidden mt-[8px] flex flex-col gap-[4px] w-full rounded-[20px] border border-[rgba(255,255,255,0.06)] border-solid bg-[rgba(17,17,17,0.95)] backdrop-blur-[8px] p-[12px] shadow-[0px_30px_80px_-30px_rgba(0,0,0,0.6)]">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="w-full rounded-[12px] px-[14px] py-[10px] text-[#a1a1aa] hover:text-white hover:bg-white/5 transition-colors"
            >
              <span className="font-sans font-normal text-[14px] leading-[20px]">{link.label}</span>
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-[4px] bg-white rounded-[12px] flex items-center justify-center gap-[8px] px-[16px] py-[10px]"
          >
            <span className="font-sans font-medium text-[13px] leading-[19.5px] text-[#070707]">go to portfolio</span>
            <div className="relative shrink-0 size-[14px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="" className="absolute block inset-0 max-w-none size-full" src="/images/icon-arrow-portfolio.svg" />
            </div>
          </a>
        </nav>
      )}
    </header>
  );
}
