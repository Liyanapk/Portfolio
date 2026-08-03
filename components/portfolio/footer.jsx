import { Linkedin, Github, Dribbble } from "lucide-react"
import { Container } from "./primitives"
import Image from "next/image"
import { FadeUp } from "./animations"

const SOCIALS = [
  { label: "Behance", href: "https://www.behance.net/liyanakp1", image: "/footer/behance.png" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/liyana-k-p-/", image: "/footer/linkedin.png" },
  { label: "GitHub", href: "https://github.com/Liyanapk", image: "/footer/github.png" },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-[600px] -translate-x-1/2 translate-y-1/2 rounded-full bg-primary/15 blur-[120px]"
      />
      <Container className="relative py-16 text-center">
        <FadeUp as="h2" className="font-heading text-2xl font-bold text-foreground sm:text-3xl" delay={0.08}>
          Let&apos;s Build Something Amazing
        </FadeUp>
        <FadeUp as="p" className="mt-3 text-sm text-primary" delay={0.14}>
          I&apos;m currently open to UI/UX Designer opportunities and freelance collaborations.
        </FadeUp>

        <div className="mt-8 flex items-center justify-center gap-4">
          {SOCIALS.map(({ label, href, image }, index) => (
            <FadeUp key={label} as="a" href={href} aria-label={label} className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-primary hover:text-primary" delay={0.18 + index * 0.05} y={80}>
              <Image src={image} alt={label} width={24} height={24} />
            </FadeUp>
          ))}
        </div>

        <FadeUp as="p" className="mt-12 text-xs text-muted-foreground" delay={0.24}>
          © 2026 Liyana KP. All Rights Reserved. Designed &amp; Developed by Liyana KP
        </FadeUp>
      </Container>
    </footer>
  )
}
