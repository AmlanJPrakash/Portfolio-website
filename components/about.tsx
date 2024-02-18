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
        I'm primarily interested in Java, C,C++ and python.I have worked on several <span className='font-medium'>Web Development</span> projets and 
        <span className='font-medium'> Machine learning</span> Projets.
        </p>
        <p>
        Technology excites me and I am always in awe of the change it drives in the world.Certain skills that I have worked with include 
         <span className='font-bold'> Data Structure and Algorithms(Java) , 
        Web Development, Machine Learning (Python).</span>
        Outside of Tech, l am an <span className='italic'>video editor</span>  work for several Youtuber ,clubs and institutions.
        </p>
    </motion.section>
  )
}
