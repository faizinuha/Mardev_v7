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
              target="_blank"
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
    title: "Hummatask",
    img: "/images/projects/hummatask.png",
    description:
      "Task Management web for internship student in PT HUMMA TEKNOLOGI INDONESIA",
    url: "https://task.hummatech.com",
    category: ["Web"],
    tech: ["Laravel", "Bootstrap 5", "Jquery"],
  },
  {
    title: "Admin SMKN 1 Mejayan",
    img: "/images/projects/admin_smk.png",
    description: "Website untuk master data yang diperlukan aplikasi sekolah",
    url: "https://admin.smkn1mejayan.sch.id",
    category: ["Web"],
    tech: ["Laravel", "Bootstrap 5", "Jquery"],
  },
  {
    title: "KONSERA",
    img: "/images/projects/konsera.png",
    description:
      "Website Instrumen Bimbingan Konseling yang memiliki beberapa tujuan, salah satunya instrumen yang digunakan untuk mendeteksi kecerdasan anak",
    url: "",
    category: ["Web"],
    tech: ["Laravel", "Bootstrap", "Jquery", "Laravel Liveware"],
  },
  {
    title: "Rumus Matematika",
    img: "/images/projects/rumus_matematika.png",
    description:
      "Package yang saya buat ketika waktu saya bosan.Package ini dibuat untuk menyelesaikan permasalahan dasar matematika lewat pemrograman",
    url: "https://www.npmjs.com/package/rumus_matematika",
    category: ["Package"],
    tech: ["Typescript", "Npm"],
  },
  {
    title: "HireMe",
    img: "/images/projects/hireme.png",
    description: "Website untuk menghire pekerja dari UT School",
    url: "",
    category: ["Web"],
    tech: ["Laravel", "Bootstrap"],
  },
];

export default page;
