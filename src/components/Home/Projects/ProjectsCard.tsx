"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cardVariant } from "@/components/Helper/animations";
import { ProjectProps } from "@/lib/projects-data";
import { CYBER_RED, CYBER_CYAN } from "@/lib/theme";
import { ArrowUpRight, Clock } from "lucide-react";

function ProjectCard({ project }: ProjectProps) {
  // Solo tratamos el proyecto como "clickeable" si tiene una URL real.
  const hasLiveLink = Boolean(project.link) && project.link !== "404";
  const hasRepoLink = Boolean(project.repoLink) && project.repoLink !== "404";

  return (
    <motion.article
      variants={cardVariant}
      whileHover={{ y: -6 }}
      className="relative bg-[#0d121c]/80 border border-gray-800 rounded-sm p-4 sm:p-5 flex flex-col backdrop-blur-sm transition-colors duration-300 hover:border-cyan-300/50 group"
    >
      {/* Marcadores de esquina */}
      <div
        className="absolute -top-px -left-px w-3.5 h-3.5 border-l-2 border-t-2 z-10"
        style={{ borderColor: CYBER_RED }}
      />
      <div
        className="absolute -bottom-px -right-px w-3.5 h-3.5 border-r-2 border-b-2 z-10"
        style={{ borderColor: CYBER_RED }}
      />

      {/* Contenedor de la Imagen */}
      <div className="relative w-full aspect-video rounded-sm overflow-hidden bg-[#05080e] border border-gray-800/80">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 90vw, 40vw"
          quality={75}
          className={`object-cover object-top transition-transform duration-500 ${
            hasLiveLink ? "group-hover:scale-105" : "opacity-70"
          }`}
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#0d121c] via-transparent to-transparent opacity-40 group-hover:opacity-10 transition-opacity" />
      </div>

      {/* Información y Descripción */}
      <div className="mt-4 flex flex-col grow justify-between">
        <div>
          <span
            className="font-mono text-[10px] sm:text-[11px] tracking-[0.15em] uppercase block mb-1"
            style={{ color: `${CYBER_CYAN}cc` }}
          >
            {`// ${project.category}`}
          </span>

          <div className="flex items-start justify-between gap-2">
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide group-hover:text-cyan-300 transition-colors">
              {project.title}
            </h3>

            {/* Icono de reloj si el proyecto todavía no está listo */}
            {!hasLiveLink && !hasRepoLink && (
              <div
                className="w-7 h-7 shrink-0 flex items-center justify-center rounded-sm border border-gray-800"
                style={{ backgroundColor: `${CYBER_CYAN}0d` }}
              >
                <Clock
                  className="w-3.5 h-3.5"
                  style={{ color: `${CYBER_CYAN}99` }}
                />
              </div>
            )}
          </div>

          {/* Breve descripción */}
          <p className="mt-2 text-xs sm:text-sm text-gray-400 leading-relaxed line-clamp-2">
            {project.description}
          </p>

          {!hasLiveLink && !hasRepoLink && (
            <span
              className="inline-block mt-3 px-2.5 py-1 rounded-sm border font-mono text-[10px] tracking-[0.15em] uppercase"
              style={{
                borderColor: `${CYBER_CYAN}40`,
                color: `${CYBER_CYAN}99`,
              }}
            >
              Próximamente
            </span>
          )}
        </div>

        {/* Botones de acción */}
        {(hasLiveLink || hasRepoLink) && (
          <div className="mt-4 flex items-center gap-3">
            {hasLiveLink && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 flex-1 px-3 py-2 rounded-sm border font-mono text-[10px] sm:text-[11px] tracking-[0.1em] uppercase transition-colors hover:border-cyan-300/60 hover:bg-cyan-300/5"
                style={{
                  borderColor: `${CYBER_CYAN}40`,
                  color: CYBER_CYAN,
                }}
              >
                Ver proyecto
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
            {hasRepoLink && (
              <a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 flex-1 px-3 py-2 rounded-sm border border-gray-700 font-mono text-[10px] sm:text-[11px] tracking-[0.1em] uppercase text-gray-300 transition-colors hover:border-gray-400 hover:text-white"
              >
                Repositorio
                <Image
                  src="/social_icons/GitHub.svg"
                  alt="GitHub"
                  width={14}
                  height={14}
                  className="w-3.5 h-3.5"
                />
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}

export default ProjectCard;
