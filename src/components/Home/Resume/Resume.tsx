"use client";
import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";
import { WORK_DATA, EDUCATION_DATA } from "@/lib/resume-data";
import {
  fadeIn,
  staggerContainer,
  cardVariant,
} from "@/components/Helper/animations";
import { CYBER_RED, CYBER_CYAN } from "@/lib/theme";

function Resume() {
  return (
    <section id="resume" className="py-20 pb-16">
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="text-center mb-16"
      >
        <div
          className="flex items-center justify-center gap-2 mb-3 font-mono text-[10px] sm:text-xs tracking-[0.2em] uppercase"
          style={{ color: `${CYBER_CYAN}b3` }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ backgroundColor: CYBER_RED }}
          />
          Resume.log
        </div>
        <h2 className="text-2xl md:text-4xl xl:text-5xl font-bold text-white">
          Historia <span style={{ color: CYBER_CYAN }}>Profesional</span>
        </h2>
      </motion.div>

      <div className="w-[90%] sm:w-[80%] xl:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10">
        {/* EXPERIENCIA LABORAL */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <h3 className="font-mono text-xs tracking-[0.2em] uppercase text-gray-400 mb-6">
            Experiencia laboral
          </h3>
          {WORK_DATA.map((resume) => (
            <motion.div key={resume.id} variants={cardVariant}>
              <ResumeCard resume={resume} />
            </motion.div>
          ))}
        </motion.div>

        {/* EDUCACIÓN */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <h3 className="font-mono text-xs tracking-[0.2em] uppercase text-gray-400 mb-6">
            Educación
          </h3>
          {EDUCATION_DATA.map((resume) => (
            <motion.div key={resume.id} variants={cardVariant}>
              <ResumeCard resume={resume} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Resume;
