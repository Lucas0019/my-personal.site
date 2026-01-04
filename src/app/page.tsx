"use client";
import { motion } from "motion/react";

import { Introduction } from "@/src/components/sections/Introduction";
import { WorkExperience } from "@/src/components/sections/WorkExperience";
import { AcademicTraining } from "@/src/components/sections/AcademicTraining";
import { BlogList } from "@/src/components/sections/BlogList";
import { Contact } from "@/src/components/sections/Contact";

import { VARIANTS_CONTAINER } from "@/src/lib/constants";

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
