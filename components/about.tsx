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
        I have a strong background in <span className='font-bold'>web development and UX design</span>, 
        having worked on multiple projects in these areas. 
        My passion lies in <span className='font-medium'> designing </span> and developing 
        innovative products that push the boundaries of technology.
        </p>
        <p>
         I am constantly <span className='italic'> inspired </span> 
         by the impact that <span className='font-bold'> technology </span> has on the world and am eager to be a part of driving this change. 
         In addition to my work in technology, I also<span className='italic'>  freelance as a video editor </span> for various YouTube channels,
        club and institutions.
        </p>
        
    </motion.section>
  )
}
