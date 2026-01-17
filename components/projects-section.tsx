"use client"

import { motion } from "framer-motion"
import { Github } from "lucide-react"
import { SectionHeader } from "./section-header"

const projects = [
  {
    title: "Smart Obstacle Avoiding Car",
    description:
      "Working model built in SEM I - An autonomous vehicle that detects and avoids obstacles using sensors and Arduino.",
    techStack: ["Arduino", "C", "Sensors"],
    github: "https://github.com/ShivangVShukla",
  },
  {
    title: "Netflix Clone",
    description:
      "Frontend UI clone of Netflix with responsive design and modern styling replicating the streaming platform interface.",
    techStack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/ShivangVShukla",
  },
  {
    title: "Amazon US Clone",
    description:
      "Responsive e-commerce UI replicating Amazon's interface with product listings and shopping cart design.",
    techStack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/ShivangVShukla",
  },
  {
    title: "QR Code Generator",
    description: "Dynamic QR code generation tool that creates scannable codes from user input text or URLs.",
    techStack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/ShivangVShukla",
  },
  {
    title: "Socket.io Real-time Application",
    description: "Real-time communication application built with Socket.io enabling instant data synchronization.",
    techStack: ["JavaScript", "Socket.io", "Node.js"],
    github: "https://github.com/ShivangVShukla",
  },
  {
    title: "Flappy Bird Web Game",
    description: "Browser-based recreation of the classic Flappy Bird game with smooth animations and scoring system.",
    techStack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/ShivangVShukla",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24">
      <SectionHeader command="projects" description="Featured work" />

      <div className="space-y-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            viewport={{ once: true }}
            className="bg-card terminal-border rounded-lg p-6 group hover:border-primary/50 transition-colors"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-lg text-primary glow-green mb-2 flex items-center gap-2">
                  <span className="text-muted-foreground text-sm">$</span>
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-secondary text-accent rounded border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 md:shrink-0">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-muted-foreground hover:text-primary transition-colors"
                  aria-label="View on GitHub"
                >
                  <Github size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
