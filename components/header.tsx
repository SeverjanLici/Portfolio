"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { links } from "@/lib/data";
import { useState } from "react";
import clsx from "clsx";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [activeState, setActiveState] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="relative z-50 flex justify-center">
      <motion.div
        className="fixed top-6 w-[calc(100%-2rem)] max-w-[36rem] rounded-2xl border border-white/40 bg-[#2f3a4b]/80 shadow-lg shadow-black/20 backdrop-blur-[0.5rem] dark:border-black/40 dark:bg-gray-950/75 md:h-[3.25rem] md:rounded-full"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <nav className="flex min-h-[3.25rem] items-center justify-between px-5 md:h-full md:justify-center md:px-6">
          <span className="text-sm font-semibold text-white md:hidden">Severjan Lici</span>
          <button
            type="button"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            className="text-2xl text-white md:hidden"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
          <ul className={clsx(
            "absolute left-0 top-full w-full flex-col gap-1 rounded-2xl bg-[#2f3a4b]/95 p-3 text-sm font-medium text-white/90 md:static md:flex md:w-auto md:flex-row md:items-center md:gap-6 md:rounded-none md:bg-transparent md:p-0",
            isMenuOpen ? "flex" : "hidden md:flex"
          )}>
            {links.map((link) => (
              <motion.li key={link.hash} className="inline-block"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}>
                <Link
                  href={link.hash}
                  className={clsx(
                    "transition hover:text-white text-shadow-gray-900",
                    activeState === link.hash ? "text-white" : "text-white/90"
                  )}
                  
                  onClick={() => {
                    setActiveState(link.hash);
                    setIsMenuOpen(false);
                  }}
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </header>
  );
}
