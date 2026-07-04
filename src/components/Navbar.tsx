"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import Logo from "./Logo";
import { CONTACT } from "@/lib/constants";

const LINKS = [
  { href: "#manifiesto", label: "Manifiesto" },
  { href: "#alejandro", label: "Alejandro" },
  { href: "#metodo", label: "Método" },
  { href: "#servicios", label: "Servicios" },
  { href: "#club-profit", label: "Club Profit" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((l) => document.querySelector(l.href)).filter(
      (el): el is Element => !!el
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHash(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled ? "bg-dusk/85 backdrop-blur-lg border-b border-dusk-border" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#top">
          <Logo size="sm" />
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {LINKS.map((link) => (
            <li key={link.href} className="relative">
              <a
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-gold ${
                  activeHash === link.href ? "text-gold-light" : "text-sand-dim"
                }`}
              >
                {link.label}
              </a>
              {activeHash === link.href && (
                <motion.span
                  layoutId="nav-active-dot"
                  className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full sunset-bg"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a
            href={CONTACT.whatsappTraining}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full sunset-bg px-5 py-2.5 text-sm font-semibold text-dusk shadow-lg shadow-ember/20 transition-transform hover:scale-105"
          >
            <MessageCircle size={16} strokeWidth={2.5} />
            Empezar ahora
          </a>
        </div>

        <button
          aria-label="Abrir menú"
          onClick={() => setOpen(true)}
          className="text-sand lg:hidden"
        >
          <Menu size={28} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col bg-dusk lg:hidden"
          >
            <div className="flex items-center justify-between px-6 py-4">
              <Logo size="sm" />
              <button aria-label="Cerrar menú" onClick={() => setOpen(false)} className="text-sand">
                <X size={28} />
              </button>
            </div>
            <div className="flex flex-1 flex-col items-center justify-center gap-8">
              {LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="font-display text-3xl text-sand hover:text-gold"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: LINKS.length * 0.06 }}
                href={CONTACT.whatsappTraining}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-full sunset-bg px-6 py-3 font-semibold text-dusk"
              >
                <MessageCircle size={18} />
                Escríbeme por WhatsApp
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
