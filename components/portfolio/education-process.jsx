import { Search, Target, LayoutGrid, Palette, MousePointerClick, RefreshCw } from "lucide-react"
import { EDUCATION, TOOLS, PROCESS } from "@/lib/portfolio-data"
import { Container } from "./primitives"
import { FadeUp } from "./animations"

const PROCESS_ICONS = [Search, Target, LayoutGrid, Palette, MousePointerClick, RefreshCw]

// Reusable numbered process step.
function ProcessStep({ index, icon: Icon, title, desc }) {
  return (
    <FadeUp
      as="li"
      className="group flex gap-4 border-t border-border py-5 px-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/40 hover:bg-white/5"
      y={100}
      delay={0.08 + index * 0.04}
    >
      <span className="font-heading text-lg font-bold text-primary transition-colors duration-300 group-hover:text-[#F7F2B0]">
        {String(index + 1).padStart(2, "0")}
      </span>
      <Icon className="mt-0.5 h-5 w-5 shrink-0 text-primary transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-0.5" aria-hidden="true" />
      <div className="transition-transform duration-300 group-hover:translate-x-0.5">
        <h4 className="font-heading text-sm font-semibold text-foreground">{title}</h4>
        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{desc}</p>
      </div>
    </FadeUp>
  )
}

export function EducationProcess() {
  return (
    <section className="py-16 md:py-20">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Education + Tools */}
        <div>
          <FadeUp as="h2" className="font-heading text-2xl font-bold uppercase tracking-wide text-primary" delay={0.08}>
            Education
          </FadeUp>
          <FadeUp as="div" className="mt-6 rounded-xl border border-border bg-card p-6" delay={0.14}>
            <h3 className="font-heading text-base font-bold uppercase text-foreground text-balance">
              {EDUCATION.degree}
            </h3>
            <p className="text-sm uppercase text-foreground">{EDUCATION.field}</p>
            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <span>{EDUCATION.college}</span>
              <span>{EDUCATION.period}</span>
              <span>CGPA {EDUCATION.cgpa}</span>
            </div>
          </FadeUp>

          <FadeUp as="h2" className="mt-12 font-heading text-2xl font-bold uppercase tracking-wide text-primary" delay={0.18}>
            Tools I Use
          </FadeUp>
          <div className="mt-6 flex flex-wrap gap-4">
            {TOOLS.map((tool, index) => (
              <FadeUp key={tool.name} as="div" className="group flex min-w-20 flex-col items-center gap-2 rounded-lg border border-[#D5CA39] bg-[#232317] px-4 py-3" delay={0.2 + index * 0.04} y={100}>
                <img
                  src={tool.image}
                  alt={`${tool.name} logo`}
                  className="h-6 w-6 object-contain transition-all duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-0.5"
                />
                <span className="text-[11px] text-muted-foreground">
                  {tool.name}
                </span>
              </FadeUp>
            ))}
          </div>
        </div>

        {/* My Process */}
        <div>
          <FadeUp as="h2" className="font-heading text-2xl font-bold uppercase tracking-wide text-primary" delay={0.12}>
            My Process
          </FadeUp>
          <ol className="mt-6">
            {PROCESS.map((step, i) => (
              <ProcessStep key={step.title} index={i} icon={PROCESS_ICONS[i]} title={step.title} desc={step.desc} />
            ))}
          </ol>
        </div>
      </Container>
    </section>
  )
}
