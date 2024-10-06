"use client";
import React from 'react';
import SectionHeading from './section-heading';
import { motion } from "framer-motion";
import { useSectionInview } from '@/lib/hook';

export default function About() {
  const { ref } = useSectionInview("About");
 

  return (
    <motion.section 
    ref={ref}
    className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40
    scroll-mt-28'
    initial={{ opacity: 0, y: 50}}
    animate={{ opacity: 1, y: 0}}
    transition={{ delay: 0.175}}
    id="about"
    >
        <SectionHeading>About Me</SectionHeading>
        <p className='mb-3'>
        My passion lies in <span className='font-medium'> designing </span> and developing 
        innovative products that push the boundaries of technology. With a creative mindset and a genuine passion for web development, I am driven by the desire to transform outdated products into innovative, user-friendly solutions.
           I am constantly <span className='italic'> inspired </span> 
         by the impact that <span className='font-bold'> technology </span> has on the world and am eager to be a part of driving this change. 
         In addition to my work in technology.
        </p>
        <p>
        Design and development give me the authority to not only create but also to solve problems that impact people's lives. I take great pride in delivering solutions that are both aesthetically pleasing and functionally sound. My approach is deeply rooted in research and user testing—I enjoy gathering user feedback and iterating on products to ensure they truly meet the needs of the end-user.
By continually refining my work based on real-world usage and insights, I aim to deliver products that solve genuine problems and offer enhanced user experiences.
        </p>
        
    </motion.section>
  )
}
