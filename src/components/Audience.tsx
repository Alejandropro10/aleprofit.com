import { Baby, GraduationCap, User, Heart, Trophy, CircleDot, Users, Activity, Stethoscope } from "lucide-react";
import AnimateIn from "./AnimateIn";

const GROUPS = [
  { icon: Baby, label: "Niños" },
  { icon: GraduationCap, label: "Adolescentes" },
  { icon: User, label: "Adultos" },
  { icon: Heart, label: "Personas mayores" },
  { icon: Trophy, label: "Deportistas" },
  { icon: CircleDot, label: "Futbolistas" },
  { icon: Users, label: "Equipos" },
  { icon: Activity, label: "Cambio de hábitos" },
  { icon: Stethoscope, label: "Readaptación física" },
];

export default function Audience() {
  return (
    <section className="relative bg-cream py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <AnimateIn className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-ember-deep">
            Para quién es ALEPROFIT
          </span>
          <h2 className="mt-4 font-display text-3xl font-medium leading-tight text-ink sm:text-4xl lg:text-5xl">
            No importa la edad. No importa el nivel.
          </h2>
          <p className="mt-6 text-lg text-ink-dim">
            Todo comienza con un plan adaptado a cada persona.
          </p>
        </AnimateIn>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {GROUPS.map(({ icon: Icon, label }, i) => (
            <AnimateIn key={label} delay={i * 0.05}>
              <div className="flex h-full flex-col items-center gap-3 rounded-2xl border border-ink/10 bg-white/50 px-4 py-7 text-center transition-colors hover:border-ember/40">
                <Icon size={22} className="text-ember-deep" />
                <span className="text-sm font-medium text-ink">{label}</span>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
