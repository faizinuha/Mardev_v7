"use client";

import { Badge } from "@/components/ui/badge";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";
import { FaGithub, FaSearch } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import Swal from "sweetalert2";

type Props = {};

const ProjectsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTech, setSelectedTech] = useState<string[]>([]);

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

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

  // Get unique categories and tech
  const categories = ["All", ...Array.from(new Set(projects.flatMap(p => p.category)))];
  const allTech = Array.from(new Set(projects.flatMap(p => p.tech)));

  // Filter projects
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "All" || project.category.includes(selectedCategory);
      const matchesTech = selectedTech.length === 0 ||
        selectedTech.some(tech => project.tech.includes(tech));

      return matchesSearch && matchesCategory && matchesTech;
    });
  }, [searchQuery, selectedCategory, selectedTech]);

  const toggleTech = (tech: string) => {
    setSelectedTech(prev =>
      prev.includes(tech)
        ? prev.filter(t => t !== tech)
        : [...prev, tech]
    );
  };

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100
      }
    }
  };

  return (
    <div className="min-h-screen py-10 px-5 lg:px-10">
      {/* Hero Section */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl lg:text-6xl font-display font-extrabold mb-4">
          <span className="gradient-text">Latest Projects</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Some code and bugs I've made trying to put my dent in the universe.
        </p>
      </motion.div>

      {/* Search and Filter Section */}
      <motion.div
        className="mb-10 space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-full border border-border bg-card focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
          />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`
                px-6 py-2 rounded-full font-medium transition-all
                ${selectedCategory === category
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-card border border-border hover:border-primary'
                }
              `}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Tech Filter */}
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-muted-foreground mb-3 text-center">Filter by Technology:</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {allTech.map((tech) => (
              <motion.button
                key={tech}
                onClick={() => toggleTech(tech)}
                className={`
                  px-4 py-1.5 rounded-full text-sm font-medium transition-all
                  ${selectedTech.includes(tech)
                    ? 'bg-secondary text-secondary-foreground'
                    : 'bg-card border border-border hover:border-secondary'
                  }
                `}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tech}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Active Filters Display */}
        {(selectedCategory !== "All" || selectedTech.length > 0) && (
          <motion.div
            className="flex flex-wrap gap-2 justify-center items-center"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
          >
            <span className="text-sm text-muted-foreground">Active filters:</span>
            {selectedCategory !== "All" && (
              <Badge variant="secondary" className="cursor-pointer" onClick={() => setSelectedCategory("All")}>
                {selectedCategory} ✕
              </Badge>
            )}
            {selectedTech.map(tech => (
              <Badge key={tech} variant="secondary" className="cursor-pointer" onClick={() => toggleTech(tech)}>
                {tech} ✕
              </Badge>
            ))}
          </motion.div>
        )}
      </motion.div>

      {/* Projects Count */}
      <motion.p
        className="text-center text-muted-foreground mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Showing {filteredProjects.length} of {projects.length} projects
      </motion.p>

      {/* Projects Grid */}
      <motion.div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((item: Projects, index: number) => (
            <motion.div
              key={item.title}
              layout
              variants={itemVariants}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ y: -10 }}
              className="group bg-card border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={item.img}
                  width={1000}
                  height={1000}
                  alt={item.title}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h2 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </h2>

                <p className="text-sm text-muted-foreground line-clamp-3">
                  {item.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {item.tech.map((techItem: string, techIndex: number) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="text-xs"
                    >
                      {techItem}
                    </Badge>
                  ))}
                </div>

                {/* Category */}
                <div className="flex flex-wrap gap-2">
                  {item.category.map((categoryItem: string, categoryIndex: number) => (
                    <Badge
                      key={categoryIndex}
                      className="text-xs bg-primary/10 text-primary hover:bg-primary/20"
                    >
                      {categoryItem}
                    </Badge>
                  ))}
                </div>

                {/* GitHub Link */}
                {item.url && (
                  <motion.button
                    onClick={() => handleClick(item.url)}
                    className="w-full flex items-center justify-center gap-2 bg-foreground text-background px-4 py-2.5 rounded-full font-medium hover:bg-foreground/90 transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaGithub className="text-lg" />
                    <span>View on GitHub</span>
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
          className="text-center py-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <p className="text-2xl text-muted-foreground">No projects found</p>
          <p className="text-sm text-muted-foreground mt-2">Try adjusting your filters</p>
        </motion.div>
      )}
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
    tech: ["Html & Css"],
  },
  {
    title: "NihonFlixe",
    img: "/images/projects/NihonFlixe.jpg",
    description:
      "Website Bioskop Non Template Kami membuat ini dengan Laravel 11 Dan Gunakan Laravel Ui Piur Bootstrap && Css",
    url: "https://github.com/faizinuha/Bioskop_V3",
    category: ["Web"],
    tech: ["Laravel", "Bootstrap", "Tailwinds", "Jquery"],
  },
  {
    title: "Online_Shop",
    img: "/images/projects/Onlne_shop.jpg",
    description: "Website Penjualan Makana basis Php native",
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

export default ProjectsPage;
