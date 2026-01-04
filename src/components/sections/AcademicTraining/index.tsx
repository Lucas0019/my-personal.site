import React from "react";
import { motion } from "motion/react";
import { TRANSITION_SECTION, VARIANTS_SECTION } from "@/src/lib/constants";
import { Spotlight } from "@/src/components/ui/spotlight";

export const AcademicTraining = () => {
  return (
    <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
      <h3 className="mb-5 text-lg font-medium">Formação Acadêmica</h3>
      <div className="flex flex-col space-y-2">
        <div className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30">
          <Spotlight
            className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
            size={64}
          />
          <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
            <div className="relative flex w-full flex-row justify-between">
              <div>
                <h4 className="font-normal dark:text-zinc-100">
                  Fullstack Developer
                </h4>
                <p className="text-zinc-500 dark:text-zinc-400">JStack</p>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400">
                2023 - Presente
              </p>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30">
          <Spotlight
            className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
            size={64}
          />
          <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
            <div className="relative flex w-full flex-row justify-between">
              <div>
                <h4 className="font-normal dark:text-zinc-100">
                  CST - Análise e Desenvolvimento de Sistemas
                </h4>
                <p className="text-zinc-500 dark:text-zinc-400">
                  FMU | FIAM-FAAM Faculdade Metropolitanas Unidas
                </p>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400">2018 - 2020</p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
