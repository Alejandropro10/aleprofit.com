import Image from "next/image";
import Logo from "./Logo";
import { BRAND, CONTACT } from "@/lib/constants";

const LINKS = [
  { href: "#manifiesto", label: "Manifiesto" },
  { href: "#alejandro", label: "Alejandro" },
  { href: "#metodo", label: "Método" },
  { href: "#servicios", label: "Servicios" },
  { href: "#club-profit", label: "Club Profit" },
  { href: "#contacto", label: "Contacto" },
];

export default function Footer() {
  return (
    <footer className="bg-dusk py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="section-divider mb-12" />
        <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:items-start lg:justify-between lg:text-left">
          <div className="max-w-xs">
            <Logo size="sm" />
            <p className="mt-3 text-sm text-sand-mute">{BRAND.tagline}</p>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={"/"+l.href}
                className="text-sm text-sand-dim transition-colors hover:text-gold"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="text-sm text-sand-mute">
            <p>{BRAND.founder}</p>
            <p>{CONTACT.phoneDisplay}</p>
            <p>{CONTACT.email}</p>
          </div>
        </div>

        <div className="legal-footer"><nav aria-label="Información legal"><a href="/aviso-legal">Aviso legal y condiciones de uso</a><a href="/privacidad">Privacidad</a><a href="/cookies">Cookies</a></nav><a className="legal-seal" href="https://www.gruposmz.es/eipd/empresa/entrada/sello.aspx?idE=NzU1MzU4&idC=MjQxOTQ=" target="_blank" rel="noopener noreferrer"><Image src="/legal/sello-vigila.png" alt="VigilaMisDatos: ejercer tus derechos de protección de datos" width={90} height={90}/></a></div>
        <p className="mt-12 text-center text-xs text-sand-mute/70">
          © {new Date().getFullYear()} {BRAND.name}. {BRAND.coreLine}
        </p>
      </div>
    </footer>
  );
}
