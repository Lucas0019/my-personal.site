import React from "react";
import { motion } from "motion/react";
import { TRANSITION_SECTION, VARIANTS_SECTION } from "@/src/lib/constants";

export const Introduction = () => {
  return (
    <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
      <div className="flex-1">
        <h4>
          Olá! Eu sou Lucas,
          <br />
          um desenvolvedor frontend há mais de 5 anos construindo experiências
          que as pessoas realmente usam.
        </h4>
        <br />
        <p className="text-zinc-600 dark:text-zinc-400">
          Construindo aplicações web escaláveis e de alta performance.
          Conectando design e desenvolvimento com código limpo e de fácil
          manutenção, sempre buscando aprender novas tecnologias e aprimorar
          minhas habilidades.
        </p>
      </div>
    </motion.section>
  );
};
