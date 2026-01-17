"use client"

import { motion } from "framer-motion"
import { SectionHeader } from "./section-header"

export function HelpSection() {
  const commands = [
    { cmd: "./about", desc: "Learn about my background and experience" },
    { cmd: "./skills", desc: "View my technical skill set" },
    { cmd: "./projects", desc: "Browse my project portfolio" },
    { cmd: "./resume", desc: "Download my resume" },
    { cmd: "./contact", desc: "Get in touch with me" },
  ]

  return (
    <section id="help" className="py-16 md:py-24">
      <SectionHeader command="help" description="Navigation guide" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="bg-card terminal-border rounded-lg p-6"
      >
        <p className="text-muted-foreground mb-6">
          <span className="text-accent glow-cyan">Welcome to my portfolio terminal.</span> Navigate using the menu above
          or scroll through sections.
        </p>

        <div className="space-y-3">
          <p className="text-sm text-muted-foreground mb-4">Available commands:</p>
          {commands.map((item, index) => (
            <motion.div
              key={item.cmd}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="flex gap-4 text-sm"
            >
              <span className="text-primary glow-green w-32 shrink-0">{item.cmd}</span>
              <span className="text-muted-foreground">{item.desc}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
