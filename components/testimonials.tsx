import { Marquee } from "@/components/magicui/marquee"

const testimonials = [
  {
    name: "Lester Andrew Calvert",
    username: "@lester.adrew.calvert",
    body: "Founder & Chief AI Visionary",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Supratim Dhar",
    username: "@supratim.dhar",
    body: "Chief Technology & Data Officer",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Sandip Sharma",
    username: "@sandip.sharma",
    body: "AI-Powered Marketing Strategist",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Aishi",
    username: "@aishi",
    body: "Human-Centered Design & AI Experience Lead",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Souradip",
    username: "@souradip",
    body: "Lead Machine Learning Engineer",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Bhaibhav",
    username: "@bhaibhav",
    body: "Full-Stack Developer & Data Engineer",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Suddhajit",
    username: "@suddhajit",
    body: "AI-Driven Designer & Developer",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Harleen Kaur",
    username: "@harleen.kaur",
    body: "Innovation Delivery Manager – AI Solutions",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
  },
  
]

const firstColumn = testimonials.slice(0, 3)
const secondColumn = testimonials.slice(3, 6)
const thirdColumn = testimonials.slice(6, 9)

const TestimonialCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string
  name: string
  username: string
  body: string
}) => {
  return (
    <div className="relative w-full max-w-xs overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-10 shadow-[0px_2px_0px_0px_rgba(255,255,255,0.1)_inset]">
      <div className="absolute -top-5 -left-5 -z-10 h-40 w-40 rounded-full bg-gradient-to-b from-[#e78a53]/10 to-transparent blur-md"></div>

      <div className="text-white/90 leading-relaxed">{body}</div>

      <div className="mt-5 flex items-center gap-2">
        <img src={img || "/placeholder.svg"} alt={name} height="40" width="40" className="h-10 w-10 rounded-full" />
        <div className="flex flex-col">
          <div className="leading-5 font-medium tracking-tight text-white">{name}</div>
          <div className="leading-5 tracking-tight text-white/60">{username}</div>
        </div>
      </div>
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="mb-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-[540px]">
          <div className="flex justify-center">
            <button
              type="button"
              className="group relative z-[60] mx-auto rounded-full border border-white/20 bg-white/5 px-6 py-1 text-xs backdrop-blur transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-100 md:text-sm"
            >
              <div className="absolute inset-x-0 -top-px mx-auto h-0.5 w-1/2 bg-gradient-to-r from-transparent via-[#e78a53] to-transparent shadow-2xl transition-all duration-500 group-hover:w-3/4"></div>
              <div className="absolute inset-x-0 -bottom-px mx-auto h-0.5 w-1/2 bg-gradient-to-r from-transparent via-[#e78a53] to-transparent shadow-2xl transition-all duration-500 group-hover:h-px"></div>
              <span className="relative text-white">Our Team</span>
            </button>
          </div>
          <h2 className="from-foreground/60 via-foreground to-foreground/60 dark:from-muted-foreground/55 dark:via-foreground dark:to-muted-foreground/55 mt-5 bg-gradient-to-r bg-clip-text text-center text-4xl font-semibold tracking-tighter text-transparent md:text-[54px] md:leading-[60px] __className_bb4e88 relative z-10">
            Team Members
          </h2>

          <p className="mt-5 relative z-10 text-center text-lg text-zinc-500">
            From intuitive design to powerful features, our services has become an essential tool for users around the world.
          </p>
        </div>

        <div className="my-16 flex max-h-[738px] justify-center gap-6 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
          <div>
            <Marquee pauseOnHover vertical className="[--duration:20s]">
              {firstColumn.map((testimonial) => (
                <TestimonialCard key={testimonial.username} {...testimonial} />
              ))}
            </Marquee>
          </div>

          <div className="hidden md:block">
            <Marquee reverse pauseOnHover vertical className="[--duration:25s]">
              {secondColumn.map((testimonial) => (
                <TestimonialCard key={testimonial.username} {...testimonial} />
              ))}
            </Marquee>
          </div>

          <div className="hidden lg:block">
            <Marquee pauseOnHover vertical className="[--duration:30s]">
              {thirdColumn.map((testimonial) => (
                <TestimonialCard key={testimonial.username} {...testimonial} />
              ))}
            </Marquee>
          </div>
        </div>

        
      </div>
    </section>
  )
}
