import { motion } from "framer-motion";
import { Heart, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onStartJourney: () => void;
}

const HeroSection = ({ onStartJourney }: HeroSectionProps) => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4">
      {/* Glowing background */}
      <div className="absolute inset-0 bg-romantic opacity-50" />
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-rose-glow opacity-20 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center max-w-3xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {/* Animated Heart */}
        <motion.div
          className="inline-block mb-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
        >
          <motion.div
            className="animate-heartbeat"
          >
            <Heart
              size={80}
              className="text-primary fill-primary drop-shadow-lg"
              style={{ filter: "drop-shadow(0 0 20px hsl(350, 70%, 50% / 0.5))" }}
            />
          </motion.div>
        </motion.div>

        {/* Title */}
        <motion.h1
          className="font-romantic text-5xl md:text-7xl lg:text-8xl text-gradient-romantic mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Happy Birthday My Love ❤️
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="font-elegant text-lg md:text-xl text-foreground mb-12 leading-relaxed italic max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          On this special day, I want to celebrate not just your birthday, 
          but every beautiful moment you brought into my life.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          <Button
            onClick={onStartJourney}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-romantic text-xl px-8 py-6 rounded-full glow-rose transition-all duration-300 hover:scale-105"
          >
            Start the Journey 💕
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator - positioned at bottom of screen */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <ChevronDown className="text-primary/60" size={32} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
