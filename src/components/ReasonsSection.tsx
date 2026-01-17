import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const reasons = [
  "The way you smile",
  "Your beautiful heart",
  "How you understand me",
  "Your infectious laugh",
  "The way you care",
  "Your endless patience",
  "How you inspire me",
  "Your loving embrace",
  "Every word you say",
  "Just being you ✨",
];

const HeartCard = ({ reason, index }: { reason: string; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="heart-card relative"
      initial={{ opacity: 0, y: 30, scale: 0.8 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Heart shape using CSS */}
      <div className="relative group cursor-default">
        <motion.div
          className="w-32 h-32 md:w-40 md:h-40 relative mx-auto"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {/* Heart SVG */}
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full drop-shadow-lg"
          >
            <defs>
              <linearGradient id={`heartGradient${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(350, 80%, 65%)" />
                <stop offset="50%" stopColor="hsl(350, 70%, 55%)" />
                <stop offset="100%" stopColor="hsl(350, 65%, 45%)" />
              </linearGradient>
            </defs>
            <path
              d="M50 88.9C23.3 68.1 10 53.4 10 37.5c0-11 8.5-20 19-20 7.4 0 14.5 4.2 18.5 10.3h5c4-6.1 11.1-10.3 18.5-10.3 10.5 0 19 9 19 20 0 15.9-13.3 30.6-40 51.4z"
              fill={`url(#heartGradient${index})`}
              className="transition-all duration-300 group-hover:filter group-hover:brightness-110"
            />
          </svg>

          {/* Glow effect */}
          <motion.div
            className="absolute inset-0 rounded-full bg-rose-glow opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-300"
          />

          {/* Text inside heart */}
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <p className="font-romantic text-white text-center text-sm md:text-base leading-tight drop-shadow-md">
              {reason}
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const ReasonsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-32 px-4 relative overflow-hidden" id="reasons">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blush/30 to-transparent" />

      <div className="max-w-6xl mx-auto relative">
        {/* Section title */}
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-romantic text-4xl md:text-6xl text-gradient-romantic mb-4">
            I Love You 🌹
          </h2>
          <p className="font-elegant text-muted-foreground italic">
            A thousand reasons, and counting...
          </p>
        </motion.div>

        {/* Hearts grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
          {reasons.map((reason, index) => (
            <HeartCard key={index} reason={reason} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReasonsSection;
