import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const Confetti = () => {
  const confetti = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 0.5,
    duration: 2 + Math.random() * 2,
    color: ["#e74c3c", "#f39c12", "#9b59b6", "#3498db", "#1abc9c", "#e91e63"][Math.floor(Math.random() * 6)],
    size: 8 + Math.random() * 8,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {confetti.map((piece) => (
        <motion.div
          key={piece.id}
          className="absolute rounded-full"
          style={{
            left: `${piece.left}%`,
            top: "-20px",
            width: piece.size,
            height: piece.size,
            backgroundColor: piece.color,
          }}
          initial={{ opacity: 1, y: 0, rotate: 0 }}
          animate={{
            y: window.innerHeight + 50,
            rotate: 720,
            opacity: [1, 1, 0],
          }}
          transition={{
            duration: piece.duration,
            delay: piece.delay,
            ease: "easeIn",
          }}
        />
      ))}
    </div>
  );
};

const HeartConfetti = () => {
  const hearts = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 0.5,
    duration: 2 + Math.random() * 2,
    size: 15 + Math.random() * 15,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-primary"
          style={{
            left: `${heart.left}%`,
            top: "-30px",
            fontSize: heart.size,
          }}
          initial={{ opacity: 1, y: 0, rotate: 0 }}
          animate={{
            y: window.innerHeight + 50,
            rotate: 360,
            opacity: [1, 1, 0],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            ease: "easeIn",
          }}
        >
          ❤️
        </motion.div>
      ))}
    </div>
  );
};

const BirthdaySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [wishMade, setWishMade] = useState(false);

  const handleMakeWish = () => {
    setWishMade(true);
  };

  return (
    <section className="py-20 md:py-32 px-4 relative overflow-hidden" id="birthday">
      {/* Confetti effects */}
      <AnimatePresence>
        {wishMade && (
          <>
            <Confetti />
            <HeartConfetti />
          </>
        )}
      </AnimatePresence>

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-peach/30 via-cream to-peach/30" />

      <div className="max-w-4xl mx-auto relative">
        {/* Section title */}
        <motion.div
          ref={ref}
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-romantic text-4xl md:text-6xl text-gradient-romantic mb-4">
            Happy Birthday! 🎂
          </h2>
        </motion.div>

        {/* Cake container */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Animated cake */}
          <div className="relative mb-8">
            {/* Cake SVG */}
            <motion.svg
              width="200"
              height="220"
              viewBox="0 0 200 220"
              className="drop-shadow-xl"
              animate={wishMade ? {} : { y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {/* Plate */}
              <ellipse cx="100" cy="210" rx="95" ry="10" fill="hsl(350, 20%, 85%)" />
              
              {/* Bottom tier */}
              <rect x="30" y="150" width="140" height="50" rx="5" fill="hsl(350, 60%, 75%)" />
              <rect x="30" y="150" width="140" height="10" rx="5" fill="hsl(350, 70%, 65%)" />
              
              {/* Middle tier */}
              <rect x="45" y="100" width="110" height="50" rx="5" fill="hsl(20, 80%, 85%)" />
              <rect x="45" y="100" width="110" height="10" rx="5" fill="hsl(20, 70%, 75%)" />
              
              {/* Top tier */}
              <rect x="60" y="55" width="80" height="45" rx="5" fill="hsl(350, 80%, 80%)" />
              <rect x="60" y="55" width="80" height="10" rx="5" fill="hsl(350, 70%, 70%)" />
              
              {/* Frosting drips */}
              <ellipse cx="75" cy="105" rx="8" ry="15" fill="hsl(350, 60%, 75%)" />
              <ellipse cx="125" cy="108" rx="6" ry="12" fill="hsl(350, 60%, 75%)" />
              <ellipse cx="50" cy="155" rx="7" ry="14" fill="hsl(20, 80%, 85%)" />
              <ellipse cx="150" cy="158" rx="8" ry="16" fill="hsl(20, 80%, 85%)" />
              
              {/* Decorations */}
              <circle cx="75" cy="170" r="5" fill="hsl(350, 70%, 50%)" />
              <circle cx="100" cy="165" r="5" fill="hsl(350, 70%, 50%)" />
              <circle cx="125" cy="170" r="5" fill="hsl(350, 70%, 50%)" />
              
              {/* Candles */}
              {!wishMade && (
                <>
                  <g>
                    <rect x="85" y="25" width="6" height="30" fill="hsl(350, 70%, 50%)" rx="1" />
                    <motion.ellipse
                      cx="88"
                      cy="18"
                      rx="8"
                      ry="12"
                      fill="url(#flameGradient)"
                      animate={{ scaleY: [1, 1.2, 1], opacity: [1, 0.8, 1] }}
                      transition={{ duration: 0.5, repeat: Infinity }}
                    />
                  </g>
                  <g>
                    <rect x="105" y="25" width="6" height="30" fill="hsl(350, 70%, 50%)" rx="1" />
                    <motion.ellipse
                      cx="108"
                      cy="18"
                      rx="8"
                      ry="12"
                      fill="url(#flameGradient)"
                      animate={{ scaleY: [1, 1.15, 1], opacity: [0.9, 1, 0.9] }}
                      transition={{ duration: 0.6, repeat: Infinity }}
                    />
                  </g>
                </>
              )}
              
              <defs>
                <linearGradient id="flameGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="hsl(30, 100%, 50%)" />
                  <stop offset="50%" stopColor="hsl(45, 100%, 60%)" />
                  <stop offset="100%" stopColor="hsl(60, 100%, 80%)" />
                </linearGradient>
              </defs>
            </motion.svg>
          </div>

          {/* Make a wish button or message */}
          <AnimatePresence mode="wait">
            {!wishMade ? (
              <motion.div
                key="button"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <Button
                  onClick={handleMakeWish}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-romantic text-xl px-8 py-6 rounded-full glow-rose transition-all duration-300 hover:scale-105"
                >
                  Make a Wish 🎉
                </Button>
              </motion.div>
            ) : (
              <motion.div
                key="message"
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
              >
                <motion.p
                  className="font-romantic text-3xl md:text-4xl text-primary mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  ✨ Wish Made! ✨
                </motion.p>
                <motion.p
                  className="font-elegant text-lg md:text-xl text-foreground/80 italic max-w-md"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  May every dream of yours come true, and may I always be by your side. 💕
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default BirthdaySection;
