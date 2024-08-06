import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";
import { FaSchool } from "react-icons/fa6";
import { FaFigma } from "react-icons/fa6";

type Props = {};

const Page = (props: Props) => {
  return (
    <div className="lg:px-10">
      <div className="fixed top-10"></div>
      <div className="flex w-full flex-col-reverse lg:flex-row">
        <div className="w-full mt-5 lg:mt-0">
          <div className="w-full lg:w-[96%]">
            <h1 className="text-4xl font-bold text-primary">About me</h1>
            <p>
              Hi, I'm Abdul Rozak, a high school vocational student majoring in
              Front-end Development, a lifetime learner, and a Fullstack Web
              Developer based in Jawa Timur, Indonesia.
            </p>
            <p>
              I am someone who is interested in the world of technology, Windows
              10 operating systems, and open source All Language Projects
              development.
            </p>
            <p>
              I love learning new things, even when I'm bored I often learn new
              things. I fill my free time by learning new things, trying
              distros, playing games, and sometimes watching anime.
            </p>
          </div>
        </div>
        <Image
          src="/images/profile.jpg"
          alt="Abdul Rozak"
          loading="lazy"
          width={1000}
          height={1000}
          objectFit="cover"
          className="w-32 lg:w-60 rounded-xl border-secondary border-[5px] mx-auto rotate-12"
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
        </div>
      </div>
      <div>
        <h2 className="flex items-center gap-1 text-4xl font-bold text-primary mt-10">
          <HiMiniBuildingOffice2 /> Experience
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
          <FaSchool /> Education
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
          <FaFigma /> Web Desain
          <hr className="w-full border-2 border-secondary" />
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-3">
          {desain.map((item, index) => (
            <div
              key={index}
              className="border-secondary border-2 rounded-md p-2">
              <h3 className="font-semibold text-primary">{item.name}</h3>
              <p>{item.position}</p>
              {/* <p>{item.major}</p>
              <p>{item.duration}</p> */}
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
type Desain = {
  name: string;
  position: string;
  major: string;
  duration: string;
};
const language = ["Html & Css", "JavaScript", "PHP", "TypeScript", "Python"];

const frontend = [
  "Next.JS",
  "Tailwind CSS",
  "Angular Js learn",
  "Bootstrap 5",
  "JQuery",
];

const experience = [
  {
    title: "PT HUMMA TEKNOLOGI INDONESIA",
    position: "Web Developer",
    years: "2023",
  },
  {
    title: "UT SCHOOL",
    position: "FrontEnd Programmer",
    years: "2024",
  },
];
const desain = [
  {
    name: "Web Simpel Navbar",
    position: "Figma",
    // position: "Position 1",
    // major: "Major 1",
    // duration: "2021-2022",
  },
  {
    name: "FlowCart",
    position: "Figma",
    // position: "Position 2",
    // major: "Major 2",
    // duration: "2020-2021",
  },
  // Tambahkan lebih banyak data desain di sini
];
const education = [
  {
    name: "SMKN Al Azhar",
    position: "Vocational High School",
    major: "Rekayasa Perangkat Lunak",
    duration: "2024-Present",
  },
  {
    name: "SMK AL AZHAR ",
    position: "Junior High School",
    major: "FronEnd",
    duration: "2019-2022",
  },
];

export default Page;
