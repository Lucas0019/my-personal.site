"use client";
import { motion } from "motion/react";

import { Introduction } from "@/components/sections/Introduction";
import { WorkExperience } from "@/components/sections/WorkExperience";
import { AcademicTraining } from "@/components/sections/AcademicTraining";
import { BlogList } from "@/components/sections/BlogList";
import { Contact } from "@/components/sections/Contact";

import { VARIANTS_CONTAINER } from "@/lib/constants";

export default function Personal() {
  return (
    <motion.main
      className="relative z-10 space-y-24"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <Introduction />
      <WorkExperience />
      <AcademicTraining />
      <BlogList />
      <Contact />
    </motion.main>
  );
}
