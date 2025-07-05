"use client";

import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import React from "react";
import Swal from "sweetalert2";
import { FaGithub } from "react-icons/fa";

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
    <div className="min-h-screen  py-10">
      {/* Hero Section */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-extrabold text-indigo-600">
          Latest Projects
        </h1>
        <p className="text-lg text-gray-600 mt-0">
          Some code and bugs I’ve made trying to put my dent in the universe.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5 md:px-10">
        {projects.map((item: Projects, index: number) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <Image
              src={item.img}
              width={1000}
              height={1000}
              alt={item.title}
              className="object-cover h-48 w-full"
              loading="lazy"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                {item.title}
              </h2>
              <p className="text-sm text-gray-600">{item.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {item.tech.map((techItem: string, techIndex: number) => (
                  <Badge
                    key={techIndex}
                    className="px-3 py-1 text-sm font-medium text-white bg-indigo-600 rounded-full hover:bg-indigo-700">
                    {techItem}
                  </Badge>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                {item.category.map(
                  (categoryItem: string, categoryIndex: number) => (
                    <Badge
                      key={categoryIndex}
                      className="px-3 py-1 text-sm font-medium text-white bg-indigo-600 rounded-full hover:bg-indigo-700">
                      {categoryItem}
                    </Badge>
                  )
                )}
              </div>
              {item.url && (
                <div className="mt-5 text-right">
                  <button
                    onClick={() => handleClick(item.url)}
                    className="flex items-center justify-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-900 transition-all duration-300">
                    <FaGithub className="text-xl" />
                    <span>View on GitHub</span>
                  </button>
                </div>
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
    title: "StarLaWeb",
    img: "/images/projects/Twitters_Beta.jpg",
    description:
      "The social media website that we manage is the same as other social media with a protection system.",
    url: "https://github.com/faizinuha/StarLaWeb",
    category: ["Web"],
    tech: ["Php Native", "Bootstrap 5", "Tailwind", "Stisla Admin"],
  },
  {
    title: "S-market",
    img: "/images/projects/S-market.jpg",
    description: "Website untuk master data yang diperlukan aplikasi sekolah",
    url: "https://github.com/faizinuha/Tray_Again",
    category: ["Web"],
    tech: ["Html && Css"],
  },
  {
    title: "NihonFlixe",
    img: "/images/projects/NihonFlixe.jpg",
    description:
      "Website Bioskop Non Template Kami membuat ini dengan Laravel 11 Dan Gunakan Laravel Ui Piur Bootstrap && Css",
    url: "https://github.com/faizinuha/Bioskop_V3",
    category: ["Web"],
    tech: ["Laravel", "Bootstrap",'Tailwinds',"Jquery",],
  },
  {
    title: "Online_Shop",
    img: "/images/projects/Onlne_shop.jpg",
    description:
      "Website Penjualan Makana basis Php native",
    url: "https://github.com/faizinuha/online_shop",
    category: ["Online_Shop"],
    tech: ["php Native", "Stisla"],
  },
  {
    title: "StarMar",
    img: "/images/projects/StarMar.png",
    description:
      "Website media sosial yang merupakan gabungan konsep dari Facebook dan Instagram. Proyek ini menampilkan beberapa komponen serupa, seperti timeline, fitur berbagi status, unggah foto, dan komentar. Dikembangkan oleh dua orang, menggunakan Laravel dan Bootstrap untuk menciptakan pengalaman pengguna yang interaktif dan responsif.",
    url: "https://github.com/faizinuha/StarMar",
    category: ["Web"],
    tech: ["Laravel", "Bootstrap"],
  },
  {
    title: "Portfolio",
    img: "/images/projects/Portfolio.jpg",
    description: "My personal portfolio .",
    url: "https://github.com/faizinuha/portofolio",
    category: ["Web"],
    tech: ["Html & Css ", "Portfolio"],
  },
  {
    title: "Kamus Pali Indonesia",
    img: "/images/Kamus.jpeg",
    description: "Aplikasi kamus Pali-Indonesia.",
    url: "https://github.com/faizinuha/KamusPaliIndonesia",
    category: ["App"],
    tech: ["Php", "Bootstrap"],
  },
  
  {
    title: "Aplikasi Laundry Beta",
    img: "/images/projects/download.png",
    description: "Aplikasi untuk layanan laundry dalam versi Beta.",
    url: "https://github.com/faizinuha/AplikasiLaundary",
    category: ["App"],
    tech: ["Php", "Bootstrap"],
  },
];

export default page;
