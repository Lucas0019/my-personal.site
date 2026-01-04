import React from "react";
import { motion } from "motion/react";
import { TRANSITION_SECTION, VARIANTS_SECTION } from "@/lib/constants";
import { EMAIL, SOCIAL_LINKS } from "@/app/data";
import { MagneticSocialLink } from "@/components/MagneticSocialLink";

export const Contact = () => {
  return (
    <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
      <h3 className="mb-5 text-lg font-medium">Conectar</h3>
      <p className="mb-5 text-zinc-600 dark:text-zinc-400">
        Você pode entrar em contato comigo pelo seguinte endereço.{" "}
        <a className="underline dark:text-zinc-300" href={`mailto:${EMAIL}`}>
          {EMAIL}
        </a>
      </p>
      <div className="flex items-center justify-start space-x-3">
        {SOCIAL_LINKS.map((link) => (
          <MagneticSocialLink key={link.label} link={link.link}>
            {link.label}
          </MagneticSocialLink>
        ))}
      </div>
    </motion.section>
  );
};
