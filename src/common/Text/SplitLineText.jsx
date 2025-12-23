"use client";

import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const defaultAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const SplitLineText = ({
  text,
  Wrapper = "p",
  className,
  repeatDelay = 0,
  once = false,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  // console.log(text.split(""))

  // Split text into words to prevent letter breaking
  const words = text.split(" ");

  return (
    <Wrapper className={className} ref={ref}>
      <motion.span
        variants={{
          visible: { transition: { staggerChildren: repeatDelay } },
          hidden: {},
        }}
        initial="hidden"
        animate={controls} // Use animation controls
        aria-hidden
        style={{ display: "inline-block", wordBreak: "break-word" }}
      >
        {words.map((word, wordIndex) => (
          <span
            key={`word-${wordIndex}`}
            style={{ whiteSpace: "nowrap", display: "inline-block" }}
          >
            {word.split("").map((char, charIndex) => (
              <motion.span
                variants={defaultAnimation}
                key={`${char}-${wordIndex}-${charIndex}`}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
            {wordIndex < words.length - 1 && (
              <span className="inline-block" style={{ width: "0.25em" }}>
                {" "}
              </span>
            )}
          </span>
        ))}
      </motion.span>
    </Wrapper>
  );
};

export default SplitLineText;
