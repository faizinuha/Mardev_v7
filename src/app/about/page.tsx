"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaFigma, FaSchool } from "react-icons/fa6";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";
import { useInView } from "react-intersection-observer";

type Props = {};

const AboutPage = (props: Props) => {
  const { ref: aboutRef, inView: aboutInView } = useInView({ threshold: 0.2, triggerOnce: true });
  const { ref: skillsRef, inView: skillsInView } = useInView({ threshold: 0.2, triggerOnce: true });
  const { ref: experienceRef, inView: experienceInView } = useInView({ threshold: 0.2, triggerOnce: true });

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
    <div className="min-h-screen py-10 px-5 lg:px-20 space-y-16">
      {/* About Section */}
      <motion.div
        ref={aboutRef}
        initial="hidden"
        animate={aboutInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="flex flex-col-reverse lg:flex-row gap-10 items-center"
      >
        <motion.div variants={itemVariants} className="w-full lg:w-2/3 space-y-4">
          <h1 className="text-5xl lg:text-6xl font-display font-bold">
            <span className="gradient-text">About Me</span>
          </h1>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Hi, I'm <span className="text-primary font-semibold">Abdul Rozak</span>, a frontend and backend Developer with a basic
              understanding of Backend, Web Designer (Figma, Canva), and a
              self-taught UI Programmer from Indonesia/Japan. I am passionate about
              creating intuitive user interfaces and developing functional web
              applications.
            </p>
            <p>
              I enjoy working with both frontend and backend technologies, and
              I'm constantly improving my skills. My learning journey has been
              shaped by hands-on experience and the pursuit of knowledge through
              online resources and personal projects.
            </p>
            <p>
              In my free time, I like exploring new design tools, creating
              prototypes, and learning about the latest web development trends.
              I also love playing around with design concepts and experimenting
              with different UI designs.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{ rotate: 0, scale: 1.05 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-2xl opacity-30" />
          <Image
            src={"/images/Avatar.png"}
            alt="Abdul Rozak"
            loading="lazy"
            width={1000}
            height={1000}
            className="relative w-64 lg:w-80 rounded-2xl border-4 border-primary/30 shadow-2xl object-cover rotate-3 hover:rotate-0 transition-transform duration-300"
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
      >
        <motion.h2 variants={itemVariants} className="text-4xl lg:text-5xl font-display font-bold text-center">
          <span className="gradient-text-ocean">Skillset</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Language */}
          <motion.div
            variants={itemVariants}
            className="bg-card border border-border rounded-2xl p-6 hover:border-primary transition-all hover:shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-4 text-primary">💻 Languages</h3>
            <div className="grid grid-cols-2 gap-3">
              {language.map((item: string, i: number) => (
                <motion.div
                  key={i + "language"}
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Badge
                    className="w-full justify-center py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-all"
                    variant={"secondary"}
                  >
                    {item}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* frontend and backend */}
          <motion.div
            variants={itemVariants}
            className="bg-card border border-border rounded-2xl p-6 hover:border-secondary transition-all hover:shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-4 text-secondary">🎨 Frontend</h3>
            <div className="grid grid-cols-2 gap-3">
              {frontend.map((item: string, i: number) => (
                <motion.div
                  key={i + "frontend"}
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Badge
                    className="w-full justify-center py-2 cursor-pointer hover:bg-secondary hover:text-secondary-foreground transition-all"
                    variant={"secondary"}
                  >
                    {item}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Backend */}
          <motion.div
            variants={itemVariants}
            className="bg-card border border-border rounded-2xl p-6 hover:border-accent transition-all hover:shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-4 text-accent">⚙️ Backend</h3>
            <div className="grid grid-cols-2 gap-3">
              {backend.map((item: string, i: number) => (
                <motion.div
                  key={i + "backend"}
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Badge
                    className="w-full justify-center py-2 cursor-pointer hover:bg-accent hover:text-accent-foreground transition-all"
                    variant={"secondary"}
                  >
                    {item}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div
            variants={itemVariants}
            className="bg-card border border-border rounded-2xl p-6 hover:border-primary transition-all hover:shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-4 text-primary">🛠️ Tools</h3>
            <div className="grid grid-cols-2 gap-3">
              {tools.map((item: string, i: number) => (
                <motion.div
                  key={i + "tools"}
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Badge
                    className="w-full justify-center py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-all"
                    variant={"secondary"}
                  >
                    {item}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Experience Section */}
      <motion.div
        ref={experienceRef}
        initial="hidden"
        animate={experienceInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="space-y-8"
      >
        <motion.h2
          variants={itemVariants}
          className="flex items-center gap-3 text-4xl font-display font-bold"
        >
          <HiMiniBuildingOffice2 className="text-primary" />
          <span className="gradient-text-sunset">Experience</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {experience.map((item: Experience, index: number) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.15)" }}
              className="bg-card border-2 border-border rounded-2xl p-6 transition-all relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-primary mb-2">{item.title}</h3>
                <p className="text-foreground font-medium">{item.position}</p>
                <p className="text-sm text-muted-foreground mt-1">{item.years}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Education Section */}
      <motion.div
        initial="hidden"
        animate={experienceInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="space-y-8"
      >
        <motion.h2
          variants={itemVariants}
          className="flex items-center gap-3 text-4xl font-display font-bold"
        >
          <FaSchool className="text-secondary" />
          <span className="gradient-text-forest">Education</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {education.map((item: Education, index: number) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.15)" }}
              className="bg-card border-2 border-border rounded-2xl p-6 transition-all relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-secondary mb-2">{item.name}</h3>
                <p className="text-foreground font-medium">{item.position}</p>
                <p className="text-sm text-muted-foreground">{item.major}</p>
                <p className="text-sm text-muted-foreground mt-1">{item.duration}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Web Design Section */}
      <motion.div
        initial="hidden"
        animate={experienceInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="space-y-8"
      >
        <motion.h2
          variants={itemVariants}
          className="flex items-center gap-3 text-4xl font-display font-bold"
        >
          <FaFigma className="text-accent" />
          <span className="gradient-text">Web Design</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {Webdesain.map((item: Education, index: number) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.15)" }}
              className="bg-card border-2 border-border rounded-2xl p-6 transition-all relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-accent mb-2">{item.name}</h3>
                <p className="text-foreground font-medium">{item.position}</p>
                <p className="text-sm text-muted-foreground">{item.major}</p>
                <p className="text-sm text-muted-foreground mt-1">{item.duration}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

type Experience = {
  title: string;
  position: string;
  years: string;
};

type Education = {
  name: string;
  position: string;
  major: string;
  duration: string;
};

const language = ["Html & Css", "JavaScript", "PHP", "React", "Next", "TypeScript", "C#"];

const frontend = [
  "React.JS",
  "Next.JS",
  "Tailwind CSS",
  "Bootstrap",
  "Figma",
  "Canva",
  "ShadCn",
];

const tools = [
  "Figma",
  "Canva",
  "Git",
  "VS Code",
  "Docker",
  "Vercel",
  "ChatGPT 4.1",
  "Nginx",
];

const backend = ["Node.js", "Express", "Supabase", "MySQL", "PostgreSQL", "MongoDB"];

const experience = [
  {
    title: "PT HUMMA TEKNOLOGI INDONESIA",
    position: "Frontend Developer",
    years: "2023-Present",
  },
  {
    title: "UI School (Self-Taught)",
    position: "Frontend Developer, Backend",
    years: "2024-Present",
  },
];

const education = [
  {
    name: "SMK Al Azhar",
    position: "FrontEnd | Backend",
    major: "Rekayasa Perangkat Lunak",
    duration: "2020-2023",
  },
];

const Webdesain = [
  {
    name: "UI UX",
    position: "Figma Designer",
    major: "Canva | Lovart AI",
    duration: "2023-Present",
  },
];

export default AboutPage;
