"use client"

import Link from "next/link"
import { useState, useEffect } from "react"

const projects = [
  {
    name: "Resume",
    href: "/Tyler",
    description: "Explore creative experiences",
    icon: "✨",
  },
  {
    name: "Pokemon",
    href: "/Pokemon",
    description: "Discover innovative design",
    icon: "🎨",
  },
  {
    name: "To-Do App",
    href: "/todo",
    description: "Fluid and dynamic interactions",
    icon: "💫",
  },
  {
    name: "Triangle Visualizer",
    href: "/Triangle Visualizer",
    description: "Geometric visualization tool",
    icon: "△",
  },
]

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold"></h1>
          <nav className="flex gap-8">
            <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-6xl md:text-7xl font-bold text-pretty leading-tight">Tyler Cain's Portfolio</h2>
            <p className="text-xl md:text-2xl text-muted-foreground text-balance">
              A showcase of my creative work and career journey
            </p>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-12">
            <div className="inline-block animate-bounce">
              <svg className="w-6 h-6 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

            {/* Projects Grid */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold mb-16 text-balance">Resume and Featured Projects</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {projects.map((project) => (
              <Link
                key={project.name}
                href={project.href}
                className="group relative overflow-hidden rounded-2xl bg-card border border-border p-8 hover:border-primary transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative space-y-4">
                  <div className="text-5xl">{project.icon}</div>
                  <div>
                    <h4 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.name}
                    </h4>
                    <p className="text-muted-foreground">{project.description}</p>
                  </div>
                  <div className="pt-4 flex items-center text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div> 
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6 bg-card/30">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>© 2025 T.Cain Creation</p>
        </div>
      </footer>
    </div>
  )
}
