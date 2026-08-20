"use client"
import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './sectionHeading'
import { FaPaperPlane } from 'react-icons/fa6'
import { sendEmail } from '../actions/sendEmail'
import toast from 'react-hot-toast'

export default function Contact() {

  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (formData: FormData) => {
    try {
      await sendEmail(formData)
      toast.success('Email sent successfully!')
      formRef.current?.reset()
    } catch {
      toast.error('Failed to send email. Please try again.')
    }
  }

    
  return (
    <motion.section id="contact" className="mb-28 w-[min(100%, 38rem)] scroll-mt-28 text-center sm:mb-40"
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 text-center -mt-6">Please contact me directly at {" "}<a href="mailto:SeverjanLiciwork@gmail.com" className="underline hover:text-blue-500">
        SeverjanLiciwork@gmail.com</a>{" "} or through this form.
      </p>

      <form ref={formRef} action={handleSubmit}
        className="mt-10 rounded-lg sm:mt-8 flex flex-col gap-4"
        >
        <input 
        type="email" 
        name="Sender email" 
        placeholder="Your email" 
        required
        maxLength={500}
        className="h-14 rounded-lg border border-black/40 bg-white px-4 focus:border-2 focus:border-black focus:outline-none focus:ring-0" />
        <textarea 
        name="message"
        placeholder="Your message" 
        required
        maxLength={5000}
        className="my-3 h-52 rounded-lg border border-black/40 bg-white p-4 focus:border-2 focus:border-black focus:outline-none focus:ring-0" />
        <button type="submit" className="group flex h-[3rem] w-[8rem] items-center justify-center gap-2 rounded-lg bg-gray-900 text-white transition-all duration-300 hover:scale-110 hover:bg-gray-950 focus:scale-110 focus:border-2 focus:border-black focus:outline-none focus:ring-0 active:scale-105">
          Submit<FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-1" />
        </button>
      </form>

    </motion.section>
  )
}
