import Image from "next/image";
import Reveal from "./Reveal";

const TIMELINE = [
  { year: "Bebé", caption: "La primera probada — siempre fui golosa.", src: null },
  { year: "7 años", caption: "Mis primeras galletas, hechas en casa.", src: null },
  { year: "Hoy", caption: "Mate y bizcochitos en Acassuso.", src: "/photos/ellie.png" },
];

function Frame({
  src,
  year,
  caption,
}: {
  src: string | null;
  year: string;
  caption: string;
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-md border border-bark/15 bg-cream-deep shadow-[0_8px_18px_rgba(60,45,25,0.12)]">
        {src ? (
          <Image src={src} alt={caption} fill sizes="(max-width:768px) 80vw, 18rem" className="object-cover" />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-bark/45">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <circle cx="8.5" cy="10" r="1.6" />
              <path d="M21 17l-5-5L5 19" />
            </svg>
            <span className="text-xs uppercase tracking-[0.2em]">Foto pronto</span>
          </div>
        )}
      </div>
      <p className="mt-3 font-display text-xl text-forest">{year}</p>
      <p className="mt-1 max-w-[16rem] text-sm text-bark/80">{caption}</p>
    </div>
  );
}

export default function SobreMi() {
  return (
    <section id="sobre-mi" className="bg-cream py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <Reveal>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-lg shadow-[0_16px_36px_rgba(60,45,25,0.22)]">
              <Image
                src="/photos/ellie.png"
                alt="Ellie, de Dulce Kiwi"
                fill
                sizes="(max-width:768px) 90vw, 24rem"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-sm uppercase tracking-[0.3em] text-clay">Sobre mí</p>
            <h2 className="mt-2 font-display text-4xl text-forest md:text-5xl">
              Hola, soy Ellie
            </h2>
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-bark">
              <p>
                Nací en Nueva Zelanda y crecí entre hornos calientes, manteca y
                harina. Hornear siempre fue mi forma de cuidar a los demás.
              </p>
              <p>
                Hace poco crucé el mundo hasta Argentina y me enamoré del mate,
                los bizcochitos y la vida tranquila de Acassuso. De ahí nació{" "}
                <span className="font-display italic text-forest">Dulce Kiwi</span>
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

        <Reveal className="mt-20">
          <div className="grid gap-10 sm:grid-cols-3">
            {TIMELINE.map((t) => (
              <Frame key={t.year} {...t} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
