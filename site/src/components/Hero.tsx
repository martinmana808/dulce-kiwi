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
  // Foreground table starts 25% of the viewport lower, then rises to fill the
  // frame as you scroll. Its translate stays >= 0 the whole way, so the table's
  // front edge is always parked at/below the section's bottom edge — where the
  // cork wave laps over and hides it. The cutout edge is therefore never
  // revealed (the depth trick can't bust), while the background lags behind it
  // (bg drifts +10%, fg rises to 0%), so the table clearly reads as the closest,
  // fastest layer.
  const yFg = useTransform(scrollYProgress, [0, 1], ["25%", "0%"]);
  const scaleFg = useTransform(scrollYProgress, [0, 1], [1, 1.07]);
  const yContent = useTransform(scrollYProgress, [0, 1], [0, 130]);
  const contentFade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      id="inicio"
      className="relative h-[calc(100svh+3.5rem)] w-full overflow-hidden bg-bark"
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
        className="relative justify-center  mx-auto flex h-[100svh] max-w-3xl flex-col items-center px-6 pt-[5vh] text-center"
      >
        <Image
          src="/brand/logo.svg"
          alt="Dulce Kiwi"
          width={420}
          height={420}
          priority
          className="w-44 brightness-0 invert drop-shadow-[0_6px_18px_rgba(20,12,4,0.45)] md:w-52"
        />
        <p className="mt-4 max-w-xl font-hand text-3xl leading-[1.1] text-white drop-shadow-[0_2px_10px_rgba(24,14,4,0.6)] md:text-4xl">
          Repostería casera, natural y de la tierra.
        </p>
        <p className="mt-2 text-sm font-semibold uppercase tracking-[0.28em] text-white drop-shadow-[0_1px_8px_rgba(24,14,4,0.65)]">
          Acassuso · Buenos Aires
        </p>
      </motion.div>

      {/* scroll cue */}
      <motion.div
        style={{ opacity: contentFade }}
        className="absolute bottom-[calc(6vh+3.5rem)] left-1/2 z-10 -translate-x-1/2 text-cream"
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
