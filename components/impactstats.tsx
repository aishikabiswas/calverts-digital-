"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { cn } from "@/lib/utils"
import { geist } from "@/lib/fonts"

export function ImpactStats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.15 })

  const container = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.05 } },
  }

  const item = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
  }

  const stats = [
    { value: "5+", label: "years in digital transformation" },
    { value: "120+", label: "successful projects" },
    { value: "5+", label: "countries with clients" },
  ]

  return (
    <section id="impact-stats" className="relative py-10 sm:py-16">
      <div className="bg-primary absolute -top-8 left-1/2 h-14 w-40 -translate-x-1/2 rounded-full opacity-40 blur-3xl select-none" />
      <div className="via-primary/50 absolute top-0 left-1/2 h-px w-3/5 -translate-x-1/2 bg-gradient-to-r from-transparent to-transparent" />

      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        variants={container}
        className="container mx-auto"
      >
        <div className="relative overflow-hidden rounded-2xl border border-secondary/40 bg-card/40 backdrop-blur-sm">
          {/* sheen */}
          <div className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(90deg,transparent,black,transparent)]">
            <motion.div
              initial={{ x: "-30%" }}
              animate={isInView ? { x: ["-30%", "130%"] } : { x: "-30%" }}
              transition={{ duration: 3.2, ease: "easeInOut" }}
              className="absolute top-0 h-full w-1/3 bg-gradient-to-r from-transparent via-white/5 to-transparent"
            />
          </div>

          <div className="grid grid-cols-1 divide-y divide-border/60 md:grid-cols-3 md:divide-y-0 md:divide-x">
            {stats.map((s) => (
              <motion.div
                key={s.label}
                variants={item}
                className="flex items-center justify-center p-8 text-center"
              >
                <div className="flex flex-col items-center gap-1">
                  <div className={cn("text-5xl font-semibold tracking-tight", geist.className)}>
                    <span className="bg-gradient-to-t from-[#e78a53] to-[#e78a53] bg-clip-text text-transparent">
                      {s.value}
                    </span>
                  </div>
                  <div className="text-sm text-muted-foreground">{s.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
