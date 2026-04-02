import { ReactNode } from "react";
import { PageLayout } from "@/src/components/PageLayout";

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <PageLayout size="default">
      <article className="prose prose-neutral dark:prose-invert max-w-none">
        {children}
      </article>
    </PageLayout>
  );
}
