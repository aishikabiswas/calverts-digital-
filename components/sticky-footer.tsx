// "use client"

// import { motion, AnimatePresence } from "framer-motion"
// import Link from "next/link"
// import { useState, useEffect } from "react"

// export function StickyFooter() {
//   const [isAtBottom, setIsAtBottom] = useState(false)

//   useEffect(() => {
//     let ticking = false

//     const handleScroll = () => {
//       if (!ticking) {
//         requestAnimationFrame(() => {
//           const scrollTop = window.scrollY
//           const windowHeight = window.innerHeight
//           const documentHeight = document.documentElement.scrollHeight
//           const isNearBottom = scrollTop + windowHeight >= documentHeight - 100
//           setIsAtBottom(isNearBottom)
//           ticking = false
//         })
//         ticking = true
//       }
//     }

//     window.addEventListener("scroll", handleScroll, { passive: true })
//     handleScroll()
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   const quickLinks = [
//     { label: "Home", href: "/" },
//     { label: "About", href: "/about" },
//     { label: "Team", href: "/team" },
//     { label: "Work", href: "/work" },
//     { label: "Expertise", href: "/expertise" },
//     { label: "Marketing", href: "/digital-marketing" },
//     { label: "Insights", href: "/insights" },
//     { label: "Contact", href: "/contact" },
//   ]
//   const legalLinks = [
//     { label: "Privacy Policy", href: "/privacy" },
//     { label: "Terms of Service", href: "/terms" },
//   ]

//   const linkClasses =
//     "hover:underline focus-visible:underline px-3 py-2 transition text-white/90 font-medium rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"

//   return (
//     <AnimatePresence>
//       {isAtBottom && (
//         <motion.footer
//           className="fixed left-0 bottom-0 z-50 w-full"
//           initial={{ y: "100%" }}
//           animate={{ y: 0 }}
//           exit={{ y: "100%" }}
//           transition={{ duration: 0.38, ease: "easeOut" }}
//           aria-label="Sticky Footer"
//         >
//           {/* Main footer area */}
//           <div className="bg-[#e78a53] shadow-inner border-t border-white/20">
//             <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between px-6 sm:px-9 py-7">
//               {/* Quick Links */}
//               <nav aria-label="Quick Links" className="flex flex-wrap flex-row gap-x-2 gap-y-1 justify-center md:justify-start w-full md:w-auto mb-4 md:mb-0">
//                 {quickLinks.map((link) => (
//                   <Link key={link.href} href={link.href} className={linkClasses}>
//                     {link.label}
//                   </Link>
//                 ))}
//               </nav>
//               {/* Legal Links */}
//               <nav aria-label="Legal" className="flex gap-2 mt-4 md:mt-0 justify-center md:justify-end">
//                 {legalLinks.map((link) => (
//                   <Link key={link.href} href={link.href} className={linkClasses}>
//                     {link.label}
//                   </Link>
//                 ))}
//               </nav>
//             </div>
//           </div>
//           {/* Copyright strip */}
//           <div className="bg-[#e78a53] border-t border-white/10 text-center py-3 px-6 text-xs sm:text-sm text-white/70 font-medium tracking-wide">
//             © 2025 Calverts Digital Technology Pvt. Ltd.
//           </div>
//         </motion.footer>
//       )}
//     </AnimatePresence>
//   )
// }
"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

export function StickyFooter() {
  const [isAtBottom, setIsAtBottom] = useState(false)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = window.scrollY
          const windowHeight = window.innerHeight
          const documentHeight = document.documentElement.scrollHeight
          const isNearBottom = scrollTop + windowHeight >= documentHeight - 100
          setIsAtBottom(isNearBottom)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Team", href: "/team" },
    { label: "Work", href: "/work" },
    { label: "Expertise", href: "/expertise" },
    { label: "Marketing", href: "/digital-marketing" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ]
  const legalLinks = [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ]

  const linkClasses =
    "hover:underline focus-visible:underline px-3 py-2 transition text-white/90 font-medium rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"

  return (
    <AnimatePresence>
      {isAtBottom && (
        <motion.footer
          className="fixed left-0 bottom-0 z-50 w-full"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.38, ease: "easeOut" }}
          aria-label="Sticky Footer"
        >
          {/* Main footer area */}
          <div className="bg-[#e78a53] shadow-inner border-t border-white/20">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between px-6 sm:px-9 py-7">
              {/* Logo on left */}
              <div className="flex items-center mb-4 md:mb-0 mr-6 flex-shrink-0">
                
                  <a className="block w-[120px] h-auto rounded-3xl overflow-hidden" href="/">
                    <Image src="/logo.jpg" alt="Calverts Digital Logo" width={120} height={40} priority />
                  </a>
                
              </div>

              {/* Quick Links */}
              <nav
                aria-label="Quick Links"
                className="flex flex-wrap flex-row gap-x-2 gap-y-1 justify-center md:justify-start flex-grow"
              >
                {quickLinks.map((link) => (
                  <Link key={link.href} href={link.href} className={linkClasses}>
                    {link.label}
                  </Link>
                ))}
              </nav>
              {/* Legal Links */}
              <nav aria-label="Legal" className="flex gap-2 mt-4 md:mt-0 justify-center md:justify-end">
                {legalLinks.map((link) => (
                  <Link key={link.href} href={link.href} className={linkClasses}>
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
          {/* Copyright strip */}
          <div className="bg-[#e78a53] border-t border-white/10 text-center py-3 px-6 text-xs sm:text-sm text-white/70 font-medium tracking-wide">
            © 2025 Calverts Digital Technology Pvt. Ltd.
          </div>
        </motion.footer>
      )}
    </AnimatePresence>
  )
}
