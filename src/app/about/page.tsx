import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";
import { FaSchool } from "react-icons/fa6";
import { FaFigma } from "react-icons/fa6";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="lg:px-10">
      <div className="fixed top-10"></div>
      <div className="flex w-full flex-col-reverse lg:flex-row">
        <div className="w-full mt-5 lg:mt-0">
          <div className="w-full lg:w-[96%]">
            <h1 className="text-4xl font-bold text-primary">About me</h1>
            <p>
              Hi, I'm Abdul Rozak, a Frontend Developer with a basic
              understanding of Backend, Web Designer (Figma, Canva), and a
              self-taught UI Programmer from Japan. I am passionate about
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
        </div>
        <Image
          src={"/images/news.jpeg"}
          alt="Abdul Rozak"
          loading="lazy"
          width={1000}
          height={1000}
          objectFit="cover"
          className="w-32 lg:w-60 rounded-xl border-secondary border-[5px] mx-auto  rotate-12"
        />
      </div>
      <div className="mt-10">
        <h2 className="text-4xl font-bold text-primary">Skillset</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 ">
          <div className="border-accent border-2 p-2 rounded-md">
            <h3>Language</h3>
            <div className="grid grid-cols-2 gap-2 mt-3 ">
              {language.map((item: string, i: number) => (
                <Badge
                  className="hover:bg-primary cursor-pointer hover:text-white"
                  variant={"secondary"}
                  key={i + "language"}>
                  {item}
                </Badge>
              ))}
            </div>
          </div>
          <div className="border-accent border-2 p-2 rounded-md">
            <h3>Frontend</h3>
            <div className="grid grid-cols-2 gap-2 mt-3 ">
              {frontend.map((item: string, i: number) => (
                <Badge
                  className="hover:bg-primary cursor-pointer hover:text-white"
                  variant={"secondary"}
                  key={i + "frontend"}>
                  {item}
                </Badge>
              ))}
            </div>
          </div>
          <div className="border-accent border-2 p-2 rounded-md">
            <h3>Tools</h3>
            <div className="grid grid-cols-2 gap-2 mt-3">
              {tools.map((item: string, i: number) => (
                <Badge
                  className="hover:bg-primary cursor-pointer hover:text-white"
                  variant={"secondary"}
                  key={i + "tools"}>
                  {item}
                </Badge>
              ))}
            </div>
          </div>
          <div className="border-accent border-2 p-2 rounded-md">
            <h3>Backend</h3>
            <div className="grid grid-cols-2 gap-2 mt-3 ">
              {backend.map((item: string, i: number) => (
                <Badge
                  className="hover:bg-primary cursor-pointer hover:text-white"
                  variant={"secondary"}
                  key={i + "backend"}>
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="flex items-center gap-1 text-4xl font-bold text-primary mt-10">
          <HiMiniBuildingOffice2 /> Experience{" "}
          <hr className="w-full border-2 border-secondary" />
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-3">
          {experience.map((item: Experience, index: number) => (
            <div
              key={index}
              className="border-secondary border-2 rounded-md p-2">
              <h3 className="font-semibold text-primary">{item.title}</h3>
              <p>{item.position}</p>
              <p>{item.years}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="flex items-center gap-1 text-4xl font-bold text-primary mt-10">
          <FaSchool /> Education{" "}
          <hr className="w-full border-2 border-secondary" />
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-3">
          {education.map((item: Education, index: number) => (
            <div
              key={index}
              className="border-secondary border-2 rounded-md p-2">
              <h3 className="font-semibold text-primary">{item.name}</h3>
              <p>{item.position}</p>
              <p>{item.major}</p>
              <p>{item.duration}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="flex items-center gap-1 text-4xl font-bold text-primary mt-10">
          <FaFigma /> Education{" "}
          <hr className="w-full border-2 border-secondary" />
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-3">
          {Webdesain.map((item: Education, index: number) => (
            <div
              key={index}
              className="border-secondary border-2 rounded-md p-2">
              <h3 className="font-semibold text-primary">{item.name}</h3>
              <p>{item.position}</p>
              <p>{item.major}</p>
              <p>{item.duration}</p>
            </div>
          ))}
        </div>
      </div>
 
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

const language = ["Html & Css", "JavaScript", "PHP", "TypeScript", "C#"];

const frontend = [
  "React.JS",
  "Next.JS",
  "Tailwind CSS",
  "Figma",
  "Canva",
  "ShadCn",
  "Bootstrap 5",
];
const tools = [
  "Figma",
  "Canva",
  "Git",
  "VS Code",
  "It",
  "Docker",
  "Vercel",
  "overflow",
  "ChatGpt 4.1",
  "Nginx",
];
const backend = ["Laravel", "MySQL"];

const experience = [
  {
    title: "PT HUMMA TEKNOLOGI INDONESIA",
    position: "Frontend",
    years: "2023-Present",
  },
  {
    title: "UI School (Self-Taught)",
    position: "Frontend Developer,Backend",
    years: "2024-Present",
  },
];

const education = [
  {
    name: "SMK Al Azhar",
    position: "Vocational High School",
    major: "Rekayasa Perangkat Lunak",
    duration: "2020-2023",
  },
  {
    name: "UI School (Self-Taught)",
    position: "UI Programming",
    major: "UI Development",
    duration: "2023-Present",
  },
];
const Webdesain = [
  {
    name: "UI UX",
    position: "Figma Designer",
    major: "Canvas",
    duration: "2023-Present",
  },
];

export default page;
