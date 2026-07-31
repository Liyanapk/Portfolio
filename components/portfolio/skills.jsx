import { SKILLS } from "@/lib/portfolio-data"
import { Container, SectionKicker } from "./primitives"

// Reusable skill card.
function SkillCard({ title, items }) {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <h3 className="font-heading text-base font-semibold text-primary">{title}</h3>
      <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
        {items.map((item) => (
          <li key={item} className="text-xs uppercase tracking-wide text-muted-foreground">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Skills() {
  return (
    <section id="skills" className="py-16 md:py-20">
      <Container>
        <SectionKicker>Skills</SectionKicker>
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SKILLS.map((skill) => (
            <SkillCard key={skill.title} {...skill} />
          ))}
        </div>
      </Container>
    </section>
  )
}
