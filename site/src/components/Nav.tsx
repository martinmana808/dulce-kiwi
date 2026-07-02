"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const LINKS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#reposteria", label: "Repostería" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#contacto", label: "Contacto" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-cream/90 shadow-[0_1px_0_rgba(92,71,51,0.12)] backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#inicio" className="flex items-center gap-2" aria-label="Dulce Kiwi — inicio">
          <Image
            src="/brand/kiwi.svg"
            alt=""
            width={44}
            height={36}
            className={`h-8 w-auto transition-[filter] duration-300 ${
              scrolled ? "" : "brightness-0 invert drop-shadow-[0_1px_6px_rgba(24,14,4,0.5)]"
            }`}
          />
          <span
            className={`font-display text-xl transition-colors duration-300 ${
              scrolled ? "text-forest" : "text-white drop-shadow-[0_1px_6px_rgba(24,14,4,0.5)]"
            }`}
          >
            Dulce Kiwi
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`text-sm uppercase tracking-[0.18em] transition-colors ${
                  scrolled
                    ? "text-forest/80 hover:text-forest"
                    : "text-white/90 drop-shadow-[0_1px_6px_rgba(24,14,4,0.5)] hover:text-white"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden"
          aria-label="Abrir menú"
          aria-expanded={open}
        >
          <div className="space-y-1.5">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`block h-0.5 w-6 transition-colors duration-300 ${
                  scrolled ? "bg-forest" : "bg-white"
                }`}
              />
            ))}
          </div>
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-bark/10 bg-cream/95 px-6 py-3 backdrop-blur md:hidden">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm uppercase tracking-[0.18em] text-forest/80"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
