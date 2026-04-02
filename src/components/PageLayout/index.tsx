import { ReactNode } from "react";
import clsx from "clsx";

type PageLayoutProps = {
  children: ReactNode;
  className?: string;
  size?: "default" | "wide" | "full";
};

export function PageLayout({
  children,
  className,
  size = "default",
}: PageLayoutProps) {
  return (
    <main className="mt-24 pb-32">
      <div
        className={clsx(
          "mx-auto w-full space-y-32",
          size === "default" && "max-w-7xl px-6 sm:px-8",
          size === "wide" && "max-w-screen-xl px-6 sm:px-12",
          size === "full" && "max-w-none px-0",
          className,
        )}
        data-layout="page-wrapper"
      >
        {children}
      </div>
    </main>
  );
}
