"use client"

import { ABOUT_BADGES } from "@/lib/portfolio-data"
import { Container, SectionKicker } from "./primitives"

// Reusable outlined pill badge.
function Badge({ children, index }) {
  return (
    <span
      className="badge relative flex min-h-14 items-center justify-center overflow-hidden rounded-lg border border-primary/50 bg-black px-4 text-center text-xs font-medium uppercase tracking-wide text-foreground"
      style={{ animationDelay: `${index * 0.5}s` }}
    >
      <span className="star left-3 top-2" />
      <span className="star small left-8 bottom-3 delay-1" />
      <span className="star right-4 top-3 delay-2" />
      <span className="star small right-9 bottom-2 delay-3" />
      <span className="star left-1/2 top-2 delay-4" />
      <span className="star small left-[70%] bottom-3 delay-5" />
      <span className="star right-[30%] top-5 delay-6" />

      <span className="relative z-10">{children}</span>
    </span>
  )
}

export function About() {
  return (
    <section id="about" className="py-16 md:py-20">
      <Container className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
        <div>
          <SectionKicker>About Me</SectionKicker>
          <h2 className="mt-4 font-heading text-2xl font-bold leading-tight text-foreground sm:text-3xl text-balance">
            Designing experiences that people enjoy using.
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground text-pretty">
            I&apos;m a UI/UX Designer with a background in Front-End Development. I enjoy transforming ideas into clean,
            accessible, and user-friendly interfaces. My understanding of both design and development helps me create
            solutions that are practical, responsive, and developer-friendly.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {ABOUT_BADGES.map((badge) => (
            <Badge key={badge}>{badge}</Badge>
          ))}
        </div>
      </Container>
    </section>
  )
}
