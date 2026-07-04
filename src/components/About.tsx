import { Award, HeartPulse, ShieldCheck, Trophy } from "lucide-react";
import AnimateIn from "./AnimateIn";
import { BRAND } from "@/lib/constants";

const CREDENTIALS = [
  { icon: Trophy, label: "Técnico Deportivo Nivel I en Fútbol" },
  { icon: Award, label: "Técnico Deportivo Nivel I en Pádel" },
  { icon: HeartPulse, label: "Socorrismo y Primeros Auxilios" },
  { icon: ShieldCheck, label: "Formación en emergencias — Cruz Roja" },
];

export default function About() {
  return (
    <section id="alejandro" className="grain relative overflow-hidden bg-dusk py-28 lg:py-36">
      <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-ember/10 blur-[140px]" />

      <div className="relative mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <AnimateIn>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2rem] border border-dusk-border bg-dusk-card">
            <div className="sunset-bg absolute inset-0 opacity-25" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display text-8xl italic text-sand/20">AP</span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 border-t border-dusk-border bg-dusk/70 p-5 backdrop-blur-sm">
              <p className="font-display text-lg text-sand">{BRAND.founder}</p>
              <p className="text-xs uppercase tracking-[0.2em] text-gold-light">
                Fundador de ALEPROFIT
              </p>
            </div>
          </div>
        </AnimateIn>

        <div>
          <AnimateIn>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              La historia
            </span>
          </AnimateIn>
          <AnimateIn delay={0.08}>
            <h2 className="mt-4 font-display text-3xl font-medium leading-tight text-sand sm:text-4xl">
              Entrenar un cuerpo sin entrenar la mente nunca fue suficiente.
            </h2>
          </AnimateIn>

          <AnimateIn delay={0.16} className="mt-6 space-y-4 text-sand-dim">
            <p>
              Nací en un pequeño pueblo de Extremadura y crecí rodeado de valores como el
              esfuerzo, la humildad, el respeto y el trabajo constante. Desde pequeño entendí que
              el deporte era mucho más que competir: era una forma de educar, de superar
              obstáculos y de construir carácter.
            </p>
            <p>
              Con los años descubrí que entrenar un cuerpo sin entrenar la mente no era
              suficiente. Por eso nace ALEPROFIT — no como un simple servicio de entrenamiento,
              sino como una filosofía de vida.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.24} className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {CREDENTIALS.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-xl border border-dusk-border bg-dusk-card/60 px-4 py-3"
              >
                <Icon size={18} className="shrink-0 text-gold" />
                <span className="text-sm text-sand-dim">{label}</span>
              </div>
            ))}
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
