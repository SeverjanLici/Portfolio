"use client"
import { motion } from 'framer-motion'
import React from 'react'
import SectionHeading from './sectionHeading'
import { projectsData } from '@/lib/data'
import { Project } from './project'



export default function Projects() {
  return (
    <motion.section>
        <SectionHeading>My projects</SectionHeading>
        <div>
          {
            projectsData.map((project,index) => (
              <React.Fragment key={index}>
                <Project {...project}/>
              </React.Fragment>
            ))
          }
        </div>
    </motion.section>
  )
}

