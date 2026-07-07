# PORTFOLIO-1
Vansh Sambyal — AI Engineer, Full-Stack Developer &amp; UI/UX Designer crafting intelligent desktop apps, premium web experiences, and automation systems. Specializing in AI-powered solutions with React, Electron, Python, and LangChain


# portfolio1

A premium, dark-themed developer portfolio built with React, TypeScript, TanStack Router, Framer Motion, and Tailwind CSS. Features parallax scrolling, magnet effects, animated text reveals, and a cinematic scroll-driven project showcase.

---

## About

I'm an AI-focused developer from India who enjoys building applications that combine intelligent automation with polished user experiences. My work spans AI assistants, Electron desktop apps, modern React websites, and automation systems. I enjoy taking an idea from concept to production by designing the interface, building the backend, integrating AI models, and optimizing the overall experience.

---

## Live Preview

> **Tech:** React 19 · TypeScript · TanStack Router · Framer Motion · Tailwind CSS 4 · Vite 7

---

## Features

### Hero Section
- Full-screen hero with massive bold typography
- Magnet effect on the portrait image that follows cursor movement
- Smooth fade-in animations on load
- Responsive navigation bar

### Marquee Section
- Infinite scrolling image marquee with parallax offset on scroll
- Two-row layout with opposite scroll directions

### About Section
- Animated text reveal character by character
- Decorative floating images with fade-in animations
- Contact CTA button

### Skills Section
- Three-row infinite scrolling skills carousel
- Each skill displayed as a pill with icon and label
- Auto-scrolling animation with pause on hover

### Services Section
- Numbered service list (01–05)
- Hover effects with background blur and border glow
- Responsive layout stacking on mobile

### Projects Section
- Scroll-driven sticky card layout with scale transforms
- Each project card scales down as you scroll past it
- Project images in a 2+3 grid layout
- Live project button with link

### Footer / Contact
- Large CTA heading
- Email contact button
- Social links (GitHub, LinkedIn, Instagram)
- Copyright and attribution

---

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | React 19 |
| Language | TypeScript 5.8 |
| Router | TanStack Router |
| Styling | Tailwind CSS 4 |
| Animation | Framer Motion |
| Build Tool | Vite 7 |
| Icons | React Icons |
| UI Components | Radix UI, shadcn/ui |
| Forms | React Hook Form, Zod |
| Charts | Recharts |
| Utilities | clsx, tailwind-merge |

---

## Project Structure

```
src/
├── assets/                    # Images (cyra.png, bmwM4.png, Buggatitorbillon.png, gym.png, amine.png)
├── components/
│   ├── jack/                  # Main section components
│   │   ├── HeroSection.tsx        # Hero with magnet portrait
│   │   ├── MarqueeSection.tsx     # Infinite scrolling marquee
│   │   ├── AboutSection.tsx       # About with animated text
│   │   ├── SkillsSection.tsx      # Skills carousel
│   │   ├── ServicesSection.tsx    # Services list
│   │   ├── ProjectsSection.tsx    # Scroll-driven project cards
│   │   ├── FooterSection.tsx      # Contact & socials
│   │   ├── FadeIn.tsx             # Reusable fade-in wrapper
