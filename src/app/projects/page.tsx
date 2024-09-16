"use client";

import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import React from "react";
import Swal from "sweetalert2";

type Props = {};

const page = () => {
  const handleClick = (url: string) => {
    if (!url) {
      Swal.fire({
        icon: "info",
        title: "No Link Available",
        text: "Sorry, this project doesn't have a link yet.",
      });
    } else {
      window.open(url, "_blank");
    }
  };

  return (
    <div>
      <h1 className="text-4xl font-bold text-primary">Latest projects</h1>
      <p className="text-lg">
        Some code and bugs I‘ve made trying to put my dent in the universe.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 p-2 gap-10">
        {projects &&
          projects.map((item: Projects, index: number) => (
            <div
              key={index}
              className="border-2 border-secondary rounded-md p-2 cursor-pointer"
              onClick={() => handleClick(item.url)}>
              <Image
                src={item.img}
                width={1000}
                height={1000}
                alt={item.title}
                loading="lazy"
              />
              {/* Pengecekan apakah item.tech ada */}
              <div className="flex flex-wrap gap-2 mt-2">
                {item.tech &&
                  item.tech.map((techItem: string, techIndex: number) => (
                    <Badge
                      key={techIndex}
                      className="hover:bg-primary"
                      variant={"secondary"}>
                      {techItem}
                    </Badge>
                  ))}
              </div>
              <h2 className="text-primary font-bold text-xl">{item.title}</h2>
              <p className="text-sm">{item.description}</p>
              {/* Pengecekan apakah item.category ada */}
              <div className="flex gap-2 mt-5">
                {item.category &&
                  item.category.map(
                    (categoryItem: string, categoryIndex: number) => (
                      <Badge key={categoryIndex}>{categoryItem}</Badge>
                    )
                  )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

type Projects = {
  title: string;
  img: string;
  description: string;
  url: string;
  tech: string[];
  category: string[];
};

const projects: Projects[] = [
  {
    title: "Twitters",
    img: "/images/projects/Twitters_Beta.jpg",
    description:
      "The social media website that we manage is the same as other social media with a protection system.",
    url: "#",
    category: ["Web"],
    tech: ["Php Native", "Bootstrap 5", "Tailwind", "Stisla Admin"],
  },
  {
    title: "S-market",
    img: "/images/projects/S-market.jpg",
    description: "Website untuk master data yang diperlukan aplikasi sekolah",
    url: "https://tray-again.vercel.app/",
    category: ["Web"],
    tech: ["Html && Css"],
  },
  {
    title: "NihonFlixe",
    img: "/images/projects/NihonFlixe.jpg",
    description:
      "Website Bioskop Non Template Kami membuat ini dengan Laravel 11 Dan Gunakan Laravel Ui Piur Bootstrap && Css",
    url: "",
    category: ["Web"],
    tech: ["Laravel", "Bootstrap", "Jquery", "Laravel Livewire"],
  },
  {
    title: "Online_Shop",
    img: "/images/projects/Onlne_shop.jpg",
    description:
      "Website ini dari Gabungan Php Native dan Stisla Tahap Pengembangan",
    url: "",
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
    category: ["Web"],
    tech: ["Html & Css ", "Portfolio"],
  },
  {
    title: "Aplikasi Laundry Beta",
    img: "/images/projects/download.png",
    description: "Aplikasi untuk layanan laundry dalam versi Beta.",
    url: "", // No URL provided
    category: ["App"],
    tech: ["Php", "Bootstrap"],
  },
  // {
  //   title: "Aplikasi Laundry Beta",
  //   img: "/images/projects/download.png",
  //   description: "Aplikasi untuk layanan laundry dalam versi Beta.",
  //   url: "", // No URL provided
  //   category: ["App"],
  //   tech: ["Php", "Bootstrap"],
  // },
];

export default page;
