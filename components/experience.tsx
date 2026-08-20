"use client"
import React from 'react'
import SectionHeading from './sectionHeading'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data';

export default function Experience() {
  return (
        <section id="experience" className="mb-28 max-w-212 scroll-mt-28 text-center sm:mb-40">
        <SectionHeading>Experience</SectionHeading>
                <VerticalTimeline lineColor="#e5e7eb" className="mt-12!">
            {
                experiencesData.map((experience,index)=>(
              <VerticalTimelineElement key={`${experience.title}-${experience.date}`}
                    contentStyle={{ 
                        background: '#f3f4f6',
                        boxShadow: "none",
                border:"1px solid #6b7280",
                borderRadius: "1rem",
                        textAlign: "left",
                lineHeight: "1.65",
                padding: "1.75rem 2.25rem",
                     }}
                    
                    contentArrowStyle={{ borderRight: "0.4rem solid #9ca3af" }}
                    date={experience.date}
                    icon={experience.icon}
                    iconStyle={{ 
                        background: 'white', 
                        font: '1.5rem' }}
                    >
                        <h3 className="text-lg font-semibold capitalize leading-snug">{experience.title}</h3>
                        <p className="mt-2 text-sm font-normal text-gray-600">{experience.location}</p>
                    </VerticalTimelineElement>
                ))
            }
        </VerticalTimeline>
    </section>
  )
}
