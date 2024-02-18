"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hook';
import { sendEmail } from '@/action/sendEmail';
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';
import { FaPaperPlane } from 'react-icons/fa';

export default function Contact() {
    const { ref } = useSectionInView("Contact");
    
  return (
    <motion.section 
    id="contact" 
    ref={ref}
    className='mb-20 sm:mb-28 w-[min(100%, 38rem)] text-center'
    initial = {{
        opacity: 0,
    }}
    whileInView = {{
        opacity: 1,
    }}
    transition = {{
        duration: 1
    }}
    viewport={{
        once: true,
    }}
    >
        <SectionHeading> Contact me </SectionHeading>
        <p className='text-gray-700 -mt-5 dark:text-white/80'>Please contact me directly at{" "} <a className="underline" 
        href="mailto:amlanjprakash@gmail.com">
            example@gmail.com</a>{" "} or through this form.
             </p>
             <form 
             className = "mt-10 flex flex-col dark:text-black" 
             action = {async (FormData) =>{
                const { data, error } = await sendEmail(FormData);

                if (error){
                    toast.error(error);
                    return;
                }
                toast.success("Email sent successfully");
             }}>
                <input 
                className='h-14 px=4 rounded-lg border borderBlack p-4
                 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 
                 transition-all dark:outline-none'
                name="senderEmail"
                type="email"
                required
                maxLength={500}
                placeholder='Your email'
                />
                <textarea className='h-52 my-3 rounded-lg borderBlack p-4'
                name="message"
                placeholder='Your message'
                required
                maxLength={5000}
                />
                <button type = "submit"
                className='group flex items-center justify-center gap-2 h-[3rem] w-[8rem]
                 bg-gray-900 text-white rounded-full
                    outline-none transition-all focus:scale-110 hover:scale-110
                 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 
                 disabled:scale-100 disable:bg-opacity-65 disable={pending}'>
                    submit{" "}
                <FaPaperPlane className="text-xs opacity-70 transition-all 
                group-hover:translate-x-1
                group-hover:-translate-y-1" />{" "}
                 </button>
             </form>
    </motion.section>
  )
}
