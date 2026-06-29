"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Gentle depth: the countryside drifts slowly, the table in front moves faster
  // (closer = quicker), while the wordmark lifts + fades.
  const yPhoto = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const scalePhoto = useTransform(scrollYProgress, [0, 1], [1.08, 1.18]);
  // The table rises into view as we scroll (our line of sight lowers), so the
  // tabletop climbs up and eats into the hills behind it.
  const yTable = useTransform(scrollYProgress, [0, 1], ["0%", "-14%"]);
  const yContent = useTransform(scrollYProgress, [0, 1], [0, 130]);
  const contentFade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      id="inicio"
      className="relative h-[100svh] w-full overflow-hidden bg-sky"
    >
      {/* Warm countryside background */}
      <motion.div
        style={{ y: yPhoto, scale: scalePhoto }}
        className="absolute inset-0"
        aria-hidden
      >
        <Image
          src="/photos/countryside.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_60%]"
        />
      </motion.div>

      {/* Scrims: soft light at top for nav + a gentle glow behind the wordmark,
          warm shadow at the bottom for the scroll cue */}
      <div
        className="absolute inset-0"
        aria-hidden
        style={{
          background:
            "linear-gradient(180deg, rgba(247,240,224,0.66) 0%, rgba(247,240,224,0.18) 22%, rgba(247,240,224,0) 45%, rgba(60,45,28,0.10) 82%, rgba(52,40,25,0.34) 100%)",
        }}
      />
      <div
        className="absolute inset-x-0 top-0 h-[62%]"
        aria-hidden
        style={{
          background:
            "radial-gradient(50% 60% at 50% 42%, rgba(247,240,224,0.62) 0%, rgba(247,240,224,0) 70%)",
        }}
      />

      {/* Foreground: rustic wooden tabletop, the closest layer.
          Laid down in 3D perspective so the planks recede toward the hills,
          matching the photo's depth. Drifts faster on scroll. */}
      <motion.div
        style={{ y: yTable, perspective: 560, perspectiveOrigin: "50% 100%" }}
        className="pointer-events-none absolute inset-x-0 bottom-[-14vh] z-[5] h-[66vh] overflow-hidden"
        aria-hidden
      >
        {/* the wood plane, tipped back so it lies flat like a tabletop */}
        <div
          className="absolute inset-x-[-12%] bottom-0 h-[205%] origin-bottom"
          style={{ transform: "rotateX(64deg)" }}
        >
          <Image
            src="/photos/table-fg.jpg"
            alt=""
            fill
            priority
            sizes="120vw"
            className="object-cover"
          />
          {/* far edge darkens into the distance; near edge warm + grounded */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(36,26,14,0.55) 0%, rgba(50,34,18,0.12) 22%, rgba(50,34,18,0) 55%, rgba(36,26,14,0.22) 100%)",
            }}
          />
        </div>
      </motion.div>

      {/* Centerpiece: logo + tagline, sitting up in the sky */}
      <motion.div
        style={{ y: yContent, opacity: contentFade }}
        className="relative z-10 mx-auto flex h-full max-w-3xl flex-col items-center px-6 pt-[16vh] text-center"
      >
        <Image
          src="/brand/logo.svg"
          alt="Dulce Kiwi"
          width={420}
          height={420}
          priority
          className="w-60 drop-shadow-[0_5px_16px_rgba(60,45,25,0.22)] md:w-72"
        />
        <p className="mt-6 max-w-md font-display text-xl italic text-forest drop-shadow-[0_1px_8px_rgba(247,240,224,0.7)] md:text-2xl">
          Repostería casera, natural y de la tierra.
        </p>
        <p className="mt-2 text-sm uppercase tracking-[0.28em] text-bark drop-shadow-[0_1px_6px_rgba(247,240,224,0.6)]">
          Acassuso · Buenos Aires
        </p>
      </motion.div>

      {/* scroll cue */}
      <motion.div
        style={{ opacity: contentFade }}
        className="absolute bottom-[38vh] left-1/2 z-10 -translate-x-1/2 text-forest/80"
        aria-hidden
      >
        <div className="flex flex-col items-center gap-1 text-xs uppercase tracking-[0.25em] drop-shadow-[0_1px_5px_rgba(247,240,224,0.8)]">
          <span>Pasá</span>
          <motion.span
            className="text-lg leading-none"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            ↓
          </motion.span>
        </div>
      </motion.div>
    </section>
  );
}
