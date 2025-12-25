import React from "react";

type Star = {
  delay: string;
  duration: string;
  scale: number;
  x0: string;
  y0: string;
  x1: string;
  y1: string;
};

const STARS = [
  /* ===== 0s ===== */
  { delay: "0s", duration: "12s", scale: 1.0,  x0: "-30vw", y0: "-20vh", x1: "130vw", y1: "140vh" },
  { delay: "0s", duration: "12s", scale: 0.95, x0: "-40vw", y0: "10vh",  x1: "120vw", y1: "170vh" },
  { delay: "0s", duration: "12s", scale: 1.05, x0: "-25vw", y0: "30vh",  x1: "135vw", y1: "195vh" },

  /* ===== 2s ===== */
  { delay: "2s", duration: "12s", scale: 1.0,  x0: "-35vw", y0: "-15vh", x1: "128vw", y1: "155vh" },
  { delay: "2s", duration: "12s", scale: 0.92, x0: "-45vw", y0: "15vh",  x1: "118vw", y1: "180vh" },
  { delay: "2s", duration: "12s", scale: 1.08, x0: "-20vw", y0: "45vh",  x1: "140vw", y1: "210vh" },
  { delay: "2s", duration: "12s", scale: 0.9,  x0: "-50vw", y0: "60vh",  x1: "110vw", y1: "230vh" },

  /* ===== 4s ===== */
  { delay: "4s", duration: "12s", scale: 0.95, x0: "-32vw", y0: "-18vh", x1: "130vw", y1: "160vh" },
  { delay: "4s", duration: "12s", scale: 1.02, x0: "-42vw", y0: "20vh",  x1: "120vw", y1: "185vh" },
  { delay: "4s", duration: "12s", scale: 0.9,  x0: "-55vw", y0: "50vh",  x1: "112vw", y1: "215vh" },

  /* ===== 6s ===== */
  { delay: "6s", duration: "12s", scale: 1.0,  x0: "-30vw", y0: "-25vh", x1: "130vw", y1: "150vh" },
  { delay: "6s", duration: "12s", scale: 0.95, x0: "-45vw", y0: "5vh",   x1: "120vw", y1: "175vh" },
  { delay: "6s", duration: "12s", scale: 1.1,  x0: "-20vw", y0: "35vh",  x1: "140vw", y1: "205vh" },
  { delay: "6s", duration: "12s", scale: 0.9,  x0: "-55vw", y0: "55vh",  x1: "105vw", y1: "225vh" },

  /* ===== 8s ===== */
  { delay: "8s", duration: "12s", scale: 1.0,  x0: "-34vw", y0: "-18vh", x1: "132vw", y1: "165vh" },
  { delay: "8s", duration: "12s", scale: 0.93, x0: "-48vw", y0: "18vh",  x1: "118vw", y1: "190vh" },
  { delay: "8s", duration: "12s", scale: 1.05, x0: "-22vw", y0: "48vh",  x1: "142vw", y1: "220vh" },

  /* ===== 10s ===== */
  { delay: "10s", duration: "12s", scale: 1.0,  x0: "-35vw", y0: "-15vh", x1: "130vw", y1: "160vh" },
  { delay: "10s", duration: "12s", scale: 0.93, x0: "-48vw", y0: "20vh",  x1: "115vw", y1: "185vh" },
  { delay: "10s", duration: "12s", scale: 1.06, x0: "-22vw", y0: "50vh",  x1: "140vw", y1: "215vh" },

  /* ===== 12s ===== */
  { delay: "12s", duration: "12s", scale: 0.95, x0: "-30vw", y0: "-20vh", x1: "130vw", y1: "150vh" },
  { delay: "12s", duration: "12s", scale: 1.02, x0: "-44vw", y0: "12vh",  x1: "120vw", y1: "175vh" },
  { delay: "12s", duration: "12s", scale: 0.9,  x0: "-52vw", y0: "40vh",  x1: "110vw", y1: "205vh" },

  /* ===== 14s ===== */
  { delay: "14s", duration: "12s", scale: 1.0,  x0: "-33vw", y0: "-18vh", x1: "132vw", y1: "165vh" },
  { delay: "14s", duration: "12s", scale: 0.94, x0: "-46vw", y0: "18vh",  x1: "116vw", y1: "190vh" },
  { delay: "14s", duration: "12s", scale: 1.05, x0: "-24vw", y0: "48vh",  x1: "142vw", y1: "220vh" },

  /* ===== 16s ===== */
  { delay: "16s", duration: "12s", scale: 1.0,  x0: "-36vw", y0: "-20vh", x1: "134vw", y1: "170vh" },
  { delay: "16s", duration: "12s", scale: 0.92, x0: "-48vw", y0: "22vh",  x1: "118vw", y1: "195vh" },
  { delay: "16s", duration: "12s", scale: 1.06, x0: "-26vw", y0: "52vh",  x1: "146vw", y1: "225vh" },

  /* ===== 18s ===== */
  { delay: "18s", duration: "12s", scale: 0.96, x0: "-30vw", y0: "-22vh", x1: "130vw", y1: "155vh" },
  { delay: "18s", duration: "12s", scale: 1.0,  x0: "-44vw", y0: "8vh",   x1: "120vw", y1: "180vh" },
  { delay: "18s", duration: "12s", scale: 1.1,  x0: "-18vw", y0: "38vh",  x1: "142vw", y1: "210vh" },

  /* ===== 20s ===== */
  { delay: "20s", duration: "12s", scale: 1.0,  x0: "-34vw", y0: "-18vh", x1: "132vw", y1: "165vh" },
  { delay: "20s", duration: "12s", scale: 0.94, x0: "-46vw", y0: "22vh",  x1: "116vw", y1: "190vh" },
  { delay: "20s", duration: "12s", scale: 1.05, x0: "-24vw", y0: "52vh",  x1: "142vw", y1: "220vh" },

  /* ===== 22s ===== */
  { delay: "22s", duration: "12s", scale: 1.0,  x0: "-36vw", y0: "-20vh", x1: "134vw", y1: "170vh" },
  { delay: "22s", duration: "12s", scale: 0.92, x0: "-48vw", y0: "24vh",  x1: "118vw", y1: "195vh" },
  { delay: "22s", duration: "12s", scale: 1.06, x0: "-26vw", y0: "54vh",  x1: "146vw", y1: "225vh" },

  /* ===== 24s ===== */
  { delay: "24s", duration: "12s", scale: 0.95, x0: "-30vw", y0: "-22vh", x1: "130vw", y1: "155vh" },
  { delay: "24s", duration: "12s", scale: 1.0,  x0: "-44vw", y0: "10vh",  x1: "120vw", y1: "180vh" },
  { delay: "24s", duration: "12s", scale: 1.1,  x0: "-18vw", y0: "40vh",  x1: "142vw", y1: "210vh" },

  /* ===== 26s ===== */
  { delay: "26s", duration: "12s", scale: 1.0,  x0: "-34vw", y0: "-18vh", x1: "132vw", y1: "165vh" },
  { delay: "26s", duration: "12s", scale: 0.94, x0: "-46vw", y0: "22vh",  x1: "116vw", y1: "190vh" },
  { delay: "26s", duration: "12s", scale: 1.05, x0: "-24vw", y0: "52vh",  x1: "142vw", y1: "220vh" },

  /* ===== 28s ===== */
  { delay: "28s", duration: "12s", scale: 1.0,  x0: "-36vw", y0: "-20vh", x1: "134vw", y1: "170vh" },
  { delay: "28s", duration: "12s", scale: 0.92, x0: "-48vw", y0: "24vh",  x1: "118vw", y1: "195vh" },
  { delay: "28s", duration: "12s", scale: 1.06, x0: "-26vw", y0: "54vh",  x1: "146vw", y1: "225vh" },

  /* ===== 30s ===== */
  { delay: "30s", duration: "12s", scale: 0.95, x0: "-30vw", y0: "-22vh", x1: "130vw", y1: "155vh" },
  { delay: "30s", duration: "12s", scale: 1.0,  x0: "-44vw", y0: "10vh",  x1: "120vw", y1: "180vh" },
  { delay: "30s", duration: "12s", scale: 1.1,  x0: "-18vw", y0: "40vh",  x1: "142vw", y1: "210vh" },

  /* ===== 32s ===== */
  { delay: "32s", duration: "12s", scale: 1.0,  x0: "-34vw", y0: "-18vh", x1: "132vw", y1: "165vh" },
  { delay: "32s", duration: "12s", scale: 0.94, x0: "-46vw", y0: "22vh",  x1: "116vw", y1: "190vh" },
  { delay: "32s", duration: "12s", scale: 1.05, x0: "-24vw", y0: "52vh",  x1: "142vw", y1: "220vh" },
];


export default function ShootingStars() {
  return (
    <div className="shooting-stars" aria-hidden="true">
      {STARS.map((s, i) => (
        <span
          key={i}
          className="shooting-star"
          style={
            {
              ["--delay" as any]: s.delay,
              ["--duration" as any]: s.duration,
              ["--scale" as any]: s.scale,
              ["--x0" as any]: s.x0,
              ["--y0" as any]: s.y0,
              ["--x1" as any]: s.x1,
              ["--y1" as any]: s.y1,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
