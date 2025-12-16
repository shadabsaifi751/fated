'use client';

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ChooseTopics from "@/components/ChooseTopics";
import ScrollEngage from "@/components/ScrollEngage";
import InterestAlign from "@/components/InterestAlign";
import FatedWork from "./FatedWork";

const StickyJourney = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  /**
   * Divide scroll into 4 clear "pages":
   * 0.00–0.25:  FatedWork
   * 0.25–0.50:  ChooseTopics
   * 0.50–0.75:  ScrollEngage
   * 0.75–1.00:  InterestAlign
   * Each section cross-fades with the next for a smooth step feel.
   */

  // Step 0: FatedWork
  const step0Opacity = useTransform(
    scrollYProgress,
    [0, 0.12, 0.22],
    [1, 1, 0]
  );

  // Step 1: ChooseTopics
  const step1Opacity = useTransform(
    scrollYProgress,
    [0.18, 0.28, 0.47],
    [0, 1, 0]
  );

  // Step 2: ScrollEngage
  const step2Opacity = useTransform(
    scrollYProgress,
    [0.43, 0.53, 0.72],
    [0, 1, 0]
  );

  // Step 3: InterestAlign
  const step3Opacity = useTransform(
    scrollYProgress,
    [0.68, 0.78, 1],
    [0, 1, 1]
  );

  return (
    <section
      ref={containerRef}
      className="relative h-[400vh] bg-white"
      aria-label="How Fated Works"
    >
      <div className="sticky top-0 h-screen flex items-center">
        <div className="relative w-full">
          {/* Slide 0 – FatedWork */}
          <motion.div
            style={{ opacity: step0Opacity }}
            className="absolute inset-0 flex items-center justify-center will-change-transform"
          >
            <FatedWork />
          </motion.div>

          {/* Slide 1 – ChooseTopics */}
          <motion.div
            style={{ opacity: step1Opacity }}
            className="absolute inset-0 flex items-center justify-center will-change-transform"
          >
            <ChooseTopics />
          </motion.div>

          {/* Slide 2 */}
          <motion.div
            style={{ opacity: step2Opacity }}
            className="absolute inset-0 flex items-center justify-center will-change-transform"
          >
            <ScrollEngage />
          </motion.div>

          {/* Slide 3 */}
          <motion.div
            style={{ opacity: step3Opacity }}
            className="absolute inset-0 flex items-center justify-center will-change-transform"
          >
            <InterestAlign />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StickyJourney;

