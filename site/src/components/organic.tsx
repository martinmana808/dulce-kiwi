// Hand-made decorative elements: torn-paper section edges, botanical sprigs,
// and a hand-drawn heading flourish. All recolour via the `color`/currentColor.

const TORN: Record<string, string> = {
  a: "M0 44 L0 29.2 Q 0.0 29.2 13.1 28.6 Q 26.1 28.1 39.2 31.9 Q 52.2 35.8 65.2 37.3 Q 78.3 38.8 91.3 30.4 Q 104.3 22.0 117.3 22.8 Q 130.4 23.6 143.4 27.2 Q 156.5 30.8 169.6 21.4 Q 182.6 12.0 195.6 17.2 Q 208.7 22.4 221.8 23.0 Q 234.8 23.7 247.8 20.9 Q 260.9 18.2 273.9 21.3 Q 287.0 24.4 300.0 27.2 Q 313.0 30.0 326.1 33.9 Q 339.1 37.7 352.1 35.9 Q 365.2 34.1 378.2 30.1 Q 391.3 26.1 404.4 27.5 Q 417.4 28.9 430.4 29.5 Q 443.5 30.1 456.6 26.2 Q 469.6 22.4 482.6 21.7 Q 495.7 21.0 508.7 22.7 Q 521.7 24.4 534.8 21.8 Q 547.8 19.1 560.8 20.2 Q 573.9 21.3 587.0 23.6 Q 600.0 26.0 613.0 24.3 Q 626.1 22.6 639.2 25.1 Q 652.2 27.7 665.2 26.2 Q 678.3 24.8 691.3 27.5 Q 704.3 30.1 717.3 28.0 Q 730.4 25.9 743.5 20.4 Q 756.5 15.0 769.5 17.9 Q 782.6 20.7 795.7 21.9 Q 808.7 23.1 821.8 24.2 Q 834.8 25.4 847.8 25.8 Q 860.9 26.2 874.0 28.1 Q 887.0 30.1 900.0 28.5 Q 913.0 26.9 926.0 29.4 Q 939.1 31.8 952.2 31.0 Q 965.2 30.1 978.2 27.5 Q 991.3 24.9 1004.3 29.3 Q 1017.4 33.7 1030.5 26.4 Q 1043.5 19.1 1056.5 17.6 Q 1069.6 16.0 1082.7 24.1 Q 1095.7 32.1 1108.7 30.4 Q 1121.7 28.6 1134.8 26.7 Q 1147.8 24.8 1160.8 27.1 Q 1173.9 29.4 1187.0 27.1 L 1200 24.8 L 1200 44 Z",
  b: "M0 44 L0 28.4 Q 0.0 28.4 13.1 24.2 Q 26.1 20.0 39.2 21.1 Q 52.2 22.1 65.2 23.3 Q 78.3 24.5 91.3 22.6 Q 104.3 20.7 117.3 26.9 Q 130.4 33.0 143.4 33.0 Q 156.5 33.0 169.6 32.2 Q 182.6 31.5 195.6 32.7 Q 208.7 33.9 221.8 29.0 Q 234.8 24.1 247.8 23.2 Q 260.9 22.3 273.9 25.9 Q 287.0 29.5 300.0 26.1 Q 313.0 22.8 326.1 20.1 Q 339.1 17.4 352.1 21.2 Q 365.2 25.0 378.2 22.6 Q 391.3 20.1 404.4 19.6 Q 417.4 19.2 430.4 19.6 Q 443.5 20.0 456.6 25.8 Q 469.6 31.5 482.6 32.0 Q 495.7 32.5 508.7 33.9 Q 521.7 35.2 534.8 27.9 Q 547.8 20.6 560.8 20.9 Q 573.9 21.1 587.0 18.2 Q 600.0 15.3 613.0 20.4 Q 626.1 25.5 639.2 22.1 Q 652.2 18.7 665.2 18.5 Q 678.3 18.3 691.3 19.9 Q 704.3 21.4 717.3 26.1 Q 730.4 30.8 743.5 26.8 Q 756.5 22.8 769.5 26.1 Q 782.6 29.4 795.7 27.1 Q 808.7 24.8 821.8 25.1 Q 834.8 25.5 847.8 25.5 Q 860.9 25.5 874.0 26.1 Q 887.0 26.6 900.0 22.8 Q 913.0 18.9 926.0 22.1 Q 939.1 25.4 952.2 24.2 Q 965.2 23.0 978.2 25.1 Q 991.3 27.2 1004.3 24.9 Q 1017.4 22.6 1030.5 22.1 Q 1043.5 21.5 1056.5 23.3 Q 1069.6 25.1 1082.7 30.2 Q 1095.7 35.3 1108.7 28.4 Q 1121.7 21.6 1134.8 22.5 Q 1147.8 23.3 1160.8 26.1 Q 1173.9 28.8 1187.0 26.1 L 1200 23.4 L 1200 44 Z",
  c: "M0 44 L0 21.0 Q 0.0 21.0 13.1 22.9 Q 26.1 24.9 39.2 23.9 Q 52.2 22.9 65.2 19.4 Q 78.3 15.8 91.3 20.2 Q 104.3 24.7 117.3 25.8 Q 130.4 26.9 143.4 25.9 Q 156.5 25.0 169.6 27.4 Q 182.6 29.7 195.6 32.9 Q 208.7 36.0 221.8 35.8 Q 234.8 35.5 247.8 33.0 Q 260.9 30.5 273.9 27.7 Q 287.0 24.9 300.0 20.8 Q 313.0 16.6 326.1 18.6 Q 339.1 20.5 352.1 19.0 Q 365.2 17.5 378.2 20.2 Q 391.3 22.9 404.4 27.2 Q 417.4 31.6 430.4 27.4 Q 443.5 23.1 456.6 25.0 Q 469.6 26.9 482.6 30.4 Q 495.7 34.0 508.7 31.9 Q 521.7 29.7 534.8 28.4 Q 547.8 27.1 560.8 23.1 Q 573.9 19.0 587.0 19.6 Q 600.0 20.3 613.0 16.9 Q 626.1 13.4 639.2 13.8 Q 652.2 14.1 665.2 19.9 Q 678.3 25.6 691.3 22.2 Q 704.3 18.9 717.3 22.0 Q 730.4 25.2 743.5 24.4 Q 756.5 23.7 769.5 30.5 Q 782.6 37.4 795.7 31.2 Q 808.7 25.0 821.8 26.4 Q 834.8 27.7 847.8 30.5 Q 860.9 33.2 874.0 30.1 Q 887.0 27.0 900.0 24.9 Q 913.0 22.8 926.0 25.7 Q 939.1 28.6 952.2 21.4 Q 965.2 14.1 978.2 21.4 Q 991.3 28.7 1004.3 26.0 Q 1017.4 23.4 1030.5 26.0 Q 1043.5 28.6 1056.5 25.8 Q 1069.6 22.9 1082.7 29.6 Q 1095.7 36.3 1108.7 32.2 Q 1121.7 28.2 1134.8 29.4 Q 1147.8 30.6 1160.8 33.5 Q 1173.9 36.4 1187.0 34.6 L 1200 32.9 L 1200 44 Z",
};

/**
 * A hand-torn paper edge that sits at the top of a section and overlaps the
 * one above it. `color` should be the section's own background colour.
 */
export function TornEdge({
  color,
  variant = "a",
  className = "",
}: {
  color: string;
  variant?: "a" | "b" | "c";
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-x-0 top-0 z-[2] -translate-y-[98%] hidden ${className}`}
    >
      <svg
        viewBox="0 0 1200 44"
        preserveAspectRatio="none"
        className="block h-6 w-full md:h-10"
      >
        <path d={TORN[variant]} fill={color} />
      </svg>
    </div>
  );
}

/**
 * A smooth, gentle wave that sits at the top of a section and laps up over the
 * one above it — softening an otherwise hard edge. `color` should be the
 * section's own background colour (use its darker, top-vignette tone so it
 * blends into the section body). Mirror of the wavy divider used lower down.
 */
export function WaveEdge({
  color,
  className = "",
}: {
  color: string;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={`hidden pointer-events-none absolute inset-x-0 top-0 z-[2] -translate-y-[98%] ${className}`}
    >
      <svg
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        className="block h-9 w-full md:h-14"
      >
        <path
          d="M0 60 L0 34 C 110 34 165 12 285 16 C 405 20 470 44 600 40 C 725 36 805 10 945 16 C 1065 21 1120 40 1200 33 L1200 60 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}

/** A delicate botanical branch — leaves on a curving stem with two berries. */
export function Sprig({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 170 80"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <defs>
        <g id="dk-leaf">
          <path
            d="M0 0 C 7 -5.5 17 -5 23 0 C 17 5 7 5.5 0 0 Z"
            fill="currentColor"
            fillOpacity="0.12"
          />
          <path d="M0 0 L 20 0" strokeWidth="1.1" />
        </g>
      </defs>
      <path d="M8 66 C 46 60 92 36 162 10" />
      <use href="#dk-leaf" transform="translate(30,57) rotate(-58)" />
      <use href="#dk-leaf" transform="translate(46,50) rotate(22) scale(0.95)" />
      <use href="#dk-leaf" transform="translate(66,42) rotate(-54) scale(1.02)" />
      <use href="#dk-leaf" transform="translate(86,33) rotate(20) scale(0.92)" />
      <use href="#dk-leaf" transform="translate(108,24) rotate(-50) scale(0.98)" />
      <use href="#dk-leaf" transform="translate(128,17) rotate(18) scale(0.85)" />
      <use href="#dk-leaf" transform="translate(150,10) rotate(-40) scale(0.8)" />
      <circle cx="40" cy="60" r="2.4" fill="#c08457" stroke="none" />
      <circle cx="60" cy="50" r="2.1" fill="#c08457" stroke="none" />
    </svg>
  );
}

/** A short hand-drawn underline flourish, centred under a heading. */
export function Flourish({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 140 14"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden
    >
      <path d="M3 8 C 26 2, 46 12, 70 7 C 94 2, 114 11, 137 6" />
      <path d="M64 11.5 C 68 10, 72 10, 76 11.5" strokeWidth="1.6" />
    </svg>
  );
}
