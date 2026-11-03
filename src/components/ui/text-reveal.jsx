
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { cn } from "../../lib/utils";

export const TextReveal = ({ children, className }) => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.8", "end 0.2"],
  });

  if (typeof children !== "string") {
    throw new Error("TextReveal: children must be a string");
  }

  const words = children.split(" ");

  return (
    <div
      ref={sectionRef}
      className={cn("relative z-0 h-[150vh]", className)}
    >
      <div className="sticky top-0 mx-auto flex min-h-[50vh] max-w-4xl items-center bg-transparent px-4 py-20">
        <span className="flex flex-wrap p-5 text-2xl font-bold text-amber-400/25 md:p-8 md:text-3xl lg:p-10 lg:text-4xl xl:text-5xl">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;

            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </span>
      </div>
    </div>
  );
};

const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="relative mx-1 lg:mx-1.5">
      <span className="absolute text-amber-400/25">{children}</span>
      <motion.span
        style={{ opacity }}
        className="text-amber-400"
      >
        {children}
      </motion.span>
    </span>
  );
};
