import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-primary">Latest projects</h1>
      <p className="text-lg">
        Some code and bugs I‘ve made trying to put my dent in the universe.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 p-2 gap-10">
        {projects &&
          projects.map((item: Projects, index: number) => (
            <Link
              href={item.url}
              className="border-2 border-secondary rounded-md p-2"
            >
              <Image
                src={item.img}
                width={1000}
                height={1000}
                alt={item.title}
                loading="lazy"
              />
              <div className="flex flex-wrap gap-2 mt-2">
                {item.tech.map((item: string, index: number) => (
                  <Badge className="hover:bg-primary" variant={"secondary"}>
                    {item}
                  </Badge>
                ))}
              </div>
              <h2 className="text-primary font-bold text-xl">{item.title}</h2>
              <p className="text-sm">{item.description}</p>
              <div className="flex gap-2 mt-5">
                {item.category.map((item: string, index: number) => (
                  <Badge key={`${index}-item`}>{item}</Badge>
                ))}
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

type Category = "Web" | "App" | "Software" | "Api" | "Package" | "Development";

type Projects = {
  title: string;
  img: string;
  description: string;
  url: string;
  tech: string[];
  category: string[];
};

const projects = [
  {
    title: "Twitters",
    img: "/images/projects/Twitters_Beta.jpg",
    description:
      "The social media website that we manage is the same as other social media with a protection system.",
    url: "#",
    category: ["Web"],
    tech: ["Php Native","Bootstrap 5","Tailwind","Stisla Admin"],
  },
  {
    title: "S-market",
    img: "/images/projects/S-market.jpg",
    description: "Website untuk master data yang diperlukan aplikasi sekolah",
    url: "https://tray-again.vercel.app/",
    target: "_blank",
    category: ["Web"],
    tech: ["Html && Css "],
  },
  {
    title: "NihonFlixe",
    img: "/images/projects/NihonFlixe.jpg",
    description:
      "Website Bioskop Non Template Kami membuat ini dengan Laravel 11 Dan Gunakan Laravel Ui Piur Bootstrap && Css",
    url: "pages.tsx",
    // target: "_blank",
    category: ["Web"],
    tech: ["Laravel", "Bootstrap", "Jquery", "Laravel Liveware"],
  },
  {
    title: "Online_Shop",
    img: "/images/projects/Onlne_shop.jpg",
    description:
      "Website ini dari Gabungan Php Native dan Stisla Tahap Pengembangan",
    url: "#",
    category: ["Online_Shop"],
    tech: ["php Native", "Stisla"],
  },
  {
    title: "Cooming-soon",
    img: "/images/projects/Cooming-soon.jpg",
    description: "Website untuk menghire pekerja dari UT School",
    url: "",
    category: ["Web"],
    tech: ["Laravel", "Bootstrap"],
  },
  {
    title: "Portfolio",
    img: "/images/projects/Portfolio.jpg",
    description: "My personal portfolio website.",
    url: "https://portfolio-wine-three-29.vercel.app/",
    target: "_blank",
    category: ["Web"],
    tech: ["Html & Css ","Portfolio"],
  },
];

export default page;
