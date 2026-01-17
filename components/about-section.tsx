"use client"

import { motion } from "framer-motion"
import { SectionHeader } from "./section-header"
import { GraduationCap, Briefcase } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24">
      <SectionHeader command="about" description="Professional summary" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="bg-card terminal-border rounded-lg p-6 space-y-6"
      >
        <div className="space-y-4">
          <p className="text-foreground leading-relaxed">
            <span className="text-accent glow-cyan">{">"}</span> Aspiring Computer Engineering student pursuing a B.E.
            in Computer Engineering at Thakur College of Engineering & Technology, Mumbai.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            Strong foundation in programming, problem-solving, and emerging technologies. Passionate about software
            development, continuous learning, and applying theoretical knowledge to real-world projects.
          </p>
        </div>

        {/* Education */}
        <div className="pt-4 border-t border-border">
          <h3 className="text-primary glow-green text-sm mb-4 flex items-center gap-2">
            <GraduationCap size={16} />
            <span>Education</span>
          </h3>
          <div className="space-y-3">
            <div className="text-sm">
              <p className="text-foreground">B.E. in Computer Engineering</p>
              <p className="text-muted-foreground">Thakur College of Engineering & Technology</p>
              <p className="text-accent text-xs">2024 – Present | CGPA: 9.86</p>
            </div>
            <div className="text-sm">
              <p className="text-foreground">H.S.C. (Information Technology)</p>
              <p className="text-muted-foreground">{"Vidyavardhini's Annasaheb Vartak College"}</p>
              <p className="text-accent text-xs">2022 – 2024 | 84.33%</p>
            </div>
            <div className="text-sm">
              <p className="text-foreground">S.S.C.</p>
              <p className="text-muted-foreground">Divine Providence High School</p>
              <p className="text-accent text-xs">2017 – 2022 | 92.60%</p>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="pt-4 border-t border-border">
          <h3 className="text-primary glow-green text-sm mb-4 flex items-center gap-2">
            <Briefcase size={16} />
            <span>Experience</span>
          </h3>
          <div className="space-y-4">
            <div className="text-sm">
              <p className="text-foreground">{"TCET's Green Club — Member"}</p>
              <p className="text-accent text-xs mb-2">Feb 2025 – Present</p>
              <ul className="text-muted-foreground space-y-1 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-accent">→</span>
                  Contributed to campus sustainability initiatives and awareness campaigns
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">→</span>
                  Helped organize environmental conservation and waste reduction events
                </li>
              </ul>
            </div>
            <div className="text-sm">
              <p className="text-foreground">CyberPeace Foundation — Volunteer</p>
              <p className="text-accent text-xs mb-2">2025</p>
              <ul className="text-muted-foreground space-y-1 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-accent">→</span>
                  Worked on AI-based fact-checking and deepfake detection
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">→</span>
                  Supported initiatives promoting digital trust and safe cyberspace usage
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-border">
          <p className="text-sm text-muted-foreground">
            <span className="text-primary">Status:</span>{" "}
            <span className="text-accent glow-cyan">Open to opportunities</span>
          </p>
        </div>
      </motion.div>
    </section>
  )
}
