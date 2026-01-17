import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const RosePetals = () => {
  const petals = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 8 + Math.random() * 8,
    size: 20 + Math.random() * 20,
    rotation: Math.random() * 360,
    sway: (Math.random() - 0.5) * 200,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute"
          style={{
            left: `${petal.left}%`,
            top: "-50px",
            fontSize: petal.size,
          }}
          animate={{
            y: [0, window.innerHeight + 100],
            x: [0, petal.sway],
            rotate: [petal.rotation, petal.rotation + 720],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          🌹
        </motion.div>
      ))}
    </div>
  );
};

const FinalSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showPetals, setShowPetals] = useState(false);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setShowPetals(true), 500);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  return (
    <section className="min-h-screen py-20 md:py-32 px-4 relative flex items-center justify-center overflow-hidden" id="final">
      {/* Rose petals */}
      {showPetals && <RosePetals />}

      {/* Background with glow */}
      <div className="absolute inset-0 bg-romantic" />
      <motion.div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at center, hsl(350, 80%, 75% / 0.3) 0%, transparent 60%)",
        }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-4xl mx-auto relative z-20">
        <motion.div
          ref={ref}
          className="text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1 }}
        >
          {/* Big glowing text */}
          <motion.h1
            className="font-romantic text-5xl md:text-7xl lg:text-8xl mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            style={{
              textShadow: "0 0 30px hsl(350, 80%, 60% / 0.5), 0 0 60px hsl(350, 80%, 60% / 0.3)",
            }}
          >
            <span className="text-gradient-romantic">Happy Birthday,</span>
            <br />
            <span className="text-gradient-romantic">My Valentine</span>
            <motion.span
              className="inline-block ml-2"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              ❤️
            </motion.span>
          </motion.h1>

          {/* Hearts floating around text */}
          <motion.div
            className="absolute -top-10 left-1/4 text-4xl"
            animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            💕
          </motion.div>
          <motion.div
            className="absolute top-0 right-1/4 text-3xl"
            animate={{ y: [0, -15, 0], rotate: [0, -10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
          >
            💖
          </motion.div>

          {/* Final message */}
          <motion.p
            className="font-elegant text-xl md:text-2xl lg:text-3xl text-foreground/90 italic leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            I love you today, tomorrow, and always.
          </motion.p>

          {/* Signature heart */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 1.2, type: "spring", stiffness: 150 }}
          >
            <motion.div
              className="text-6xl md:text-7xl animate-heartbeat inline-block"
              style={{
                filter: "drop-shadow(0 0 20px hsl(350, 80%, 60% / 0.6))",
              }}
            >
              💞
            </motion.div>
          </motion.div>

          {/* Forever text */}
          <motion.p
            className="font-romantic text-2xl md:text-3xl text-primary mt-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.5 }}
          >
            ~ Forever Yours ~
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalSection;
