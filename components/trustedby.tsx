"use client"

import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"
import { cn } from "@/lib/utils"
import { geist } from "@/lib/fonts"

const categories = [
  {
    title: "Startups",
    logos: [
      { src: "/logos/startup-1.png", alt: "Startup 1" },
      { src: "/logos/startup-2.png", alt: "Startup 2" },
      { src: "/logos/startup-3.png", alt: "Startup 3" },
      { src: "/logos/startup-4.png", alt: "Startup 4" },
    ],
  },
  {
    title: "Enterprises",
    logos: [
      { src: "/logos/enterprise-1.png", alt: "Enterprise 1" },
      { src: "/logos/enterprise-2.png", alt: "Enterprise 2" },
      { src: "/logos/enterprise-3.png", alt: "Enterprise 3" },
      { src: "/logos/enterprise-4.png", alt: "Enterprise 4" },
    ],
  },
  {
    title: "NGOs",
    logos: [
      { src: "/logos/ngo-1.png", alt: "NGO 1" },
      { src: "/logos/ngo-2.png", alt: "NGO 2" },
      { src: "/logos/ngo-3.png", alt: "NGO 3" },
      { src: "/logos/ngo-4.png", alt: "NGO 4" },
    ],
  },
  {
    title: "FinTech",
    logos: [
      { src: "/logos/fintech-1.png", alt: "FinTech 1" },
      { src: "/logos/fintech-2.png", alt: "FinTech 2" },
      { src: "/logos/fintech-3.png", alt: "FinTech 3" },
      { src: "/logos/fintech-4.png", alt: "FinTech 4" },
    ],
  },
  {
    title: "EdTech",
    logos: [
      { src: "/logos/edtech-1.png", alt: "EdTech 1" },
      { src: "/logos/edtech-2.png", alt: "EdTech 2" },
      { src: "/logos/edtech-3.png", alt: "EdTech 3" },
      { src: "/logos/edtech-4.png", alt: "EdTech 4" },
    ],
  },
  {
    title: "Healthcare",
    logos: [
      { src: "/logos/health-1.png", alt: "Healthcare 1" },
      { src: "/logos/health-2.png", alt: "Healthcare 2" },
      { src: "/logos/health-3.png", alt: "Healthcare 3" },
      { src: "/logos/health-4.png", alt: "Healthcare 4" },
    ],
  },
]

export function TrustedBy() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const container = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.06 },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
  }

  return (
    <section id="trusted-by" className="text-foreground relative overflow-hidden py-12 sm:py-24 md:py-28">
      <div className="bg-primary absolute -top-10 left-1/2 h-16 w-44 -translate-x-1/2 rounded-full opacity-40 blur-3xl select-none" />
      <div className="via-primary/50 absolute top-0 left-1/2 h-px w-3/5 -translate-x-1/2 bg-gradient-to-r from-transparent to-transparent transition-all ease-in-out" />

      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        variants={container}
        className="container mx-auto flex flex-col items-center gap-4 sm:gap-6"
      >
        <h2
          className={cn(
            "via-foreground bg-gradient-to-b from-zinc-800 to-zinc-700 bg-clip-text text-center text-4xl font-semibold tracking-tighter text-transparent md:text-[54px] md:leading-[60px]",
            geist.className
          )}
        >
          Trusted By
        </h2>

        <p className="text-center text-muted-foreground max-w-2xl">
          Showcasing collaborations across Startups, Enterprises, NGOs, FinTech, EdTech, and Healthcare. [11][8]
        </p>

        {/* Category groups */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              variants={item}
              className="rounded-xl border border-secondary/40 bg-card/40 backdrop-blur-sm p-5"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold tracking-tight">{cat.title}</h3>
                <span className="text-xs text-muted-foreground">Partners</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 items-center">
                {cat.logos.map((logo) => (
                  <div
                    key={logo.alt}
                    className="group flex items-center justify-center rounded-md border border-border/50 bg-background/40 p-3 transition-colors"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={140}
                      height={56}
                      className="h-10 w-auto object-contain opacity-90 grayscale hover:grayscale-0 transition-all duration-300 ease-out"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        
         <div className="relative mt-10 w-full overflow-hidden">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 24, ease: "linear", repeat: Infinity }}
            className="flex gap-10 pr-10"
          >
            {[...categories.flatMap(c => c.logos), ...categories.flatMap(c => c.logos)].map((l, i) => (
              <div key={i} className="flex items-center justify-center min-w-36">
                <Image src={l.src} alt={l.alt} width={120} height={48} className="h-8 w-auto object-contain grayscale hover:grayscale-0 transition" />
              </div>
            ))}
          </motion.div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
        </div>
      </motion.div>
    </section>
  )
}
