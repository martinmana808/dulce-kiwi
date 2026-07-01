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

  // Two perfectly-aligned layers (same source frame): the kitchen sits behind,
  // the baking table is the closest layer. On scroll the background drifts
  // slowly while the table sinks + grows toward the viewer — real parallax
  // depth, no faked perspective.
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const scaleBg = useTransform(scrollYProgress, [0, 1], [1.05, 1.12]);
  const yFg = useTransform(scrollYProgress, [0, 1], ["0%", "24%"]);
  const scaleFg = useTransform(scrollYProgress, [0, 1], [1, 1.07]);
  const yContent = useTransform(scrollYProgress, [0, 1], [0, 130]);
  const contentFade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      id="inicio"
      className="relative h-[100svh] w-full overflow-hidden bg-bark"
    >
      {/* Background: rustic brick farmhouse kitchen */}
      <motion.div
        style={{ y: yBg, scale: scaleBg }}
        className="absolute inset-0"
        aria-hidden
      >
        <Image
          src="/photos/hero-bg.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_bottom]"
        />
      </motion.div>

      {/* Scrims: warm light at top for the nav + wordmark, gentle shadow at the
          bottom for the scroll cue */}
      <div
        className="absolute inset-0 z-[2]"
        aria-hidden
        style={{
          background:
            "linear-gradient(180deg, rgba(244,226,188,0.78) 0%, rgba(244,226,188,0.30) 20%, rgba(244,226,188,0) 42%, rgba(40,28,14,0.10) 80%, rgba(34,24,14,0.30) 100%)",
        }}
      />
      {/* warm golden glow cradling the wordmark */}
      <div
        className="absolute inset-x-0 top-0 z-[2] h-[64%]"
        aria-hidden
        style={{
          background:
            "radial-gradient(54% 60% at 50% 30%, rgba(250,233,194,0.85) 0%, rgba(250,233,194,0.35) 48%, rgba(250,233,194,0) 74%)",
        }}
      />
      {/* soft sun flare from the window side (top-right), matching the photo */}
      <div
        className="absolute inset-0 z-[2]"
        aria-hidden
        style={{
          background:
            "radial-gradient(38% 44% at 92% 6%, rgba(255,240,200,0.55) 0%, rgba(255,240,200,0) 60%)",
        }}
      />

      {/* Foreground: the baking table, cut out on transparency and pixel-aligned
          to the background. The closest layer, drifts fastest. */}
      <motion.div
        style={{ y: yFg, scale: scaleFg, transformOrigin: "50% 100%" }}
        className="pointer-events-none absolute inset-0 z-[5]"
        aria-hidden
      >
        <Image
          src="/photos/hero-fg.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_bottom]"
        />
      </motion.div>

      {/* Centerpiece: logo + tagline, sitting up over the brick wall */}
      <motion.div
        style={{ y: yContent, opacity: contentFade }}
        className="relative z-10 mx-auto flex h-full max-w-3xl flex-col items-center px-6 pt-[5vh] text-center"
      >
        <Image
          src="/brand/logo.svg"
          alt="Dulce Kiwi"
          width={420}
          height={420}
          priority
          className="w-44 drop-shadow-[0_6px_18px_rgba(40,26,10,0.3)] md:w-52"
        />
        <p className="mt-4 max-w-xl font-hand text-3xl leading-[1.1] text-forest drop-shadow-[0_1px_10px_rgba(250,238,210,0.98)] md:text-4xl">
          Repostería casera, natural y de la tierra.
        </p>
        <p className="mt-2 text-sm font-semibold uppercase tracking-[0.28em] text-bark drop-shadow-[0_1px_2px_rgba(250,238,210,1)]">
          Acassuso · Buenos Aires
        </p>
      </motion.div>

      {/* scroll cue */}
      <motion.div
        style={{ opacity: contentFade }}
        className="absolute bottom-[6vh] left-1/2 z-10 -translate-x-1/2 text-cream"
        aria-hidden
      >
        <div className="flex flex-col items-center gap-1 text-xs uppercase tracking-[0.25em] drop-shadow-[0_1px_6px_rgba(34,24,14,0.7)]">
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
