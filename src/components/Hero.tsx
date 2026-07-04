"use client";

import { motion } from "framer-motion";
import { ArrowDown, MessageCircle } from "lucide-react";
import { BRAND, CONTACT } from "@/lib/constants";

const TAGS = ["Entrenamiento", "Nutrición", "Mentalidad", "Hábitos", "Equilibrio"];

export default function Hero() {
  return (
    <section
      id="top"
      className="grain relative flex min-h-screen flex-col justify-center overflow-hidden bg-dusk pt-28 pb-16"
    >
      {/* Sunset horizon backdrop */}
      <div className="pointer-events-none absolute inset-0">
        <div className="horizon-glow absolute inset-0" />
        <div className="absolute left-1/2 top-[62%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-ember/25 blur-[120px]" />
        <div className="absolute right-[8%] top-[18%] h-[280px] w-[280px] rounded-full bg-gold/15 blur-[100px]" />
        <div className="absolute bottom-0 left-0 right-0 h-px sunset-bg opacity-40" />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-dusk-border bg-dusk-card/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-light"
        >
          Disciplina ahora · Libertad después
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-4xl font-medium leading-[1.08] text-sand sm:text-6xl lg:text-7xl"
        >
          Entrena tu cuerpo.
          <br />
          Educa tu mente.
          <br />
          <span className="sunset-text italic">Encuentra tu equilibrio.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.28 }}
          className="mx-auto mt-8 max-w-2xl text-balance text-lg text-sand-dim"
        >
          {BRAND.name} no es un gimnasio ni un entrenador personal más. Es un ecosistema
          alrededor del deporte, la salud, la educación y las experiencias — creado por{" "}
          <span className="text-sand">{BRAND.founder}</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.42 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href={CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full sunset-bg px-8 py-4 text-base font-semibold text-dusk shadow-xl shadow-ember/25 transition-transform hover:scale-105"
          >
            <MessageCircle size={20} strokeWidth={2.5} />
            Habla con Alejandro
          </a>
          <a
            href="#metodo"
            className="inline-flex items-center gap-2 rounded-full border border-dusk-border px-8 py-4 text-base font-semibold text-sand transition-colors hover:border-gold hover:text-gold-light"
          >
            Descubre el método
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
        >
          {TAGS.map((tag, i) => (
            <span key={tag} className="flex items-center gap-6 text-xs uppercase tracking-[0.25em] text-sand-mute">
              {tag}
              {i < TAGS.length - 1 && <span className="text-gold">·</span>}
            </span>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#manifiesto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1 }, y: { duration: 1.8, repeat: Infinity } }}
        className="relative mx-auto mt-16 text-sand-mute transition-colors hover:text-gold"
        aria-label="Bajar a la siguiente sección"
      >
        <ArrowDown size={22} />
      </motion.a>
    </section>
  );
}
