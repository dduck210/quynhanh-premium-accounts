"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const COLORS = [
  { petal: "rgba(255,255,255,0.94)", center: "#F7CC42" },
  { petal: "rgba(255,244,247,0.88)", center: "#EDAB00" },
  { petal: "rgba(255,253,240,0.85)", center: "#F5B830" },
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
}

export default function FallingFlowers() {
  const pathname = usePathname();
  const [flowers, setFlowers] = useState<Flower[]>([]);

  useEffect(() => {
    if (pathname.startsWith("/studio")) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const mobile = window.innerWidth < 768;
    const count = mobile ? 9 : 16;

    setFlowers(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: (i * (98 / count) + (i % 3) * 2.8 + (i % 7) * 1.2) % 98,
        size: mobile ? 22 + (i % 4) * 7 : 28 + (i % 5) * 9,
        duration: 12 + (i % 7) * 1.9,
        delay: -(i * (20 / count)),
        opacity: 0.38 + (i % 5) * 0.08,
        colorIdx: i % COLORS.length,
        swayDuration: 2.5 + (i % 4) * 0.9,
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
            width: f.size,
            height: f.size,
            animation: `flowerFall ${f.duration}s ${f.delay}s linear infinite`,
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              opacity: f.opacity,
              animation: `flowerSway ${f.swayDuration}s ease-in-out infinite alternate`,
            }}
          >
            <DaisySVG {...COLORS[f.colorIdx]} />
          </div>
        </div>
      ))}
    </div>
  );
}
