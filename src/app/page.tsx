"use client";
import { motion } from "motion/react";

import { Introduction } from "@/src/components/sections/Introduction";

import { VARIANTS_CONTAINER } from "@/src/lib/constants";

export default function Personal() {
  return (
    <motion.main
      className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-8 space-y-24"
      variants={VARIANTS_CONTAINER}
      initial={false}
      animate="visible"
      data-component="Home"
    >
      <Introduction />
    </motion.main>
  );
}
