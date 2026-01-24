"use client";

import { Badge } from "@/components/ui/badge";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { HiSearch } from "react-icons/hi";
import { useInView } from "react-intersection-observer";
import Swal from "sweetalert2";

const ProjectsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const handleClick = (url: string) => {
    if (!url) {
      Swal.fire({
        icon: "info",
        title: "Link Belum Tersedia",
        text: "Maaf, project ini belum memiliki link.",
        confirmButtonColor: "hsl(350, 60%, 75%)",
      });
    } else {
      window.open(url, "_blank");
    }
  };

  const categories = ["All", ...Array.from(new Set(projects.flatMap(p => p.category)))];

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "All" || project.category.includes(selectedCategory);
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen py-10 max-w-6xl mx-auto">
      {/* Header */}
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl lg:text-5xl font-bold mb-3">
          <span className="text-sakura-gradient">Projects</span>
        </h1>
        <p className="text-muted-foreground">Beberapa project yang sudah saya kerjakan</p>
      </motion.div>

      {/* Search & Filter */}
      <motion.div
        className="mb-8 space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {/* Search */}
        <div className="relative max-w-md mx-auto">
          <HiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Cari project..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            data-testid="search-input"
            className="w-full pl-11 pr-4 py-3 rounded-lg border border-border bg-card focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
          />
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              data-testid={`category-${category.toLowerCase()}`}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card border border-border hover:border-primary'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Projects Count */}
      <p className="text-center text-sm text-muted-foreground mb-6">
        Menampilkan {filteredProjects.length} dari {projects.length} project
      </p>

      {/* Projects Grid */}
      <motion.div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
        }}
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((item, index) => (
            <motion.div
              key={item.title}
              layout
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
              }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="group bg-card border border-border rounded-xl overflow-hidden card-hover"
              data-testid={`project-card-${index}`}
            >
              {/* Image */}
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={item.img}
                  width={400}
                  height={200}
                  alt={item.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-5 space-y-3">
                <h2 className="text-lg font-semibold group-hover:text-primary transition-colors">
                  {item.title}
                </h2>

                <p className="text-sm text-muted-foreground line-clamp-2">
                  {item.description}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-1.5">
                  {item.tech.slice(0, 4).map((tech, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Category */}
                <div className="flex flex-wrap gap-1.5">
                  {item.category.map((cat, i) => (
                    <Badge key={i} className="text-xs bg-primary/10 text-primary hover:bg-primary/20">
                      {cat}
                    </Badge>
                  ))}
                </div>

                {/* GitHub */}
                {item.url && (
                  <motion.button
                    onClick={() => handleClick(item.url)}
                    data-testid={`github-btn-${index}`}
                    className="w-full flex items-center justify-center gap-2 bg-foreground text-background py-2.5 rounded-lg font-medium hover:opacity-90 transition-opacity"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <FaGithub />
                    <span>GitHub</span>
                  </motion.button>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* No Results */}
      {filteredProjects.length === 0 && (
        <motion.div
          className="text-center py-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <p className="text-xl text-muted-foreground">Project tidak ditemukan</p>
        </motion.div>
      )}
    </div>
  );
};

type Project = {
  title: string;
  img: string;
  description: string;
  url: string;
  tech: string[];
  category: string[];
};

const projects: Project[] = [
  {
    title: "StarLaWeb",
    img: "/images/projects/Twitters_Beta.jpg",
    description: "Website media sosial dengan sistem proteksi keamanan.",
    url: "https://github.com/faizinuha/StarLaWeb",
    category: ["Web Development"],
    tech: ["PHP Native", "Bootstrap 5", "Tailwind"],
  },
  {
    title: "NihonFlixe",
    img: "/images/projects/NihonFlixe.jpg",
    description: "Website bioskop dengan Laravel 11 dan Bootstrap.",
    url: "https://github.com/faizinuha/Bioskop_V3",
    category: ["Web Development"],
    tech: ["Laravel", "Bootstrap", "jQuery"],
  },
  {
    title: "StarMar",
    img: "/images/projects/StarMar.png",
    description: "Media sosial gabungan konsep Facebook dan Instagram.",
    url: "https://github.com/faizinuha/StarMar",
    category: ["Web Development"],
    tech: ["Laravel", "Bootstrap"],
  },
  {
    title: "Online Shop",
    img: "/images/projects/Onlne_shop.jpg",
    description: "Website penjualan makanan berbasis PHP native.",
    url: "https://github.com/faizinuha/online_shop",
    category: ["Web Development"],
    tech: ["PHP Native", "Stisla"],
  },
  {
    title: "Portfolio",
    img: "/images/projects/Portfolio.jpg",
    description: "Personal portfolio website.",
    url: "https://github.com/faizinuha/portofolio",
    category: ["Web Development"],
    tech: ["HTML", "CSS"],
  },
  {
    title: "Kamus Pali Indonesia",
    img: "/images/Kamus.jpeg",
    description: "Aplikasi kamus Pali-Indonesia.",
    url: "https://github.com/faizinuha/KamusPaliIndonesia",
    category: ["App"],
    tech: ["PHP", "Bootstrap"],
  },
  {
    title: "Aplikasi Laundry",
    img: "/images/projects/download.png",
    description: "Aplikasi layanan laundry.",
    url: "https://github.com/faizinuha/AplikasiLaundary",
    category: ["App"],
    tech: ["PHP", "Bootstrap"],
  },
  {
    title: "Aplikasi Cms Sekolah",
    img: "/images/cms.png",
    description: "Aplikasi layanan Sekolah untuk Mendata absensi Siswa .",
    url: "https://cabsen.vercel.app",
    category: ["Api", "Web Development"],
    tech: ["React", "Tailwind CSS"],
  },
  {
    title: "Media Sosial Gabungan Facebook dan Instagram",
    img: "/images/projects/image.png",
    description: "Media sosial gabungan konsep Facebook dan Instagram Anti Gabungan Ai Sama Sekali di dalam website ( Beta ).",
    url: "https://starmar2.vercel.app",
    category: ["App", "Web Development", "React+vite"],
    tech: ["React", "Tailwind CSS","css","vite" ],
  },
];

export default ProjectsPage;
