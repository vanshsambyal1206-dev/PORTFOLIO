import { motion } from "framer-motion";
import { FadeIn } from "./FadeIn";

import {
  FaReact,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from "react-icons/fa";

import {
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiVite,
  SiNextdotjs,
  SiLangchain,
  SiElectron,
  SiFastapi,
  SiSupabase,
  SiPostgresql,
  SiThreedotjs,
  SiGsap,
} from "react-icons/si";

const row1 = [
  { Icon: FaReact, name: "React", color: "#61DAFB" },
  { Icon: SiNextdotjs, name: "Next.js", color: "#FFFFFF" },
  { Icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { Icon: FaPython, name: "Python", color: "#3776AB" },
  { Icon: SiFastapi, name: "FastAPI", color: "#009688" },
  { Icon: SiElectron, name: "Electron", color: "#47848F" },
  { Icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
];

const row2 = [
  { Icon: SiThreedotjs, name: "Three.js", color: "#FFFFFF" },
  { Icon: SiLangchain, name: "LangChain", color: "#FFFFFF" },
  { Icon: SiSupabase, name: "Supabase", color: "#3FCF8E" },
  { Icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1" },
  { Icon: FaGitAlt, name: "Git", color: "#F05032" },
  { Icon: FaGithub, name: "GitHub", color: "#FFFFFF" },
  { Icon: FaFigma, name: "Figma", color: "#F24E1E" },
];

const row3 = [
  { Icon: SiFramer, name: "Framer Motion", color: "#0055FF" },
  { Icon: SiGsap, name: "GSAP", color: "#88CE02" },
  { Icon: SiVite, name: "Vite", color: "#646CFF" },
];

function SkillRow({
  skills,
  reverse = false,
}: {
  skills: typeof row1;
  reverse?: boolean;
}) {
  return (
    <motion.div
      animate={{
        x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
      }}
      transition={{
        duration: 30,
        repeat: Infinity,
        ease: "linear",
      }}
      className="flex gap-6 whitespace-nowrap"
    >
      {[...skills, ...skills].map((skill, index) => {
        const Icon = skill.Icon;

        return (
          <div
            key={index}
            className="
              flex items-center gap-4
              px-7 py-4
              rounded-full
              border border-white/10
              bg-white/[0.03]
              backdrop-blur-md
              hover:bg-white/[0.06]
              transition-all duration-300
              shrink-0
            "
          >
            <Icon size={36} color={skill.color} />

            <span className="text-white font-medium text-lg">
              {skill.name}
            </span>
          </div>
        );
      })}
    </motion.div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills"
      className="py-24 overflow-hidden"
      style={{ background: "#0C0C0C" }}
    >
      <FadeIn y={40}>
        <h2
          className="
            hero-heading
            font-black
            uppercase
            leading-none
            tracking-tight
            text-center
            text-white
            mb-20
          "
          style={{
            fontSize: "clamp(3rem, 12vw, 160px)",
          }}
        >
          Skills
        </h2>
      </FadeIn>

      <div className="flex flex-col gap-8">
        <SkillRow skills={row1} />

        <SkillRow skills={row2} reverse />

        <SkillRow skills={row3} />
      </div>
    </section>
  );
}