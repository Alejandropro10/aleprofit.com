import AnimateIn from "./AnimateIn";

const NEGATIONS = [
  "ALEPROFIT no es un gimnasio.",
  "ALEPROFIT no es un entrenador personal.",
  "ALEPROFIT no vende rutinas ni dietas milagro.",
];

export default function Manifesto() {
  return (
    <section id="manifiesto" className="relative bg-cream py-28 lg:py-36">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="flex flex-col items-center gap-3">
          {NEGATIONS.map((line, i) => (
            <AnimateIn key={line} delay={i * 0.1}>
              <p className="font-display text-xl text-ink-dim/60 line-through decoration-ember/40 decoration-2 sm:text-2xl">
                {line}
              </p>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={0.35} className="mt-10">
          <p className="font-display text-3xl font-medium leading-tight text-ink sm:text-4xl lg:text-5xl">
            ALEPROFIT es una marca deportiva y de salud que ayuda a las personas a mejorar su
            calidad de vida a través del{" "}
            <span className="italic text-ember-deep">entrenamiento</span>, la{" "}
            <span className="italic text-ember-deep">nutrición</span>, la{" "}
            <span className="italic text-ember-deep">educación</span> y la creación de{" "}
            <span className="italic text-ember-deep">hábitos sostenibles</span>.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.5} className="mt-10">
          <p className="mx-auto max-w-2xl text-lg text-ink-dim">
            No buscamos transformar cuerpos en pocas semanas. Buscamos transformar la forma en la
            que las personas entienden el deporte, la salud y el bienestar para toda la vida.
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
