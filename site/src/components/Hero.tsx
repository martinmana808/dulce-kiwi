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

  // Photo drifts slowly + eases in; content lifts faster and fades — gentle depth.
  const yPhoto = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const scalePhoto = useTransform(scrollYProgress, [0, 1], [1.12, 1.22]);
  const yContent = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const contentFade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      id="inicio"
      className="relative h-[100svh] w-full overflow-hidden bg-cream"
    >
      {/* Warm photographic background — softly blurred for a dreamy, cosy feel */}
      <motion.div
        style={{ y: yPhoto, scale: scalePhoto }}
        className="absolute inset-0 blur-[3px]"
        aria-hidden
      >
        <Image
          src="/photos/bake-1.jpeg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* Base warm wash */}
      <div
        className="absolute inset-0"
        aria-hidden
        style={{
          background:
            "linear-gradient(180deg, rgba(244,239,230,0.55) 0%, rgba(244,239,230,0.34) 38%, rgba(60,45,28,0.16) 72%, rgba(52,40,25,0.46) 100%)",
        }}
      />
      {/* Strong soft cream haze behind the wordmark */}
      <div
        className="absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(58% 48% at 50% 44%, rgba(244,239,230,0.94) 0%, rgba(244,239,230,0.7) 38%, rgba(244,239,230,0) 72%)",
        }}
      />

      {/* Centerpiece: logo + tagline */}
      <motion.div
        style={{ y: yContent, opacity: contentFade }}
        className="relative z-10 mx-auto flex h-full max-w-3xl flex-col items-center justify-center px-6 text-center"
      >
        <Image
          src="/brand/logo.svg"
          alt="Dulce Kiwi"
          width={420}
          height={420}
          priority
          className="w-60 drop-shadow-[0_4px_12px_rgba(60,45,25,0.18)] md:w-72"
        />
        <p className="mt-6 max-w-md font-display text-xl italic text-forest md:text-2xl">
          Repostería casera, natural y de la tierra.
        </p>
        <p className="mt-2 text-sm uppercase tracking-[0.28em] text-bark">
          Acassuso · Buenos Aires
        </p>
      </motion.div>

      {/* scroll cue */}
      <motion.div
        style={{ opacity: contentFade }}
        className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 text-cream"
        aria-hidden
      >
        <div className="flex flex-col items-center gap-1 text-xs uppercase tracking-[0.25em] drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)]">
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
