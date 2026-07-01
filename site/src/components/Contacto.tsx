import Image from "next/image";
import Reveal from "./Reveal";
import { TornEdge, Sprig, Flourish } from "./organic";

const CONTACTS = [
  {
    label: "Instagram",
    value: "@dulcekiwi",
    href: "https://instagram.com/dulcekiwi",
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    label: "WhatsApp",
    value: "+54 9 11 0000 0000",
    href: "https://wa.me/5491100000000",
    icon: (
      <>
        <path d="M21 11.5a8.5 8.5 0 0 1-12.7 7.4L3 20l1.2-5.2A8.5 8.5 0 1 1 21 11.5Z" />
        <path d="M8.5 8.8c.2-.6.5-.6.8-.6h.6c.2 0 .4 0 .6.5l.7 1.7c.1.2 0 .4-.1.6l-.4.5c-.2.2-.3.4-.1.7.5.8 1.3 1.5 2.2 1.9.3.1.5.1.7-.1l.5-.6c.2-.2.4-.2.6-.1l1.6.8c.2.1.3.3.3.5 0 .6-.3 1.3-.8 1.5-.5.3-1.6.5-3.2-.3-1.9-.9-3.2-2.9-3.3-3.1-.1-.2-.9-1.3-.9-2.4Z" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    label: "Email",
    value: "hola@dulcekiwi.com.ar",
    href: "mailto:hola@dulcekiwi.com.ar",
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
  },
];

export default function Contacto() {
  return (
    <section
      id="contacto"
      className="paper-grain relative bg-forest text-cream"
    >
      <TornEdge color="#34503f" variant="c" />
      <Sprig className="pointer-events-none absolute left-6 top-20 hidden w-44 text-cream/10 md:block" />
      <Sprig className="pointer-events-none absolute right-6 bottom-24 hidden w-44 -scale-x-100 text-cream/10 md:block" />

      <div className="relative mx-auto max-w-5xl px-6 py-28 text-center">
        <Reveal>
          <Image
            src="/brand/kiwi.svg"
            alt=""
            width={120}
            height={100}
            className="mx-auto w-20 opacity-90 [filter:brightness(0)_saturate(100%)_invert(94%)_sepia(8%)_saturate(220%)_hue-rotate(345deg)_brightness(101%)]"
          />
          <p className="mt-6 text-xs uppercase tracking-[0.34em] text-kraft">
            ¿Se te antojó algo?
          </p>
          <h2 className="mt-2 font-hand text-6xl md:text-7xl">Hablemos</h2>
          <Flourish className="mx-auto mt-3 h-3.5 w-32 text-kraft/70" />
          <p className="mx-auto mt-5 max-w-lg text-cream/80">
            Encargos por la semana. Escribime y armamos algo rico, hecho a mano
            para vos.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-14 grid max-w-3xl gap-5 sm:grid-cols-3">
            {CONTACTS.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex flex-col items-center gap-3 rounded-2xl border border-cream/15 bg-cream/[0.06] px-5 py-8 shadow-[0_10px_24px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-1 hover:border-kraft/40 hover:bg-cream/[0.1]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-kraft/30 text-kraft transition-colors group-hover:bg-kraft/10">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {c.icon}
                  </svg>
                </span>
                <span className="text-xs uppercase tracking-[0.22em] text-cream/60">
                  {c.label}
                </span>
                <span className="font-display text-lg">{c.value}</span>
              </a>
            ))}
          </div>
        </Reveal>

        <p className="mt-14 text-sm uppercase tracking-[0.28em] text-cream/55">
          Acassuso · Buenos Aires · Argentina
        </p>
      </div>

      <footer className="border-t border-cream/10 py-6 text-center text-xs text-cream/50">
        <p>
          © {new Date().getFullYear()} Dulce Kiwi · Repostería casera · Hecho con
          cariño
        </p>
      </footer>
      <img
              src="/dividers/mask-top-slider.png"
              alt=""
              aria-hidden
              className="section-divider top"
            />
    </section>
  );
}
