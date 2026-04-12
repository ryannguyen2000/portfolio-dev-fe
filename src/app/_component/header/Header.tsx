"use client";

import { useState } from "react";
import MobileMenu from "./MobileMenu";

const NAV_ITEMS = ["Overview", "Skills", "Experience", "Projects", "Contract"];

export default function CyberHeader() {
  const [lang, setLang] = useState("EN");
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  return (
    <>
      {/* Only truly non-Tailwind things: clip-paths, pseudo-elements, hover child selectors */}
      <style>{`
        .clip-left  { clip-path: polygon(18px 0%, 100% 0%, 100% 100%, 0% 100%); }
        .clip-right { clip-path: polygon(0% 0%, calc(100% - 16px) 0%, 100% 100%, 0% 100%); }

        .nav-left-fx::before {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(0,210,180,0.04) 0%, transparent 60%);
          pointer-events: none;
        }
        .nav-left-fx::after {
          content: '';
          position: absolute; inset: 0;
          background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.08) 2px, rgba(0,0,0,0.08) 4px);
          pointer-events: none;
          opacity: 0.5;
        }
        .nav-right-fx::before {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(90deg, rgba(0,210,180,0.06), rgba(0,210,180,0.02));
          pointer-events: none;
        }

        .nav-link::after {
          content: '';
          position: absolute; bottom: -2px; left: 0;
          width: 0; height: 1px;
          background: #00d4b8;
          box-shadow: 0 0 6px #00d4b8;
          transition: width 0.25s ease;
        }
        .nav-link:hover::after { width: 100%; }

        .wallet-line-full  { width: 100%; }
        .wallet-line-short { width: 70%; transition: transform 0.3s ease; }
        .wallet-wrap:hover .wallet-line-short {
          transform: scaleX(1.4);
          transform-origin: left;
        }

        @keyframes glitch-in {
          0%   { opacity:0; transform:translateX(-4px); filter:blur(2px); }
          30%  { opacity:0.8; transform:translateX(2px); }
          60%  { opacity:0.6; transform:translateX(-1px); }
          100% { opacity:1; transform:translateX(0); filter:blur(0); }
        }
        @keyframes pulse-border {
          0%,100% { border-color:rgba(0,210,180,0.4); box-shadow:none; }
          50%     { border-color:rgba(0,210,180,0.7); box-shadow:0 0 16px rgba(0,212,184,0.15); }
        }
        @keyframes scan-sweep {
          0%   { top:0%;   opacity:0.4; }
          100% { top:100%; opacity:0; }
        }
        .anim-glitch-in    { animation: glitch-in    0.5s ease    forwards; }
        .anim-pulse-border { animation: pulse-border  3s  ease-in-out infinite; }
        .anim-scan-sweep   { animation: scan-sweep    4s  linear   infinite; }
      `}</style>

      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center px-8 py-4">
        <div className="items-center anim-glitch-in hidden sm:flex">

          {/* ── Left nav panel ── */}
          <div className="clip-left nav-left-fx relative flex items-center gap-9 px-10 py-2.5 bg-[rgba(0,20,20,0.85)] border border-[rgba(0,210,180,0.15)] backdrop-blur-md">
            {/* scanline sweep */}
            <div className="anim-scan-sweep absolute left-0 right-0 h-px pointer-events-none bg-gradient-to-r from-transparent via-[rgba(0,212,184,0.4)] to-transparent" />

            {["Overview", "Skills", "Experience", "Projects", "Contract"].map((item) => (
              <a
                id={item}
                key={item}
                href={`#${item.toLowerCase}`}
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById(item.toLocaleLowerCase())?.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                  })
                }}
                className="nav-link relative font-rajdhani text-sm font-medium tracking-[0.08em] text-[rgba(180,220,215,0.75)] no-underline whitespace-nowrap transition-colors duration-200 hover:text-[#00d4b8]"
              >
                {item}
              </a>
            ))}
          </div>

          {/* ── Right CTA panel ── */}
          <div className="clip-right nav-right-fx anim-pulse-border relative flex items-center bg-[rgba(0,20,20,0.9)] border border-[rgba(0,210,180,0.4)] border-l-0 overflow-hidden">
            {/* Corner brackets */}
            <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-[#00d4b8] shadow-[0_0_8px_#00d4b8]" />
            <span className="absolute bottom-0 right-4 w-2.5 h-2.5 border-b-2 border-r-2 border-[#00d4b8] shadow-[0_0_8px_#00d4b8]" />

            <span className="font-orbitron text-[11px] font-bold tracking-[0.18em] uppercase whitespace-nowrap bg-transparent border-none px-6 py-3 text-[#e8fffe] transition-colors duration-200 hover:text-[#00d4b8] hover:[text-shadow:0_0_12px_rgba(0,212,184,0.6)]">
              thai bao
            </span>

            {/* Wallet icon */}
            <div className="wallet-wrap flex items-center justify-center px-3 py-2.5 border-l border-[rgba(0,210,180,0.3)]">
              <div className="flex flex-col gap-1">
                <div className="wallet-line-full  h-0.5 rounded-sm bg-[#00d4b8] shadow-[0_0_6px_#00d4b8,0_0_12px_rgba(0,212,184,0.4)]" />
                <div className="wallet-line-short h-0.5 rounded-sm bg-[#00d4b8] shadow-[0_0_6px_#00d4b8,0_0_12px_rgba(0,212,184,0.4)]" />
              </div>
            </div>
          </div>

          {/* ── Language selector ── */}
          <div
            onClick={() => setLang((l) => (l === "EN" ? "VI" : "EN"))}
            className="flex items-center gap-1.5 ml-5 cursor-pointer select-none font-rajdhani text-sm font-semibold tracking-[0.12em] text-[rgba(180,220,215,0.8)] transition-colors duration-200 hover:text-[#00d4b8]"
          >
            <span>{lang}</span>
            {/* caret */}
            <span className="w-0 h-0 border-x-4 border-x-transparent border-t-[5px] border-t-current opacity-70 mt-0.5" />
          </div>
        </div>

           {/* ── MOBILE TOP BAR ── */}
          <div className="flex sm:hidden w-full items-center justify-between">
            {/* Logo */}
            <span className="font-orbitron text-[13px] font-bold tracking-[0.18em] uppercase text-[#00d4b8] [text-shadow:0_0_12px_rgba(0,212,184,0.4)]">
              Thai Bao
            </span>
  
            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
              className="relative flex flex-col justify-center items-center gap-1.25 px-2 cursor-pointer bg-[rgba(0,20,20,0.9)] border border-[rgba(0,210,180,0.3)] rounded hover:border-[#00d4b8] hover:text-[#00d4b8] transition-all duration-200"
            >
              {/* <span className={`hbar ${mobileOpen ? "hbar-top-open" : ""}`} />
              <span className={`hbar ${mobileOpen ? "hbar-mid-open" : ""}`} />
              <span className={`hbar ${mobileOpen ? "hbar-bot-open" : ""}`} /> */}
              Menu
            </button>
          </div>
    
      </header>

          <MobileMenu
          items={NAV_ITEMS}
          lang={lang}
          mobileOpen={mobileOpen}
          setLang={setLang}
          setMobileOpen={setMobileOpen}
        />
    </>
  );
}