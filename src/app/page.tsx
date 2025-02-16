"use client";

import SosmedLink from "@/components/fragments/SosmedLink";
import { GitHubLogoIcon, InstagramLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { ReactNode, useEffect, useState } from "react";

export default function Home() {
  const [displayText, setDisplayText] = useState('');
  const text = " I am a Front End Beginner";

  useEffect(() => {
    let i = 0;
    const intervalId = setInterval(() => {
      setDisplayText((prev) => prev + (text[i] || ''));
      i++;
      if (i >= text.length) {
        i = 0;
        setDisplayText('');
      }
    }, 200);

    return () => clearInterval(intervalId);
  }, []);

  type SosMed = {
    icon: ReactNode;
    url: string;
  };

  const sosMed: SosMed[] = [
    {
      icon: <InstagramLogoIcon width={30} height={30} />,
      url: "#",
    },
    {
      icon: <GitHubLogoIcon width={30} height={30} />,
      url: "#",
    },
  ];

  type Skill = {
    name: string;
    description: string;
  };

  const skills: Skill[] = [
    { name: "HTML & CSS", description: "Building the structure and style of web pages." },
    { name: "JavaScript", description: "Adding interactivity to web pages." },
    { name: "PHP", description: "Server-side scripting for web development." },
    { name: "Tailwind CSS", description: "Utility-first CSS framework for styling." },
    { name: "Bootstrap 5", description: "Popular CSS framework for web design." },
    { name: "Python", description: "Python Beginner" },
    { name: "GitHub", description: "Version control for collaborative projects." },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-3xl opacity-30 animate-float"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-r from-green-500 to-yellow-500 rounded-full blur-3xl opacity-30 animate-float delay-2"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col gap-8 animate-fade-in">
        <div className="flex flex-col gap-8 lg:flex-row lg:justify-evenly">
          <div className="p-0 m-0">
            <h1 className="text-4xl md:text-5xl lg:text-7xl text-center lg:text-start">
              <span className="hidden lg:inline">I'am</span>
              <br />
              <span className="text-green-500 font-bold">John</span>
            </h1>
            <h2 className="text-center lg:text-start lg:w-9/12 underline-offset-2">
              {displayText}
              <span className="blinking-cursor">|</span>
            </h2>
            <div className="flex gap-2 mt-3 justify-center lg:justify-start">
              {sosMed.map((item, i) => (
                <SosmedLink key={i} icon={item.icon} url={item.url} />
              ))}
            </div>
          </div>
          <Image
            src="/images/Avatar.png"
            alt="John"
            loading="lazy"
            width={800}
            height={800}
            style={{ objectFit: "cover" }}
            className="w-60 h-60 rounded-full border-secondary border-8  lg:mx-0"
          />
        </div>
        <div className="w-full mt-10">
          <h2 className="text-4xl font-bold text-primary mb-6 text-center">
            Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="bg-blue-400 shadow-md rounded-lg p-6 text-center animate-scale-in"
              >
                <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                <p>{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 1.5s ease-in-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-scale-in {
          animation: scaleIn 0.8s ease-in-out;
        }
        @keyframes scaleIn {
          from {
            transform: scale(0.8);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .delay-2 {
          animation-delay: 2s;
        }

        .blinking-cursor {
          animation: blink 0.8s infinite;
        }

        @keyframes blink {
          0% { opacity: 0; }
          50% { opacity: 1; }
          100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
