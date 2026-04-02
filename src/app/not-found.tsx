"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* background decorativo */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-72 w-72 rounded-full bg-black/5 blur-3xl dark:bg-white/5" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="relative z-10 flex max-w-md flex-col items-center text-center"
      >
        <motion.h1
          initial={{ scale: 0.85 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.1, type: "spring", stiffness: 120 }}
          className="text-8xl font-bold tracking-tight text-foreground"
        >
          404
        </motion.h1>

        <span className="mt-2 h-px w-12 bg-zinc-300 dark:bg-zinc-700" />

        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          A página que você está tentando acessar não existe ou foi movida para
          outro endereço.
        </p>

        <div className="mt-8 flex gap-3">
          <Link
            href="/"
            className="rounded-lg bg-black px-6 py-3 text-sm font-medium text-white transition hover:opacity-90 active:scale-95 dark:bg-white dark:text-black"
          >
            Voltar para a home
          </Link>

          <Link
            href="/blog"
            className="rounded-lg border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 active:scale-95 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            Ir para o blog
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
