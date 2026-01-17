"use client"

import { motion } from "framer-motion"
import { Download, FileText } from "lucide-react"
import { SectionHeader } from "./section-header"

export function ResumeSection() {
  return (
    <section id="resume" className="py-16 md:py-24">
      <SectionHeader command="resume" description="Download my resume" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="bg-card terminal-border rounded-lg p-8 text-center"
      >
        <FileText className="mx-auto mb-4 text-primary glow-green" size={48} />

        <p className="text-muted-foreground mb-6">
          <span className="text-accent glow-cyan">{">"}</span> Get a detailed overview of my experience, education, and
          achievements.
        </p>

        <motion.a
          href="/resume.pdf"
          download
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-3 px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:opacity-90 transition-opacity"
        >
          <Download size={18} />
          <span>$ download resume.pdf</span>
        </motion.a>

        <p className="text-xs text-muted-foreground mt-4">PDF format • Last updated: 2025</p>
      </motion.div>
    </section>
  )
}
