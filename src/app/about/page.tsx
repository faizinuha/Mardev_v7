"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const AboutPage = () => {
  const { ref: aboutRef, inView: aboutInView } = useInView({ threshold: 0.2, triggerOnce: true });
  const { ref: skillsRef, inView: skillsInView } = useInView({ threshold: 0.2, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 100 }
    }
  };

  return (
    <div className="min-h-screen py-10 max-w-5xl mx-auto space-y-16">
      {/* About Section */}
      <motion.div
        ref={aboutRef}
        initial="hidden"
        animate={aboutInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="flex flex-col-reverse lg:flex-row gap-10 items-center"
        data-testid="about-section"
      >
        <motion.div variants={itemVariants} className="flex-1 space-y-4">
          <h1 className="text-4xl lg:text-5xl font-bold">
            <span className="text-sakura-gradient">About Me</span>
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            Hai, saya <span className="text-primary font-semibold">Zaki</span> - 
            seorang Backend Developer dari Indonesia. Fokus utama saya adalah pengembangan 
            aplikasi web menggunakan Laravel/PHP, dengan kemampuan tambahan di React dan C#.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Saya senang membangun sistem backend yang solid, API yang efisien, 
            dan solusi database yang optimal.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="relative">
          <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-2xl" />
          <Image
            src="/images/Avatar.png"
            alt="Zaki"
            width={280}
            height={280}
            className="relative rounded-2xl border-2 border-primary/20 shadow-soft object-cover"
          />
        </motion.div>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        ref={skillsRef}
        initial="hidden"
        animate={skillsInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="space-y-8"
        data-testid="skills-section"
      >
        <motion.h2 variants={itemVariants} className="text-3xl font-bold text-center">
          <span className="text-sakura-gradient">Skills</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Backend */}
          <motion.div
            variants={itemVariants}
            className="bg-card border border-border rounded-xl p-5 card-hover"
            data-testid="backend-skills"
          >
            <h3 className="text-lg font-semibold mb-3 text-primary">Backend</h3>
            <div className="flex flex-wrap gap-2">
              {backend.map((item, i) => (
                <Badge key={i} variant="secondary" className="text-xs">
                  {item}
                </Badge>
              ))}
            </div>
          </motion.div>

          {/* Frontend */}
          <motion.div
            variants={itemVariants}
            className="bg-card border border-border rounded-xl p-5 card-hover"
            data-testid="frontend-skills"
          >
            <h3 className="text-lg font-semibold mb-3 text-primary">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {frontend.map((item, i) => (
                <Badge key={i} variant="secondary" className="text-xs">
                  {item}
                </Badge>
              ))}
            </div>
          </motion.div>

          {/* Mobile */}
          <motion.div
            variants={itemVariants}
            className="bg-card border border-border rounded-xl p-5 card-hover"
            data-testid="mobile-skills"
          >
            <h3 className="text-lg font-semibold mb-3 text-primary">Mobile</h3>
            <div className="flex flex-wrap gap-2">
              {mobile.map((item, i) => (
                <Badge key={i} variant="secondary" className="text-xs">
                  {item}
                </Badge>
              ))}
            </div>
          </motion.div>

          {/* Desktop */}
          <motion.div
            variants={itemVariants}
            className="bg-card border border-border rounded-xl p-5 card-hover"
            data-testid="desktop-skills"
          >
            <h3 className="text-lg font-semibold mb-3 text-primary">Desktop</h3>
            <div className="flex flex-wrap gap-2">
              {desktop.map((item, i) => (
                <Badge key={i} variant="secondary" className="text-xs">
                  {item}
                </Badge>
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div
            variants={itemVariants}
            className="bg-card border border-border rounded-xl p-5 card-hover md:col-span-2"
            data-testid="tools-skills"
          >
            <h3 className="text-lg font-semibold mb-3 text-primary">Tools</h3>
            <div className="flex flex-wrap gap-2">
              {tools.map((item, i) => (
                <Badge key={i} variant="secondary" className="text-xs">
                  {item}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Experience */}
      <motion.div
        initial="hidden"
        animate={skillsInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="space-y-6"
        data-testid="experience-section"
      >
        <motion.h2 variants={itemVariants} className="text-3xl font-bold text-center">
          <span className="text-sakura-gradient">Experience</span>
        </motion.h2>

        <div className="space-y-4">
          {experience.map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="bg-card border border-border rounded-xl p-5 card-hover"
            >
              <h3 className="font-semibold text-primary">{item.title}</h3>
              <p className="text-sm text-foreground">{item.position}</p>
              <p className="text-xs text-muted-foreground mt-1">{item.years}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const backend = ["Laravel", "PHP", "Node.js", "Express", "MySQL", "PostgreSQL", "MongoDB", "Supabase"];
const frontend = ["React.js", "Next.js", "React + Vite", "HTML", "CSS", "JavaScript", "TypeScript", "Tailwind CSS"];
const mobile = ["React + Vite + Capacitor"];
const desktop = ["C# + WPF", "Electron"];
const tools = ["Git", "VS Code", "Docker", "Nginx", "Vercel", "Figma"];

const experience = [
  {
    title: "PT HUMMA TEKNOLOGI INDONESIA",
    position: "Frontend Developer",
    years: "2023 - Present",
  },
  {
    title: "Self-Taught Developer",
    position: "Backend & Frontend",
    years: "2024 - Present",
  },
];

export default AboutPage;
