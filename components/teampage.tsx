"use client"

import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"
import { cn } from "@/lib/utils"
import { geist } from "@/lib/fonts"

type Member = {
  name: string
  role: string
  photo: string
}

const team: Member[] = [
  { name: "Lester Andrew Calvert", role: "Founder & Chief AI Visionary", photo: "/team/lester.jpg" },
  { name: "Supratim Dhar", role: "Chief Technology & Data Officer", photo: "/team/supratim.jpg" },
  { name: "Sandip Sharma", role: "AI-Powered Marketing Strategist", photo: "/team/sandip.jpg" },
  { name: "Aishi", role: "Human-Centered Design & AI Experience Lead", photo: "/team/aishi.jpg" },
  { name: "Souradip", role: "Lead Machine Learning Engineer", photo: "/team/souradip.jpg" },
  { name: "Bhaibhav", role: "Full-Stack Developer & Data Engineer", photo: "/team/bhaibhav.jpg" },
  { name: "Suddhajit", role: "AI-Driven Designer & Developer", photo: "/team/suddhajit.jpg" },
  { name: "Harleen Kaur", role: "Innovation Delivery Manager – AI Solutions", photo: "/team/harleen.jpg" },
]

export default function TeamPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const container = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.06 } },
  }

  const item = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
  }

  return (
    <section id="team" className="text-foreground relative overflow-hidden py-12 sm:py-24 md:py-32">
      {/* Subtle pattern background (dots with radial mask) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10
                   bg-[radial-gradient(circle,rgba(148,163,184,0.25)_1px,transparent_1px)]
                   bg-[size:12px_12px]
                   [mask-image:radial-gradient(ellipse_65%_60%_at_50%_40%,#000_80%,transparent_100%)]"
      />
      <div className="via-primary/50 absolute top-0 left-1/2 h-px w-3/5 -translate-x-1/2 bg-gradient-to-r from-transparent to-transparent" />

      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        variants={container}
        className="container mx-auto flex max-w-6xl flex-col items-center gap-6"
      >
        {/* Hero */}
        <motion.h1
          variants={item}
          className={cn(
            "text-center text-4xl font-semibold tracking-tighter md:text-[54px] md:leading-[60px] bg-gradient-to-b from-zinc-600 to-white bg-clip-text text-transparent",
            geist.className
          )}
        >
          Our Team
        </motion.h1>

        <motion.p variants={item} className="max-w-3xl text-center text-muted-foreground">
          “At Calverts Digital, we’re not just a team—we’re a digital family.”
        </motion.p>

        {/* Team grid */}
        <motion.div
          variants={item}
          className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full"
        >
          {team.map((m, i) => (
            <motion.article
              key={m.name}
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 18, scale: 0.98 }}
              transition={{ duration: 0.4, delay: 0.12 + i * 0.04 }}
              whileHover={{ y: -4 }}
              className="group overflow-hidden rounded-2xl border border-secondary/40 bg-card/40 backdrop-blur-sm"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={m.photo}
                  alt={`${m.name} — ${m.role}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  priority={i < 2}
                />

                {/* top-right subtle badge dot illustration */}
                <div className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]">
                  <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:10px_10px]" />
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-base sm:text-lg font-semibold text-orange-300 tracking-tight">{m.name}</h3>
                <p className="text-sm text-muted-foreground">{m.role}</p>

                {/* Optional socials placeholders */}
                <div className="mt-4 flex items-center gap-2 text-muted-foreground">
                  {/* Add links if available */}
                  {/* <a aria-label="LinkedIn" href="#" className="p-2 rounded-full border border-border hover:bg-accent/40 transition-colors">
                    <svg ... />
                  </a> */}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* CTA row (optional) */}
        <motion.div variants={item} className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="/contact?intent=team"
            className="inline-flex items-center gap-2 rounded-full bg-[#e78a53] px-5 py-2.5 text-white transition-colors hover:bg-[#e78a53]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
          >
            Work With Our Team
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16" height="16" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
          <a
            href="/about"
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm hover:bg-accent/40 transition-colors"
          >
            Learn About Us
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
