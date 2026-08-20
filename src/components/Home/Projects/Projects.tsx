"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/components/Helper/animations";
import ProjectCard from "./ProjectsCard";
import { PROJECTS_DATA } from "@/lib/projects-data";
import { CYBER_RED, CYBER_CYAN } from "@/lib/theme";

function Projects() {
  return (
    <section id="projects" className="py-20 text-white">
      {/* Encabezado sincronizado con el estilo de Services */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="text-center"
      >
        <div
          className="flex items-center justify-center gap-2 mb-3 font-mono text-[10px] sm:text-xs tracking-[0.2em] uppercase"
          style={{ color: `${CYBER_CYAN}b3` }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ backgroundColor: CYBER_RED }}
          />
          Projects.list
        </div>
        <h2 className="text-2xl md:text-4xl xl:text-5xl font-bold">
          Una pequeña selección de mis <br />
          <span style={{ color: CYBER_CYAN }}>proyectos recientes</span>
        </h2>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm sm:text-base">
          Explora algunos de los trabajos que he diseñado y desarrollado
          últimamente.
        </p>
      </motion.div>

      {/* Grid de Proyectos */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="w-[85%] md:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-16"
      >
        {PROJECTS_DATA.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </section>
  );
}

export default Projects;
