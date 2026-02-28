'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Github,
  Linkedin,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Code2,
  Palette,
  TrendingUp,
  ExternalLink,
  Menu,
  X,
  ChevronDown,
  Sparkles,
  Zap,
  Globe,
  Send
} from "lucide-react"
import { useState, useEffect } from "react"

// Portfolio Data
const personalInfo = {
  name: "Mohammed Nuhman M",
  title: "Frontend Developer",
  tagline: "Crafting Digital Experiences with Code & Creativity",
  email: "mohammednuhman333@gmail.com",
  location: "Malappuram, Kerala",
  bio: `Hello! I am Mohammed Nuhman, a frontend developer currently studying at Brototype Cross Roads. 
        I love technology and design, and I enjoy creating websites that look good and work well.
        My interest in web development started during my studies when I became curious about how 
        websites are built and how people interact with them. Learning how lines of code turn into 
        interactive websites fascinated me. I've built a solid foundation in programming languages 
        like C and Java, and I'm continuously expanding my skills in modern web technologies.`,
  avatar: "https://media.licdn.com/dms/image/v2/D4E03AQFWvFLvQbDazg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1731561139861?e=2147483647&v=beta&t=YP2WSgkqVkVOv9mpRa1k5TUa4wC8FZnZmMbqXR_5oto"
}

const skills = [
  { name: "HTML5", level: 90, category: "frontend" },
  { name: "CSS3", level: 85, category: "frontend" },
  { name: "JavaScript", level: 80, category: "frontend" },
  { name: "TypeScript", level: 75, category: "frontend" },
  { name: "React", level: 70, category: "frontend" },
  { name: "Next.js", level: 65, category: "frontend" },
  { name: "Tailwind CSS", level: 85, category: "frontend" },
  { name: "Git & GitHub", level: 75, category: "tools" },
]

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "I use the latest web technologies and development tools to create websites that are fast, secure, and scalable. I provide ongoing support and maintenance services to ensure your website remains up-to-date and performs optimally.",
    features: ["Responsive Design", "Modern Frameworks", "Performance Optimization", "Cross-browser Compatibility"]
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Creating visual content to communicate messages effectively using typography, imagery, color, and layout to convey ideas and capture attention. Bringing brands to life with stunning visual identities.",
    features: ["Brand Identity", "UI/UX Design", "Social Media Graphics", "Print Design"]
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Helping businesses reach their target audience online using a variety of strategies. In today's digital age, a strong online presence is essential for success with cost-effective and scalable methods.",
    features: ["SEO Optimization", "Social Media Marketing", "Content Strategy", "Analytics & Reporting"]
  }
]

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website showcasing my skills and projects with smooth animations and clean design.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://mnuhman.github.io/file/",
    github: "https://github.com/mnuhman/file",
    image: "/project-portfolio.jpg"
  },
  {
    title: "Spendwise Tracker",
    description: "A smart expense tracking application to help users manage their finances and track spending habits effectively.",
    tags: ["JavaScript", "CSS", "Web App"],
    link: "https://github.com/mnuhman/spendwisetarcker",
    github: "https://github.com/mnuhman/spendwisetarcker",
    image: "/project-tracker.jpg"
  }
]

const socialLinks = [
  { icon: Github, href: "https://github.com/mnuhman", label: "GitHub", username: "@mnuhman" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/mohammed-nuhman-m-167576338/", label: "LinkedIn", username: "Mohammed Nuhman M" },
  { icon: Instagram, href: "https://www.instagram.com/nuhman_tech/", label: "Instagram", username: "@nuhman_tech" },
  { icon: Twitter, href: "https://x.com/zackmoon321", label: "Twitter", username: "@zackmoon321" },
]

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
]

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.slice(1))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.slice(1))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-lg border-b shadow-sm" : "bg-transparent"
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection("#home") }} className="text-2xl font-bold tracking-tight">
              Nuhman<span className="text-primary">.</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Button
                  key={link.href}
                  variant="ghost"
                  size="sm"
                  onClick={() => scrollToSection(link.href)}
                  className={`transition-all ${activeSection === link.href.slice(1) ? "bg-primary/10 text-primary" : ""}`}
                >
                  {link.label}
                </Button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t pt-4">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Button
                    key={link.href}
                    variant="ghost"
                    onClick={() => scrollToSection(link.href)}
                    className={`justify-start ${activeSection === link.href.slice(1) ? "bg-primary/10 text-primary" : ""}`}
                  >
                    {link.label}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 animate-in fade-in duration-700">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Sparkles className="h-4 w-4" />
                Available for Freelance Projects
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              Hi, I&apos;m{" "}
              <span className="text-primary relative">
                {personalInfo.name}
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                  <path d="M2 10C50 4 150 2 298 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-primary/30"/>
                </svg>
              </span>
            </h1>

            <div className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
              <span className="font-medium text-foreground">{personalInfo.title}</span>
            </div>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              {personalInfo.tagline}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
              <Button size="lg" onClick={() => scrollToSection("#contact")} className="gap-2">
                <Send className="h-4 w-4" />
                Get In Touch
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection("#projects")} className="gap-2">
                <ExternalLink className="h-4 w-4" />
                View Projects
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-4 mt-10 animate-in fade-in duration-700 delay-700">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
              <ChevronDown className="h-6 w-6 text-muted-foreground" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">About Me</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Know Me <span className="text-primary">Better</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="aspect-square max-w-md mx-auto relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl transform rotate-6" />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl transform -rotate-3" />
                  <div className="relative bg-card rounded-3xl overflow-hidden aspect-square flex items-center justify-center border">
                    <Avatar className="w-48 h-48">
                      <AvatarImage src={personalInfo.avatar} alt={personalInfo.name} />
                      <AvatarFallback className="text-6xl bg-primary/10 text-primary font-bold">
                        MN
                      </AvatarFallback>
                    </Avatar>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-4">
                    I&apos;m {personalInfo.name}, a{" "}
                    <span className="text-primary">{personalInfo.title}</span>
                  </h3>
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {personalInfo.bio}
                  </p>
                </div>

                <Separator />

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium text-sm">{personalInfo.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium">{personalInfo.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Globe className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Status</p>
                      <p className="font-medium">Available for Work</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Zap className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Experience</p>
                      <p className="font-medium">Learning & Growing</p>
                    </div>
                  </div>
                </div>

                <Button onClick={() => scrollToSection("#contact")} className="gap-2">
                  Let&apos;s Work Together
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">Skills</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                My <span className="text-primary">Expertise</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Technologies and tools I work with to bring ideas to life
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="group p-6 rounded-2xl bg-card border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-semibold">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>

            {/* Quick Skills Tags */}
            <div className="mt-12 text-center">
              <p className="text-sm text-muted-foreground mb-4">Other technologies I work with:</p>
              <div className="flex flex-wrap justify-center gap-2">
                {["C", "Java", "Responsive Design", "REST APIs", "JSON", "DOM Manipulation", "Flexbox", "Grid", "Animations"].map((tag) => (
                  <Badge key={tag} variant="secondary" className="px-4 py-1">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">Services</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What I <span className="text-primary">Offer</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Professional services tailored to help your business grow online
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card
                  key={service.title}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-card"
                >
                  <CardHeader>
                    <div className="p-4 rounded-2xl bg-primary/10 w-fit mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <service.icon className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground mb-4">
                      {service.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <Badge key={feature} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">Projects</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                My <span className="text-primary">Work</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A collection of projects I&apos;ve built and contributed to
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <Card
                  key={project.title}
                  className="group overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Code2 className="h-16 w-16 text-primary/30" />
                    </div>
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <Button size="sm" asChild>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View Live
                        </a>
                      </Button>
                      <Button size="sm" variant="secondary" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" asChild>
                <a href="https://github.com/mnuhman?tab=repositories" target="_blank" rel="noopener noreferrer" className="gap-2">
                  <Github className="h-4 w-4" />
                  View All Projects on GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">Contact</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Let&apos;s <span className="text-primary">Connect</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Have a project in mind or just want to say hello? Feel free to reach out!
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Contact Info Cards */}
              <div className="space-y-4">
                {/* Email Card */}
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-semibold mb-1">Email Me</h3>
                        <a href="mailto:mohammednuhman333@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors break-all">
                          mohammednuhman333@gmail.com
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Location Card */}
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Location</h3>
                        <p className="text-sm text-muted-foreground">Malappuram, Kerala, India</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Status Card */}
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-green-500/10 shrink-0">
                        <Globe className="h-6 w-6 text-green-500" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Availability</h3>
                        <p className="text-sm text-muted-foreground">Available for freelance projects</p>
                        <Badge variant="outline" className="mt-2 text-green-500 border-green-500/30">Open to Work</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Social Profiles Grid */}
              <div className="lg:col-span-2">
                <Card className="border-0 shadow-lg h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-primary" />
                      Connect With Me
                    </CardTitle>
                    <CardDescription>
                      Follow me on social media for updates, tips, and more content.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {socialLinks.map((social) => (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-4 p-5 rounded-xl bg-muted hover:bg-primary/10 border border-transparent hover:border-primary/30 transition-all group"
                        >
                          <div className="p-3 rounded-xl bg-background group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                            <social.icon className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="font-semibold">{social.label}</p>
                            <p className="text-sm text-muted-foreground group-hover:text-primary/80 transition-colors">{social.username}</p>
                          </div>
                        </a>
                      ))}
                    </div>

                    {/* Quick CTA */}
                    <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20">
                      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div>
                          <h4 className="font-semibold mb-1">Ready to start a project?</h4>
                          <p className="text-sm text-muted-foreground">Let&apos;s create something amazing together!</p>
                        </div>
                        <Button className="shrink-0" asChild>
                          <a href="mailto:mohammednuhman333@gmail.com">
                            <Send className="h-4 w-4 mr-2" />
                            Send Email
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold">Nuhman<span className="text-primary">.</span></span>
            </div>
            <p className="text-sm text-muted-foreground text-center">
              &copy; {new Date().getFullYear()} Mohammed Nuhman M. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.slice(0, 3).map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
