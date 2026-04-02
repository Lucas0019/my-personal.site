"use client";

import { cn } from "@/src/lib/utils";
import { motion, AnimatePresence, Transition, Variants } from "motion/react";
import { useState, useEffect, Children } from "react";

export type TextLoopProps = {
  children: React.ReactNode[];
  className?: string;
  interval?: number; // em segundos
  transition?: Transition;
  variants?: Variants;
  onIndexChange?: (index: number) => void;
  trigger?: boolean;
};

export function TextLoop({
  children,
  className,
  interval = 3.5,
  transition = { duration: 0.45, ease: "easeOut" },
  variants,
  onIndexChange,
  trigger = true,
}: TextLoopProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = Children.toArray(children);

  useEffect(() => {
    if (!trigger || items.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % items.length;
        onIndexChange?.(next);
        return next;
      });
    }, interval * 1000);

    return () => clearInterval(timer);
  }, [items.length, interval, onIndexChange, trigger]);

  const defaultVariants: Variants = {
    initial: { opacity: 0, y: 8 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -8 },
  };

  return (
    <div
      className={cn(
        "relative inline-block overflow-hidden",
        "min-h-[1.5em]", // 🔑 ISSO FAZ TODA A DIFERENÇA
        className,
      )}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={currentIndex}
          variants={variants || defaultVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={transition}
          className="absolute left-0 top-0 whitespace-nowrap"
        >
          {items[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
