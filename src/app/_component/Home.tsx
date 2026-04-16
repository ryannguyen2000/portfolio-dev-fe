import { experiences, projects, skills } from "@/const/home";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nguyen Thai Bao — Full-stack Developer",
  description:
    "Portfolio of Nguyen Thai Bao, Full-stack Developer specializing in React, NextJS, NestJS and TypeScript.",
};

/* ─────────────────────────────────────────
   COMPONENTS
───────────────────────────────────────── */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#00d4b8]">
        {children}
      </span>
      <div className="flex-1 h-px bg-linear-to-r from-[rgba(0,212,184,0.4)] to-transparent" />
    </div>
  );
}

function SkillPill({
  label,
  accent = false,
}: {
  label: string;
  accent?: boolean;
}) {
  return (
    <span
      className={`font-mono text-[11px] px-2.5 py-1 rounded border transition-colors duration-200 ${
        accent
          ? "border-[rgba(0,212,184,0.5)] text-[#00d4b8] bg-[rgba(0,212,184,0.08)]"
          : "border-[rgba(255,255,255,0.1)] text-[rgba(255,255,255,0.6)] bg-[rgba(255,255,255,0.03)]"
      }`}
    >
      {label}
    </span>
  );
}

/* ─────────────────────────────────────────
   PAGE
───────────────────────────────────────── */
export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#080c0c] text-white selection:bg-[rgba(0,212,184,0.3)]">
      {/* Subtle grid bg */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,212,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,184,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6 pt-32 pb-24">

        {/* ── HERO ── */}
        <section className="mb-28" id="overview">
          <p className="font-mono text-[11px] tracking-[0.2em] text-[#00d4b8] uppercase mb-6">
            Full-stack Developer · Can Tho City, VN
          </p>

          <h1 className="font-syne text-[clamp(48px,8vw,96px)] font-extrabold leading-none tracking-tight mb-6">
            Nguyen
            <br />
            <span className="text-[rgba(255,255,255,0.25)]">Thai Bao</span>
          </h1>

          <p className="font-mono text-sm text-[rgba(255,255,255,0.45)] max-w-xl leading-relaxed mb-10">
            4 năm kinh nghiệm xây dựng ứng dụng high-performance với React, NextJS và
            TypeScript. Đam mê kiến trúc Full-stack tools và CMS — biến logic phức tạp
            thành sản phẩm số trực quan, có thể mở rộng.
          </p>

          {/* Contact row */}
          <div className="flex flex-wrap gap-3">
            {[
              { label: "+84 906 174 076", href: "tel:+84906174076" },
              { label: "nguyenthaibao.haugiang@gmail.com", href: "mailto:nguyenthaibao.haugiang@gmail.com" },
              { label: "LinkedIn", href: "https://linkedin.com/in/nguyen-thai-bao-0801112a9" },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[11px] px-4 py-2 rounded-full border border-[rgba(0,212,184,0.25)] text-[rgba(255,255,255,0.55)] hover:border-[#00d4b8] hover:text-[#00d4b8] transition-all duration-200"
              >
                {c.label}
              </a>
            ))}
          </div>

          {/* Achievements strip */}
          <div className="mt-12 flex flex-wrap gap-4">
            {[
              "🏆 Employee of the Month/Year",
              "🚀 Promoted after 3-month internship",
              "👥 Led 3-member team",
            ].map((a) => (
              <div
                key={a}
                className="text-[12px] text-[rgba(255,255,255,0.5)] bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.07)] px-4 py-2 rounded"
              >
                {a}
              </div>
            ))}
          </div>
        </section>

        {/* ── SKILLS ── */}
        <section className="mb-24" id="skills">
          <SectionLabel>Skills</SectionLabel>
          <div className="flex flex-col gap-5">
            {skills.map((group) => (
              <div key={group.label} className="flex gap-6 items-start">
                <span className="font-mono text-[10px] tracking-widest uppercase text-[rgba(255,255,255,0.3)] pt-1 w-28 shrink-0">
                  {group.label}
                </span>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <SkillPill key={item} label={item} accent={group.highlight} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── EXPERIENCE ── */}
        <section className="mb-24" id="experience">
          <SectionLabel>Experience</SectionLabel>
          <div className="flex flex-col gap-12">
            {experiences.map((exp, i) => (
              <div key={i} className="grid grid-cols-[140px_1fr] gap-8">
                {/* Meta */}
                <div className="pt-1">
                  <p className="font-mono text-[10px] text-[rgba(255,255,255,0.3)] leading-relaxed">
                    {exp.period}
                  </p>
                  <p className="font-mono text-[11px] text-[#00d4b8] mt-1">{exp.company}</p>
                </div>

                {/* Content */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00d4b8] shrink-0" />
                    <h3 className="font-syne text-lg font-bold">{exp.role}</h3>
                  </div>
                  <ul className="flex flex-col gap-2.5 pl-5">
                    {exp.points.map((p, j) => (
                      <li
                        key={j}
                        className="text-[13px] text-[rgba(255,255,255,0.5)] leading-relaxed list-disc marker:text-[rgba(0,212,184,0.4)]"
                      >
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── PROJECTS ── */}
        <section className="mb-24" id="projects">
          <SectionLabel>Projects</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((proj) => (
              <div
                key={proj.name}
                className="group relative p-6 rounded-lg border border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.02)] hover:border-[rgba(0,212,184,0.35)] hover:bg-[rgba(0,212,184,0.03)] transition-all duration-300"
              >
                {/* Top-left corner accent */}
                <span className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#00d4b8] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-tl-lg" />

                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-syne text-base font-bold">{proj.name}</h3>
                  <span className="font-mono text-[10px] text-[rgba(255,255,255,0.3)] border border-[rgba(255,255,255,0.1)] px-2 py-0.5 rounded shrink-0 ml-3">
                    {proj.team} devs
                  </span>
                </div>

                <p className="font-mono text-[10px] text-[rgba(0,212,184,0.7)] uppercase tracking-wider mb-3">
                  {proj.role}
                </p>

                <p className="text-[13px] text-[rgba(255,255,255,0.45)] leading-relaxed mb-4">
                  {proj.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {proj.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] px-2 py-0.5 rounded border border-[rgba(255,255,255,0.08)] text-[rgba(255,255,255,0.35)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── FOOTER CTA ── */}
        <section id="contract">
          <div className="border border-[rgba(0,212,184,0.2)] rounded-lg p-10 bg-[rgba(0,212,184,0.03)] text-center">
            <p className="font-mono text-[11px] tracking-[0.2em] text-[#00d4b8] uppercase mb-3">
              Open to opportunities
            </p>
            <h2 className="font-syne text-3xl font-extrabold mb-4">
              Let&apos;s build something great
            </h2>
            <p className="text-[rgba(255,255,255,0.4)] text-sm mb-8 max-w-md mx-auto">
              Đang tìm kiếm vị trí Full-stack Developer thú vị. Hãy liên hệ nếu bạn có dự án phù hợp!
            </p>
            <a
              href="mailto:nguyenthaibao.haugiang@gmail.com"
              className="inline-block font-mono text-sm px-8 py-3 border border-[#00d4b8] text-[#00d4b8] rounded hover:bg-[#00d4b8] hover:text-black transition-all duration-200"
            >
              Get in touch →
            </a>
          </div>
        </section>

      </div>
    </main>
  );
}