"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Lock } from "lucide-react";

export function CookiePopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookiesAccepted");
    if (!accepted) setShow(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 60, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 flex items-center gap-3 text-sm text-zinc-700 dark:text-zinc-300 bg-white/90 dark:bg-zinc-900/80 backdrop-blur-md shadow-lg rounded-xl px-5 py-3 max-w-md"
        >
          <Lock className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
          <span className="flex-1">
            Usamos cookies para melhorar sua experiência no site.
          </span>
          <button
            onClick={handleAccept}
            className="ml-3 px-4 py-1.5 rounded-md text-zinc-900 dark:text-zinc-100 dark:bg-zinc-700 bg-zinc-200 hover:opacity-80 transition font-medium"
          >
            Aceitar
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
