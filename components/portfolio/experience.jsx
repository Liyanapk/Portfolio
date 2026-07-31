import { EXPERIENCE } from "@/lib/portfolio-data"
import { Container, SectionTitle } from "./primitives"

// Reusable timeline item.
function ExperienceItem({ company, role, period, points }) {
  return (
    <li className="relative pl-8">
      {/* dot */}
      <span className="absolute left-0 top-1.5 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-primary bg-background" />
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <h3 className="font-heading text-base font-bold uppercase tracking-wide text-foreground">{company}</h3>
        <span className="text-xs text-muted-foreground">{period}</span>
      </div>
      <p className="mt-1 text-sm text-foreground">{role}</p>
      <ul className="mt-3 space-y-1.5">
        {points.map((point) => (
          <li key={point} className="text-sm text-muted-foreground">
            <span className="mr-2 text-primary">•</span>
            {point}
          </li>
        ))}
      </ul>
    </li>
  )
}

export function Experience() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionTitle>Experience</SectionTitle>
        <ol className="relative mt-12 space-y-12 border-l border-border pl-4">
          {EXPERIENCE.map((item) => (
            <ExperienceItem key={item.company} {...item} />
          ))}
        </ol>
      </Container>
    </section>
  )
}
