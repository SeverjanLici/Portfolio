"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
      <motion.p
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I&apos;m Severjan Lici.</span> I&apos;m a{" "}
        <span className="font-bold">full-stack developer</span> recently{" "}
        <span className="font-bold">graduated</span> from the{" "}
        <span className="font-bold">Polytechnic University of Turin</span>. I enjoy building{" "}
        <span className="italic">sites & apps</span>.
      </motion.p>

      <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link href="#contact" className="group bg-gray-900 text-white  px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition">
          <span className="">
            Contact me here
          </span>
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a href="" className="group bg-white text-black  px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-100 active:scale-105 transition">
          <span className="">
            CV Download
          </span>
          <HiDownload className="opacity-60 group-hover:translate-x-1 transition" />
        </a>

        <a href="" className="group bg-white text-black  p-4 flex items-center gap-2 rounded-full text-[1.35rem] outline-none focus:scale-110 hover:scale-110 hover:bg-gray-100 active:scale-105 transition">
            <FaGithubSquare className="opacity-70 group-hover:translate-x-1 transition" />
        </a>
      </motion.div>
    </section>
  );
}
