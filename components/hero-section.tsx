"use client"

import { motion } from "framer-motion"
import { MapPin } from "lucide-react"

export function HeroSection() {
  const handleScrollDown = () => {
    const aboutSection = document.querySelector("#about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="min-h-[80vh] flex items-center justify-center relative">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Terminal-style greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-muted-foreground text-sm md:text-base mb-4"
          >
            <span className="text-primary">user@shivang</span>
            <span className="text-muted-foreground">:</span>
            <span className="text-accent">~</span>
            <span className="text-muted-foreground">$ whoami</span>
          </motion.p>

          {/* Main name with glow effect */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary glow-green mb-4"
          >
            Shivang Shukla
          </motion.h1>

          {/* Subtitle/tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-lg md:text-xl text-accent glow-cyan mb-6"
          >
            Computer Engineering Student
          </motion.p>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex items-center justify-center gap-2 text-muted-foreground text-sm"
          >
            <MapPin size={14} />
            <span>Mumbai, India</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <button
            onClick={handleScrollDown}
            className="cursor-pointer hover:text-primary transition-colors"
            aria-label="Scroll to about section"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "easeInOut" }}
              className="text-muted-foreground text-xs flex flex-col items-center gap-2"
            >
              <span>scroll down</span>
              <span className="text-primary">↓</span>
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  )
}
