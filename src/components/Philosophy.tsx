import AnimateIn from "./AnimateIn";
import { BRAND } from "@/lib/constants";

const PILLARS = [
  { n: "01", label: "Disciplina" },
  { n: "02", label: "Equilibrio" },
  { n: "03", label: "Constancia" },
  { n: "04", label: "Libertad" },
];

const VALUES = [
  "Disciplina",
  "Equilibrio",
  "Humildad",
  "Cercanía",
  "Educación",
  "Respeto",
  "Diversión",
  "Aprendizaje continuo",
  "Salud física",
  "Salud mental",
];

export default function Philosophy() {
  return (
    <section className="relative bg-cream py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <AnimateIn className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-ember-deep">
            Nuestra filosofía
          </span>
          <h2 className="mt-4 font-display text-3xl font-medium leading-tight text-ink sm:text-4xl lg:text-5xl">
            Creemos en el equilibrio. No en los extremos.
          </h2>
          <p className="mt-6 text-lg text-ink-dim">
            No creemos en sufrir para conseguir resultados ni en soluciones rápidas. El verdadero
            cambio aparece cuando una persona integra hábitos saludables en su vida diaria.
          </p>
        </AnimateIn>

        <div className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {PILLARS.map((p, i) => (
            <AnimateIn key={p.label} delay={i * 0.08}>
              <div className="group rounded-2xl border border-ink/10 bg-white/50 p-6 text-center transition-colors hover:border-ember/40">
                <span className="font-display text-sm text-ember/50">{p.n}</span>
                <p className="mt-2 font-display text-xl font-medium text-ink sm:text-2xl">
                  {p.label}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={0.2} className="mt-16 text-center">
          <p className="font-display text-2xl italic text-ember-deep sm:text-3xl">
            &ldquo;{BRAND.motto}&rdquo;
          </p>
          <p className="mt-3 text-ink-dim">{BRAND.coreLine}</p>
        </AnimateIn>

        <AnimateIn delay={0.3} className="mt-14 flex flex-wrap justify-center gap-3">
          {VALUES.map((v) => (
            <span
              key={v}
              className="rounded-full border border-ink/10 bg-white/60 px-4 py-2 text-sm text-ink-dim"
            >
              {v}
            </span>
          ))}
        </AnimateIn>
      </div>
    </section>
  );
}
