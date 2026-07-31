import { Search, Target, LayoutGrid, Palette, MousePointerClick, RefreshCw } from "lucide-react"
import { EDUCATION, TOOLS, PROCESS } from "@/lib/portfolio-data"
import { Container } from "./primitives"

const PROCESS_ICONS = [Search, Target, LayoutGrid, Palette, MousePointerClick, RefreshCw]

// Reusable numbered process step.
function ProcessStep({ index, icon: Icon, title, desc }) {
  return (
    <li className="flex gap-4 border-t border-border py-5">
      <span className="font-heading text-lg font-bold text-primary">{String(index + 1).padStart(2, "0")}</span>
      <Icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
      <div>
        <h4 className="font-heading text-sm font-semibold text-foreground">{title}</h4>
        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{desc}</p>
      </div>
    </li>
  )
}

export function EducationProcess() {
  return (
    <section className="py-16 md:py-20">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Education + Tools */}
        <div>
          <h2 className="font-heading text-2xl font-bold uppercase tracking-wide text-primary">Education</h2>
          <div className="mt-6 rounded-xl border border-border bg-card p-6">
            <h3 className="font-heading text-base font-bold uppercase text-foreground text-balance">
              {EDUCATION.degree}
            </h3>
            <p className="text-sm uppercase text-foreground">{EDUCATION.field}</p>
            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <span>{EDUCATION.college}</span>
              <span>{EDUCATION.period}</span>
              <span>CGPA {EDUCATION.cgpa}</span>
            </div>
          </div>

          <h2 className="mt-12 font-heading text-2xl font-bold uppercase tracking-wide text-primary">Tools I Use</h2>
          <div className="mt-6 flex flex-wrap gap-4">
            {TOOLS.map((tool) => (
              <div
                key={tool}
                className="flex min-w-20 flex-col items-center gap-2 rounded-lg border border-border bg-card px-4 py-3"
              >
                {/* Replace with tool logo image */}
                <img src="" alt={`${tool} logo`} className="h-6 w-6 object-contain" />
                <span className="text-[11px] text-muted-foreground">{tool}</span>
              </div>
            ))}
          </div>
        </div>

        {/* My Process */}
        <div>
          <h2 className="font-heading text-2xl font-bold uppercase tracking-wide text-primary">My Process</h2>
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
