import Image from "next/image";
import Reveal from "./Reveal";

type Bake = { src: string; caption: string; rotate: string };

const BAKES: Bake[] = [
  { src: "/photos/bake-1.jpeg", caption: "Budín de zanahoria & nueces", rotate: "-3deg" },
  { src: "/photos/bake-4.jpeg", caption: "Tarteletas de ruibarbo & frutilla", rotate: "2.5deg" },
  { src: "/photos/bake-3.jpeg", caption: "Scones de dátiles", rotate: "-1.5deg" },
  { src: "/photos/bake-2.jpeg", caption: "Tarta de lima", rotate: "3deg" },
  { src: "/photos/bake-5.jpeg", caption: "Torta de panqueques caseros", rotate: "-2deg" },
];

function Polaroid({ bake, i }: { bake: Bake; i: number }) {
  return (
    <Reveal delay={i * 0.06}>
      <figure
        className="group relative w-[15rem] rounded-[3px] bg-[#fbf8f1] p-3 pb-4 shadow-[0_10px_24px_rgba(50,35,15,0.28)] transition-transform duration-300 hover:!rotate-0 hover:scale-[1.03] sm:w-[16.5rem]"
        style={{ rotate: bake.rotate }}
      >
        {/* tape */}
        <span className="tape absolute -top-3 left-1/2 h-6 w-20 -translate-x-1/2 -rotate-2 rounded-[2px]" />
        <div className="relative aspect-square w-full overflow-hidden rounded-[2px] bg-kraft/40">
          <Image
            src={bake.src}
            alt={bake.caption}
            fill
            sizes="(max-width: 640px) 60vw, 17rem"
            className="object-cover"
          />
        </div>
        <figcaption className="pt-3 text-center font-display text-lg italic text-bark">
          {bake.caption}
        </figcaption>
      </figure>
    </Reveal>
  );
}

export default function Reposteria() {
  return (
    <section id="reposteria" className="cork paper-grain relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[#f4ead3]/90">
            Del horno a tu mesa
          </p>
          <h2 className="mt-2 font-display text-4xl text-cream drop-shadow-[0_2px_4px_rgba(60,40,15,0.4)] md:text-5xl">
            Repostería
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-cream/90">
            Todo hecho a mano, con frutos secos, dátiles, banana, zanahoria y
            harinas integrales. Nada refinado — la buena de siempre.
          </p>
        </Reveal>

        <div className="mt-14 flex flex-wrap items-start justify-center gap-x-8 gap-y-12">
          {BAKES.map((b, i) => (
            <Polaroid key={b.src} bake={b} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
