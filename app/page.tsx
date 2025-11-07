"use client"

import Link from "next/link"
import { useState, useEffect } from "react"

const projects = [
  {
    name: "Resume",
    href: "/Tyler",
    description: "A simple Next.js + React component built with TypeScript that embeds and displays a hosted PDF resume using an iframe.",
    icon: "✨",
  },
  {
    name: "Pokemon",
    href: "/Pokemon",
    description: "Next.js + TypeScript project featuring Pokémon data from PokéAPI, styled with ShadCN components.",
    icon: "🐉",
  },
  {
    name: "To-Do App",
    href: "/to-do",
    description: "A Next.js + TypeScript To-Do app built with React, Tailwind CSS, and Lucide icons. Tasks are saved in browser cookies using js-cookie for simple persistence.",
    icon: "📝",
  },
  {
    name: "Triangle Visualizer",
    href: "/Triangle Visualizer",
    description: "A React + TypeScript interactive triangle visualizer built with Next.js and Tailwind CSS. It calculates and displays triangle angles, height, and hypotenuse based on user inputs for base length and angle, rendered using SVG.",
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
      {/* Hero Section */}
<section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 text-center space-y-8">
  {/* Profile Image */}
  <img
    src="https://scontent.ffsd3-1.fna.fbcdn.net/v/t39.30808-6/311597559_6359203594111987_3044922591061925605_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=5C0vDRvlPLYQ7kNvwGSTo5j&_nc_oc=Adlod42q3aHX-en7GEL9cBd9_dMFcN4hpNjAgOyAT7TtL-o7ZzQ2NPdUDnSRNAXgEWTo7MJJr84OYW8hHpXUOTkh&_nc_zt=23&_nc_ht=scontent.ffsd3-1.fna&_nc_gid=cdg0TPAJdFRQXEfAM2GLvA&oh=00_AfhutDH70YHHAVlXcxjuMEIbYNVf_y2ScPa3CYeB7c1KQg&oe=69134C96"
    alt="Tyler Cain profile"
    className="w-40 h-40 rounded-full border-4 border-primary shadow-xl object-cover"
  />

  <div className="space-y-4">
    <h2 className="text-6xl md:text-7xl font-bold leading-tight">
      Tyler Cain's Portfolio
    </h2>
    <p className="text-xl md:text-2xl text-muted-foreground">
      A showcase of my creative work and career journey
    </p>
  </div>

  {/* Scroll Indicator */}
  <div className="pt-12">
    <div className="inline-block animate-bounce">
      <svg
        className="w-6 h-6 text-muted-foreground"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        />
      </svg>
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
