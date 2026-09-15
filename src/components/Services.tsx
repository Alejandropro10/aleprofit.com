"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Laptop, ClipboardList, Dumbbell, HeartPulse, Apple, Check, MessageCircle } from "lucide-react";
import AnimateIn from "./AnimateIn";
import { whatsappLink } from "@/lib/constants";

const CATEGORIES = [
  {
    key: "studio",
    label: "Training Studio",
    icon: Dumbbell,
    intro: "Centro de entrenamiento Torremejía · Entrenamiento · Salud · Rendimiento",
    items: [
      "Fuerza y movilidad · Personas mayores",
      "Clase dirigida",
      "Clase dirigida PRO",
      "Clase dirigida VIP",
      "Entrenamiento libre",
      "Entrenamiento personal / parejas",
    ],
    note: "Entrevista + pruebas físicas",
    whatsapp: whatsappLink(
      "Hola Alejandro, vengo de la página web para obtener más información acerca de Training Studio"
    ),
  },
  {
    key: "metodo",
    label: "Método ALEPROFIT",
    icon: ClipboardList,
    intro: "Valora. Entrena. Evoluciona.",
    items: [
      "01 · Valoración inicial",
      "02 · Plan de entrenamiento",
      "03 · Control de evolución",
    ],
    note: null,
    whatsapp: whatsappLink(
      "Hola Alejandro, vengo de la página web para obtener más información acerca del Método ALEPROFIT"
    ),
  },
  {
    key: "recovery",
    label: "Recovery",
    icon: HeartPulse,
    intro: "Bienestar · Recuperación postesfuerzo",
    items: ["Presoterapia Recovery"],
    note: null,
    whatsapp: whatsappLink(
      "Hola Alejandro, vengo de la página web para obtener más información acerca de Recovery y presoterapia"
    ),
  },
  {
    key: "habitos",
    label: "Hábitos saludables",
    icon: Apple,
    intro: "Vive mejor. Come mejor.",
    items: ["Orientación y hábitos nutricionales"],
    note: null,
    whatsapp: whatsappLink(
      "Hola Alejandro, vengo de la página web para obtener más información acerca de la orientación y los hábitos nutricionales"
    ),
  },
  {
    key: "online",
    label: "Online",
    icon: Laptop,
    intro: "Planificación adaptada para ti.",
    items: ["Online PRO"],
    note: null,
    whatsapp: whatsappLink(
      "Hola Alejandro, vengo de la página web para obtener más información acerca de Online PRO"
    ),
  },
];

export default function Services() {
  const [active, setActive] = useState(CATEGORIES[0].key);
  const current = CATEGORIES.find((c) => c.key === active)!;

  return (
    <section id="servicios" className="relative bg-cream py-28 lg:py-36">
      <div className="mx-auto max-w-5xl px-6">
        <AnimateIn className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-ember-deep">
            Cómo trabajamos contigo
          </span>
          <h2 className="mt-4 font-display text-3xl font-medium leading-tight text-ink sm:text-4xl lg:text-5xl">
            Un plan adaptado a cada persona
          </h2>
          <p className="mt-6 text-lg text-ink-dim">
            La filosofía y el método son los mismos para todos. La forma de aplicarlos se adapta a
            ti.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.1} className="mt-12 flex flex-wrap justify-center gap-3">
          {CATEGORIES.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              type="button"
              aria-pressed={active === key}
              onClick={() => setActive(key)}
              className={`flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition-colors ${active === key
                  ? "border-ember-deep bg-ink text-cream"
                  : "border-ink/15 bg-white/60 text-ink-dim hover:border-ember/40"
                }`}
            >
              <Icon size={16} />
              {label}
            </button>
          ))}
        </AnimateIn>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="mt-10 rounded-3xl border border-ink/10 bg-white/60 p-8 lg:p-12"
          >
            <p className="text-ink-dim">{current.intro}</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {current.items.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full sunset-bg">
                    <Check size={12} className="text-dusk" strokeWidth={3} />
                  </span>
                  <span className="text-ink">{item}</span>
                </div>
              ))}
            </div>
            
            {current.note && (
              <p className="mt-6 rounded-xl bg-ember-deep/5 px-4 py-3 text-sm italic text-ember-deep">
                {current.note}
              </p>
            )}
            <a
              href={current.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full sunset-bg px-6 py-3 text-sm font-semibold text-dusk transition-transform hover:scale-105"
            >
              <MessageCircle size={16} />
              Pregunta por este servicio
            </a>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
