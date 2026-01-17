import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const PromiseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-32 px-4 relative overflow-hidden" id="promise">
      {/* Sunset gradient background */}
      <div className="absolute inset-0 bg-sunset opacity-50" />
      
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/60" />

      <div className="max-w-3xl mx-auto relative">
        <motion.div
          ref={ref}
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          {/* Ring icon */}
          <motion.div
            className="inline-block mb-8"
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ delay: 0.3, type: "spring", stiffness: 150 }}
          >
            <div className="text-6xl md:text-7xl">💍</div>
          </motion.div>

          {/* Title */}
          <motion.h2
            className="font-romantic text-4xl md:text-6xl text-gradient-romantic mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            My Promise to You
          </motion.h2>

          {/* Promise text */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <p className="font-elegant text-lg md:text-xl text-foreground/90 leading-relaxed italic">
              This is just the beginning of our forever.
            </p>
            <p className="font-elegant text-lg md:text-xl text-foreground/90 leading-relaxed italic">
              No matter where life takes us, my hand will always be in yours.
            </p>
            <p className="font-elegant text-lg md:text-xl text-foreground/90 leading-relaxed italic">
              I promise to love you through every sunrise and sunset,
              through every storm and rainbow, through every challenge and triumph.
            </p>
            <p className="font-elegant text-lg md:text-xl text-foreground/90 leading-relaxed italic">
              You are my today, my tomorrow, and all my days to come.
            </p>
          </motion.div>

          {/* Decorative hearts */}
          <motion.div
            className="mt-12 flex justify-center gap-4"
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 1, type: "spring" }}
          >
            <motion.span
              className="text-3xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0 }}
            >
              💕
            </motion.span>
            <motion.span
              className="text-3xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
            >
              💖
            </motion.span>
            <motion.span
              className="text-3xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
            >
              💗
            </motion.span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PromiseSection;
