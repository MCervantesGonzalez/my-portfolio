"use client";
import React from "react";
import { motion } from "framer-motion";
import { cardVariant } from "@/components/Helper/animations";
import { ServiceProps } from "@/lib/services-data";
import { CYBER_RED, CYBER_CYAN } from "@/lib/theme";

function ServiceCard({ service }: ServiceProps) {
  const { icon: Icon } = service;

  return (
    <motion.article
      variants={cardVariant}
      whileHover={{ y: -6 }}
      className="relative bg-[#0d121c]/80 border border-gray-800 rounded-sm p-6 flex flex-col items-center text-center backdrop-blur-sm transition-colors duration-300 hover:border-cyan-300/50"
    >
      {/* Marcadores de esquina */}
      <div
        className="absolute -top-px -left-px w-3.5 h-3.5 border-l-2 border-t-2"
        style={{ borderColor: CYBER_RED }}
      />
      <div
        className="absolute -bottom-px -right-px w-3.5 h-3.5 border-r-2 border-b-2"
        style={{ borderColor: CYBER_RED }}
      />

      <div
        className="w-14 h-14 mb-4 flex items-center justify-center rounded-sm border"
        style={{
          borderColor: `${CYBER_CYAN}40`,
          backgroundColor: `${CYBER_CYAN}0d`,
        }}
      >
        <Icon
          className="w-6 h-6"
          style={{ color: CYBER_CYAN }}
          strokeWidth={1.5}
        />
      </div>

      <h3 className="font-mono text-sm tracking-[0.15em] uppercase text-white mb-2">
        {service.title}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        {service.description}
      </p>
    </motion.article>
  );
}

export default ServiceCard;
