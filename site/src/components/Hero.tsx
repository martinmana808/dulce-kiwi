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

  // Each layer drifts up at its own pace as you scroll — the "country route" feel.
  const ySky = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const yFarHills = useTransform(scrollYProgress, [0, 1], [0, 130]);
  const yNearHills = useTransform(scrollYProgress, [0, 1], [0, 240]);
  const yFence = useTransform(scrollYProgress, [0, 1], [0, 380]);
  const yTable = useTransform(scrollYProgress, [0, 1], [0, 540]);
  const yContent = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const contentFade = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const kiwiX = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <section
      ref={ref}
      id="inicio"
      className="relative h-[100svh] w-full overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #f7efe0 0%, #f3ead8 38%, #efe1c9 100%)",
      }}
    >
      {/* Sun */}
      <motion.div
        style={{ y: ySky }}
        className="pointer-events-none absolute left-1/2 top-[14%] -translate-x-1/2"
        aria-hidden
      >
        <div className="size-44 rounded-full bg-[#f6e7c6] opacity-80 blur-[2px] md:size-56" />
      </motion.div>

      {/* Far hills */}
      <motion.div
        style={{ y: yFarHills }}
        className="pointer-events-none absolute inset-x-0 bottom-0"
        aria-hidden
      >
        <svg viewBox="0 0 1440 420" className="h-auto w-full" preserveAspectRatio="xMidYMax slice">
          <path
            d="M0 240 C 240 170 420 200 660 250 C 900 300 1080 210 1440 250 L1440 420 L0 420 Z"
            fill="var(--color-hill)"
            opacity="0.55"
          />
        </svg>
      </motion.div>

      {/* Near hills + trees */}
      <motion.div
        style={{ y: yNearHills }}
        className="pointer-events-none absolute inset-x-0 bottom-0"
        aria-hidden
      >
        <svg viewBox="0 0 1440 360" className="h-auto w-full" preserveAspectRatio="xMidYMax slice">
          <path
            d="M0 220 C 260 150 480 210 760 230 C 1020 250 1220 180 1440 220 L1440 360 L0 360 Z"
            fill="var(--color-hill-deep)"
          />
          {/* little trees */}
          {[180, 320, 1120, 1290].map((x, i) => (
            <g key={i} transform={`translate(${x} ${198 - (i % 2) * 10})`}>
              <rect x="-4" y="0" width="8" height="34" rx="3" fill="var(--color-bark)" />
              <circle cx="0" cy="-6" r="26" fill="#5e7a59" />
              <circle cx="-16" cy="6" r="18" fill="#5e7a59" />
              <circle cx="16" cy="6" r="18" fill="#5e7a59" />
            </g>
          ))}
        </svg>
      </motion.div>

      {/* Fence + walking kiwi */}
      <motion.div
        style={{ y: yFence }}
        className="pointer-events-none absolute inset-x-0 bottom-[6%]"
        aria-hidden
      >
        <div className="relative">
          <svg viewBox="0 0 1440 160" className="h-auto w-full" preserveAspectRatio="xMidYMax meet">
            {/* rails */}
            <rect x="0" y="70" width="1440" height="14" fill="#7a5d3f" />
            <rect x="0" y="104" width="1440" height="14" fill="#6b4f34" />
            {/* posts */}
            {Array.from({ length: 19 }).map((_, i) => (
              <rect
                key={i}
                x={i * 80 + 8}
                y="44"
                width="16"
                height="96"
                rx="3"
                fill="#5c4733"
              />
            ))}
          </svg>
          {/* the kiwi ambling along the fence line */}
          <motion.div
            style={{ x: kiwiX }}
            className="absolute bottom-[30%] left-[18%] w-[6.5%] min-w-12"
          >
            <Image
              src="/brand/kiwi.svg"
              alt=""
              width={120}
              height={100}
              className="h-auto w-full"
              priority
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Foreground table with bakes */}
      <motion.div
        style={{ y: yTable }}
        className="pointer-events-none absolute inset-x-0 bottom-0"
        aria-hidden
      >
        <svg viewBox="0 0 1440 300" className="h-auto w-full" preserveAspectRatio="xMidYMax slice">
          {/* table top */}
          <rect x="0" y="96" width="1440" height="40" fill="#8a6a45" />
          <rect x="0" y="120" width="1440" height="180" fill="#6f5235" />
          {/* wood grain lines */}
          {[150, 470, 760, 1040, 1320].map((x, i) => (
            <line key={i} x1={x} y1="96" x2={x} y2="136" stroke="#7a5b3a" strokeWidth="2" />
          ))}
          {/* linen cloth */}
          <path d="M980 96 q120 -10 240 6 l-10 80 q-120 16 -230 0 Z" fill="#e7ddc8" opacity="0.95" />
          {/* loaf cake with icing (left) */}
          <g transform="translate(250 40)">
            <rect x="-70" y="20" width="140" height="56" rx="10" fill="#9c6b3f" />
            <path d="M-70 30 q70 -22 140 0 l0 6 q-70 -18 -140 0 Z" fill="#efe6d2" />
            <circle cx="-30" cy="20" r="4" fill="#7a4a22" />
            <circle cx="10" cy="18" r="4" fill="#7a4a22" />
            <circle cx="45" cy="22" r="4" fill="#7a4a22" />
          </g>
          {/* round cake (center) */}
          <g transform="translate(620 36)">
            <ellipse cx="0" cy="74" rx="78" ry="14" fill="#5c4733" opacity="0.25" />
            <rect x="-70" y="20" width="140" height="58" rx="8" fill="#b07c4a" />
            <ellipse cx="0" cy="22" rx="70" ry="16" fill="#efe6d2" />
            <ellipse cx="0" cy="20" rx="70" ry="14" fill="#f6efe0" />
            {[-40, -12, 18, 46].map((x, i) => (
              <circle key={i} cx={x} cy="18" r="6" fill="#cf8b53" />
            ))}
          </g>
          {/* mate gourd + bombilla (right) */}
          <g transform="translate(1090 56)">
            <circle cx="0" cy="40" r="30" fill="#7a4a22" />
            <path d="M-30 36 a30 30 0 0 1 60 0 Z" fill="#4f6b3e" />
            <rect x="14" y="-6" width="5" height="54" rx="2" fill="#b8b0a0" transform="rotate(18 16 20)" />
          </g>
        </svg>
      </motion.div>

      {/* Centerpiece: logo + tagline */}
      <motion.div
        style={{ y: yContent, opacity: contentFade }}
        className="relative z-10 mx-auto flex h-full max-w-3xl flex-col items-center justify-center px-6 pt-10 text-center"
      >
        <Image
          src="/brand/logo.svg"
          alt="Dulce Kiwi"
          width={420}
          height={420}
          priority
          className="w-64 drop-shadow-[0_6px_14px_rgba(60,45,25,0.12)] md:w-80"
        />
        <p className="mt-6 max-w-md font-display text-xl italic text-forest/80 md:text-2xl">
          Repostería casera, natural y de la tierra.
        </p>
        <p className="mt-2 text-sm uppercase tracking-[0.28em] text-bark/70">
          Acassuso · Buenos Aires
        </p>
      </motion.div>

      {/* scroll cue */}
      <motion.div
        style={{ opacity: contentFade }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-bark/60"
        aria-hidden
      >
        <div className="flex flex-col items-center gap-1 text-xs uppercase tracking-[0.25em]">
          <span>Pasá</span>
          <span className="text-lg leading-none">↓</span>
        </div>
      </motion.div>
    </section>
  );
}
