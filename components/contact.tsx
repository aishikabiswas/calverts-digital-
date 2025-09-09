// "use client"

// import { motion, useInView } from "framer-motion"
// import { useRef, useState } from "react"
// import { geist } from "@/lib/fonts"
// import { cn } from "@/lib/utils"

// export function Contact() {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, amount: 0.2 })

//   const container = {
//     hidden: { opacity: 0, y: 18 },
//     show: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.07 } },
//   }
//   const item = {
//     hidden: { opacity: 0, y: 12 },
//     show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
//   }

//   // Basic form state for example only
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     company: "",
//     message: "",
//   })

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
//   }

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     // Add your submission logic here
//     alert("Thanks for reaching out!")
//   }

//   return (
//     <section className="mt-12 w-full relative px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
//       <div className="rounded-[40px] border border-black/5 dark:border-white/20 p-2 shadow-sm relative overflow-hidden bg-primary">
//         {/* Radial glow */}
//         <div
//           className="absolute inset-0 z-0"
//           style={{
//             background: "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(255, 64, 23, 0.1), transparent 70%)",
//           }}
//         />

//         {/* Film grain overlay */}
//         <div
//           className="absolute inset-0 z-0 opacity-[0.02]"
//           style={{
//             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
//           }}
//         />

//         <motion.div
//           ref={ref}
//           initial="hidden"
//           animate={isInView ? "show" : "hidden"}
//           variants={container}
//           className="relative z-10 p-8 rounded-[38px] bg-primary"
//         >
//           {/* Call to Action */}
//           <motion.div variants={item} className="mb-10 text-center">
//             <h2 className={cn("text-4xl font-bold text-white mb-3", geist.className)}>
//               Got a project in mind? Let’s build and grow together.
//             </h2>
//             <p className="text-white/70 max-w-xl mx-auto">Fill out the form below or contact us directly using the info provided.</p>
//           </motion.div>

//           {/* Contact form */}
//           <motion.form variants={item} onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Name"
//               required
//               className="rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-orange-300 transition"
//             />
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Email"
//               required
//               className="rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-orange-300 transition"
//             />
//             <input
//               type="text"
//               name="company"
//               value={formData.company}
//               onChange={handleChange}
//               placeholder="Company"
//               className="rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-orange-300 transition"
//             />
//             <textarea
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               placeholder="Message"
//               rows={5}
//               required
//               className="rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground resize-y focus:outline-none focus:ring-2 focus:ring-orange-300 transition"
//             />
//             <button
//               type="submit"
//               className="inline-block rounded-full bg-orange-300 px-8 py-3 font-semibold text-white hover:bg-orange-400 transition"
//             >
//               Send Message
//             </button>
//           </motion.form>

//           {/* Contact Info */}
//           <motion.div variants={item} className="mt-12 text-white/90 space-y-6">
//             <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
//             <p>
//               <strong>Email:</strong>{" "}
//               <a href="mailto:lestercalvert377@gmail.com" className="underline hover:text-orange-300">
//                 lestercalvert377@gmail.com
//               </a>{" "}
//               |{" "}
//               <a href="mailto:supratimdhara@gmail.com" className="underline hover:text-orange-300">
//                 supratimdhara@gmail.com
//               </a>
//             </p>
//             <p>
//               <strong>Phone:</strong>{" "}
//               <a href="tel:+918583999129" className="underline hover:text-orange-300">
//                 +91 85839 99129
//               </a>{" "}
//               |{" "}
//               <a href="tel:+918240356758" className="underline hover:text-orange-300">
//                 +91 82403 56758
//               </a>
//             </p>
//             <address>
//               <strong>Address:</strong>
//               <br />
//               Calverts Digital Technology Pvt. Ltd.
//               <br />
//               16/27/41 A, Chak Thankurani, Pragati Pally,
//               <br />
//               Kalitala Road, Kolkata, West Bengal – 700104
//             </address>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }
"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { geist } from "@/lib/fonts"
import { cn } from "@/lib/utils"

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const container = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.07 } },
  }
  const item = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
  }

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thanks for reaching out!")
  }

  // Custom Cursor State
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }
    const hideCursor = () => setIsVisible(false)

    window.addEventListener("mousemove", moveCursor)
    window.addEventListener("mouseout", hideCursor)
    window.addEventListener("mouseleave", hideCursor)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      window.removeEventListener("mouseout", hideCursor)
      window.removeEventListener("mouseleave", hideCursor)
    }
  }, [])

  // Zoom animation variants for the entire contact section container
  const zoomContainer = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  }

  return (
    <motion.section
      className="mt-12 w-full relative px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      variants={zoomContainer}
      ref={ref}
    >
      {/* Custom cursor */}
      <div
        className={`fixed pointer-events-none z-50 hidden md:block transition-transform duration-150 ease-out bg-orange-300 border-2 border-white rounded-full mix-blend-difference`}
        style={{
          width: 32,
          height: 32,
          top: cursorPos.y - 16,
          left: cursorPos.x - 16,
          transform: isVisible ? "scale(1)" : "scale(0)",
        }}
      />
      <motion.h1
          variants={item}
          className={cn(
            "text-center text-4xl font-semibold tracking-tighter md:text-[48px] md:leading-[54px] bg-gradient-to-r from-zinc-600 to-white bg-clip-text text-transparent",
            geist.className
          )}
        >
          Contact
        </motion.h1>
        <br />
        <br />
      <div className="rounded-[40px] border border-black/5 dark:border-white/20 p-2 shadow-sm relative overflow-hidden bg-primary">
        
        {/* Radial glow */}

        <div
          className="absolute inset-0 z-0"
          style={{
            background: "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(255, 64, 23, 0.1), transparent 70%)",
          }}
        />
        
        {/* Film grain overlay */}
        <div
          className="absolute inset-0 z-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
        <motion.div
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={container}
          className="relative z-10 p-8 rounded-[38px] bg-primary"
        >
          {/* Call to Action */}
          <motion.div variants={item} className="mb-10 text-center">
            <h2 className={cn("text-4xl font-bold text-white mb-3", geist.className)}>
              Got a project in mind? Let’s build and grow together.
            </h2>
            <p className="text-white/70 max-w-xl mx-auto">Fill out the form below or contact us directly using the info provided.</p>
          </motion.div>
          {/* Contact form */}
          <motion.form variants={item} onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
              className="rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-orange-300 transition"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-orange-300 transition"
            />
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company"
              className="rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-orange-300 transition"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows={5}
              required
              className="rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground resize-y focus:outline-none focus:ring-2 focus:ring-orange-300 transition"
            />
            <button
              type="submit"
              className="inline-block rounded-full bg-orange-300 px-8 py-3 font-semibold text-white hover:bg-orange-400 transition"
            >
              Send Message
            </button>
          </motion.form>
          {/* Contact Info */}
          <motion.div variants={item} className="mt-12 text-white/90 space-y-6">
            <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:lestercalvert377@gmail.com" className="underline hover:text-orange-300">
                lestercalvert377@gmail.com
              </a>{" "}
              |{" "}
              <a href="mailto:supratimdhara@gmail.com" className="underline hover:text-orange-300">
                supratimdhara@gmail.com
              </a>
            </p>
            <p>
              <strong>Phone:</strong>{" "}
              <a href="tel:+918583999129" className="underline hover:text-orange-300">
                +91 85839 99129
              </a>{" "}
              |{" "}
              <a href="tel:+918240356758" className="underline hover:text-orange-300">
                +91 82403 56758
              </a>
            </p>
            <address>
              <strong>Address:</strong>
              <br />
              Calverts Digital Technology Pvt. Ltd.
              <br />
              16/27/41 A, Chak Thankurani, Pragati Pally,
              <br />
              Kalitala Road, Kolkata, West Bengal – 700104
            </address>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
