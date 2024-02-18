"use client";

import React from 'react';
import SectionHeading from './section-heading';
import { projectsData } from '@/lib/data';
import Project from './projects';
import { useSectionInview } from '@/lib/hook';



export default function Projects() {
  const { ref } = useSectionInview("Projects",0.5);

  return (
    <section 
    ref={ref} 
    id='project'
     className='scroll-mt-28 mb-28'>
        <SectionHeading>My Projects</SectionHeading>
        <div>
            { projectsData.map((project, index) =>(
                <React.Fragment key={index}>
                    <Project {...project} />
                </React.Fragment>
            ))}
        </div>
    </section>
  );
}