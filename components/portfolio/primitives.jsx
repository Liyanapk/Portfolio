import { cn } from "@/lib/utils"

// Constrains content width & adds responsive horizontal padding.
export function Container({ className, children }) {
  return <div className={cn("mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8", className)}>{children}</div>
}

// Small kicker label rendered in the accent color above section titles.
export function SectionKicker({ children, className }) {
  return (
    <span className={cn("text-sm font-semibold uppercase tracking-[0.2em] text-primary", className)}>{children}</span>
  )
}

// Centered heading used for the big "Featured Projects" / "Experience" titles.
export function SectionTitle({ children, className }) {
  return (
    <h2 className={cn("text-center font-heading text-2xl font-bold tracking-wide text-primary sm:text-3xl", className)}>
      {children}
    </h2>
  )
}
