import { jsx, jsxs } from "react/jsx-runtime";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { FaReact, FaPython, FaGitAlt, FaGithub, FaFigma, FaEnvelope, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiFastapi, SiElectron, SiTailwindcss, SiThreedotjs, SiLangchain, SiSupabase, SiPostgresql, SiFramer, SiGsap, SiVite } from "react-icons/si";
function FadeIn({
  children,
  as = "div",
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className,
  style
}) {
  const Comp = motion.create(as);
  return /* @__PURE__ */ jsx(
    Comp,
    {
      initial: { opacity: 0, x, y },
      whileInView: { opacity: 1, x: 0, y: 0 },
      viewport: { once: true, margin: "50px", amount: 0 },
      transition: { delay, duration, ease: [0.25, 0.1, 0.25, 1] },
      className,
      style,
      children
    }
  );
}
function Magnet({
  children,
  padding = 150,
  strength = 3,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.6s ease-in-out",
  className
}) {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);
  useEffect(() => {
    const handle = (e) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const within = Math.abs(dx) < rect.width / 2 + padding && Math.abs(dy) < rect.height / 2 + padding;
      if (within) {
        setActive(true);
        setPos({ x: dx / strength, y: dy / strength });
      } else {
        setActive(false);
        setPos({ x: 0, y: 0 });
      }
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, [padding, strength]);
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      className,
      style: {
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
        transition: active ? activeTransition : inactiveTransition,
        willChange: "transform"
      },
      children
    }
  );
}
function ContactButton({
  href = "mailto:aminehamzaoui1925@gmail.com"
}) {
  return /* @__PURE__ */ jsx(
    "a",
    {
      href,
      className: "\n        inline-flex items-center justify-center\n        rounded-full\n        px-8 py-3 sm:px-10 sm:py-4 md:px-12 md:py-4\n        text-xs sm:text-sm md:text-base\n        font-semibold uppercase tracking-[0.25em]\n        text-white\n        transition-all duration-300\n        hover:scale-105 hover:-translate-y-1\n        active:scale-95\n      ",
      style: {
        background: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(255,255,255,0.15)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        boxShadow: `
          0 0 20px rgba(168, 85, 247, 0.35),
          0 0 40px rgba(236, 72, 153, 0.20),
          inset 0 1px 1px rgba(255,255,255,0.12)
        `
      },
      children: "Contact Me"
    }
  );
}
const aminePortrait = "/assets/amine-CiwTsmF2.png";
const NAV_LINKS = [
  "About",
  "Skills",
  "Services",
  "Projects",
  "Contact"
];
function HeroSection() {
  return /* @__PURE__ */ jsxs(
    "section",
    {
      className: "h-screen flex flex-col relative",
      style: { overflowX: "clip" },
      children: [
        /* @__PURE__ */ jsx(
          FadeIn,
          {
            as: "nav",
            delay: 0,
            y: -20,
            className: "flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8 relative z-20",
            children: NAV_LINKS.map((link) => /* @__PURE__ */ jsx(
              "a",
              {
                href: `#${link.toLowerCase()}`,
                className: "\n              text-[#D7E2EA]\n              font-medium\n              uppercase\n              tracking-wider\n              text-sm\n              md:text-lg\n              lg:text-[1.4rem]\n              hover:opacity-70\n              transition-opacity duration-200\n            ",
                children: link
              },
              link
            ))
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "overflow-hidden mt-6 sm:mt-4 md:-mt-5 px-2", children: /* @__PURE__ */ jsx(FadeIn, { delay: 0.15, y: 40, children: /* @__PURE__ */ jsx(
          "h1",
          {
            className: "\n              hero-heading\n              font-black\n              uppercase\n              tracking-tight\n              leading-none\n              whitespace-nowrap\n              w-full\n              text-[14vw]\n              sm:text-[15vw]\n              md:text-[16vw]\n              lg:text-[17.5vw]\n            ",
            children: "Hi, i'm vansh"
          }
        ) }) }),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "\n          mt-auto\n          flex\n          justify-between\n          items-end\n          pb-7\n          sm:pb-8\n          md:pb-10\n          px-6\n          md:px-10\n          relative\n          z-20\n        ",
            children: [
              /* @__PURE__ */ jsx(FadeIn, { delay: 0.35, y: 20, children: /* @__PURE__ */ jsx(
                "p",
                {
                  className: "\n              text-[#D7E2EA]\n              font-light\n              uppercase\n              tracking-wide\n              leading-snug\n              max-w-[160px]\n              sm:max-w-[220px]\n              md:max-w-[260px]\n            ",
                  style: {
                    fontSize: "clamp(0.75rem, 1.4vw, 1.5rem)"
                  },
                  children: "AI Engineer • Full-Stack Developer • UI/UX Designer building AI-powered desktop and web applications"
                }
              ) }),
              /* @__PURE__ */ jsx(FadeIn, { delay: 0.5, y: 20, children: /* @__PURE__ */ jsx(ContactButton, {}) })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          FadeIn,
          {
            delay: 0.6,
            y: 30,
            className: "\n          absolute\n          left-1/2\n          -translate-x-1/2\n          z-10\n          top-1/2\n          -translate-y-1/2\n          sm:top-auto\n          sm:translate-y-0\n          sm:bottom-0\n          w-[280px]\n          sm:w-[360px]\n          md:w-[440px]\n          lg:w-[520px]\n        ",
            children: /* @__PURE__ */ jsx(
              Magnet,
              {
                padding: 150,
                strength: 3,
                activeTransition: "transform 0.3s ease-out",
                inactiveTransition: "transform 0.6s ease-in-out",
                children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: aminePortrait,
                    alt: "Vansh Sambyal portrait",
                    className: "w-full h-auto select-none pointer-events-none",
                    draggable: false
                  }
                )
              }
            )
          }
        )
      ]
    }
  );
}
const IMAGES = [
  "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
  "https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif",
  "https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif",
  "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
  "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
  "https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif",
  "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif",
  "https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif",
  "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
  "https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif",
  "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif",
  "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
  "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif",
  "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif",
  "https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif",
  "https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif",
  "https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif",
  "https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif",
  "https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif"
];
const ROW1 = IMAGES.slice(0, 11);
const ROW2 = IMAGES.slice(11);
function Row({ images, direction }) {
  const tripled = [...images, ...images, ...images];
  return /* @__PURE__ */ jsx("div", { className: "flex gap-3", style: { willChange: "transform" }, children: tripled.map((src, i) => /* @__PURE__ */ jsx(
    "img",
    {
      src,
      alt: "",
      loading: "lazy",
      className: "rounded-2xl object-cover shrink-0",
      style: { width: 420, height: 270 }
    },
    i
  )) });
}
function MarqueeSection() {
  const sectionRef = useRef(null);
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY;
      const value = (window.scrollY - top + window.innerHeight) * 0.3;
      setOffset(value);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const x1 = offset - 200;
  const x2 = -(offset - 200);
  return /* @__PURE__ */ jsxs(
    "section",
    {
      ref: sectionRef,
      className: "pt-24 sm:pt-32 md:pt-40 pb-10 flex flex-col gap-3",
      style: { background: "#0C0C0C", overflowX: "clip" },
      children: [
        /* @__PURE__ */ jsx("div", { style: { transform: `translateX(${x1}px)`, willChange: "transform" }, children: /* @__PURE__ */ jsx(Row, { images: ROW1, direction: "right" }) }),
        /* @__PURE__ */ jsx("div", { style: { transform: `translateX(${x2}px)`, willChange: "transform" }, children: /* @__PURE__ */ jsx(Row, { images: ROW2, direction: "left" }) })
      ]
    }
  );
}
function Char({
  char,
  progress,
  range
}) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return /* @__PURE__ */ jsxs("span", { className: "relative inline-block", children: [
    /* @__PURE__ */ jsx("span", { className: "opacity-0", children: char === " " ? " " : char }),
    /* @__PURE__ */ jsx(motion.span, { style: { opacity }, className: "absolute left-0 top-0", children: char === " " ? " " : char })
  ] });
}
function AnimatedText({ text, className, style }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"]
  });
  const chars = text.split("");
  return /* @__PURE__ */ jsx("p", { ref, className, style, children: chars.map((c, i) => {
    const start = i / chars.length;
    const end = start + 1 / chars.length;
    return /* @__PURE__ */ jsx(Char, { char: c, progress: scrollYProgress, range: [start, end] }, i);
  }) });
}
function AboutSection() {
  return /* @__PURE__ */ jsxs(
    "section",
    {
      id: "about",
      className: "relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 gap-10 sm:gap-14 md:gap-16",
      style: { background: "#0C0C0C", overflowX: "clip" },
      children: [
        /* @__PURE__ */ jsx(
          FadeIn,
          {
            delay: 0.1,
            x: -80,
            y: 0,
            duration: 0.9,
            className: "absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px]",
            children: /* @__PURE__ */ jsx("img", { src: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png", alt: "", className: "w-full h-auto" })
          }
        ),
        /* @__PURE__ */ jsx(
          FadeIn,
          {
            delay: 0.25,
            x: -80,
            y: 0,
            duration: 0.9,
            className: "absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px]",
            children: /* @__PURE__ */ jsx("img", { src: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png", alt: "", className: "w-full h-auto" })
          }
        ),
        /* @__PURE__ */ jsx(
          FadeIn,
          {
            delay: 0.15,
            x: 80,
            y: 0,
            duration: 0.9,
            className: "absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px]",
            children: /* @__PURE__ */ jsx("img", { src: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png", alt: "", className: "w-full h-auto" })
          }
        ),
        /* @__PURE__ */ jsx(
          FadeIn,
          {
            delay: 0.3,
            x: 80,
            y: 0,
            duration: 0.9,
            className: "absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px]",
            children: /* @__PURE__ */ jsx("img", { src: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png", alt: "", className: "w-full h-auto" })
          }
        ),
        /* @__PURE__ */ jsx(FadeIn, { delay: 0, y: 40, className: "text-center relative z-10", children: /* @__PURE__ */ jsx(
          "h2",
          {
            className: "hero-heading font-black uppercase leading-none tracking-tight",
            style: { fontSize: "clamp(3rem, 12vw, 160px)" },
            children: "About me"
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex flex-col items-center gap-16 sm:gap-20 md:gap-24", children: [
          /* @__PURE__ */ jsx(
            AnimatedText,
            {
              text: "I'm an AI-focused developer from India who enjoys building applications that combine intelligent automation with polished user experiences. My work spans AI assistants, Electron desktop apps, modern React websites, and automation systems. I enjoy taking an idea from concept to production by designing the interface, building the backend, integrating AI models, and optimizing the overall experience.",
              className: "text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px]",
              style: { fontSize: "clamp(1rem, 2vw, 1.35rem)" }
            }
          ),
          /* @__PURE__ */ jsx(ContactButton, {})
        ] })
      ]
    }
  );
}
const SERVICES = [
  {
    n: "01",
    name: "AI Applications",
    desc: "Building intelligent AI-powered applications with voice interaction, RAG memory, multi-agent architectures, and streaming responses."
  },
  {
    n: "02",
    name: "Desktop Applications",
    desc: "Creating cross-platform desktop apps with Electron featuring premium UI, automation capabilities, and seamless performance."
  },
  {
    n: "03",
    name: "SaaS Platforms",
    desc: "Developing modern SaaS platforms with authentication, dashboards, scalable backends, and intelligent workflows."
  },
  {
    n: "04",
    name: "Business Websites",
    desc: "Designing responsive, animated business websites with 3D effects, premium interfaces, and optimized performance."
  },
  {
    n: "05",
    name: "AI Agents & Automation",
    desc: "Building autonomous AI agents, chatbots, and workflow automation systems that streamline processes and boost productivity."
  }
];
function ServicesSection() {
  return /* @__PURE__ */ jsx("section", { id: "services", className: "px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 bg-[#0C0C0C]", children: /* @__PURE__ */ jsxs(
    "div",
    {
      className: "\n          max-w-7xl mx-auto\n          rounded-[40px] sm:rounded-[50px] md:rounded-[60px]\n          border border-white/10\n          bg-[#0C0C0C]\n          px-6 sm:px-8 md:px-12\n          py-12 sm:py-16 md:py-20\n          shadow-[0_0_60px_rgba(255,255,255,0.03)]\n        ",
      children: [
        /* @__PURE__ */ jsx(FadeIn, { y: 40, children: /* @__PURE__ */ jsx(
          "h2",
          {
            className: "\n              hero-heading\n              font-black\n              uppercase\n              leading-none\n              tracking-tight\n              text-center\n              mb-16 sm:mb-20 md:mb-28\n              text-white\n            ",
            style: {
              fontSize: "clamp(3rem, 12vw, 160px)"
            },
            children: "Services"
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "max-w-5xl mx-auto", children: SERVICES.map((s, i) => /* @__PURE__ */ jsx(FadeIn, { delay: i * 0.1, y: 30, children: /* @__PURE__ */ jsxs(
          "div",
          {
            className: "\n                  group\n                  flex flex-col md:flex-row\n                  md:items-center\n                  gap-6 sm:gap-10 md:gap-14\n                  py-8 sm:py-10 md:py-12\n                  px-4 md:px-6\n                  rounded-3xl\n                  border border-transparent\n                  transition-all duration-300\n                  hover:bg-white/5\n                  hover:border-white/10\n                  hover:backdrop-blur-sm\n                  hover:-translate-y-1\n                ",
            style: {
              borderTop: i === 0 ? "1px solid rgba(255,255,255,0.12)" : void 0,
              borderBottom: "1px solid rgba(255,255,255,0.12)"
            },
            children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "\n                    font-black\n                    shrink-0\n                    transition-all duration-300\n                    group-hover:opacity-40\n                  ",
                  style: {
                    color: "#FFFFFF",
                    opacity: 0.15,
                    fontSize: "clamp(3rem, 10vw, 140px)",
                    lineHeight: 1
                  },
                  children: s.n
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3 sm:gap-4", children: [
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "\n                      font-medium\n                      uppercase\n                      transition-all duration-300\n                      group-hover:translate-x-2\n                    ",
                    style: {
                      color: "#FFFFFF",
                      fontSize: "clamp(1rem, 2.2vw, 2.1rem)",
                      lineHeight: 1.1
                    },
                    children: s.name
                  }
                ),
                /* @__PURE__ */ jsx(
                  "p",
                  {
                    className: "font-light leading-relaxed max-w-2xl",
                    style: {
                      color: "#FFFFFF",
                      opacity: 0.65,
                      fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)"
                    },
                    children: s.desc
                  }
                )
              ] })
            ]
          }
        ) }, s.n)) })
      ]
    }
  ) });
}
function LiveProjectButton({ href = "#" }) {
  return /* @__PURE__ */ jsx(
    "a",
    {
      href,
      target: "_blank",
      rel: "noopener noreferrer",
      className: "inline-block rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base hover:bg-[#D7E2EA]/10 transition-colors",
      children: "Live Project"
    }
  );
}
const cyraImg = "/assets/cyra-BAQdiiYx.png";
const bmwImg = "/assets/bmwM4-Bs6g63iP.png";
const bugattiImg = "/assets/Buggatitorbillon-B2_6LL81.png";
const gymImg = "/assets/gym-DbYT-htR.png";
const PROJECTS = [
  {
    n: "01",
    category: "AI",
    name: "Cyra AI",
    image: cyraImg,
    link: "#"
  },
  {
    n: "02",
    category: "Web",
    name: "BMW M4 POWER!",
    image: bmwImg,
    link: "#"
  },
  {
    n: "03",
    category: "AI",
    name: "BUGGATI TOURBILLON!",
    image: bugattiImg,
    link: "#"
  },
  {
    n: "04",
    category: "Web",
    name: "Gym Website",
    image: gymImg,
    link: "#"
  }
];
function ProjectCard({
  project,
  index,
  total,
  progress
}) {
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(
    progress,
    [index / total, 1],
    [1, targetScale]
  );
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "sticky top-24 md:top-32",
      style: { top: `${index * 28 + 96}px` },
      children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          style: { scale },
          className: "\n          rounded-[40px] sm:rounded-[50px] md:rounded-[60px]\n          border border-white/10\n          bg-[#0C0C0C]/95\n          backdrop-blur-xl\n          p-4 sm:p-6 md:p-8\n          shadow-[0_0_60px_rgba(255,255,255,0.03)]\n          transition-all duration-300\n          hover:border-white/20\n        ",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6 md:mb-8 px-2 sm:px-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 sm:gap-6 md:gap-8 flex-wrap", children: [
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "hero-heading font-black text-white/15",
                    style: {
                      fontSize: "clamp(3rem, 10vw, 140px)",
                      lineHeight: 1
                    },
                    children: project.n
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-white/50 uppercase tracking-[0.25em] text-xs sm:text-sm", children: project.category }),
                  /* @__PURE__ */ jsx(
                    "span",
                    {
                      className: "text-white font-medium uppercase",
                      style: {
                        fontSize: "clamp(1rem, 2vw, 1.75rem)"
                      },
                      children: project.name
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsx(LiveProjectButton, { href: project.link })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-5 gap-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "md:col-span-2 flex flex-col gap-4", children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: project.image,
                    alt: project.name,
                    loading: "lazy",
                    className: "\n                w-full object-cover\n                rounded-[30px]\n                border border-white/10\n                hover:scale-[1.02]\n                transition-all duration-300\n              ",
                    style: {
                      height: "clamp(140px,18vw,240px)"
                    }
                  }
                ),
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: project.image,
                    alt: project.name,
                    loading: "lazy",
                    className: "\n                w-full object-cover\n                rounded-[30px]\n                border border-white/10\n                hover:scale-[1.02]\n                transition-all duration-300\n              ",
                    style: {
                      height: "clamp(180px,24vw,320px)"
                    }
                  }
                )
              ] }),
              /* @__PURE__ */ jsx("div", { className: "md:col-span-3", children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: project.image,
                  alt: project.name,
                  loading: "lazy",
                  className: "\n                w-full h-full object-cover\n                rounded-[35px] md:rounded-[45px]\n                border border-white/10\n                hover:scale-[1.01]\n                transition-all duration-300\n              ",
                  style: {
                    minHeight: "100%"
                  }
                }
              ) })
            ] })
          ]
        }
      )
    }
  );
}
function ProjectsSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  return /* @__PURE__ */ jsxs(
    "section",
    {
      id: "projects",
      ref: containerRef,
      className: "\n        px-5 sm:px-8 md:px-10\n        py-20 sm:py-24 md:py-32\n        bg-[#0C0C0C]\n      ",
      children: [
        /* @__PURE__ */ jsx(
          FadeIn,
          {
            y: 40,
            className: "text-center mb-16 sm:mb-20 md:mb-28",
            children: /* @__PURE__ */ jsx(
              "h2",
              {
                className: "\n            hero-heading\n            font-black\n            uppercase\n            leading-none\n            tracking-tight\n            text-white\n          ",
                style: {
                  fontSize: "clamp(3rem, 12vw, 160px)"
                },
                children: "Projects"
              }
            )
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto", children: PROJECTS.map((project, index) => /* @__PURE__ */ jsx(
          "div",
          {
            className: "h-[85vh]",
            children: /* @__PURE__ */ jsx(
              ProjectCard,
              {
                project,
                index,
                total: PROJECTS.length,
                progress: scrollYProgress
              }
            )
          },
          project.n
        )) })
      ]
    }
  );
}
const row1 = [
  { Icon: FaReact, name: "React", color: "#61DAFB" },
  { Icon: SiNextdotjs, name: "Next.js", color: "#FFFFFF" },
  { Icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { Icon: FaPython, name: "Python", color: "#3776AB" },
  { Icon: SiFastapi, name: "FastAPI", color: "#009688" },
  { Icon: SiElectron, name: "Electron", color: "#47848F" },
  { Icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" }
];
const row2 = [
  { Icon: SiThreedotjs, name: "Three.js", color: "#FFFFFF" },
  { Icon: SiLangchain, name: "LangChain", color: "#FFFFFF" },
  { Icon: SiSupabase, name: "Supabase", color: "#3FCF8E" },
  { Icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1" },
  { Icon: FaGitAlt, name: "Git", color: "#F05032" },
  { Icon: FaGithub, name: "GitHub", color: "#FFFFFF" },
  { Icon: FaFigma, name: "Figma", color: "#F24E1E" }
];
const row3 = [
  { Icon: SiFramer, name: "Framer Motion", color: "#0055FF" },
  { Icon: SiGsap, name: "GSAP", color: "#88CE02" },
  { Icon: SiVite, name: "Vite", color: "#646CFF" }
];
function SkillRow({
  skills,
  reverse = false
}) {
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      animate: {
        x: reverse ? ["-50%", "0%"] : ["0%", "-50%"]
      },
      transition: {
        duration: 30,
        repeat: Infinity,
        ease: "linear"
      },
      className: "flex gap-6 whitespace-nowrap",
      children: [...skills, ...skills].map((skill, index) => {
        const Icon = skill.Icon;
        return /* @__PURE__ */ jsxs(
          "div",
          {
            className: "\n              flex items-center gap-4\n              px-7 py-4\n              rounded-full\n              border border-white/10\n              bg-white/[0.03]\n              backdrop-blur-md\n              hover:bg-white/[0.06]\n              transition-all duration-300\n              shrink-0\n            ",
            children: [
              /* @__PURE__ */ jsx(Icon, { size: 36, color: skill.color }),
              /* @__PURE__ */ jsx("span", { className: "text-white font-medium text-lg", children: skill.name })
            ]
          },
          index
        );
      })
    }
  );
}
function SkillsSection() {
  return /* @__PURE__ */ jsxs(
    "section",
    {
      id: "skills",
      className: "py-24 overflow-hidden",
      style: { background: "#0C0C0C" },
      children: [
        /* @__PURE__ */ jsx(FadeIn, { y: 40, children: /* @__PURE__ */ jsx(
          "h2",
          {
            className: "\n            hero-heading\n            font-black\n            uppercase\n            leading-none\n            tracking-tight\n            text-center\n            text-white\n            mb-20\n          ",
            style: {
              fontSize: "clamp(3rem, 12vw, 160px)"
            },
            children: "Skills"
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-8", children: [
          /* @__PURE__ */ jsx(SkillRow, { skills: row1 }),
          /* @__PURE__ */ jsx(SkillRow, { skills: row2, reverse: true }),
          /* @__PURE__ */ jsx(SkillRow, { skills: row3 })
        ] })
      ]
    }
  );
}
function FooterSection() {
  return /* @__PURE__ */ jsx("footer", { className: "bg-[#0C0C0C] px-5 sm:px-8 md:px-10 pt-24 pb-10", id: "contact", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsx(FadeIn, { y: 40, children: /* @__PURE__ */ jsxs(
      "h2",
      {
        className: "\n              hero-heading\n              font-black\n              uppercase\n              leading-none\n              tracking-tight\n              text-white\n              text-center\n            ",
        style: {
          fontSize: "clamp(3rem, 10vw, 8rem)"
        },
        children: [
          "Let's Build",
          /* @__PURE__ */ jsx("br", {}),
          "Something Amazing"
        ]
      }
    ) }),
    /* @__PURE__ */ jsx(FadeIn, { delay: 0.2, y: 30, children: /* @__PURE__ */ jsx("div", { className: "flex justify-center mt-12", children: /* @__PURE__ */ jsx(
      "a",
      {
        href: "mailto:vweb1206@gmail.com",
        className: "\n                px-10 py-5\n                rounded-full\n                border border-white/10\n                bg-white/[0.03]\n                backdrop-blur-md\n                text-white\n                uppercase\n                tracking-[0.25em]\n                font-medium\n                transition-all duration-300\n                hover:bg-white/[0.08]\n                hover:border-white/20\n                hover:-translate-y-1\n              ",
        children: "Get In Touch"
      }
    ) }) }),
    /* @__PURE__ */ jsx(FadeIn, { delay: 0.3, y: 20, children: /* @__PURE__ */ jsx("div", { className: "mt-14 flex justify-center", children: /* @__PURE__ */ jsxs(
      "a",
      {
        href: "mailto:vweb1206@gmail.com",
        className: "\n                flex items-center gap-3\n                text-white/70\n                hover:text-white\n                transition-all\n              ",
        children: [
          /* @__PURE__ */ jsx(FaEnvelope, { size: 20 }),
          /* @__PURE__ */ jsx("span", { className: "text-lg", children: "vweb1206@gmail.com" })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsx(FadeIn, { delay: 0.4, y: 20, children: /* @__PURE__ */ jsxs("div", { className: "flex justify-center gap-8 mt-12", children: [
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "https://github.com/vanshsambyal1206-dev",
          target: "_blank",
          rel: "noreferrer",
          className: "\n                text-white/60\n                hover:text-white\n                hover:scale-110\n                transition-all duration-300\n              ",
          children: /* @__PURE__ */ jsx(FaGithub, { size: 30 })
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "https://linkedin.com",
          target: "_blank",
          rel: "noreferrer",
          className: "\n                text-white/60\n                hover:text-[#0A66C2]\n                hover:scale-110\n                transition-all duration-300\n              ",
          children: /* @__PURE__ */ jsx(FaLinkedin, { size: 30 })
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "https://instagram.com",
          target: "_blank",
          rel: "noreferrer",
          className: "\n                text-white/60\n                hover:text-[#E4405F]\n                hover:scale-110\n                transition-all duration-300\n              ",
          children: /* @__PURE__ */ jsx(FaInstagram, { size: 30 })
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "h-px bg-white/10 mt-16 mb-8" }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsx("span", { className: "text-white/40 text-sm", children: "© 2026 Vansh Sambyal. All rights reserved." }),
      /* @__PURE__ */ jsx("span", { className: "text-white/40 text-sm uppercase tracking-[0.2em]", children: "Designed & Developed by Vansh Sambyal" })
    ] })
  ] }) });
}
function Index() {
  return /* @__PURE__ */ jsxs("main", { style: {
    background: "#0C0C0C",
    overflowX: "clip"
  }, children: [
    /* @__PURE__ */ jsx(HeroSection, {}),
    /* @__PURE__ */ jsx(MarqueeSection, {}),
    /* @__PURE__ */ jsx(AboutSection, {}),
    /* @__PURE__ */ jsx(SkillsSection, {}),
    /* @__PURE__ */ jsx(ServicesSection, {}),
    /* @__PURE__ */ jsx(ProjectsSection, {}),
    /* @__PURE__ */ jsx(FooterSection, {})
  ] });
}
export {
  Index as component
};
