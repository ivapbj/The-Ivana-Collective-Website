import { useEffect, useRef, useState, type CSSProperties } from "react";
import "./CinematicBinaryIntro.css";

type Particle = { id: number; startX: number; startY: number; endX: number; endY: number; digit: string };

const projects = [
  { name: "LaBoy Properties", src: "/images/portfolio/laboy-properties.webp", position: "center 44%" },
  { name: "Foreclosure Buy Homes", src: "/images/portfolio/foreclosure-buy-homes.webp", position: "center 38%" },
  { name: "Legacy Economic Development", src: "/images/agency-economic-mockup.png", position: "center 42%" },
  { name: "Posh Body Wellness Spa", src: "/images/posh-body-wellness-mockup.png", position: "center 35%" },
  { name: "Dr. Sheds", src: "/images/drsheds-mockup.png", position: "center 48%" },
];
const SESSION_KEY = "tic-cinematic-binary-intro-seen";

export default function CinematicBinaryIntro({ onComplete }: { onComplete: () => void }) {
  const [visible, setVisible] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [forming, setForming] = useState(false);
  const onCompleteRef = useRef(onComplete);
  const finishedRef = useRef(false);

  useEffect(() => { onCompleteRef.current = onComplete; }, [onComplete]);

  useEffect(() => {
    let timer = 0;
    let formTimer = 0;
    let dismissTimer = 0;
    let active = false;
    const finish = () => {
      if (!active || finishedRef.current) return;
      finishedRef.current = true;
      active = false;
      window.clearTimeout(timer);
      window.clearTimeout(formTimer);
      window.clearTimeout(dismissTimer);
      setVisible(false);
      onCompleteRef.current();
    };

    try {
      if (sessionStorage.getItem(SESSION_KEY) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      // If session storage is unavailable, still show the intro once for this mount.
    }

    active = true;
    setVisible(true);
    formTimer = window.setTimeout(() => {
      const target = document.getElementById("home-grow-word");
      if (!target) return;
      const rect = target.getBoundingClientRect();
      const style = getComputedStyle(target);
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      if (!context) return;
      context.font = style.font;
      const width = Math.max(120, Math.ceil(context.measureText("grow").width));
      const height = Math.max(55, Math.ceil(rect.height));
      canvas.width = width;
      canvas.height = height;
      context.font = style.font;
      context.textBaseline = "middle";
      context.fillStyle = "#fff";
      context.fillText("grow", 0, height / 2);
      const pixels = context.getImageData(0, 0, width, height).data;
      const points: Array<[number, number]> = [];
      const step = window.innerWidth < 640 ? 5 : 4;
      for (let y = 0; y < height; y += step) for (let x = 0; x < width; x += step) {
        if (pixels[(y * width + x) * 4 + 3] > 100) points.push([x, y]);
      }
      const count = Math.min(90, points.length);
      const selected = points.length <= count ? points : Array.from({ length: count }, (_, i) => points[Math.floor(i * points.length / count)]);
      setParticles(selected.map(([x, y], id) => ({
        id,
        startX: window.innerWidth * (0.16 + Math.random() * 0.68),
        startY: window.innerHeight * (0.55 + Math.random() * 0.35),
        endX: rect.left + x * rect.width / width,
        endY: rect.top + y * rect.height / height,
        digit: Math.random() > 0.5 ? "1" : "0",
      })));
      requestAnimationFrame(() => setForming(true));
    }, 3050);
    timer = window.setTimeout(finish, 5000);

    const handleClick = (event: MouseEvent) => {
      if (!active) return;
      const target = event.target instanceof Element ? event.target : null;
      if (target?.closest("[data-binary-intro-cta]")) {
        finish();
        return;
      }
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      finish();
    };
    document.addEventListener("click", handleClick, true);

    return () => {
      active = false;
      window.clearTimeout(timer);
      window.clearTimeout(formTimer);
      window.clearTimeout(dismissTimer);
      document.removeEventListener("click", handleClick, true);
    };
  }, []);

  if (!visible) return null;
  return <div className="binary-intro" aria-hidden="true">
    <div className="binary-intro__streams">{Array.from({ length: 9 }, (_, column) => <span className="binary-intro__stream" key={column} style={{ left: `${5 + column * 11.5}%`, animationDelay: `${(column % 4) * -0.7}s`, animationDuration: `${2.8 + (column % 3) * 0.45}s` }}>{Array.from({ length: 13 }, (_, digit) => <i key={digit}>{(column + digit) % 2 ? "1" : "0"}</i>)}</span>)}</div>
    <div className="binary-intro__projects">{projects.map((project, index) => <figure className="binary-intro__project" key={project.name} style={{ left: `${index % 2 ? 56 : 8 + index * 5}%`, animationDelay: `${index * 0.36}s`, animationDuration: "4.25s" }}>
      <img src={project.src} alt="" style={{ objectPosition: project.position }} fetchPriority="high" />
      <figcaption>{project.name}</figcaption>
    </figure>)}</div>
    <div className={`binary-intro__particles${forming ? " is-forming" : ""}`}>{particles.map(particle => <span key={particle.id} style={{ left: particle.startX, top: particle.startY, "--end-x": `${particle.endX}px`, "--end-y": `${particle.endY}px` } as CSSProperties}>{particle.digit}</span>)}</div>
    <p className="binary-intro__hint">Click or tap anywhere to continue</p>
  </div>;
}
