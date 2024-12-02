"use client";

import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  // Utiliser scrollYProgress pour contrôler le scale uniquement si l'élément est visible
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.5, 0.8], [0.8, 1, 1.4]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: isInView ? scale : 1, // Applique le scale uniquement si l'élément est visible
        transition: "transform 0.2s ease-out",
        overflow: "hidden",
      }}
      className="w-full h-[100vh] flex items-center justify-center relative "
    >
      <h1 className="absolute transform text-8xl clashFont">
        Fait par <strong>laLanding</strong>
      </h1>
      <div className="flex gap-2 backgroundOpacity">
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
    </motion.div>
  );
}
