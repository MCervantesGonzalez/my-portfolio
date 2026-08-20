"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { CYBER_RED, CYBER_CYAN } from "@/lib/theme";
import { NAV_LINKS } from "@/lib/nav-links";

interface MobileNavProps {
  showNav: boolean;
  closeNav: () => void;
}

function MobileNavbar({ showNav, closeNav }: MobileNavProps) {
  return (
    <AnimatePresence>
      {showNav && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeNav}
            className="fixed inset-0 z[60 bg-black/70 backdrop-blur-sm"
          />

          {/* Drawer Menu */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 z-[70] w-[80%] sm:w-[60%] h-full bg-[#0a0f16] flex flex-col justify-center items-center gap-8 p-6"
            style={{ borderLeft: `1px solid ${CYBER_RED}33` }}
          >
            <button
              onClick={closeNav}
              aria-label="Close Menu"
              className="absolute top-6 right-6 p-2 border rounded-sm"
              style={{ borderColor: `${CYBER_CYAN}66` }}
            >
              <X
                className="w-5 h-5"
                strokeWidth={1.5}
                style={{ color: CYBER_CYAN }}
              />
            </button>

            {/* Tag de estado, mismo lenguaje que el Sys_Link del Hero */}
            <div className="absolute top-8 left-8 flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] uppercase text-cyan-300/60">
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ backgroundColor: CYBER_RED }}
              />
              Nav_Menu.exe
            </div>

            {NAV_LINKS.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={() => {
                  setTimeout(() => {
                    closeNav();
                  }, 100);
                }}
                className="font-mono text-lg tracking-widest uppercase text-gray-300 hover:text-cyan-300 transition-colors cursor-pointer"
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default MobileNavbar;
