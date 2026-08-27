import Image from "next/image";
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

      <div className="relative mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <AnimateIn direction="left" y={48}>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2rem] border border-sand/20">
            <Image
              src="/club-profit-ale.jpg"
              alt="Alejandro Prieto Carvajal preparando material deportivo para un evento de Club Profit"
              fill
              sizes="(min-width: 1024px) 24rem, 90vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dusk via-dusk/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 border-t border-sand/20 bg-dusk/70 p-5 backdrop-blur-sm">
              <p className="font-display text-lg text-sand">Listos para cualquier evento</p>
              <p className="text-xs uppercase tracking-[0.2em] text-gold-light">
                Material, energía y buen rollo
              </p>
            </div>
          </div>
        </AnimateIn>

        <div className="text-center lg:text-left">
          <AnimateIn direction="right">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-light">
              Una división de ALEPROFIT
            </span>
            <h2 className="mt-4 font-display text-4xl font-medium italic text-sand sm:text-5xl lg:text-6xl">
              Club Profit
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-sand/90 lg:mx-0">
              No es animación de cumpleaños. Es la división de ALEPROFIT dedicada a organizar
              experiencias deportivas, recreativas y educativas — con la misma seriedad y método que
              aplicamos al entrenamiento.
            </p>
          </AnimateIn>

          <div className="mt-10 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {CATEGORIES.map(({ icon: Icon, title, items }, i) => (
              <AnimateIn key={title} delay={i * 0.1} direction="right">
                <div className="flex h-full flex-col items-center gap-3 rounded-2xl border border-sand/20 bg-dusk/30 px-6 py-6 text-center backdrop-blur-sm lg:flex-row lg:items-start lg:text-left">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-dusk/60 text-gold-light">
                    <Icon size={22} />
                  </span>
                  <div>
                    <h3 className="font-display text-lg text-sand">{title}</h3>
                    <p className="mt-1 text-sm text-sand/80">{items.join(" · ")}</p>
                  </div>
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
