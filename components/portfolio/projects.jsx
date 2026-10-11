"use client"

import { ArrowUpRight } from "lucide-react"
import { UIUX_PROJECTS, FRONTEND_PROJECTS } from "@/lib/portfolio-data"
import { Container, SectionKicker, SectionTitle } from "./primitives"
import { FadeUp } from "./animations"

function ProjectCard({
  title,
  subtitle,
  image,
  href,
  cta,
  backTitle,
  backSkills,
  details = [],
  tools = []
}) {
  return (
    <div className="project-card-shell flex w-full flex-col">
      <div className="project-card-surface">
        <div className="project-card-media">
          <img
            src={image || ''}
            alt={`${title} — ${subtitle}`}
            className="project-card-image"
          />
        </div>

        <div className="project-card-title rounded-lg bg-black/50 px-3 py-2 backdrop-blur-sm">
          <p className="font-heading text-sm font-bold uppercase tracking-wide text-white">{title}</p>
          <p className="text-xs text-slate-200">{subtitle}</p>
        </div>

        <div className="project-card-details text-white">
          <h3 className="text-base font-extrabold leading-tight text-yellow-300">{backTitle}</h3>
          {/* {backSkills ? <p className="mt-1 text-xs leading-tight text-slate-200">{backSkills}</p> : null} */}

          {details.length > 0 ? (
            <ul className="mt-2 space-y-1">
              {details.map((item) => (
                <li key={`${title}-${item}`} className="flex items-start gap-2 text-xs leading-tight text-slate-200">
                  <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-yellow-300" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : null}

          <div className="mt-2 flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-semibold text-yellow-300">Tools:</span>
            {tools.map((tool) => (
              tool.startsWith("img:") ? (
                <img
                  key={`${title}-${tool}`}
                  src={tool.replace("img:", "")}
                  alt="Tool"
                  className="h-full w-full max-h-4 max-w-4 object-contain"
                />
              ) : (
                <span
                  key={`${title}-${tool}`}
                  className="rounded-full border border-white/10 bg-white/10 px-2.5 py-1 text-xs text-slate-100"
                >
                  {tool}
                </span>
              )
            ))}
          </div>
        </div>
      </div>

      <a
        href={href}
        className="mt-3 inline-flex items-center gap-1 self-end text-xs font-semibold text-primary underline-offset-4 hover:underline focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
      >
        {cta}
        <ArrowUpRight className="h-3.5 w-3.5" />
      </a>
    </div>
  )
}

export function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24">
      <Container>
        <FadeUp as="div" delay={0.05}>
          <SectionTitle>Featured Projects</SectionTitle>
        </FadeUp>

        {/* UI/UX Projects */}
        <div className="mt-12">
          <FadeUp as="div" delay={0.08}>
            <SectionKicker>UI/UX Projects</SectionKicker>
          </FadeUp>
          <div className="mt-6 flex flex-wrap justify-center gap-6">
            {UIUX_PROJECTS.map((project, index) => (
              <FadeUp key={project.title + project.subtitle} as="div" className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]" delay={0.12 + index * 0.04} y={120}>
                <ProjectCard {...project} cta="Open Project" />
              </FadeUp>
            ))}
          </div>
        </div>

        {/* Frontend Projects */}
        <div className="mt-32">
          <FadeUp as="div" delay={0.1}>
            <SectionKicker>Frontend Projects</SectionKicker>
          </FadeUp>
          <div className="mt-6 flex flex-wrap justify-center gap-6">
            {FRONTEND_PROJECTS.map((project, index) => (
              <FadeUp key={project.title} as="div" className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]" delay={0.12 + index * 0.04} y={120}>
                <ProjectCard {...project} cta="Open Website" />
              </FadeUp>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
