"use client"

import { motion } from "framer-motion"
import { SectionHeader } from "./section-header"

const skillCategories = [
  {
    title: "Programming & Core Concepts",
    skills: ["Data Structures and Algorithms in Java", "C"],
  },
  {
    title: "Web Technologies",
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Tools & Applications",
    skills: ["Figma", "n8n", "AutoCAD", "Canva", "Arduino IDE"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24">
      <SectionHeader command="skills" description="Technical expertise" />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * categoryIndex }}
            viewport={{ once: true }}
            className="bg-card terminal-border rounded-lg p-6"
          >
            <h3 className="text-primary glow-green text-sm mb-4 pb-2 border-b border-border">
              <span className="text-muted-foreground">cat </span>
              {category.title.toLowerCase().replace(/ & /g, "_").replace(/ /g, "_")}.txt
            </h3>

            <ul className="space-y-2">
              {category.skills.map((skill, skillIndex) => (
                <motion.li
                  key={skill}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 * skillIndex }}
                  viewport={{ once: true }}
                  className="text-sm text-muted-foreground flex items-center gap-2"
                >
                  <span className="text-accent">→</span>
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
