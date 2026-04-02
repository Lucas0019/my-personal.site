"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const menuItems = [
  { label: "Sobre", href: "/about" },
  { label: "Artigos", href: "/blog" },
  { label: "Projetos", href: "/projects" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname(); // 🔹 Rota atual

  // 🔒 Scroll lock
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* HEADER – desktop */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/70 dark:bg-black/60 backdrop-blur">
        {/* Container máximo centralizado */}
        <div className="max-w-7xl mx-auto w-full px-6 md:px-8">
          <div className="flex h-[80px] items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="font-medium text-zinc-900 dark:text-white"
            >
              LX
            </Link>

            {/* Menu Desktop */}
            <ul className="hidden md:flex gap-5 text-zinc-600 dark:text-zinc-400">
              {menuItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`relative transition-colors ${
                        isActive
                          ? "text-zinc-900 dark:text-white after:w-full"
                          : "hover:text-zinc-900 dark:hover:text-white"
                      }`}
                    >
                      {item.label}
                      <span
                        className={`
                    absolute left-0 -bottom-1 h-[2px] bg-zinc-900 dark:bg-white transition-all
                    ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                  `}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Hamburger mobile */}
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="md:hidden text-zinc-900 dark:text-white"
              aria-label="Abrir menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* MENU FULLSCREEN – mobile */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-white/80 dark:bg-black/80 backdrop-blur-xl"
            />

            {/* Container fullscreen */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 120, damping: 22 }}
              className="fixed inset-0 z-50 bg-gradient-to-b from-zinc-50 via-white to-zinc-100 dark:from-black dark:via-zinc-900 dark:to-black"
            >
              {/* Top bar */}
              <div className="flex h-[80px] items-center justify-between px-8 border-b border-zinc-200 dark:border-white/10">
                <span className="uppercase tracking-widest text-xs text-zinc-500 dark:text-zinc-400">
                  LX — Navegação
                </span>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Fechar menu"
                  className="text-zinc-900 dark:text-white"
                >
                  <X size={28} />
                </button>
              </div>

              {/* Links */}
              <motion.ul
                initial="hidden"
                animate="show"
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.14 } },
                }}
                className="flex flex-col gap-12 px-8 pt-28"
              >
                {menuItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <motion.li
                      key={item.href}
                      variants={{
                        hidden: { opacity: 0, x: 40 },
                        show: { opacity: 1, x: 0 },
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={`
                          group block tracking-tight text-5xl sm:text-6xl
                          ${isActive ? "text-zinc-900 dark:text-white" : "text-zinc-600 dark:text-zinc-400"}
                        `}
                      >
                        <span className="relative inline-block">
                          {item.label}
                          <span
                            className={`
                              absolute left-0 -bottom-3 h-[2px] bg-zinc-900 dark:bg-white transition-all
                              ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                            `}
                          />
                        </span>
                      </Link>
                    </motion.li>
                  );
                })}
              </motion.ul>

              {/* Footer mobile */}
              <div className="absolute bottom-8 left-8 text-xs text-zinc-500 dark:text-zinc-400">
                © {new Date().getFullYear()} LX — Experimental UI
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
