"use client";

import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiOutlineMail } from "react-icons/hi";

export default function Home() {
  const [displayText, setDisplayText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = ["Backend Developer", "Laravel Specialist", "Full Stack Dev"];

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

  const skills = [
    { name: "Laravel / PHP", icon: "🔧" },
    { name: "React / Next.js", icon: "⚛" },
    { name: "C# / .NET", icon: "💎" },
    { name: "Mobile Dev", icon: "📱" },
    { name: "Desktop App", icon: "🖥" },
    { name: "Database", icon: "🗄" },
  ];

  const socialLinks = [
    { icon: <GitHubLogoIcon className="w-5 h-5" />, url: "https://github.com/faizinuha", label: "GitHub" },
    { icon: <LinkedInLogoIcon className="w-5 h-5" />, url: "#", label: "LinkedIn" },
    { icon: <HiOutlineMail className="w-5 h-5" />, url: "mailto:zaki@example.com", label: "Email" },
  ];

  return (
    <div className="relative min-h-[calc(100vh-5rem)] overflow-hidden">
      {/* Sakura Petals Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 rounded-full bg-primary/30"
            style={{
              left: `${15 + i * 15}%`,
              top: `${10 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, 100, 0],
              x: [0, 30, 0],
              rotate: [0, 360],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto py-16 lg:py-24">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div
            className="flex-1 text-center lg:text-left space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-2">
              <motion.p
                className="text-muted-foreground text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                こんにちは、私は
              </motion.p>
              <motion.h1
                className="text-5xl lg:text-7xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <span className="text-sakura-gradient">Zaki</span>
              </motion.h1>
              <motion.div
                className="h-10 flex items-center justify-center lg:justify-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <span className="text-xl lg:text-2xl text-muted-foreground">
                  {displayText}
                </span>
                <span className="ml-1 text-primary animate-pulse">|</span>
              </motion.div>
            </div>

            <motion.p
              className="text-muted-foreground max-w-md mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Backend Developer dari Indonesia. Berpengalaman dalam Laravel, PHP, dan pengembangan aplikasi web modern.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Link href="/projects">
                <motion.button
                  data-testid="view-projects-btn"
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium shadow-soft card-hover"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Lihat Projects
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  data-testid="contact-btn"
                  className="px-6 py-3 border border-border rounded-lg font-medium card-hover"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Hubungi Saya
                </motion.button>
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex gap-3 justify-center lg:justify-start pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`social-link-${social.label.toLowerCase()}`}
                  className="p-3 rounded-lg bg-card border border-border hover:border-primary hover:text-primary transition-colors"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl" />
            <div className="relative w-64 h-64 lg:w-80 lg:h-80">
              <Image
                src="/images/Avatar.png"
                alt="Zaki"
                fill
                priority
                className="object-cover rounded-full border-4 border-primary/20 shadow-soft"
              />
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          className="mt-20 lg:mt-28"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-center mb-10">
            <span className="text-sakura-gradient">Tech Stack</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                data-testid={`skill-card-${i}`}
                className="flex flex-col items-center gap-2 p-5 bg-card border border-border rounded-lg card-hover"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + i * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <span className="text-2xl">{skill.icon}</span>
                <span className="text-sm font-medium text-center">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
