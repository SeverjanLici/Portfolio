"use client"
import React from 'react'
import SectionHeading from './sectionHeading'
import { projectsData } from '@/lib/data'
import { Project } from './project'


export default function Projects() {  
  return (
    <section id="projects" className='scroll-mt-28 mb-28'>
        <SectionHeading>My projects</SectionHeading>
        <div>
          {
            projectsData.map((project) => (
              <Project key={project.title} {...project} />
            ))
          }
        </div>
    </section>
  )
}

