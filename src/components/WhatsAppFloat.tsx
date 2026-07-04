"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/constants";

export default function WhatsAppFloat() {
  return (
    <motion.a
      href={CONTACT.whatsappTraining}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbeme por WhatsApp"
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      className="group fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full sunset-bg text-dusk shadow-xl shadow-ember-deep/30 sm:bottom-7 sm:right-7"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-ember/50" />
      <MessageCircle size={26} strokeWidth={2.25} />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-dusk-card px-3 py-1.5 text-xs font-medium text-sand opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 sm:block">
        Escríbeme por WhatsApp
      </span>
    </motion.a>
  );
}
