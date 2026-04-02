import { AnimatedBackground } from "@/src/components/ui/animated-background";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { THEMES_OPTIONS } from "./ThemesOptions";

export const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <AnimatedBackground
      className="pointer-events-none rounded-lg bg-zinc-100 dark:bg-zinc-800"
      defaultValue={theme}
      transition={{
        type: "spring",
        bounce: 0,
        duration: 0.2,
      }}
      enableHover={false}
      onValueChange={(id) => {
        setTheme(id as string);
      }}
    >
      {THEMES_OPTIONS.map((theme) => {
        return (
          <button
            key={theme.id}
            className="inline-flex h-7 w-7 items-center justify-center text-zinc-500 transition-colors duration-100 focus-visible:outline-2 data-[checked=true]:text-zinc-950 dark:text-zinc-400 dark:data-[checked=true]:text-zinc-50 cursor-pointer pointer-events-auto"
            type="button"
            aria-label="Switch to theme"
            data-id={theme.id}
          >
            {theme.icon}
          </button>
        );
      })}
    </AnimatedBackground>
  );
};
