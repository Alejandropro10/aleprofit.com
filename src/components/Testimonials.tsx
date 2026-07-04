import { Quote } from "lucide-react";
import AnimateIn from "./AnimateIn";

export default function Testimonials() {
  return (
    <section className="grain relative overflow-hidden bg-dusk py-28 lg:py-36">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <AnimateIn>
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Historias de cambio
          </span>
          <h2 className="mt-4 font-display text-3xl font-medium leading-tight text-sand sm:text-4xl lg:text-5xl">
            Las primeras transformaciones ALEPROFIT están en camino
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-sand-dim">
            Muy pronto compartiremos aquí las historias reales de quienes ya han empezado su
            proceso. Si te unes ahora, la tuya podría ser una de las primeras.
          </p>
        </AnimateIn>

        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <AnimateIn key={i} delay={i * 0.1}>
              <div className="flex h-full flex-col items-center gap-4 rounded-2xl border border-dashed border-dusk-border bg-dusk-card/40 px-6 py-10 text-center">
                <Quote size={28} className="text-gold/50" />
                <p className="text-sm text-sand-mute">Testimonio próximamente</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
