import React from "react";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import ParticipiumImg from "@/public/Participium.jpg";
import hangedManImg from "@/public/hangedMan.jpg";
import fileManagerImg from "@/public/rest2.webp";
import cookingAppImg from "@/public/CookingApp.png";
import portfolioImg from "@/public/Portfolio.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "B.Sc. Computer Engineering Graduate | Politecnico di Torino",
    location: "Torino, To",
    icon: React.createElement(LuGraduationCap),
    date: "2020-2024",
  },
  {
    title: "Software Engineer | M.Sc. Graduate from Politecnico di Torino",
    location: "Turin, To",
    icon: React.createElement(LuGraduationCap),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Participium(team of 6)",
    description:
      "Website for reporting any issues needing fixing in the city. People can report issues along with photos, locations, descriptions and types for the municipality to fix them.",
    tags: ["React", "Python","TypeScript","HTML","CSS", "Swagger/OpenAPI", "Docker", "Bash","Redis", "Agile(YouTrack)"],
    imageUrl: ParticipiumImg,
    repoUrl: "https://github.com/SeverjanLici/Participium",
  },
  {
  title: "Guess a Sentence(team of 1)",
  description:
    "A timed word-puzzle game combining Hangman and Wheel of Fortune mechanics. Players manage a coin economy where each letter costs coins to use, racing a 60-second clock to reveal and solve secret sentences.",
  tags: ["React","JavaScript", "Node.js", "Express", "SQLite", "Bootstrap"],
  imageUrl: hangedManImg,
  repoUrl: undefined,
},
  {
    title: "File Manager(team of 4)",
    description:
    "A microservice based file management system allowing users to upload, download, share and delete files based on their ROLE along with automatic AI generated summaries for each file.",
    tags: ["Kotlin","PostgreSQL","Docker", "Spring Boot", "MongoDB","Keycloak","React","MinIO","Kafka","Ollama AI"],
    imageUrl: fileManagerImg,
    repoUrl: "https://github.com/SeverjanLici/File-Management-System",
  },
  {
    title: "Cooking App(team of 4)",
    description:
    "A cooking app that allows users to search, share, save and create recipes. Users can also follow other users to receive notifications when they create new recipes.",
    tags: ["Firebase","Kotlin(Android Studio)","MVVM/MVI"],
    imageUrl: cookingAppImg,
    repoUrl: "https://github.com/SeverjanLici/Cooking-App",
  },
  {
    title: "Portfolio Website(personal)",
    description:
    "A responsive portfolio website showcasing my projects, skills, and experience.",
    tags: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    imageUrl: portfolioImg,
    repoUrl: "https://github.com/SeverjanLici/Portfolio",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Express",
  "PostgreSQL",
  "Framer Motion",
  "Kotlin",
  "Spring Boot",
  "C",
  "Java"

] as const;
