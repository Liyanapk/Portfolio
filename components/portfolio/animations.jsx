"use client"

import { motion } from "framer-motion"

const revealTransition = {
  duration: 1.2,
  ease: [0.16, 1, 0.3, 1],
}

export function RevealOnView({
  children,
  className,
  delay = 0,
  x = 0,
  y = 0,
  scale = 1,
  as = "div",
  ...props
}) {
  const MotionElement = motion[as] || motion.div

  return (
    <MotionElement
      initial={{ opacity: 0, x, y, scale, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ ...revealTransition, delay }}
      className={className}
      style={{ willChange: "transform, opacity, filter" }}
      {...props}
    >
      {children}
    </MotionElement>
  )
}

export function FadeUp({ children, className, delay = 0, y = 120, as = "div", ...props }) {
  return (
    <RevealOnView as={as} className={className} delay={delay} y={y} {...props}>
      {children}
    </RevealOnView>
  )
}

export function ImageReveal({ children, className, delay = 0, as = "div", ...props }) {
  return (
    <RevealOnView as={as} className={className} delay={delay} y={100} scale={0.94} {...props}>
      {children}
    </RevealOnView>
  )
}
