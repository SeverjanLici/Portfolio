"use client"
import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './sectionHeading'
export default function AboutMe() {
  return (
    <motion.section 
      className="max-w-[45rem] text-center leading-8 "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
        <SectionHeading>About me</SectionHeading>
        <p className="mb-3">
          I am a software engineering student who recently graduated from the Polytechnic University of Turin with a Master&apos;s degree in Software Engineering.
          I enjoy turning ideas into real digital products and solving problems through clean, practical code.
        </p>
        <p className="mb-3">
          Well maybe not the most practical... or the most clean... but it&apos;s the effort that counts, right?
        </p>
        <p>
          I am passionate about coding and especially love building modern apps and websites that are fast, useful, and enjoyable to use.
          I am always looking to learn, improve, and take on new challenges.
        </p>
    </motion.section>
  )
}
