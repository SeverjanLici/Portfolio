"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { links } from "@/lib/data";
import { link } from "framer-motion/m";

export default function Header() {
  return (
    <header className="relative z-50 flex justify-center">
      <motion.div
        className="fixed top-6 h-[3.25rem] w-[36rem] rounded-full border border-white/40 bg-[#2f3a4b]/80 shadow-lg shadow-black/20 backdrop-blur-[0.5rem] dark:border-black/40 dark:bg-gray-950/75"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <nav className="flex h-full items-center justify-center px-6">
          <ul className="flex items-center gap-6 text-sm font-medium text-white/90">
            {links.map((link) => (
              <motion.li key={link.hash} className="inline-block"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}>
                <Link
                  href={link.hash}
                  className="transition hover:text-white"
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
