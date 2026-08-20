"use client"
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { projectsData } from '@/lib/data'

type projectProps = (typeof projectsData)[number]

export function Project({ title, description, tags, imageUrl }: projectProps) {
  const ref = useRef<HTMLDivElement>(null)

  const {scrollYProgress} = useScroll({
    target:ref,
    offset:["0 1","1.33 1"]
  });
   const scaleProgress= useTransform(scrollYProgress,[0,1],[0.8,1])
   const opacityProgress= useTransform(scrollYProgress,[0,1],[0.6,1])


  return <motion.div
   ref={ref} 
        style={{
          scale: scaleProgress,
          opacity: opacityProgress, 
        }}
        className='group mb-3 sm:mb-8 last:mb-0 '>
    <section 
        className="flex flex-col bg-gray-100 max-w-[42rem] border border-black/5 
                    overflow-hidden md:pr-8 relative md:h-[20rem]
                    rounded-lg
                    hover:bg-gray-200 transition md:group-even:pl-8">
      <div className="order-2 py-4 pb-7 px-5 md:order-none md:pl-10 md:pr-2 md:pt-1 md:max-w-[50%] flex flex-col h-full md:group-even:ml-auto md:group-even:pl-2 md:group-even:pr-10">
      <h3 className="text-2xl font-semibold">{title}</h3>
    <p className="mt-2 leading-relaxed text-gray-700 ">{description}</p>
    <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">{
      tags.map((tag,index)=>(
        <li className="bg-black/[0.7] px-3 py-1 text-[0.75rem] 
        uppercase tracking-wider text-white rounded-full " key={index}>{tag}</li>
      ))}</ul>
    </div>
      <Image src={imageUrl} alt={"Projects i worked on"} quality={93} 
      className="order-1 relative top-auto right-auto left-auto w-full h-auto 
            rounded-t-lg shadow-2xl md:absolute md:top-8 md:-right-40 md:w-[28.25rem] 
            md:group-even:-right-[initial] md:group-even:-left-40 
              md:transition 
              md:group-hover:-translate-y-3 
              md:group-hover:-rotate-2
              md:group-hover:scale-[1.04]  
                
              md:group-even:group-hover:translate-y-3 
              md:group-even:group-hover:rotate-2"/>
  </section> 
  </motion.div>
} 