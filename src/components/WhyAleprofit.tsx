import AnimateIn from "./AnimateIn";

const REASONS = [
  {
    n: "01",
    title: "Método propio",
    text: "No improvisamos. Cada proceso sigue una estructura probada que combina entrenamiento, nutrición, mentalidad y hábitos.",
  },
  {
    n: "02",
    title: "Seguimiento cercano",
    text: "No desapareces después de la primera sesión. Te acompañamos de verdad, semana a semana.",
  },
  {
    n: "03",
    title: "Nutrición personalizada",
    text: "Sin dietas genéricas. Un plan adaptado a tu cuerpo, tu rutina y tus objetivos reales.",
  },
  {
    n: "04",
    title: "Hábitos sostenibles",
    text: "No buscamos resultados exprés. Construimos rutinas que se quedan contigo para siempre.",
  },
  {
    n: "05",
    title: "Salud mental",
    text: "Entrenamos la mente igual que el cuerpo. La disciplina y el equilibrio empiezan por dentro.",
  },
  {
    n: "06",
    title: "Atención personalizada",
    text: "Cada persona es distinta. Tu plan, tu ritmo, tu proceso — nunca una plantilla genérica.",
  },
];

export default function WhyAleprofit() {
  return (
    <section className="grain relative overflow-hidden bg-dusk py-28 lg:py-36">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[380px] w-[700px] -translate-x-1/2 rounded-full bg-ember/10 blur-[150px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <AnimateIn className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            La diferencia ALEPROFIT
          </span>
          <h2 className="mt-4 font-display text-3xl font-medium leading-tight text-sand sm:text-4xl lg:text-5xl">
            ¿Por qué ALEPROFIT?
          </h2>
          <p className="mt-6 text-lg text-sand-dim">
            Lo que nos diferencia no es solo el entrenamiento. Es la forma en la que lo
            construimos contigo.
          </p>
        </AnimateIn>

        <div className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((reason, i) => (
            <AnimateIn key={reason.n} delay={i * 0.08}>
              <div className="border-t border-dusk-border pt-5">
                <span className="font-display text-sm italic text-gold/60">{reason.n}</span>
                <h3 className="mt-2 font-display text-xl font-medium text-sand">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-sand-dim">{reason.text}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
