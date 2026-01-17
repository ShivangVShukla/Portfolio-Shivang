"use client"

import { motion } from "framer-motion"

interface SectionHeaderProps {
  command: string
  description?: string
}

export function SectionHeader({ command, description }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-8"
    >
      <h2 className="text-xl md:text-2xl text-primary glow-green mb-2">
        <span className="text-muted-foreground">user@shivang:~$ </span>
        {command}
      </h2>
      {description && (
        <p className="text-muted-foreground text-sm">
          <span className="text-accent glow-cyan">{"> "}</span>
          {description}
        </p>
      )}
    </motion.div>
  )
}
