import { Dumbbell, Apple, Brain, TrendingUp, Heart, Moon, Scale } from "lucide-react";
import AnimateIn from "./AnimateIn";

const STEPS = [
  { icon: Dumbbell, label: "Entrenamiento personalizado" },
  { icon: Apple, label: "Nutrición" },
  { icon: Brain, label: "Mentalidad" },
  { icon: TrendingUp, label: "Seguimiento" },
  { icon: Heart, label: "Hábitos saludables" },
  { icon: Moon, label: "Descanso" },
  { icon: Scale, label: "Equilibrio" },
];

export default function Method() {
  return (
    <section id="metodo" className="grain relative overflow-hidden bg-dusk py-28 lg:py-36">
      <div className="pointer-events-none absolute -right-40 top-10 h-[420px] w-[420px] rounded-full bg-gold/10 blur-[140px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <AnimateIn className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            El método ALEPROFIT
          </span>
          <h2 className="mt-4 font-display text-3xl font-medium leading-tight text-sand sm:text-4xl lg:text-5xl">
            No buscamos cambios rápidos. Buscamos cambios permanentes.
          </h2>
          <p className="mt-6 text-lg text-sand-dim">
            Un método propio que combina siete elementos para crear resultados reales y
            sostenibles en el tiempo.
          </p>
        </AnimateIn>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {STEPS.map(({ icon: Icon, label }, i) => (
            <AnimateIn key={label} delay={i * 0.06}>
              <div className="group flex h-full flex-col items-center gap-4 rounded-2xl border border-dusk-border bg-dusk-card/60 px-5 py-8 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/40 hover:bg-dusk-card hover:shadow-lg hover:shadow-ember/10">
                <div className="flex h-14 w-14 items-center justify-center rounded-full sunset-bg text-dusk transition-transform group-hover:scale-110">
                  <Icon size={24} strokeWidth={2} />
                </div>
                <p className="font-display text-base text-sand">{label}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
