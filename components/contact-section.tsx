"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Github, Linkedin, Copy, Check } from "lucide-react"
import { SectionHeader } from "./section-header"

const contactLinks = [
  {
    label: "Email",
    value: "shivangvshukla2007@gmail.com",
    href: "mailto:shivangvshukla2007@gmail.com",
    icon: Mail,
    copyable: true,
  },
  {
    label: "GitHub",
    value: "github.com/ShivangVShukla",
    href: "https://github.com/ShivangVShukla",
    icon: Github,
    copyable: false,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/shivangvshukla",
    href: "https://www.linkedin.com/in/shivangvshukla",
    icon: Linkedin,
    copyable: false,
  },
]

export function ContactSection() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const handleCopy = async (text: string, index: number) => {
    await navigator.clipboard.writeText(text)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  return (
    <section id="contact" className="py-16 md:py-24">
      <SectionHeader command="contact" description="Get in touch" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="bg-card terminal-border rounded-lg p-6"
      >
        <p className="text-muted-foreground mb-6">
          <span className="text-accent glow-cyan">{">"}</span>{" "}
          {"I'm always open to discussing new opportunities and collaborations."}
        </p>

        <div className="space-y-4">
          {contactLinks.map((link, index) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="flex items-center gap-4 group"
            >
              <link.icon className="text-primary shrink-0" size={18} />
              <span className="text-muted-foreground text-sm w-20">{link.label}:</span>
              <a
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="text-accent hover:text-primary transition-colors text-sm"
              >
                {link.value}
              </a>

              {link.copyable && (
                <button
                  onClick={() => handleCopy(link.value, index)}
                  className="p-1.5 text-muted-foreground hover:text-primary transition-colors"
                  aria-label={`Copy ${link.label}`}
                >
                  {copiedIndex === index ? <Check size={14} className="text-primary" /> : <Copy size={14} />}
                </button>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
