"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  swayAmp: number;
  swayFreq: number;
  swayPhase: number;
  rotation: number;
  rotSpeed: number;
  alpha: number;
  petalColor: string;
  centerColor: string;
}

const PETAL_COLORS = [
  "rgba(230, 155, 185, 0.88)",
  "rgba(245, 185, 210, 0.84)",
  "rgba(210, 120, 158, 0.82)",
  "rgba(238, 170, 200, 0.80)",
];
const CENTER_COLORS = ["#F7CC42", "#EDAB00", "#F5B830", "#E8C040"];

function drawDaisy(
  ctx: CanvasRenderingContext2D,
  x: number, y: number,
  size: number, rotation: number,
  petalColor: string, centerColor: string,
  alpha: number,
) {
  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.translate(x, y);
  ctx.rotate(rotation);

  ctx.fillStyle = petalColor;
  for (let i = 0; i < 8; i++) {
    ctx.save();
    ctx.rotate((i * Math.PI * 2) / 8);
    ctx.beginPath();
    ctx.ellipse(0, -(size * 0.34), size * 0.12, size * 0.28, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  ctx.fillStyle = centerColor;
  ctx.beginPath();
  ctx.arc(0, 0, size * 0.17, 0, Math.PI * 2);
  ctx.fill();

  ctx.restore();
}

function makeParticle(w: number, h: number, fromTop: boolean): Particle {
  const ci = Math.floor(Math.random() * PETAL_COLORS.length);
  return {
    x: Math.random() * w,
    y: fromTop ? -(Math.random() * 80 + 10) : Math.random() * h,
    size: 13 + Math.random() * 22,
    speedY: 0.6 + Math.random() * 1.5,
    swayAmp: 20 + Math.random() * 35,
    swayFreq: 0.007 + Math.random() * 0.007,
    swayPhase: Math.random() * Math.PI * 2,
    rotation: Math.random() * Math.PI * 2,
    rotSpeed: (Math.random() - 0.5) * 0.04,
    alpha: 0.55 + Math.random() * 0.35,
    petalColor: PETAL_COLORS[ci],
    centerColor: CENTER_COLORS[ci],
  };
}

export default function FallingFlowers() {
  const pathname = usePathname();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (pathname.startsWith("/studio")) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const count = window.innerWidth < 768 ? 14 : 22;
    const particles: Particle[] = Array.from({ length: count }, () =>
      makeParticle(canvas.width, canvas.height, false),
    );

    let rafId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particles) {
        p.y += p.speedY;
        p.x += Math.sin(p.y * p.swayFreq + p.swayPhase) * (p.swayAmp * 0.04);
        p.rotation += p.rotSpeed;

        if (p.y > canvas.height + 60) {
          Object.assign(p, makeParticle(canvas.width, canvas.height, true));
        }

        drawDaisy(ctx, p.x, p.y, p.size, p.rotation, p.petalColor, p.centerColor, p.alpha);
      }

      rafId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
    };
  }, [pathname]);

  if (pathname.startsWith("/studio")) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 3 }}
      aria-hidden="true"
    />
  );
}
