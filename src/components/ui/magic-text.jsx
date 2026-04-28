"use client" 

import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { useRef } from "react";
 
const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  const isJoyzen = children.toLowerCase().includes("joyzen");
 
  return (
    <span className={`relative mr-2 text-xl md:text-3xl font-medium inline-block my-1 ${isJoyzen ? 'text-[#E67E22]' : ''}`}>
      <span className="absolute opacity-10">{children}</span>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  );
};
 
export const MagicText = ({ text }) => {
  const container = useRef(null);
 
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "end 0.5"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const words = text.split(" ");
 
  return (
    <div ref={container} className="flex flex-wrap leading-[1.1] p-4 justify-center max-w-6xl mx-auto">
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
 
        return (
          <Word key={i} progress={smoothProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </div>
  );
};
