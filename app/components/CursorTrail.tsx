"use client";

import { useEffect, useRef } from "react";

const TRAIL_LENGTH = 12;
const EASE = 0.25;

export default function CursorTrail() {
  const dotsRef = useRef<HTMLSpanElement[]>([]);
  const pointer = useRef({ x: 0, y: 0 });
  const positions = useRef(
    Array.from({ length: TRAIL_LENGTH }, () => ({ x: 0, y: 0 }))
  );

  useEffect(() => {
    const setInitial = () => {
      const x = window.innerWidth / 2;
      const y = window.innerHeight / 2;
      pointer.current.x = x;
      pointer.current.y = y;
      positions.current.forEach((pos) => {
        pos.x = x;
        pos.y = y;
      });
    };

    const updatePointer = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      pointer.current.x = event.clientX;
      pointer.current.y = event.clientY;
    };

    let frameId = 0;
    const animate = () => {
      let prevX = pointer.current.x;
      let prevY = pointer.current.y;

      positions.current.forEach((pos, index) => {
        pos.x += (prevX - pos.x) * EASE;
        pos.y += (prevY - pos.y) * EASE;

        const node = dotsRef.current[index];
        if (node) {
          const scale = (TRAIL_LENGTH - index) / TRAIL_LENGTH;
          node.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%) scale(${scale})`;
          node.style.opacity = `${Math.max(0.12, scale)}`;
        }

        prevX = pos.x;
        prevY = pos.y;
      });

      frameId = window.requestAnimationFrame(animate);
    };

    setInitial();
    frameId = window.requestAnimationFrame(animate);
    window.addEventListener("pointermove", updatePointer, { passive: true });
    window.addEventListener("resize", setInitial);

    return () => {
      window.removeEventListener("pointermove", updatePointer);
      window.removeEventListener("resize", setInitial);
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div className="cursor-trail" aria-hidden="true">
      {Array.from({ length: TRAIL_LENGTH }).map((_, index) => (
        <span
          key={`cursor-${index}`}
          className="cursor-dot"
          ref={(node) => {
            if (node) {
              dotsRef.current[index] = node;
            }
          }}
        />
      ))}
    </div>
  );
}
