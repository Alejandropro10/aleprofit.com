import { MessageCircle } from "lucide-react";
import AnimateIn from "./AnimateIn";
import { CONTACT } from "@/lib/constants";

const ACTIVITIES = [
  "Campamentos",
  "Eventos deportivos",
  "Cumpleaños",
  "Comuniones",
  "Bautizos",
  "Actividades recreativas",
  "Gymkanas",
  "Juegos cooperativos",
  "Actividades para colegios",
  "Actividades para ayuntamientos",
  "Juegos acuáticos",
  "Olimpiadas deportivas",
];

export default function ClubProfit() {
  const loop = [...ACTIVITIES, ...ACTIVITIES];

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
            Experiencias deportivas, recreativas y educativas. Queremos que las personas recuerden
            nuestras actividades por cómo les hicieron sentir.
          </p>
        </AnimateIn>
      </div>

      <AnimateIn delay={0.2} className="relative mt-14 overflow-hidden">
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

      <AnimateIn delay={0.3} className="relative mt-14 flex justify-center">
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
