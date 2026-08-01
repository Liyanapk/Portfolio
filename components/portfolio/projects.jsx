"use client"

import { ArrowUpRight } from "lucide-react"
import { UIUX_PROJECTS, FRONTEND_PROJECTS } from "@/lib/portfolio-data"
import { Container, SectionKicker, SectionTitle } from "./primitives"
import { FlippingCard } from "@/components/ui/flipping-card"

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
  const frontContent = (
    <div className="flex h-full w-full flex-col">
      <img
        src={image || ''}
        alt={`${title} — ${subtitle}`}
        className="h-full w-full rounded-lg object-cover"
      />

      <div className="absolute left-4 top-4 rounded-lg bg-black/50 px-3 py-2 backdrop-blur-sm">
        <p className="font-heading text-sm font-bold uppercase tracking-wide text-white">{title}</p>
        <p className="text-xs text-slate-200">{subtitle}</p>
      </div>
    </div>
  )

  const backContent = (
    <div className="flex h-full w-full flex-col justify-between rounded-xl bg-black p-5 text-white">
      <div>
        {/* <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-yellow-400">Project details</p> */}
        <h3 className="mb-2 text-lg font-extrabold text-yellow-300">{backTitle}</h3>
        {/* <p className="text-sm leading-relaxed text-slate-300">{backSkills}</p> */}

        {details.length > 0 ? (
          <ul className="mt-4 space-y-2">
            {details.map((item) => (
              <li key={`${title}-${item}`} className="flex items-start gap-2 text-sm text-slate-200">
                <span className=" rounded-full bg-yellow-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span className="text-sm font-semibold text-yellow-300">Tools:</span>
        {tools.map((tool) => (
          <span key={`${title}-${tool}`} className="rounded-full border border-white/10 bg-white/10 px-2.5 py-1 text-xs text-slate-100">
            {tool}
          </span>
        ))}
      </div>
    </div>
  )

  return (
    <div className="flex w-full flex-col">
      <FlippingCard
        width={320}
        height={260}
        frontContent={frontContent}
        backContent={backContent}
      />

      <a
        href={href}
        className="mt-3 inline-flex items-center gap-1 self-end text-xs font-semibold text-primary underline-offset-4 hover:underline"
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
        <SectionTitle>Featured Projects</SectionTitle>

        {/* UI/UX Projects */}
        <div className="mt-12">
          <SectionKicker>UI/UX Projects</SectionKicker>
          <div className="mt-6 flex flex-wrap justify-center gap-6">
            {UIUX_PROJECTS.map((project) => (
              <div key={project.title + project.subtitle} className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]">
                <ProjectCard {...project} cta="Open Project" />
              </div>
            ))}
          </div>
        </div>

        {/* Frontend Projects */}
        <div className="mt-16">
          <SectionKicker>Frontend Projects</SectionKicker>
          <div className="mt-6 flex flex-wrap justify-center gap-6">
            {FRONTEND_PROJECTS.map((project) => (
              <div key={project.title} className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]">
                <ProjectCard {...project} cta="Open Website" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
