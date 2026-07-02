import Image from "next/image";
import Reveal from "./Reveal";
import { Sprig, Flourish } from "./organic";
import DragScroller from "./DragScroller";

type Bake = { src: string; caption: string; rotate: string; lift: string };

const BAKES: Bake[] = [
  { src: "/photos/bake-1.jpeg", caption: "Budín de zanahoria & nueces", rotate: "-3deg", lift: "0" },
  { src: "/photos/bake-4.jpeg", caption: "Tarteletas de ruibarbo & frutilla", rotate: "2.5deg", lift: "2.5rem" },
  { src: "/photos/bake-3.jpeg", caption: "Scones de dátiles", rotate: "-1.5deg", lift: "0.5rem" },
  { src: "/photos/bake-2.jpeg", caption: "Tarta de lima", rotate: "3deg", lift: "1.5rem" },
  { src: "/photos/bake-5.jpeg", caption: "Torta de panqueques caseros", rotate: "-2deg", lift: "0" },
];

function Polaroid({ bake, i }: { bake: Bake; i: number }) {
  return (
    <Reveal delay={i * 0.06} className="shrink-0 snap-center">
      <figure
        className="group relative w-[80vw] max-w-[26rem] rounded-[4px] bg-[#fbf8f1] p-4 pb-5 shadow-[0_20px_46px_rgba(40,26,8,0.42)] transition-transform duration-300 hover:z-10 hover:!rotate-0 hover:scale-[1.02] sm:w-[24rem] lg:w-[27rem]"
        style={{ rotate: bake.rotate }}
      >
        <span className="tape absolute -top-4 left-1/2 h-8 w-28 -translate-x-1/2 -rotate-2 rounded-[1px]" />
        <div className="relative aspect-square w-full overflow-hidden rounded-[3px] bg-kraft/40">
          <Image
            src={bake.src}
            alt={bake.caption}
            fill
            sizes="(max-width: 640px) 80vw, 27rem"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
          />
        </div>
        <figcaption className="px-1 pt-3 text-center font-hand text-3xl leading-tight text-bark">
          {bake.caption}
        </figcaption>
      </figure>
    </Reveal>
  );
}

export default function Reposteria() {
  return (
    <section
      id="reposteria"
      className="cork cork-wavy-top paper-grain relative z-[20] -mt-14 pb-42 pt-42 z-20"
    >
      {/* botanical accents */}
      <Sprig className="pointer-events-none absolute left-4 top-16 hidden w-44 text-[#3f5a47]/35 md:block" />
      <Sprig className="pointer-events-none absolute right-4 bottom-12 hidden w-40 -scale-x-100 text-[#3f5a47]/30 md:block" />

      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal className="text-center">
          <p className="text-xs uppercase tracking-[0.34em] text-[#fff6e4]/85">
            Del horno a tu mesa
          </p>
          <h2 className="mt-4 font-hand text-6xl text-cream drop-shadow-[0_2px_6px_rgba(50,32,8,0.5)] md:text-7xl">
            Repostería
          </h2>
          <Flourish className="mx-auto mt-3 h-3.5 w-32 text-[#fff6e4]/80" />
          <p className="mx-auto mt-5 max-w-xl text-[18px] leading-relaxed text-cream/90">
            Todo hecho a mano, con frutos secos, dátiles, banana, zanahoria y
            harinas integrales. Nada refinado — la buena de siempre.
          </p>
        </Reveal>

      </div>

      {/* Full-bleed horizontal gallery — scroll sideways, cards snap to centre.
          Scrollbar hidden; padding keeps the first/last card clear of the edges. */}
      <DragScroller className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-p-6 px-6 py-10 [&::-webkit-scrollbar]:hidden md:mt-12 md:gap-12 md:scroll-p-10 md:px-10">
        {BAKES.map((b, i) => (
          <Polaroid key={b.src} bake={b} i={i} />
        ))}
      </DragScroller>
      <img
              src="/dividers/mask-top-slider.png"
              alt=""
              aria-hidden
              className="section-divider bottom"
            />
    </section>
  );
}
