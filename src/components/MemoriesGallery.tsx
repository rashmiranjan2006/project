import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const memories = [
  {
    caption: "This smile is my favorite place",
    rotate: -3,
    image: "/memories/best.jpeg",
  },
  {
    caption: "Every moment with you feels like home",
    rotate: 2,
    image: "/memories/cool.jpeg",
  },
  {
    caption: "My heart beats for you",
    rotate: -2,
    image: "/memories/happy%20.jpeg",
  },
  {
    caption: "You make ordinary moments magical",
    rotate: 3,
    image: "/memories/hug.jpeg",
  },
  {
    caption: "Forever grateful for you",
    rotate: -4,
    image: "/memories/memory.jpeg",
  },
  {
    caption: "My favorite hello and hardest goodbye",
    rotate: 1,
    image: "/memories/sankalp.jpeg",
  },
];

const PolaroidCard = ({ memory, index }: { memory: typeof memories[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="polaroid-tilt cursor-default"
      initial={{ opacity: 0, y: 50, rotate: 0 }}
      animate={isInView ? { opacity: 1, y: 0, rotate: memory.rotate } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="bg-white p-3 pb-12 rounded-sm shadow-xl relative">
        {/* Photo area */}
        <div className="aspect-square bg-gradient-to-br from-blush via-peach to-secondary overflow-hidden relative flex items-center justify-center">
          {memory.image && (
            <img
              src={memory.image}
              alt={memory.caption}
              className="object-cover w-full h-full"
              style={{ borderRadius: '0.25rem' }}
            />
          )}
          {/* Glowing border effect on hover */}
          <motion.div
            className="absolute inset-0 border-4 border-transparent group-hover:border-rose-glow transition-colors duration-300"
            whileHover={{ borderColor: "hsl(350, 80%, 75%)" }}
          />
        </div>
        
        {/* Caption */}
        <p className="font-romantic text-lg text-deep-rose text-center mt-3 absolute bottom-2 left-0 right-0 px-2">
          {memory.caption}
        </p>

        {/* Tape effect */}
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-4 bg-rose-gold/30 rotate-0" />
      </div>
    </motion.div>
  );
};

const MemoriesGallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-32 px-4 relative overflow-hidden" id="memories">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cream/50 to-transparent" />

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
            Our Memories 🖼️
          </h2>
          <p className="font-elegant text-muted-foreground italic">
            Moments frozen in time, forever in my heart
          </p>
        </motion.div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {memories.map((memory, index) => (
            <PolaroidCard key={index} memory={memory} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemoriesGallery;
