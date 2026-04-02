import React from "react";
import { motion } from "motion/react";
import { TRANSITION_SECTION, VARIANTS_SECTION } from "@/src/lib/constants";

export const Introduction = () => {
  return (
    <motion.section
      initial={false}
      variants={VARIANTS_SECTION}
      transition={TRANSITION_SECTION}
      className="relative flex h-[100dvh] w-full items-center"
      data-component="Introduction"
    >
      <div className="flex max-w-2xl flex-col justify-center space-y-10">
        {/* Eyebrow */}
        <motion.span
          className="text-xs uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.02 }}
        >
          Frontend Developer *
        </motion.span>

        {/* Title */}
        <motion.h1
          className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
          initial={{ y: 14 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.06 }}
        >
          Eu crio{" "}
          <span className="text-zinc-900 dark:text-zinc-100">
            interfaces digitais
          </span>
          <br />
          <span className="font-normal text-zinc-600 dark:text-zinc-400">
            que não precisam se explicar.
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="max-w-xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-lg"
          initial={{ y: 10 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Sou o <strong>Lucas.</strong> Trabalho com frontend há alguns bons
          anos, focado em construir produtos rápidos, consistentes e fáceis de
          evoluir. Menos excesso visual. Mais clareza, intenção e código bem
          escrito.
        </motion.p>

        {/* Divider */}
        <motion.div
          className="h-px w-24 bg-zinc-300 dark:bg-zinc-700"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.14, duration: 0.4 }}
          style={{ transformOrigin: "left" }}
        />

        {/* Frase de efeito */}
        <motion.blockquote
          className="text-sm italic text-zinc-500 dark:text-zinc-500"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18 }}
        >
          “Menos promessa. Mais código em produção.”
        </motion.blockquote>

        {/* CTA */}
        <motion.div
          className="flex items-center gap-6 pt-2"
          initial={{ y: 8 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.22 }}
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-md border border-zinc-300 px-5 py-2 text-sm font-medium text-zinc-900 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-800"
          >
            Projetos
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>

          <a
            href="#contact"
            className="text-sm text-zinc-500 transition hover:text-zinc-900 dark:hover:text-zinc-100"
          >
            Falar comigo
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};
