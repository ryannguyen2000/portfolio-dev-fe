/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react'

interface MobileMenuProps {
  mobileOpen: boolean
  setMobileOpen: any
  items: string[]
  lang: string
  setLang: any
}

function scrollTo(id: string) {
  document.getElementById(id.toLowerCase())?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}
 

const MobileMenu: React.FC<MobileMenuProps> = ({ mobileOpen, setMobileOpen, items, lang, setLang }) => {
  return (
    <>
      {/* ── MOBILE DROPDOWN ── */}
      {mobileOpen && (
        <div className="anim-mobile-in fixed top-17 left-3 right-3 z-40 sm:hidden bg-[rgba(4,14,14,0.97)] border border-[rgba(0,210,180,0.2)] backdrop-blur-xl rounded-lg overflow-hidden shadow-[0_16px_48px_rgba(0,0,0,0.6)]">
 
          {/* Top glow line */}
          <div className="h-px bg-linear-to-r from-transparent via-[#00d4b8] to-transparent opacity-70" />
 
          {/* Nav items */}
          <nav className="flex flex-col">
            {items.map((item, i) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  setMobileOpen(false);
                  setTimeout(() => scrollTo(item), 180);
                }}
                className="group flex items-center gap-4 px-5 py-4 border-b border-[rgba(0,210,180,0.07)] last:border-0 hover:bg-[rgba(0,212,184,0.05)] transition-colors duration-150"
              >
                {/* Index */}
                <span className="font-mono text-[10px] text-[rgba(0,212,184,0.35)] w-5 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
 
                {/* Label */}
                <span className="font-rajdhani text-[16px] font-semibold tracking-widest text-[rgba(180,220,215,0.8)] group-hover:text-[#00d4b8] transition-colors duration-150 flex-1">
                  {item}
                </span>
 
                {/* Arrow indicator */}
                <span className="font-mono text-[12px] text-[rgba(0,212,184,0)] group-hover:text-[#00d4b8] group-hover:translate-x-1 transition-all duration-200">
                  →
                </span>
              </a>
            ))}
          </nav>
 
          {/* Footer: lang toggle */}
          <div className="flex items-center justify-between px-5 py-3 border-t border-[rgba(0,210,180,0.12)] bg-[rgba(0,212,184,0.02)]">
            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[rgba(255,255,255,0.25)]">
              Language
            </span>
            <button
              onClick={() => setLang((l: any) => (l === "EN" ? "VI" : "EN"))}
              className="font-mono text-[11px] px-3 py-1.5 border border-[rgba(0,210,180,0.3)] text-[#00d4b8] rounded hover:bg-[rgba(0,212,184,0.1)] transition-colors duration-150 tracking-wider"
            >
              {lang === "EN" ? "EN → VI" : "VI → EN"}
            </button>
          </div>
 
          {/* Bottom glow line */}
          <div className="h-px bg-linear-to-r from-transparent via-[#00d4b8] to-transparent opacity-25" />
        </div>
      )}
 
      {/* Backdrop overlay — click outside to close */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-30 sm:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
      </>
  )
}

export default MobileMenu