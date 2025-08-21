"use client";

import { useTheme } from "next-themes";
import { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import type { Engine, ISourceOptions } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

/** Full-page, screenshot-style starfield (dense dots + soft glows) */
export default function Starfield() {
  const { theme, systemTheme } = useTheme();
  const current = theme === "system" ? systemTheme : theme;

  // Respect reduced motion
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const init = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const COLOR = current === "dark" ? "#EDEDED" : "#64748B"; 

  const options: ISourceOptions = {
    fpsLimit: 60,
    fullScreen: { enable: false },
    detectRetina: true,
    background: { color: "transparent" },
    particles: {
      number: { value: 1080, density: { enable: true, area: 1080 } }, 
      shape: { type: "star" },
      color: { value: COLOR },
      size: { value: { min: 1.0, max: 2.4 } },
      opacity: {
        value: { min: 0.35, max: 0.85 },
        animation: { enable: true, speed: 0.5, minimumValue: 0.35, sync: false },
      },
      move: { enable: !reduced, speed: 0.2, outModes: { default: "out" } }, 
      links: { enable: false },
      twinkle: { particles: { enable: true, frequency: 0.10, opacity: 0.9 } },
    },
    interactivity: { events: { resize: true } },
  };

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <div className="
        absolute inset-0
        bg-[radial-gradient(900px_520px_at_78%_35%,rgba(59,130,246,0.25),transparent_60%)]
        dark:bg-[radial-gradient(1000px_560px_at_78%_35%,rgba(59,130,246,0.32),transparent_60%)]
      " />
      {/* faint bottom vignette */}
      <div className="
        absolute inset-0
        bg-[radial-gradient(1400px_900px_at_50%_120%,rgba(0,0,0,0.22),transparent_60%)]
        dark:bg-[radial-gradient(1400px_900px_at_50%_120%,rgba(0,0,0,0.40),transparent_60%)]
      " />
      <Particles id="starfield" init={init} options={options} />
    </div>
  );
}
