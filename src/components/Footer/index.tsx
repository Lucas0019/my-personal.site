"use client";

import { ThemeSwitch } from "./ThemeSwitch";
import { motion } from "motion/react";
import { ShieldCheck } from "lucide-react";
import { useState } from "react";

export function Footer() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <footer
      className="relative border-t border-zinc-200/50 pt-24 pb-16 dark:border-zinc-800/50"
      data-component="Footer"
    >
      {/* Elementos decorativos */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-24 w-24 rounded-full bg-gradient-to-r from-purple-500/5 to-pink-500/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-32 w-32 rounded-full bg-gradient-to-r from-blue-500/5 to-cyan-500/5 blur-3xl" />
        <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-zinc-300/30 to-transparent dark:via-zinc-700/30" />
      </div>

      {/* Container alinhado com PageLayout */}
      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-8">
        {/* Conteúdo principal */}
        <div className="mb-16 grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Sobre */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-100">
              Sobre este espaço
            </h3>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Portfólio minimalista focado em experiência do usuário,
              performance e código limpo. Cada detalhe foi pensado com intenção.
            </p>
          </div>

          {/* Stack */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-100">
              Stack principal
            </h3>

            <div className="flex flex-wrap gap-2">
              {[
                "Next.js 15",
                "React",
                "TypeScript",
                "Tailwind CSS",
                "Motion Primitives",
                "MDX",
              ].map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-full border border-zinc-300/50 bg-white/20 px-3 py-1.5 text-xs text-zinc-700 dark:border-zinc-700/50 dark:bg-zinc-900/20 dark:text-zinc-300"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-100">
              Conecte-se
            </h3>

            <motion.a
              href="mailto:olucasxavier@gmail.com"
              whileHover={{ x: 4 }}
              className="inline-block text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
            >
              olucasxavier@gmail.com
            </motion.a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-zinc-200/30 dark:border-zinc-800/30" />

        {/* Footer bottom */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Esquerda */}
          <div className="text-xs text-zinc-500 dark:text-zinc-500">
            © 2026 • Todos os direitos reservados
          </div>

          {/* Centro */}
          <motion.div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative flex items-center gap-2 rounded-full border border-zinc-300/40 bg-white/30 px-3 py-1.5 backdrop-blur-sm dark:border-zinc-700/40 dark:bg-zinc-900/30"
          >
            <ShieldCheck className="h-4 w-4 text-emerald-600 dark:text-emerald-500" />
            <span className="text-xs text-zinc-600 dark:text-zinc-400">
              Site seguro • HTTPS ativo
            </span>

            {/* Tooltip */}
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{
                opacity: isHovered ? 1 : 0,
                y: isHovered ? 0 : 4,
              }}
              transition={{ duration: 0.2 }}
              className="absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap"
            >
              <div className="rounded-md bg-black/90 px-3 py-1.5 text-xs text-white shadow-lg dark:bg-white/90 dark:text-black">
                Conexão criptografada com SSL
              </div>
            </motion.div>
          </motion.div>

          {/* Direita */}
          <div className="flex items-center">
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </footer>
  );
}
