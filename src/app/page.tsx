import Image from "next/image";
import { InstagramLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import SosmedLink from "@/components/fragments/SosmedLink";
import { ReactNode } from "react";

export default function Home() {
  return (
    <div className=" flex flex-col gap-8">
      <div className="flex flex-col gap-8 lg:flex-row lg:justify-evenly">
        <div className="p-0 m-0">
          <h1 className="text-4xl md:text-5xl lg:text-7xl text-center lg:text-start">
            <span className="hidden lg:inline">I'am</span>
            <br />
            <span className="text-primary font-bold">Abdul Rozak</span>
          </h1>
          <h2 className="text-center lg:text-start lg:w-9/12 underline-offset-2">
            I am a Front End Beginner
          </h2>
          <div className="flex gap-2 mt-3 justify-center lg:justify-start">
            {sosMed.map((item, i) => (
              <SosmedLink key={i} icon={item.icon} url={item.url} />
            ))}
          </div>
        </div>
      <Image
        src="/images/profile.jpg"
        alt="Abdul Rozak"
        loading="lazy"
        width={800}
        height={800}
        objectFit="cover"
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
              className="bg-blue-400 shadow-md rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

type SosMed = {
  icon: ReactNode;
  url: string;
};

const sosMed: SosMed[] = [
  {
    icon: <InstagramLogoIcon width={30} height={30} />,
    url: "https://www.instagram.com/wolfcode7_/",
  },
  {
    icon: <GitHubLogoIcon width={30} height={30} />,
    url: "https://github.com/faizinuha",
  },
];

type Skill = {
  name: string;
  description: string;
};

const skills: Skill[] = [
  {
    name: "HTML & CSS",
    description: "Building the structure and style of web pages.",
  },
  { name: "JavaScript", description: "Adding interactivity to web pages." },
  { name: "PHP", description: "Server-side scripting for web development." },
  {
    name: "Tailwind CSS",
    description: "Utility-first CSS framework for styling.",
  },
  {
    name: "Bootstrap 5",
    description: "Popular CSS framework web design.",
  },
  {
    name: "Python",
    description: "Python Beginner",
  },
  {
    name: "GitHub ",
    description: "Popular CSS framework for responsive web design.",
  },
];
