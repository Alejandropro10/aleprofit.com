import { MessageCircle, Mail } from "lucide-react";
import AnimateIn from "./AnimateIn";
import { InstagramIcon, FacebookIcon } from "./BrandIcons";
import { CONTACT, BRAND } from "@/lib/constants";

const CHANNELS = [
  {
    icon: InstagramIcon,
    label: "@ale.profit",
    sub: "Instagram ALEPROFIT",
    href: CONTACT.instagram.url,
  },
  {
    icon: InstagramIcon,
    label: "@alejandrpc10",
    sub: "Instagram personal",
    href: CONTACT.instagramPersonal.url,
  },
  {
    icon: FacebookIcon,
    label: CONTACT.facebook.handle,
    sub: "Facebook",
    href: CONTACT.facebook.url,
  },
  {
    icon: Mail,
    label: CONTACT.email,
    sub: "Email",
    href: `mailto:${CONTACT.email}`,
  },
];

export default function Contact() {
  return (
    <section id="contacto" className="grain relative overflow-hidden bg-dusk-card py-28 lg:py-36">
      <div className="horizon-glow pointer-events-none absolute inset-0 opacity-60" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <AnimateIn>
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Empecemos
          </span>
          <h2 className="mt-4 font-display text-3xl font-medium leading-tight text-sand sm:text-4xl lg:text-5xl">
            <span className="sunset-text italic">¿Empezamos</span> tu proceso?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-sand-dim">
            Escríbeme y cuéntame tu objetivo. {BRAND.founder.split(" ")[0]} te responderá
            personalmente para diseñar tu plan.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.15} className="mt-10">
          <a
            href={CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full sunset-bg px-10 py-5 text-lg font-semibold text-dusk shadow-2xl shadow-ember/30 transition-transform hover:scale-105"
          >
            <MessageCircle size={22} strokeWidth={2.5} />
            {CONTACT.phoneDisplay}
          </a>
        </AnimateIn>

        <AnimateIn delay={0.25} className="mt-16 grid gap-3 sm:grid-cols-2">
          {CHANNELS.map(({ icon: Icon, label, sub, href }) => (
            <a
              key={sub}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-dusk-border bg-dusk/50 px-5 py-4 text-left transition-colors hover:border-gold/40"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-dusk-card text-gold">
                <Icon size={18} />
              </span>
              <span>
                <span className="block text-sm font-semibold text-sand">{label}</span>
                <span className="block text-xs uppercase tracking-wide text-sand-mute">{sub}</span>
              </span>
            </a>
          ))}
        </AnimateIn>
      </div>
    </section>
  );
}
