"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { 
  ArrowUpRight, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Instagram,
  ChevronUp,
  Sparkles,
  Zap
} from "lucide-react"

export function StickyFooter() {
  const [isAtBottom, setIsAtBottom] = useState(false)
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = window.scrollY
          const windowHeight = window.innerHeight
          const documentHeight = document.documentElement.scrollHeight
          const isNearBottom = scrollTop + windowHeight >= documentHeight - 150
          const progress = (scrollTop / (documentHeight - windowHeight)) * 100
          setIsAtBottom(isNearBottom)
          setScrollProgress(progress)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const mainLinks = [
    { label: "Work", href: "/work", icon: Zap },
    { label: "Services", href: "#services", icon: Sparkles },
    { label: "About", href: "#about" },
    { label: "Team", href: "#team" },
    { label: "Insights", href: "#insights" },
  ]

  const contactInfo = [
    { icon: Mail, text: "hello@calvertsdigital.com", href: "mailto:hello@calvertsdigital.com" },
    { icon: Phone, text: "+91 98765 43210", href: "tel:+919876543210" },
    { icon: MapPin, text: "Kolkata, India", href: "#" },
  ]

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ]

  return (
    <div>
      {/* Scroll Progress Indicator */}
      <div className="fixed bottom-0 left-0 w-full h-1 bg-gray-200/20 z-[49]">
        <motion.div
          className="h-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500"
          style={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      <AnimatePresence>
        {isAtBottom && (
          <motion.footer
            className="fixed left-0 bottom-1 z-50 w-full"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Glassmorphism Container */}
            <div className="mx-4 mb-4 backdrop-blur-xl bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-gray-900/95 rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-pink-500/10 animate-pulse" />
              </div>

              <div className="relative">
                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-8">
                  {/* Brand Section */}
                  <div className="lg:col-span-3 flex flex-col gap-4">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Link href="/" className="inline-block">
                        <div className="bg-gradient-to-br from-orange-500 to-pink-500 p-0.5 rounded-2xl">
                          <div className="bg-gray-900 rounded-2xl p-3">
                            <Image 
                              src="/logo.jpg" 
                              alt="Calverts Digital" 
                              width={140} 
                              height={50} 
                              className="w-auto h-12"
                            />
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Transforming ideas into digital excellence. We craft innovative solutions that drive growth.
                    </p>
                    {/* Social Links */}
                    <div className="flex gap-3 mt-2">
                      {socialLinks.map((social) => {
                        const Icon = social.icon
                        return (
                          <motion.a
                            key={social.label}
                            href={social.href}
                            aria-label={social.label}
                            className="group relative"
                            whileHover={{ y: -3 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300" />
                            <div className="relative bg-gray-800 border border-gray-700 rounded-lg p-2 group-hover:border-orange-500/50 transition-colors duration-300">
                              <Icon className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                            </div>
                          </motion.a>
                        )
                      })}
                    </div>
                  </div>

                  {/* Quick Links with Animation */}
                  <div className="lg:col-span-3">
                    <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                      <span className="w-8 h-0.5 bg-gradient-to-r from-orange-500 to-pink-500" />
                      Quick Links
                    </h3>
                    <nav className="space-y-2">
                      {mainLinks.map((link, index) => {
                        const LinkIcon = link.icon
                        return (
                          <motion.div
                            key={link.href}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            <Link
                              href={link.href}
                              className="group flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-300"
                              onMouseEnter={() => setHoveredLink(link.label)}
                              onMouseLeave={() => setHoveredLink(null)}
                            >
                              {LinkIcon && (
                                <LinkIcon className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                              )}
                              <span className="relative">
                                {link.label}
                                {hoveredLink === link.label && (
                                  <motion.span
                                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-orange-500 to-pink-500"
                                    layoutId="underline"
                                    initial={{ width: 0 }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 0.3 }}
                                  />
                                )}
                              </span>
                              <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                            </Link>
                          </motion.div>
                        )
                      })}
                    </nav>
                  </div>

                  {/* Contact Info */}
                  <div className="lg:col-span-4">
                    <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                      <span className="w-8 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500" />
                      Get in Touch
                    </h3>
                    <div className="space-y-3">
                      {contactInfo.map((item, index) => {
                        const ContactIcon = item.icon
                        return (
                          <motion.a
                            key={index}
                            href={item.href}
                            className="group flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                            whileHover={{ x: 5 }}
                          >
                            <div className="p-2 bg-gray-800/50 rounded-lg group-hover:bg-gradient-to-br group-hover:from-orange-500/20 group-hover:to-pink-500/20 transition-all duration-300">
                              <ContactIcon className="w-4 h-4" />
                            </div>
                            <span className="text-sm">{item.text}</span>
                          </motion.a>
                        )
                      })}
                    </div>
                  </div>

                  {/* CTA Section */}
                  <div className="lg:col-span-2 flex items-center justify-end">
                    <div className="flex flex-col gap-3">
                      <motion.button
                        onClick={scrollToTop}
                        className="group relative p-3 rounded-xl overflow-hidden"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 opacity-80 group-hover:opacity-100 transition-opacity" />
                        <ChevronUp className="relative w-5 h-5 text-white animate-bounce" />
                      </motion.button>
                      <motion.a
                        href="#contact"
                        className="relative group px-4 py-2 rounded-xl overflow-hidden text-center"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute inset-0 bg-gray-800 group-hover:bg-transparent transition-colors duration-300" />
                        <span className="relative text-sm font-medium text-white">Let&apos;s Talk</span>
                      </motion.a>
                    </div>
                  </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800/50 px-8 py-4">
                  <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-gray-500">
                      © 2025 Calverts Digital Technology Pvt. Ltd. All rights reserved.
                    </p>
                    <div className="flex gap-4 text-xs">
                      <Link href="/privacy" className="text-gray-500 hover:text-white transition-colors">
                        Privacy Policy
                      </Link>
                      <span className="text-gray-700">•</span>
                      <Link href="/terms" className="text-gray-500 hover:text-white transition-colors">
                        Terms of Service
                      </Link>
                      <span className="text-gray-700">•</span>
                      <Link href="/cookies" className="text-gray-500 hover:text-white transition-colors">
                        Cookies
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.footer>
        )}
      </AnimatePresence>
    </div>
  )
}