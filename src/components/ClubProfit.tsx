import Image from "next/image";
import { MessageCircle, Trophy, GraduationCap, PartyPopper } from "lucide-react";
import AnimateIn from "./AnimateIn";
import { CONTACT } from "@/lib/constants";

const CATEGORIES = [
  {
    icon: Trophy,
    title: "Deporte",
    subtitle: "Preparación física · Jóvenes futbolistas",
    items: ["Eventos deportivos", "Juegos acuáticos"],
  },
  {
    icon: GraduationCap,
    title: "Educativo y experiencias",
    subtitle: "Campamento de verano · Summer Camp",
    items: ["Actividades para colegios", "Actividades para ayuntamientos"],
  },
  {
    icon: PartyPopper,
    title: "Eventos y celebraciones",
    subtitle: "Animación Profit",
    items: ["Cumpleaños", "Comuniones", "Bautizos", "Bodas", "Despedidas"],
  },
];

const MARQUEE = CATEGORIES.flatMap((c) =>
  c.subtitle ? [c.subtitle, ...c.items] : c.items
);

export default function ClubProfit() {
  const loop = [...MARQUEE, ...MARQUEE];

  return (
    <section
      id="club-profit"
      className="relative overflow-hidden bg-gradient-to-br from-ember-deep via-ember to-gold py-28 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-dusk/55" />

      <div className="relative mx-auto max-w-7xl px-6">
        <AnimateIn className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-light">
            Una división de ALEPROFIT
          </span>
          <h2 className="mt-4 font-display text-4xl font-medium italic text-sand sm:text-5xl lg:text-6xl">
            Club Profit
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-sand/90">
            No es animación de cumpleaños. Es la división de ALEPROFIT dedicada a organizar
            experiencias deportivas, recreativas y educativas — con la misma seriedad y método que
            aplicamos al entrenamiento.
          </p>
        </AnimateIn>

        <div className="mt-12 grid gap-6 lg:mt-14 lg:grid-cols-[1fr_1.05fr] lg:items-stretch lg:gap-8">
        <AnimateIn direction="left" y={48} className="min-w-0">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-xl overflow-hidden rounded-[2rem] border border-sand/20 lg:aspect-auto lg:h-full lg:min-h-[640px] lg:max-w-none">
            <Image
              src="/club-profit-ale.jpg"
              alt="Alejandro Prieto Carvajal preparando material deportivo para un evento de Club Profit"
              fill
              sizes="(min-width: 1280px) 585px, (min-width: 1024px) calc((100vw - 80px) / 2.05), (min-width: 624px) 576px, calc(100vw - 48px)"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dusk via-dusk/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 border-t border-sand/20 bg-dusk/70 p-5 backdrop-blur-sm sm:p-7">
              <p className="font-display text-xl text-sand sm:text-2xl">Listos para cualquier evento</p>
              <p className="mt-2 text-xs leading-relaxed uppercase tracking-[0.2em] text-gold-light">
                Material, energía y buen rollo
              </p>
            </div>
          </div>
        </AnimateIn>

          <div className="grid min-w-0 gap-4">
            {CATEGORIES.map(({ icon: Icon, title, subtitle, items }, i) => (
              <AnimateIn key={title} delay={i * 0.1} direction="right">
                <div className="h-full rounded-2xl border border-sand/20 bg-dusk/30 px-5 py-6 text-left backdrop-blur-sm sm:px-7">
                  <div className="flex items-center gap-3 border-b border-sand/20 pb-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-dusk/60 text-gold-light">
                      <Icon size={22} />
                    </span>
                    <h3 className="font-display text-lg text-sand sm:text-xl">{title}</h3>
                  </div>
                  {subtitle && (
                    <p className="mt-4 text-base leading-relaxed font-semibold text-gold-light sm:text-lg">{subtitle}</p>
                  )}
                  <ul className="mt-4 grid gap-x-5 gap-y-3 sm:grid-cols-2">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-sand/90">
                        <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-light" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateIn>
            ))}
          </div>
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

      <AnimateIn delay={0.4} className="relative mt-14 flex justify-center px-6">
        <a
          href={CONTACT.whatsappClubProfit}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-dusk px-6 py-4 text-center text-base font-semibold text-sand shadow-xl transition-transform hover:scale-105 sm:px-8"
        >
          <MessageCircle size={20} className="shrink-0" />
          Organiza tu evento con Club Profit
        </a>
      </AnimateIn>
    </section>
  );
}
