"use client";

import { useState } from "react";
import { PageLayout } from "@/src/components/PageLayout";
import { TransitionPanel } from "@/src/components/ui/transition-panel";

const carouselItems = [
  {
    title: "Código",
    text: "Código como ferramenta de pensamento. Não apenas para resolver problemas, mas para entender melhor o problema em si.",
  },
  {
    title: "Produto",
    text: "Interfaces são decisões. Cada detalhe comunica algo — mesmo quando não percebemos.",
  },
  {
    title: "Processo",
    text: "Prefiro evoluções pequenas, consistentes e sustentáveis ao invés de grandes reescritas impulsivas.",
  },
  {
    title: "Aprendizado",
    text: "Aprender nunca foi sobre acumular ferramentas, mas sobre refinar critérios.",
  },
];

export default function AboutPage() {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <PageLayout size="default" data-component="AboutPage">
      {/* HERO */}
      <header className="space-y-6">
        <h1 className="text-3xl font-medium tracking-tight">
          Um pouco sobre mim
        </h1>

        <p className="max-w-2xl text-base text-zinc-600 dark:text-zinc-400">
          Sou desenvolvedor front-end e uso este espaço como uma extensão do meu
          processo de pensamento. Aqui não busco respostas definitivas, mas
          clareza.
        </p>
      </header>

      {/* SEÇÃO PRINCIPAL */}
      <section className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        {/* IMAGEM */}
        <div className="relative">
          <div className="aspect-[3/4] overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-900">
            <img
              src="https://blog.marcusoliveiradev.com.br/wp-content/uploads/2024/04/imagem-em-preto-e-branco-com-CSS.jpg"
              alt="Retrato em estúdio, em preto e branco"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute -left-6 top-6 hidden lg:block">
            <div className="h-12 w-12 rounded-full border border-zinc-300 dark:border-zinc-700" />
          </div>
        </div>

        {/* TEXTO */}
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-zinc-400 dark:bg-zinc-600" />
            <span className="text-sm uppercase tracking-widest text-zinc-500">
              About
            </span>
          </div>

          <h2 className="text-3xl font-medium leading-tight">
            Desenvolvedor focado em clareza, consistência e evolução contínua
          </h2>

          <div className="space-y-4 text-sm text-zinc-600 dark:text-zinc-400">
            <p>
              Trabalho com desenvolvimento front-end e interfaces digitais,
              priorizando soluções que façam sentido hoje e continuem
              funcionando amanhã.
            </p>

            <p>
              Vejo o código como um meio de comunicação. Uma forma de deixar
              decisões explícitas, reduzir ambiguidades e facilitar a
              colaboração.
            </p>

            <p>
              Este espaço existe como um reflexo disso — um lugar para pensar em
              público e registrar aprendizados.
            </p>
          </div>

          {/* SOCIAIS */}
          <nav className="flex items-center gap-4 pt-4">
            {["Twitter", "GitHub", "LinkedIn"].map((label) => (
              <a
                key={label}
                href="#"
                className="text-xs text-zinc-500 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* BLOCO NARRATIVO */}
      <section className="prose prose-gray max-w-none dark:prose-invert">
        <p>
          Minha relação com tecnologia sempre foi menos sobre ferramentas e mais
          sobre construção.
        </p>

        <p>
          Bons produtos surgem de pequenas escolhas consistentes: nomes bem
          pensados, responsabilidades claras e código que comunica intenção.
        </p>

        <p>
          Este site existe como registros de um momento específico da minha
          evolução.
        </p>
      </section>

      {/* CARROSSEL */}
      <section className="space-y-6">
        <h2 className="text-sm font-medium uppercase tracking-wider text-zinc-500">
          Como penso
        </h2>

        <div className="overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800">
          <div className="min-h-[180px] p-8 overflow-hidden">
            <TransitionPanel
              activeIndex={index}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              variants={{
                enter: { opacity: 0, y: 24, filter: "blur(4px)" },
                center: { opacity: 1, y: 0, filter: "blur(0px)" },
                exit: { opacity: 0, y: -24, filter: "blur(4px)" },
              }}
            >
              {carouselItems.map((item, i) => (
                <div key={i}>
                  <h3 className="text-lg font-medium">{item.title}</h3>
                  <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                    {item.text}
                  </p>
                </div>
              ))}
            </TransitionPanel>
          </div>

          <div className="flex justify-between border-t border-zinc-200 dark:border-zinc-800">
            <button
              onClick={handlePrev}
              className="px-6 py-3 text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              Anterior
            </button>

            <button
              onClick={handleNext}
              className="px-6 py-3 text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              Próximo
            </button>
          </div>
        </div>
      </section>

      {/* FECHAMENTO */}
      <section className="max-w-2xl space-y-4">
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Este site não é um portfólio tradicional.
        </p>

        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          É mais próximo de um caderno de anotações público.
        </p>
      </section>
    </PageLayout>
  );
}
