import { MessageCircle, Trophy, GraduationCap, PartyPopper } from "lucide-react";
import AnimateIn from "./AnimateIn";
import { CONTACT } from "@/lib/constants";

const CATEGORIES = [
  {
    icon: Trophy,
    title: "Deportivo",
    items: ["Eventos deportivos", "Olimpiadas deportivas", "Gymkanas", "Juegos cooperativos", "Juegos acuáticos"],
  },
  {
    icon: GraduationCap,
    title: "Educativo",
    items: ["Campamentos", "Actividades para colegios", "Actividades para ayuntamientos"],
  },
  {
    icon: PartyPopper,
    title: "Celebraciones",
    items: ["Cumpleaños", "Comuniones", "Bautizos", "Actividades recreativas"],
  },
];

const MARQUEE = CATEGORIES.flatMap((c) => c.items);

export default function ClubProfit() {
  const loop = [...MARQUEE, ...MARQUEE];

  return (
    <section
      id="club-profit"
      className="relative overflow-hidden bg-gradient-to-br from-ember-deep via-ember to-gold py-28 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-dusk/55" />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <AnimateIn>
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-light">
            Una división de ALEPROFIT
          </span>
          <h2 className="mt-4 font-display text-4xl font-medium italic text-sand sm:text-5xl lg:text-6xl">
            Club Profit
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-sand/90">
            No es animación de cumpleaños. Es la división de ALEPROFIT dedicada a organizar
            experiencias deportivas, recreativas y educativas — con la misma seriedad y método que
            aplicamos al entrenamiento.
          </p>
        </AnimateIn>

        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {CATEGORIES.map(({ icon: Icon, title, items }, i) => (
            <AnimateIn key={title} delay={i * 0.1}>
              <div className="flex h-full flex-col items-center gap-4 rounded-2xl border border-sand/20 bg-dusk/30 px-6 py-8 text-center backdrop-blur-sm">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-dusk/60 text-gold-light">
                  <Icon size={22} />
                </span>
                <h3 className="font-display text-lg text-sand">{title}</h3>
                <ul className="space-y-1.5 text-sm text-sand/80">
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>

      <AnimateIn delay={0.3} className="relative mt-14 overflow-hidden">
        <div className="flex w-max gap-4 animate-marquee">
          {loop.map((activity, i) => (
            <span
              key={`${activity}-${i}`}
              className="whitespace-nowrap rounded-full border border-sand/25 bg-dusk/30 px-6 py-3 text-sm font-medium text-sand backdrop-blur-sm"
            >
              {activity}
            </span>
          ))}
        </div>
      </AnimateIn>

      <AnimateIn delay={0.4} className="relative mt-14 flex justify-center">
        <a
          href={CONTACT.whatsappClubProfit}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-dusk px-8 py-4 text-base font-semibold text-sand shadow-xl transition-transform hover:scale-105"
        >
          <MessageCircle size={20} />
          Organiza tu evento con Club Profit
        </a>
      </AnimateIn>
    </section>
  );
}
