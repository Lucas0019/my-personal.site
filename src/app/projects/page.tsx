import Link from "next/link";
import { PageLayout } from "@/src/components/PageLayout";

const projects = [
  {
    title: "E-commerce VTEX FastStore",
    description:
      "Implementação de loja headless com foco em performance, SEO e experiência de compra. Integração com CMS e eventos de analytics.",
    stack: ["Next.js", "TypeScript", "VTEX", "FastStore"],
    href: "#",
    year: "2024",
  },
  {
    title: "Marketplace Local (SaaS)",
    description:
      "Plataforma multi-comércio para vendas locais, inspirada em marketplaces, com foco em pequenos estabelecimentos.",
    stack: ["React", "Node.js", "PostgreSQL"],
    href: "#",
    year: "2025",
  },
  {
    title: "PDV Web para Pequenos Negócios",
    description:
      "Sistema de ponto de venda online, pensado para cidades pequenas e operações de baixo custo.",
    stack: ["React", "TypeScript", "API REST"],
    href: "#",
    year: "2025",
  },
];

export default function ProjectsPage() {
  return (
    <PageLayout size="default" data-component="ProjectsPage">
      {/* Header */}
      <header className="mb-32 max-w-2xl">
        <span className="mb-4 block text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
          Projetos
        </span>

        <h1 className="text-4xl font-medium tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
          Interfaces, sistemas e experiências digitais.
        </h1>

        <p className="mt-6 text-zinc-600 dark:text-zinc-400">
          Seleção de projetos onde atuei com foco em frontend, e-commerce,
          arquitetura e performance. Sempre priorizando código limpo,
          escalabilidade e UX.
        </p>
      </header>

      {/* Lista de projetos */}
      <section className="flex flex-col gap-32">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group grid gap-10 border-t border-zinc-200 pt-12 dark:border-white/10 md:grid-cols-[120px_1fr]"
          >
            {/* Ano */}
            <div className="text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
              {project.year}
            </div>

            {/* Conteúdo */}
            <div>
              <h2 className="text-2xl font-medium tracking-tight text-zinc-900 dark:text-white">
                {project.title}
              </h2>

              <p className="mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
                {project.description}
              </p>

              {/* Stack */}
              <ul className="mt-6 flex flex-wrap gap-3 text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-zinc-300 px-3 py-1 dark:border-white/10"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              {/* Link */}
              {project.href !== "#" && (
                <Link
                  href={project.href}
                  className="mt-8 inline-block text-sm font-medium text-zinc-900 transition-opacity hover:opacity-70 dark:text-white"
                >
                  Ver projeto →
                </Link>
              )}
            </div>
          </article>
        ))}
      </section>
    </PageLayout>
  );
}
