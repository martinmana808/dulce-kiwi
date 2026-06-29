import Image from "next/image";
import Reveal from "./Reveal";
import { TornEdge, Sprig, Flourish } from "./organic";

const TIMELINE = [
  { year: "Bebé", caption: "La primera probada — siempre fui golosa.", src: null, rotate: "-3deg" },
  { year: "7 años", caption: "Mis primeras galletas, hechas en casa.", src: null, rotate: "2.5deg" },
  { year: "Hoy", caption: "Mate y bizcochitos en Acassuso.", src: "/photos/ellie.png", rotate: "-2deg" },
];

function Frame({
  src,
  year,
  caption,
  rotate,
  i,
}: {
  src: string | null;
  year: string;
  caption: string;
  rotate: string;
  i: number;
}) {
  return (
    <Reveal delay={i * 0.08} className="flex justify-center">
      <figure
        className="group relative w-[15rem] rounded-[3px] bg-[#fbf8f1] p-3 pb-4 shadow-[0_12px_26px_rgba(60,45,25,0.2)] transition-transform duration-300 hover:!rotate-0 hover:scale-[1.03]"
        style={{ rotate }}
      >
        <span className="tape absolute -top-3.5 left-1/2 h-7 w-24 -translate-x-1/2 rotate-1 rounded-[1px]" />
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2px] bg-cream-deep">
          {src ? (
            <Image src={src} alt={caption} fill sizes="16rem" className="object-cover" />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-bark/40">
              <Sprig className="w-24 text-[#7a5a30]/45" />
              <span className="font-hand text-xl">Foto pronto</span>
            </div>
          )}
        </div>
        <figcaption className="pt-3 text-center">
          <span className="font-hand text-3xl text-forest">{year}</span>
          <span className="mx-auto mt-1 block max-w-[15rem] text-sm leading-snug text-bark/75">
            {caption}
          </span>
        </figcaption>
      </figure>
    </Reveal>
  );
}

export default function SobreMi() {
  return (
    <section
      id="sobre-mi"
      className="paper-grain relative bg-gradient-to-b from-linen via-cream to-cream-deep py-28"
    >
      <TornEdge color="#f4efe6" variant="a" />
      <Sprig className="pointer-events-none absolute right-6 top-12 hidden w-40 -scale-x-100 text-forest/15 md:block" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-14 md:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div
              className="relative mx-auto w-full max-w-[22rem] rounded-[4px] bg-[#fbf8f1] p-4 pb-14 shadow-[0_22px_44px_rgba(60,45,25,0.26)]"
              style={{ rotate: "-2.5deg" }}
            >
              <span className="tape absolute -top-4 left-1/2 h-8 w-32 -translate-x-1/2 -rotate-3 rounded-[1px]" />
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2px]">
                <Image
                  src="/photos/ellie.png"
                  alt="Ellie, de Dulce Kiwi"
                  fill
                  sizes="(max-width:768px) 90vw, 22rem"
                  className="object-cover"
                />
              </div>
              <figcaption className="absolute inset-x-0 bottom-4 text-center font-hand text-2xl text-bark">
                Ellie · Acassuso
              </figcaption>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-sm uppercase tracking-[0.34em] text-clay">Sobre mí</p>
            <h2 className="mt-1 font-hand text-6xl text-forest md:text-7xl">
              Hola, soy Ellie
            </h2>
            <Flourish className="mt-3 h-3.5 w-32 text-clay/70" />
            <div className="mt-6 space-y-4 text-[17px] leading-relaxed text-bark">
              <p className="dropcap">
                Nací en Nueva Zelanda y crecí entre hornos calientes, manteca y
                harina. Hornear siempre fue mi forma de cuidar a los demás.
              </p>
              <p>
                Hace poco crucé el mundo hasta Argentina y me enamoré del mate,
                los bizcochitos y la vida tranquila de Acassuso. De ahí nació{" "}
                <span className="font-hand text-[1.35em] leading-none text-forest">Dulce Kiwi</span>
                : las ganas de compartir lo que más me gusta.
              </p>
              <p>
                Repostería casera, hecha con cosas de verdad — frutos secos,
                dátiles, fruta y harinas integrales. Sin nada refinado. La buena
                de siempre.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-24 text-center">
          <p className="text-sm uppercase tracking-[0.34em] text-clay">Mi historia</p>
          <Flourish className="mx-auto mt-3 h-3.5 w-28 text-clay/70" />
        </Reveal>

        <Reveal className="relative mt-12">
          {/* the "string" the photos hang from */}
          <svg
            aria-hidden
            viewBox="0 0 1000 20"
            preserveAspectRatio="none"
            className="absolute inset-x-6 top-3 hidden h-5 w-[calc(100%-3rem)] text-bark/25 sm:block"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="2 7"
            strokeLinecap="round"
          >
            <path d="M0 12 C 250 2, 750 22, 1000 8" />
          </svg>
          <div className="grid gap-12 sm:grid-cols-3">
            {TIMELINE.map((t, i) => (
              <Frame key={t.year} {...t} i={i} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
