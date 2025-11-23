"use client";

import SosmedLink from "@/components/fragments/SosmedLink";
import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import Image from "next/image";
import { ReactNode, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const [displayText, setDisplayText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = [
    "Frontend Developer",
    "Backend Developer"
  ];

  // Advanced Typing Animation
  useEffect(() => {
    const currentText = texts[currentTextIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.substring(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentText.substring(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTextIndex]);

  const { ref: skillsRef, inView: skillsInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  type SosMed = {
    icon: ReactNode;
    url: string;
    label: string;
  };

  const sosMed: SosMed[] = [
    {
      icon: <InstagramLogoIcon width={24} height={24} />,
      url: "#",
      label: "Instagram"
    },
    {
      icon: <GitHubLogoIcon width={24} height={24} />,
      url: "#",
      label: "GitHub"
    },
    {
      icon: <LinkedInLogoIcon width={24} height={24} />,
      url: "#",
      label: "LinkedIn"
    },
  ];

  type Skill = {
    name: string;
    description: string;
    icon: string;
  };

  const skills: Skill[] = [
    { name: "HTML & CSS", description: "Building the structure and style of web pages.", icon: "🎨" },
    { name: "JavaScript", description: "Adding interactivity to web pages.", icon: "⚡" },
    { name: "PHP", description: "Server-side scripting for web development.", icon: "🐘" },
    { name: "Tailwind CSS", description: "Utility-first CSS framework for styling.", icon: "💨" },
    { name: "Bootstrap 5", description: "Popular CSS framework for web design.", icon: "🅱️" },
    { name: "Python", description: "Python Beginner", icon: "🐍" },
    { name: "GitHub", description: "Version control for collaborative projects.", icon: "🔧" },
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Enhanced Background Decorations */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-3xl opacity-20"
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full blur-3xl opacity-20"
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full blur-3xl opacity-15"
          animate={{
            x: [-100, 100, -100],
            y: [-50, 50, -50],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 flex flex-col gap-16 py-10 lg:py-20"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Hero Section */}
        <div className="flex flex-col gap-8 lg:flex-row lg:justify-evenly lg:items-center px-5 lg:px-10">
          <motion.div className="p-0 m-0 space-y-6" variants={itemVariants}>
            <div>
              <motion.h1
                className="text-5xl md:text-6xl lg:text-8xl text-center lg:text-start font-display font-extrabold"
                variants={itemVariants}
              >
                <span className="hidden lg:inline text-foreground/80">I'm</span>
                <br />
                <span className="gradient-text-ocean">Zaki</span>
              </motion.h1>

              <motion.h2
                className="text-xl md:text-2xl lg:text-3xl text-center lg:text-start mt-4 font-medium min-h-[2.5rem]"
                variants={itemVariants}
              >
                <span className="gradient-text">{displayText}</span>
                <span className="blinking-cursor text-primary">|</span>
              </motion.h2>
            </div>

            {/* CTA Buttons */}
            <motion.div
              className="flex gap-4 mt-6 justify-center lg:justify-start flex-wrap"
              variants={itemVariants}
            >
              <motion.button
                className="group relative px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold overflow-hidden transition-smooth"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">View My Work</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              <motion.button
                className="px-8 py-3 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition-smooth"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume
              </motion.button>
            </motion.div>

            {/* Social Media Links */}
            <motion.div
              className="flex gap-4 mt-6 justify-center lg:justify-start"
              variants={itemVariants}
            >
              {sosMed.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <SosmedLink icon={item.icon} url={item.url} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image with Enhanced Animation */}
          <motion.div
            variants={imageVariants}
            whileHover={{
              scale: 1.05,
              rotate: 5, // Changed from array to single value to avoid spring error
              transition: { duration: 0.3 }
            }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-2xl opacity-30 animate-pulse" />
            <Image
              src="/images/Avatar.png"
              alt="John"
              loading="eager"
              width={800}
              height={800}
              priority
              className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full border-4 border-primary/30 shadow-2xl mx-auto object-cover"
            />
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          ref={skillsRef}
          className="w-full px-5 lg:px-10"
          initial="hidden"
          animate={skillsInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2
            className="text-4xl lg:text-5xl font-display font-bold text-center mb-10 gradient-text"
            variants={itemVariants}
          >
            Skills & Expertise
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
          >
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)"
                }}
                className="group relative bg-card border border-border rounded-2xl p-6 text-center transition-smooth overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="text-5xl mb-3">{skill.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
