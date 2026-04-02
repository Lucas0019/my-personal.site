/* eslint-disable @typescript-eslint/no-explicit-any */
import { PageLayout } from "@/src/components/PageLayout";
import Link from "next/link";

// Mock de posts
export const posts = [
  {
    slug: "piloto",
    index: "00",
    title: "Piloto",
    description:
      "Criação do blog e definição da proposta: escrever para aprender.",
    date: "2026-01-13",
    readingTime: "4 min",
    year: 2026,
    type: "log",
  },
  {
    slug: "tipografia-prose",
    index: "01",
    title: "Ajustando tipografia do blog",
    description: "Separação de layout e tipografia usando Tailwind + prose.",
    date: "2026-01-18",
    readingTime: "3 min",
    year: 2026,
    type: "log",
  },
  {
    slug: "acessibilidade",
    index: "02",
    title: "Acessibilidade em interfaces",
    description: "Boas práticas para tornar sites mais acessíveis.",
    date: "2026-01-20",
    readingTime: "5 min",
    year: 2026,
    type: "article",
  },
  {
    slug: "frontend-clean-code",
    index: "03",
    title: "Clean Code no Frontend",
    description:
      "Estratégias e padrões para manter código front-end limpo e sustentável.",
    date: "2025-12-15",
    readingTime: "6 min",
    year: 2025,
    type: "article",
  },
];

// Agrupa posts por ano
function groupByYear(posts: any[]) {
  return posts.reduce(
    (acc, post) => {
      acc[post.year] = acc[post.year] || [];
      acc[post.year].push(post);
      return acc;
    },
    {} as Record<number, any[]>,
  );
}

export const metadata = {
  title: "Blog",
  description: "Registro contínuo de aprendizados e evolução técnica.",
};

export default function BlogPage() {
  const postsByYear = groupByYear(posts);

  return (
    <PageLayout size="default" data-component="BlogPage">
      {/* Header */}
      <header className="mb-32 text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 dark:text-white">
          Blog
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          Registro contínuo de aprendizados, decisões técnicas e experimentações
          ao longo da jornada como desenvolvedor.
        </p>
      </header>

      {/* Timeline */}
      <div className="space-y-32">
        {Object.entries(postsByYear)
          .sort(([a], [b]) => Number(b) - Number(a))
          .map(([year, yearPosts]: any) => (
            <section key={year} className="grid grid-cols-[auto_1fr] gap-12">
              {/* Ano */}
              <div className="pt-2">
                <span className="sticky top-32 text-2xl font-medium text-zinc-400 dark:text-zinc-600">
                  {year}
                </span>
              </div>

              {/* Lista de posts */}
              <div className="space-y-12">
                {yearPosts.map((post: any) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group block"
                  >
                    <article className="relative rounded-xl border border-transparent p-6 transition hover:border-zinc-200 hover:bg-zinc-50 dark:hover:border-zinc-800 dark:hover:bg-zinc-900">
                      {/* Index + date */}
                      <div className="mb-3 flex items-center gap-4 text-xs text-zinc-500">
                        <span className="font-mono">#{post.index}</span>
                        <span className="h-1 w-1 rounded-full bg-zinc-400/40" />
                        <time>{post.date}</time>
                        <span className="ml-auto">{post.readingTime}</span>
                      </div>

                      {/* Title */}
                      <h2 className="text-xl font-medium leading-snug text-zinc-900 group-hover:underline dark:text-white">
                        {post.title}
                      </h2>

                      {/* Description */}
                      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                        {post.description}
                      </p>
                    </article>
                  </Link>
                ))}
              </div>
            </section>
          ))}
      </div>
    </PageLayout>
  );
}
