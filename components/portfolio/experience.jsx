"use client"

import { EXPERIENCE } from "@/lib/portfolio-data"
import { Container, SectionTitle } from "./primitives"
import { FadeUp } from "./animations"

// Reusable timeline item.
function ExperienceItem({ company, role, period, points, index }) {
  return (
    <FadeUp as="li" className="relative pl-8" delay={0.12 + index * 0.04} y={120}>
      {/* dot */}
      <span className="absolute left-0 top-1.5 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-primary bg-background" />
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <h3 className="font-heading text-base font-bold uppercase tracking-wide text-foreground">{company}</h3>
        <span className="text-xs text-muted-foreground">{period}</span>
      </div>
      <p className="mt-1 text-sm text-foreground">{role}</p>
      <ul className="mt-2 ">
        {points.map((point) => (
          <li key={point} className="text-sm text-muted-foreground ">
            <span className=" text-primary"></span>
            {point}
          </li>
        ))}
      </ul>
    </FadeUp>
  )
}

export function Experience() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <FadeUp as="div" delay={0.05}>
          <SectionTitle>Experience</SectionTitle>
        </FadeUp>
        <ol className="relative mt-12 space-y-12 border-l border-border pl-4">
          {/* Golden light that travels down the timeline occasionally */}
          <span aria-hidden="true" className="timeline-light" />
          {EXPERIENCE.map((item, index) => (
            <ExperienceItem key={item.company} {...item} index={index} />
          ))}
        </ol>
      </Container>
    </section>
  )
}
