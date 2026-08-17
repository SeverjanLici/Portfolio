"use client"
import React from 'react'
import SectionHeading from './sectionHeading'
import { skillsData } from '@/lib/data'
import { motion } from 'framer-motion'

const fadeInAnimationVariants ={
    initial:{ opacity: 0, y: 100 },
    animate:(index:number)=>({
        opacity: 1,
        y: 0,
        transition:{delay:0.05*index}
    })
}
export default function Skills() {
  return (
    <section className = " mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40">
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-700 dark:text-gray-300 sm:text-xl">
        {
            skillsData.map((skill, index) => (
                <motion.li 
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={index}
                className="rounded-lg border border-gray-300 bg-gray-100 px-5 py-3 dark:border-gray-700 dark:bg-gray-800" 
                 key={index}>{skill}</motion.li>
            ))
        } 
      </ul>
    </section>
  )
}
