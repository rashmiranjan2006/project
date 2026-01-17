import { useRef } from "react";
import FloatingHearts from "@/components/FloatingHearts";
import Sparkles from "@/components/Sparkles";
import HeroSection from "@/components/HeroSection";
import LoveStorySection from "@/components/LoveStorySection";
import MemoriesGallery from "@/components/MemoriesGallery";
import LoveLetterSection from "@/components/LoveLetterSection";
import ReasonsSection from "@/components/ReasonsSection";
import BirthdaySection from "@/components/BirthdaySection";
import PromiseSection from "@/components/PromiseSection";
import FinalSection from "@/components/FinalSection";

const Index = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  const scrollToContent = () => {
    contentRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Background decorations */}
      <FloatingHearts />
      <Sparkles />

      {/* Main content */}
      <main className="relative z-10">
        {/* Hero / Landing Section */}
        <HeroSection onStartJourney={scrollToContent} />

        {/* Content sections */}
        <div ref={contentRef}>
          {/* Our Love Story Timeline */}
          <LoveStorySection />

          {/* Memories Gallery */}
          <MemoriesGallery />

          {/* Love Letter */}
          <LoveLetterSection />

          {/* Reasons I Love You */}
          <ReasonsSection />

          {/* Birthday Cake & Wish */}
          <BirthdaySection />

          {/* Promise & Future */}
          <PromiseSection />

          {/* Final Emotional Ending */}
          <FinalSection />
        </div>
      </main>
    </div>
  );
};

export default Index;
