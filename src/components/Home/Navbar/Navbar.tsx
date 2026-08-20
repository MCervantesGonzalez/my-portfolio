"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { CYBER_RED, CYBER_CYAN } from "@/lib/theme";
import { NAV_LINKS } from "@/lib/nav-links";

interface NavProps {
  openNav: () => void;
}

const mainLinks = NAV_LINKS.slice(0, -1);
const contactLink = NAV_LINKS[NAV_LINKS.length - 1];

function NavBar({ openNav }: NavProps) {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      setNavBg(window.scrollY >= 90);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        navBg ? "bg-[#0a0f16]/85 backdrop-blur-md py-4" : "bg-transparent py-6"
      }`}
      style={{
        borderBottom: navBg
          ? `1px solid ${CYBER_CYAN}33`
          : "1px solid transparent",
      }}
    >
      <div className="flex items-center justify-between w-[90%] xl:w-[80%] mx-auto">
        {/* LOGO  */}
        <Link href="#home" className="flex items-center gap-2">
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ backgroundColor: CYBER_RED }}
          />
          <span className="font-mono text-sm tracking-[0.25em] uppercase text-white/90">
            M.Cervantes<span style={{ color: CYBER_CYAN }}>_dev</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {mainLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className="relative font-mono text-xs tracking-[0.15em] uppercase text-gray-400 hover:text-cyan-300 transition-colors duration-300 group"
            >
              {link.label}
              <span
                aria-hidden
                className="absolute -bottom-1 left-0 h-px w-0 group-hover:w-full transition-all duration-300"
                style={{ backgroundColor: CYBER_RED }}
              />
            </Link>
          ))}

          <Link
            href={contactLink.href}
            className="px-4 py-1.5 border rounded-sm font-mono text-xs uppercase tracking-[0.15em] transition-colors duration-300 hover:bg-cyan-300/10"
            style={{ borderColor: `${CYBER_RED}99`, color: "#e6fbff" }}
          >
            {contactLink.label}
          </Link>
        </nav>

        {/* Burger Menu */}
        <button
          onClick={openNav}
          aria-label="Open Menu"
          className="lg:hidden focus:outline-none"
        >
          <Menu
            className="w-7 h-7"
            strokeWidth={1.5}
            style={{ color: CYBER_CYAN }}
          />
        </button>
      </div>
    </header>
  );
}

export default NavBar;
