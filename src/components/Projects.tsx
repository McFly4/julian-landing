"use client";

import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import useWindowDimensions from "@/hooks/responsive";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const { width } = useWindowDimensions();

  // Détecte si l'écran est au format mobile
  const isMobile = width && width < 768;

  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.5, 0.8], [0.8, 1, 1.4]);
  const scaleMobile = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5],
    [0.5, 0.8, 1],
  );

  return (
    <motion.div
      ref={ref}
      style={{
        scale: isInView ? (isMobile ? scaleMobile : scale) : 1,
        transition: "transform 0.2s ease-out",
        overflow: "hidden",
      }}
      className="w-full h-[100vh] flex items-center justify-center relative mt-[10vh] md:mt-[20vh] md:mb-[20vh]"
    >
      <h1 className="absolute transform text-center text-6xl md:text-8xl clashFont">
        Fait par <strong>laLanding</strong>
      </h1>

      {/* Version Desktop */}
      <div className="hidden md:flex gap-2 backgroundOpacity">
        <div className="flex flex-col gap-4">
          <img src="/realisations/1.svg" alt="1" />
          <img src="/realisations/2.svg" alt="2" />
        </div>
        <div className="flex flex-col gap-4">
          <img src="/realisations/3.svg" alt="3" />
          <img src="/realisations/4.svg" alt="4" />
          <img src="/realisations/5.svg" alt="5" />
        </div>
        <div className="flex flex-col gap-4">
          <img src="/realisations/6.svg" alt="6" />
          <img src="/realisations/7.svg" alt="7" />
        </div>
        <div className="flex flex-col gap-4">
          <img src="/realisations/8.svg" alt="8" />
          <img src="/realisations/9.svg" alt="9" />
        </div>
      </div>

      {/* Version Mobile */}
      <div className="flex md:hidden gap-2 backgroundOpacity">
        <div className="flex flex-col gap-4">
          <img src="/realisations/1.svg" alt="1" />
          <img src="/realisations/2.svg" alt="2" />
          <img src="/realisations/3.svg" alt="3" />
          <img src="/realisations/4.svg" alt="4" />
          <img src="/realisations/5.svg" alt="5" />
        </div>
        <div className="flex flex-col gap-4">
          <img src="/realisations/6.svg" alt="6" />
          <img src="/realisations/7.svg" alt="7" />
          <img src="/realisations/8.svg" alt="8" />
          <img src="/realisations/9.svg" alt="9" />
        </div>
      </div>
    </motion.div>
  );
}
