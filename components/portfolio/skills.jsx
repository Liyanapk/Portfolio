"use client"

import { useEffect, useState } from "react"
import { SKILLS } from "@/lib/portfolio-data"
import { Container, SectionKicker } from "./primitives"

// Reusable skill card.
function SkillCard({ title, items, isActive }) {
  return (
    <div
      className={`skill-card rounded-xl border border-primary/50 bg-black p-6 ${
        isActive ? "is-active" : ""
      }`}
    >
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
        <SectionKicker>Skills</SectionKicker>
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