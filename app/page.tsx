import AboutMe from "@/components/aboutMe";
import Intro from "@/components/intro";
import Skills from "@/components/mySkills";
import Projects from "@/components/projects";
import SectionDivider from "@/components/sectionDivider";
import { main } from "framer-motion/m";
import Image from "next/image";

export default function Home() {
  return <main className= "flex flex-col items-center px-4 ">
    <Intro />
    <SectionDivider />
    <AboutMe />
    <Projects />
    <Skills />
  </main>
}
