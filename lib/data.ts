import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import myportfolioImg from "@/public/myportfolio.png";
import ecommerceImg from "@/public/ecommerce.png";
import amazoncloneImg from "@/public/amazonclone.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "UI/UX Intern",
    location: "SQUBIX DIGITAL,Bbsr",
    description: "expert in figma, wireframing, prototyping, micro interaction ",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    title: "DeveOps Master",
    location: "Silicon,Bbsr",
    description: "Knowlwdge about Jenkins, Ansible, Kubernets, Docker, Terraform ",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Cyber Security",
    location: "Silicon,Bbsr",
    description: "Knowlwdge about Penetration testing, firewalls & encryption, basic cybersecurity tools and software. ",
    icon: React.createElement(CgWorkAlt),
    date: "2022",
  },
  {
    title: "Python",
    location: "Silicon,Bbsr",
    description: "Developed a comprehensive Employee Management System (EMS) using Python ",
    icon: React.createElement(CgWorkAlt),
    date: "2021",
  }
] as const;

export const projectsData = [
  {
    title: "Portfolio",
    description:
      "A fully responsive portfolio made using React and Node.js , Tailwind CSS framework and framer motion library.",
    tags: ["React", "Next.js", "Tailwind", "TypeScript", "Framer"],
    imageUrl: myportfolioImg,
  },
  {
    title: "Figma",
    description:
      "Design a e-commerce UI/UX design using figma . A prototype with micro-interaction and animation. ",
    tags: ["Figma", "Prototype","Wireframing", "UI/UX", "Site-map"],
    imageUrl: ecommerceImg,
  },
  {
    title: "Amazon-clone",
    description:
      "A amazon clone using HTML and CSS only , fully responsive.",
    tags: ["HTML", "CSS", "Figma"],
    imageUrl: amazoncloneImg,
  },
] as const;

export const skillsData = [
  "Java",
  "C++/C",
  "MySQL",
  "Python",
  "FIGMA",
  "HTML",
  "CSS",
  "UI/UX",
  "JavaScript",
  "Abobe Premier Pro",
  "After Effect",
  "Wireframing",
  "Protoping",
  "Design",
  "Data Structure",
  "Tailwind",
] as const;