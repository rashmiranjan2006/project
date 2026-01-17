import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";

const memories = [
  {
    date: "The Beginning",
    text: "The day we first talked — I never knew that a simple conversation would turn into the most beautiful chapter of my life.",
  },
  {
    date: "First Smile",
    text: "When I saw you smile for the first time, I knew my heart had found its home. That moment is forever etched in my memory.",
  },
  {
    date: "Growing Together",
    text: "Every day with you has been a new adventure. You taught me what it means to truly love someone unconditionally.",
  },
  {
    date: "Our Journey",
    text: "Through every laugh, every tear, every moment of silence — you've been my constant, my peace, my everything.",
  },
  {
    date: "Today",
    text: "And now, on your special day, I want you to know — you are the most beautiful thing that ever happened to me.",
  },
];

const TimelineCard = ({ memory, index }: { memory: typeof memories[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      className={`flex items-center gap-4 md:gap-8 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} flex-col md:flex-row`}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      {/* Card */}
      <div className={`flex-1 ${isLeft ? "md:text-right" : "md:text-left"} text-center`}>
        <motion.div
          className="card-romantic p-6 md:p-8 inline-block relative group cursor-default"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {/* Floating hearts on hover */}
          <motion.div
            className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity"
            animate={{ y: [0, -5, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Heart size={20} className="text-rose fill-rose" />
          </motion.div>
          <motion.div
            className="absolute -bottom-2 -left-2 opacity-0 group-hover:opacity-100 transition-opacity"
            animate={{ y: [0, 5, 0], rotate: [0, -10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            <Heart size={16} className="text-rose-light fill-rose-light" />
          </motion.div>

          <h3 className="font-romantic text-2xl md:text-3xl text-primary mb-3">{memory.date}</h3>
          <p className="font-elegant text-foreground/80 italic leading-relaxed">{memory.text}</p>
        </motion.div>
      </div>

      {/* Timeline dot */}
      <div className="relative flex items-center justify-center">
        <motion.div
          className="w-4 h-4 bg-primary rounded-full z-10 animate-glow"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ delay: 0.5, type: "spring" }}
        />
        <div className="absolute w-8 h-8 bg-rose-glow rounded-full opacity-50 animate-pulse" />
      </div>

      {/* Spacer for alignment */}
      <div className="flex-1 hidden md:block" />
    </motion.div>
  );
};

const LoveStorySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-32 px-4 relative" id="love-story">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-peach/20 to-transparent" />

      <div className="max-w-4xl mx-auto relative">
        {/* Section title */}
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-romantic text-4xl md:text-6xl text-gradient-romantic mb-4">
            Our Love Story 📖
          </h2>
          <p className="font-elegant text-muted-foreground italic">
            Every moment with you is a treasure
          </p>
        </motion.div>

        {/* Timeline line */}
        <div className="absolute left-1/2 top-40 bottom-20 w-0.5 bg-gradient-to-b from-rose-light via-primary to-rose-light opacity-30 hidden md:block" />

        {/* Memory cards */}
        <div className="space-y-12 md:space-y-16">
          {memories.map((memory, index) => (
            <TimelineCard key={index} memory={memory} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoveStorySection;
