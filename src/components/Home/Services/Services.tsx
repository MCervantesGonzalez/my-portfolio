"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/components/Helper/animations";
import ServiceCard from "./ServiceCard";
import { SERVICES_DATA } from "@/lib/services-data";
import { CYBER_RED, CYBER_CYAN } from "@/lib/theme";

function Services() {
  return (
    <section id="services" className="py-20 text-white">
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
          Services.list
        </div>
        <h2 className="text-2xl md:text-4xl xl:text-5xl font-bold">
          Mis <span style={{ color: CYBER_CYAN }}>Servicios</span>
        </h2>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm sm:text-base">
          Lo que construyo para que tu negocio se vea, y funcione, a la altura.
        </p>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="w-[85%] md:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
      >
        {SERVICES_DATA.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </motion.div>
    </section>
  );
}

export default Services;
