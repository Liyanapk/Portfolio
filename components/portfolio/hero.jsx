"use client"

import { Container } from "./primitives"
import { ResumeDownloadButton } from "./resume-download-button"
import { FadeUp, ImageReveal, RevealOnView } from "./animations"

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-background">
      {/* soft accent glow behind the portrait */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[450px] -translate-x-[56%] -translate-y-1/2 rounded-full bg-primary/30 blur-[140px]"
      />
      <Container className="relative grid grid-cols-1 items-center gap-6 pb-8 pt-4 md:grid-cols-[1fr_1.2fr_1fr] md:gap-2 md:pb-6 md:pt-5 lg:pb-4 lg:pt-10">
        {/* Left intro */}
        <RevealOnView as="div" className="order-2 text-center md:order-1 md:text-left" x={-140} y={0} delay={0.12}>
          <FadeUp as="p" className="text-lg text-muted-foreground" delay={0.16}>
            Hello, I&apos;m
          </FadeUp>
          <FadeUp as="h1" className="mt-2 bg-gradient-to-b from-[#FFFFFF] via-[#F7F2B0] to-[#D5CA39] bg-clip-text font-heading text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl" delay={0.24}>
            LIYANA KP
          </FadeUp>
        </RevealOnView>

        {/* Portrait */}
        <ImageReveal as="div" className="order-1 mx-auto flex items-end justify-center md:order-2 md:self-end" delay={0.16}>
          <div className="relative w-full max-w-[400px] md:w-[350px] lg:w-[350px] xl:w-[400px] md:-translate-x-4 md:translate-y-8 lg:-translate-x-12 lg:translate-y-10">
            <img
              src="/heroimage/liyaa.png"
              alt="Portrait of Liyana KP"
              className="h-auto w-full object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
            />
            <div className="pointer-events-none absolute bottom-0 h-24 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/70 to-transparent" />
          </div>
        </ImageReveal>

        {/* Right title + CTA */}
        <RevealOnView as="div" className="order-3 text-center md:text-left" x={140} y={0} delay={0.18}>
          <FadeUp as="h2" className="bg-gradient-to-b from-[#FFFFFF] via-[#F7F2B0] to-[#D5CA39] bg-clip-text font-heading text-[31.96px] font-semibold leading-snug text-transparent sm:text-3xl" delay={0.2}>
            <span className="bg-gradient-to-b from-[#FFFFFF] via-[#F7F2B0] to-[#D5CA39] bg-clip-text text-transparent">
              UI/UX Designer
            </span>{" "}
            <span className="bg-gradient-to-b from-[#FFFFFF] via-[#F7F2B0] to-[#D5CA39] bg-clip-text text-transparent">
              &amp;
            </span>
            <br />
            <span className="bg-gradient-to-b from-[#FFFFFF] via-[#F7F2B0] to-[#D5CA39] bg-clip-text text-transparent">
              Front-End Developer
            </span>
          </FadeUp>
          <FadeUp as="p" className="mt-4 text-sm leading-relaxed text-muted-foreground" delay={0.28}>
            I create intuitive digital experiences and build responsive web applications with modern technologies.
          </FadeUp>
          <FadeUp as="div" className="mt-6" delay={0.34}>
            <ResumeDownloadButton />
          </FadeUp>
        </RevealOnView>
      </Container>
    </section>
  )
}
