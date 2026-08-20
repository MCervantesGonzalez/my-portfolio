"use client";

import React, { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  useMotionTemplate,
} from "framer-motion";
import { SKILLS_DATA } from "@/lib/skills-data";
import {
  fadeIn,
  staggerContainer,
  cardVariant,
} from "@/components/Helper/animations";
import { CYBER_RED, CYBER_CYAN, CYBER_PANEL_CLASS } from "@/lib/theme";

function TiltCard({ children }: { children: React.ReactNode }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 20, mass: 0.6 };
  const mouseX = useSpring(x, springConfig);
  const mouseY = useSpring(y, springConfig);

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);

  const scale = useTransform(mouseX, [-0.5, 0, 0.5], [1.05, 1, 1.05]);

  const glareX = useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"]);
  const glareOpacity = useTransform(mouseX, (val: number) =>
    val === 0 ? 0 : 0.12,
  );

  // Brillo cian en vez de blanco, para que el glare respete la paleta cyberpunk
  const glareBg = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, rgba(103, 232, 249, 0.9) 0%, rgba(103, 232, 249, 0) 80%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();

    const mouseXPos = (e.clientX - rect.left) / rect.width - 0.5;
    const mouseYPos = (e.clientY - rect.top) / rect.height - 0.5;

    x.set(mouseXPos);
    y.set(mouseYPos);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div style={{ perspective: 1000 }} className="rounded-sm">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          scale,
          transformStyle: "preserve-3d",
        }}
        className="relative rounded-sm overflow-hidden cursor-pointer will-change-transform"
      >
        <motion.div
          style={{
            background: glareBg,
            opacity: glareOpacity,
          }}
          className="absolute inset-0 pointer-events-none z-10 mix-blend-overlay"
        />

        <div style={{ transform: "translateZ(20px)" }}>{children}</div>
      </motion.div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 text-white">
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
          Skills.stack
        </div>
        <h2 className="text-2xl md:text-4xl xl:text-5xl font-bold">
          Mis <span style={{ color: CYBER_CYAN }}>Tecnologías</span>
        </h2>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm sm:text-base">
          Herramientas y lenguajes con los que construyo soluciones de punta a
          punta.
        </p>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="flex flex-wrap justify-center gap-6 mt-16 max-w-6xl mx-auto px-4"
      >
        {SKILLS_DATA.map((skill) => (
          <motion.div key={skill.name} variants={cardVariant}>
            <TiltCard>
              <div
                className={`relative rounded-sm text-center w-36 h-40 sm:w-40 sm:h-44 flex flex-col items-center justify-center p-4 ${CYBER_PANEL_CLASS}`}
              >
                {/* Marcadores de esquina */}
                <div
                  className="absolute -top-px -left-px w-3 h-3 border-l border-t"
                  style={{ borderColor: `${CYBER_RED}80` }}
                />
                <div
                  className="absolute -bottom-px -right-px w-3 h-3 border-r border-b"
                  style={{ borderColor: `${CYBER_RED}80` }}
                />

                <div className="relative w-12 h-12 sm:w-14 sm:h-14 mb-3">
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    fill
                    sizes="56px"
                    className="object-contain"
                  />
                </div>
                <p
                  className="font-mono text-xs sm:text-sm tracking-[0.1em] uppercase"
                  style={{ color: CYBER_CYAN }}
                >
                  {skill.name}
                </p>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
