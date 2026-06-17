"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const COLORS = [
  { petal: "rgba(230, 155, 185, 0.92)", center: "#F7CC42" },
  { petal: "rgba(245, 185, 210, 0.88)", center: "#EDAB00" },
  { petal: "rgba(210, 120, 158, 0.85)", center: "#F5B830" },
];

function DaisySVG({ petal, center }: { petal: string; center: string }) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
      {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
        <ellipse key={a} cx="50" cy="20" rx="9" ry="22" fill={petal} transform={`rotate(${a} 50 50)`} />
      ))}
      <circle cx="50" cy="50" r="15" fill={center} />
      <circle cx="50" cy="50" r="9"  fill={center} style={{ filter: "brightness(0.75)" }} />
    </svg>
  );
}

interface Flower {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  colorIdx: number;
  swayDuration: number;
  top?: number;
}

export default function FallingFlowers() {
  const pathname = usePathname();
  const [flowers, setFlowers] = useState<Flower[]>([]);

  useEffect(() => {
    if (pathname.startsWith("/studio")) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobile = window.innerWidth < 768;
    const count = mobile ? 9 : 16;

    setFlowers(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: (i * (98 / count) + (i % 3) * 2.8 + (i % 7) * 1.2) % 98,
        size: mobile ? 22 + (i % 4) * 7 : 28 + (i % 5) * 9,
        duration: reducedMotion ? 0 : 12 + (i % 7) * 1.9,
        delay: reducedMotion ? 0 : -(i * (20 / count)),
        opacity: 0.55 + (i % 5) * 0.08,
        colorIdx: i % COLORS.length,
        swayDuration: reducedMotion ? 0 : 2.5 + (i % 4) * 0.9,
        top: reducedMotion ? (i * (95 / count)) % 95 : undefined,
      }))
    );
  }, [pathname]);

  if (flowers.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 3 }} aria-hidden="true">
      {flowers.map((f) => (
        <div
          key={f.id}
          style={{
            position: "absolute",
            left: `${f.left}%`,
            ...(f.top !== undefined ? { top: `${f.top}%` } : {}),
            width: f.size,
            height: f.size,
            animation: f.duration > 0 ? `flowerFall ${f.duration}s ${f.delay}s linear infinite` : "none",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              opacity: f.opacity,
              animation: f.swayDuration > 0 ? `flowerSway ${f.swayDuration}s ease-in-out infinite alternate` : "none",
            }}
          >
            <DaisySVG {...COLORS[f.colorIdx]} />
          </div>
        </div>
      ))}
    </div>
  );
}
