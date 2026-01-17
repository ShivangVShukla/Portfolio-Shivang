"use client"

import { useState } from "react"
import { Menu, X, Sun, Moon, Download } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "./theme-provider"

const navItems = [
  { label: "about", href: "#about" },
  { label: "skills", href: "#skills" },
  { label: "projects", href: "#projects" },
  { label: "contact", href: "#contact" },
]

export function TerminalNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm terminal-border border-t-0 border-x-0">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex items-center justify-between h-14">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}
            className="flex items-center gap-2 text-primary glow-green hover:opacity-80 transition-opacity"
          >
            <span className="text-muted-foreground">user@</span>
            <span className="text-primary font-bold">shivang</span>
          </a>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.href)
                }}
                className="px-3 py-2 text-sm text-muted-foreground hover:text-primary transition-colors hover:glow-green"
              >
                ./{item.label}
              </a>
            ))}

            <a
              href="/resume.pdf"
              download="Shivang_Shukla_Resume.pdf"
              className="ml-2 px-4 py-1.5 text-sm font-medium bg-primary text-background rounded flex items-center gap-2 hover:bg-primary/90 transition-colors glow-green"
            >
              <Download size={14} />
              Resume
            </a>

            <button
              onClick={toggleTheme}
              className="ml-2 p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile menu and theme toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href="/resume.pdf"
              download="Shivang_Shukla_Resume.pdf"
              className="px-3 py-1 text-xs font-medium bg-primary text-background rounded flex items-center gap-1.5 hover:bg-primary/90 transition-colors"
            >
              <Download size={12} />
              Resume
            </a>
            <button
              onClick={toggleTheme}
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card terminal-border border-t-0 border-x-0"
          >
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item.href)
                  }}
                  className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  $ cd {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
