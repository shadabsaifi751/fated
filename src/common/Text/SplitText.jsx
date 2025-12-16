"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useMemo, useRef } from "react";

const SplitText = ({
  text = "",
  className = "",
  delay = 0.05,
  animationFrom = { opacity: 0, y: 40 },
  animationTo = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = "-100px",
  textAlign = "center",
  onLetterAnimationComplete,
}) => {
  const controls = useAnimation();
  const ref = useRef();

  // Split text and memoize it to avoid unnecessary recalculations
  const letters = useMemo(() => text.split(""), [text]);

  // Memoize letter variants for smoother rendering
  const letterVariants = useMemo(
    () => ({
      hidden: animationFrom,
      visible: (index) => ({
        ...animationTo,
        transition: {
          delay: index * delay,
          duration: 0.4,
        },
      }),
    }),
    [animationFrom, animationTo, delay]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        } else {
          controls.start("hidden"); // Reset animation when out of view
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [controls, threshold, rootMargin]);

  return (
    <p
      ref={ref}
      className={`split-parent overflow-hidden inline ${className}`}
      style={{ textAlign }}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          custom={index}
          initial="hidden"
          animate={controls}
          variants={letterVariants}
          className="inline-block transform will-change-transform"
          onAnimationComplete={() => {
            if (index === letters.length - 1 && onLetterAnimationComplete) {
              onLetterAnimationComplete();
            }
          }}
        >
          {letter === " " ? " " : letter}
        </motion.span>
      ))}
    </p>
  );
};

export default SplitText;
