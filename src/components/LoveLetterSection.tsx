import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const letterContent = `Happy Birthday mo puchuuuuu mo jibanaaa🥹🥹
🥳🥳🥳🥳🥳💏🏻

aji to thu adhikaaaa kiyee khushi achi mane siye hauchii muuu manuchi tike dukhaa bhi achi ki tu budhi habaraa aau gote sidhi chadilu

20 barshaaaa raaa budhiii saha muh relation reh achii ☠️

matraa jahaa bhi hau muh adjust kri debii🤭 aji hot dusuchuu bayasaaa badhi badhii jibaa tu aauri asaundarr habu matraaa mun to saha akaaa rahibiiiiiii tu hott dusee nahaleeee kauu 😏

🥺i love youu geluuuuuu 🫶
sabu baleeeee simiti khushii reh thaaaa jimiti tuh july 26 reh thiluuuu simiti enjoy kruthaa sabu jinsaaa 
tu jahaa chahunchu sabu tateee miluuuu(muh bhi)

Happy birthdayyy snehaaaaaaaa🥳🥳🥳🫂🫂🫂🫂
🫂🫂🫂🫂🫂🫂🫂🫂`;

const LoveLetterSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  // Show the full letter instantly
  const displayedText = letterContent;

  return (
    <section className="py-20 md:py-32 px-4 relative" id="love-letter">
      {/* Paper texture background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-secondary/30 to-cream" />

      <div className="max-w-3xl mx-auto relative">
        {/* Section title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-romantic text-4xl md:text-6xl text-gradient-romantic mb-4">
            A Letter For You 💌
          </h2>
        </motion.div>

        {/* Letter paper */}
        <motion.div
          ref={ref}
          className="relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Paper effect */}
          <div className="bg-cream/80 backdrop-blur-sm rounded-lg p-8 md:p-12 shadow-xl border border-rose-gold/20 relative overflow-hidden">
            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-20 h-20">
              <div className="absolute top-0 right-0 w-0 h-0 border-l-[80px] border-l-transparent border-t-[80px] border-t-blush" />
            </div>

            {/* Letter content */}
            <div className="font-elegant text-foreground/90 leading-loose text-base md:text-lg whitespace-pre-line">
              {displayedText}
              {displayedText.length < letterContent.length && (
                <span className="inline-block w-0.5 h-5 bg-primary ml-1 animate-blink" />
              )}
            </div>

            {/* Wax seal decoration */}
            <motion.div
              className="absolute -bottom-6 right-8 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-deep-rose flex items-center justify-center shadow-lg"
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ delay: 1, type: "spring", stiffness: 200 }}
            >
              <span className="text-white text-2xl">❤️</span>
            </motion.div>
          </div>

          {/* Paper shadow layers */}
          <div className="absolute inset-0 bg-cream/60 rounded-lg -rotate-1 -z-10 translate-y-1 translate-x-1" />
          <div className="absolute inset-0 bg-cream/40 rounded-lg rotate-1 -z-20 translate-y-2 translate-x-2" />
        </motion.div>
      </div>
    </section>
  );
};

export default LoveLetterSection;
