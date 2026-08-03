"use client"

import { useEffect, useState } from "react"
import { SKILLS } from "@/lib/portfolio-data"
import { Container, SectionKicker } from "./primitives"
import { FadeUp } from "./animations"

// Reusable skill card.
function SkillCard({ title, items, isActive }) {
  return (
    <FadeUp as="div" className={`skill-card rounded-xl border border-primary/50 bg-black p-6 ${
      isActive ? "is-active" : ""
    }`} y={120} delay={0.08}>
      <h3 className="font-heading text-base font-semibold text-primary">{title}</h3>
      <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
        {items.map((item) => (
          <li key={item} className="text-xs uppercase tracking-wide text-muted-foreground">
            {item}
          </li>
        ))}
      </ul>
    </FadeUp>
  )
}

export function Skills() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SKILLS.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="skills" className="py-16 md:py-20">
      <Container>
        <FadeUp as="div" delay={0.08}>
          <SectionKicker>Skills</SectionKicker>
        </FadeUp>
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SKILLS.map((skill, index) => (
            <SkillCard
              key={skill.title}
              {...skill}
              isActive={index === activeIndex}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}