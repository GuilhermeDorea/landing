import { useEffect, useRef, useState } from 'react';

// Potential flow around a Joukowski airfoil: a circle in the zeta-plane, mapped by z = zeta + 1/zeta.
// ponytail: toy inviscid model (no viscosity, no stall); swap for precomputed RANS fields if it ever needs to be physical.
const MX = -0.1;
const MY = 0.1;
const A = Math.hypot(1 - MX, MY);
const BETA = Math.asin(MY / A);
const rad = (deg) => (deg * Math.PI) / 180;

const liftCoefficient = (deg) => 2 * Math.PI * Math.sin(rad(deg) + BETA);

const toZ = (x, y) => {
  const r = x * x + y * y;
  return [x + x / r, y - y / r];
};

// Returns d(zeta)/dt and the physical speed at a point of the zeta-plane.
function velocity(x, y, alpha) {
  const dx = x - MX;
  const dy = y - MY;
  const r2 = dx * dx + dy * dy;
  const ca = Math.cos(alpha);
  const sa = Math.sin(alpha);
  const g = 2 * A * Math.sin(alpha + BETA); // Kutta condition, Gamma / 2pi
  const k = (A * A) / (r2 * r2);
  const re = (dx * dx - dy * dy) * k;
  const im = -2 * dx * dy * k;
  const wr = ca - (ca * re - sa * im) + (g * dy) / r2;
  const wi = -sa - (sa * re + ca * im) + (g * dx) / r2;
  const z2 = (x * x + y * y) ** 2;
  const jr = 1 - (x * x - y * y) / z2;
  const ji = (2 * x * y) / z2;
  const j2 = Math.max(jr * jr + ji * ji, 0.04);
  return [wr / j2, -wi / j2, Math.hypot(wr, wi) / Math.sqrt(j2)];
}

const hexToRgb = (hex) => [1, 3, 5].map((i) => parseInt(hex.trim().slice(i, i + 2), 16));
const WHITE = [255, 255, 255];

// Slow flow takes the ground colour, free stream is white, fast flow the accent.
function colour(t, slow, fast) {
  t = Math.max(0, Math.min(1, t));
  const [a, b, k] = t < 0.5 ? [slow, WHITE, t * 2] : [WHITE, fast, t * 2 - 1];
  return `rgb(${a.map((v, i) => Math.round(v + (b[i] - v) * k)).join()})`;
}

export function FlowTunnel({ t }) {
  const canvas = useRef(null);
  const alpha = useRef(rad(5));
  const redraw = useRef(() => {});
  const [deg, setDeg] = useState(5);

  useEffect(() => {
    const cv = canvas.current;
    const ctx = cv.getContext('2d');
    const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const css = getComputedStyle(document.documentElement);
    const ground = hexToRgb(css.getPropertyValue('--y'));
    const accent = hexToRgb(css.getPropertyValue('--m'));
    let W, H, S, OX, OY, raf;
    let parts = [];

    const seed = () => ({ x: -OX / S - 0.3, y: (Math.random() - 0.5) * (H / S) * 1.6, age: 0 });

    function resize() {
      const d = Math.min(devicePixelRatio || 1, 2);
      W = cv.clientWidth;
      H = cv.clientHeight;
      cv.width = W * d;
      cv.height = H * d;
      ctx.setTransform(d, 0, 0, d, 0, 0);
      S = Math.min(W / 6.4, H / 3.4);
      OX = W / 2;
      OY = H / 2;
      ctx.fillStyle = '#0a0a0a';
      ctx.fillRect(0, 0, W, H);
      parts = Array.from({ length: Math.round((W * H) / 1400) }, seed);
      parts.forEach((p) => (p.x += Math.random() * (W / S + 0.6)));
      for (let i = 0; i < 160; i++) step();
    }

    function step() {
      ctx.fillStyle = 'rgba(10,10,10,.04)';
      ctx.fillRect(0, 0, W, H);
      ctx.lineWidth = 1.6;
      for (const p of parts) {
        const [u, v, speed] = velocity(p.x, p.y, alpha.current);
        const [x0, y0] = toZ(p.x, p.y);
        p.x += u * 0.012;
        p.y += v * 0.012;
        p.age++;
        const [x1, y1] = toZ(p.x, p.y);
        const inside = (p.x - MX) ** 2 + (p.y - MY) ** 2 < A * A * 1.01;
        if (inside || OX + x1 * S > W + 20 || p.age > 900) {
          Object.assign(p, seed());
          continue;
        }
        ctx.strokeStyle = colour((speed - 0.55) / 0.95, ground, accent);
        ctx.beginPath();
        ctx.moveTo(OX + x0 * S, OY - y0 * S);
        ctx.lineTo(OX + x1 * S, OY - y1 * S);
        ctx.stroke();
      }
      ctx.beginPath();
      for (let i = 0; i <= 120; i++) {
        const a = (i / 120) * 2 * Math.PI;
        const [zx, zy] = toZ(MX + A * Math.cos(a), MY + A * Math.sin(a));
        ctx.lineTo(OX + zx * S, OY - zy * S);
      }
      ctx.closePath();
      ctx.fillStyle = `rgb(${ground.join()})`;
      ctx.fill();
    }

    const loop = () => {
      step();
      raf = requestAnimationFrame(loop);
    };
    redraw.current = () => {
      if (still) for (let i = 0; i < 160; i++) step();
    };

    const sizes = new ResizeObserver(resize);
    sizes.observe(cv);
    // Only simulate while the canvas is on screen.
    const seen = new IntersectionObserver(([entry]) => {
      cancelAnimationFrame(raf);
      if (entry.isIntersecting && !still) loop();
    });
    seen.observe(cv);
    return () => {
      cancelAnimationFrame(raf);
      sizes.disconnect();
      seen.disconnect();
    };
  }, []);

  const onChange = (event) => {
    const value = Number(event.target.value);
    alpha.current = rad(value);
    setDeg(value);
    redraw.current();
  };

  return (
    <figure className="tunnel">
      <canvas ref={canvas} aria-hidden="true" />
      <figcaption>
        <label htmlFor="aoa">
          <span>{t.aoa}</span>
          <output>{deg.toFixed(1)}°</output>
        </label>
        <input id="aoa" type="range" min="-6" max="14" step="0.5" value={deg} onChange={onChange} />
        <div className="readout">
          <span>{t.cl}</span>
          <output htmlFor="aoa">{liftCoefficient(deg).toFixed(2)}</output>
        </div>
        <p>{t.note}</p>
      </figcaption>
    </figure>
  );
}
