"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { CYBER_RED, CYBER_CYAN } from "@/lib/theme";

const ROLES = ["abren puertas", "cierran tratos", "generan confianza"];
const GLYPHS = "!<>-_\\/[]{}—=+*^?#01";

/* Efecto de "descifrado" tipo terminal */
function useDecryptedText(text: string, trigger: boolean, speed = 32) {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    if (!trigger) return;
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplay(
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iteration) return text[index];
            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          })
          .join(""),
      );
      iteration += 0.3;
      if (iteration >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, trigger, speed]);

  return display;
}

function RoleCycler() {
  const [roleIndex, setRoleIndex] = useState(0);
  const current = useDecryptedText(ROLES[roleIndex], true, 32);

  useEffect(() => {
    const hold = setTimeout(() => {
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }, 2600);
    return () => clearTimeout(hold);
  }, [roleIndex]);

  return (
    <span
      className="text-cyan-300 font-bold font-mono inline-block text-left"
      style={{ textShadow: `0 0 10px rgba(103, 232, 249, 0.6)` }}
    >
      {current}
      <motion.span
        aria-hidden
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className="inline-block w-0.5 h- bg-cyan-300 ml-1 align-middle"
      />
    </span>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center text-white overflow-hidden pt-28 sm:pt-32 pb-12 px-4"
    >
      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto text-center">
        {/* AVATAR - AHORA ANIMADO */}
        <div className="relative w-40 h-40 sm:w-45 sm:h-45 group">
          <div
            className="absolute -inset-1 border border-dashed rounded-full"
            style={{ borderColor: CYBER_RED, opacity: 0.5 }}
          />
          <div
            className="absolute -top-1 -left-1 w-4 h-4 border-l-2 border-t-2 rounded-tl-sm"
            style={{ borderColor: CYBER_RED }}
          />
          <div
            className="absolute -bottom-2 -right-1 w-4 h-4 border-r-2 border-b-2 rounded-br-sm"
            style={{ borderColor: CYBER_RED }}
          />
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="/Perfil.png"
            width={200}
            height={200}
            className="rounded-full object-cover transition-all duration-300 group-hover:scale-105 w- h- sm:w- sm:h-"
            style={{
              boxShadow: `0 0 20px 4px rgba(255, 51, 75, 0.6), inset 0 0 10px rgba(255, 51, 75, 0.4)`,
              border: `4px solid ${CYBER_RED}`,
            }}
          >
            <source src="/profile-loop.mp4" type="video/mp4" />
          </video>
        </div>

        {/* ID BADGE */}
        <div className="mt-4 flex flex-col items-center gap-1">
          <span className="font-mono text-xs tracking-[0.3em] text-white/70 uppercase">
            Miguel Angel Cervantes Gonzalez
          </span>
          <span
            className="font-mono text- tracking-[0.2em] uppercase"
            style={{ color: `${CYBER_RED}cc` }}
          >
            Full_Stack_Developer
          </span>
        </div>

        {/* STATUS BAR */}
        <div className="mb-8 flex flex-col items-center gap-2 font-mono text- sm:text-xs tracking-[0.2em] uppercase text-cyan-300/70">
          <div className="flex items-center gap-2">
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ backgroundColor: CYBER_RED }}
            />
            <span>Sys_Link // Portfolio.exe</span>
          </div>
          <div className="w-40 h-0.75 bg-white/10 overflow-hidden rounded-full">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.6, ease: "easeInOut", delay: 0.4 }}
              className="h-full"
              style={{
                background: `linear-gradient(90deg, ${CYBER_RED}, ${CYBER_CYAN})`,
              }}
            />
          </div>
        </div>

        {/* TITULO */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.15]"
          style={{ textShadow: `0 0 12px rgba(255, 255, 255, 0.4)` }}
        >
          <span className="opacity-80 block">Tu negocio ya es serio.</span>
          <span className="opacity-80 block">Que la web lo demuestre.</span>
        </motion.h1>

        {/* SUBLINEA */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.35 }}
          className="mt-3 mb-3 max-w-xl text-base sm:text-lg font-medium"
          style={{
            color: CYBER_CYAN,
            textShadow: `0 0 14px rgba(103, 232, 249, 0.5)`,
          }}
        >
          Diseño y construyo sitios que transmiten la confianza que tu marca ya
          se ganó.
        </motion.p>

        {/* SUBTITULO */}
        <motion.div
          layout
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="mt-4 text-base sm:text-2xl font-mono font-medium text-gray-200 flex flex-wrap items-center justify-center gap-1.5 min-h-10 relative px-4 py-2 border border-gray-800 rounded-sm bg-[#0d121c]/80 backdrop-blur-sm"
        >
          <span className="opacity-80">Construyo webs que:</span>
          <RoleCycler />
        </motion.div>

        {/* CTA */}
        <a
          href="#projects"
          className="mt-8 px-6 py-2.5 sm:px-7 sm:py-3 border rounded-sm text-xs sm:text-sm font-mono uppercase tracking-[0.15em] flex items-center gap-2.5 group cursor-pointer transition-colors duration-300 hover:bg-cyan-300/10 active:scale-95"
          style={{
            borderColor: `${CYBER_CYAN}99`,
            color: "#e6fbff",
            textShadow: `0 0 8px rgba(103,232,249,0.4)`,
          }}
        >
          <span>Mira mi trabajo</span>
          <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>

        <div className="absolute top-6 left-4 w-4 h-4 border-l border-t border-gray-800" />
        <div className="absolute top-6 right-4 w-4 h-4 border-r border-t border-gray-800" />
        <div className="absolute bottom-0 left-4 w-4 h-4 border-l border-b border-gray-800" />
        <div className="absolute bottom-0 right-4 w-4 h-4 border-r border-b border-gray-800" />
      </div>
    </section>
  );
}

export default Hero;

console.log("Hello There");
