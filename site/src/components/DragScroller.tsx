"use client";

import { useRef, useState, type ReactNode } from "react";

/**
 * Horizontal scroller you can click-and-drag with the mouse (grab / grabbing
 * cursor). Touch devices keep their native swipe scrolling untouched. A drag
 * that actually moved swallows the trailing click so cards don't fire links.
 */
export default function DragScroller({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const drag = useRef({ down: false, startX: 0, startScroll: 0, moved: false });
  const [dragging, setDragging] = useState(false);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const el = ref.current;
    if (!el) return;
    drag.current = {
      down: true,
      startX: e.clientX,
      startScroll: el.scrollLeft,
      moved: false,
    };
    setDragging(true);
    el.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || !drag.current.down) return;
    const dx = e.clientX - drag.current.startX;
    if (Math.abs(dx) > 3) drag.current.moved = true;
    el.scrollLeft = drag.current.startScroll - dx;
  };

  const end = () => {
    drag.current.down = false;
    setDragging(false);
  };

  const onClickCapture = (e: React.MouseEvent) => {
    if (drag.current.moved) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <div
      ref={ref}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={end}
      onPointerCancel={end}
      onClickCapture={onClickCapture}
      onDragStart={(e) => e.preventDefault()}
      className={`${className} select-none [&_img]:pointer-events-none ${
        dragging ? "cursor-grabbing" : "cursor-grab"
      }`}
      style={{
        scrollbarWidth: "none",
        // Direct scrollLeft writes must be instant — the global
        // `html { scroll-behavior: smooth }` would otherwise animate every
        // frame of the drag and make it jerky.
        scrollBehavior: "auto",
        // Snap fights the pointer while dragging; re-enabled on release so
        // the cards still settle to centre.
        scrollSnapType: dragging ? "none" : undefined,
      }}
    >
      {children}
    </div>
  );
}
