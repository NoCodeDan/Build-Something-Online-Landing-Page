import { Button } from './Button';
import { Sparkles } from 'lucide-react';

interface HeroProps {
  onJoinClick: () => void;
}

export const Hero = ({ onJoinClick }: HeroProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-warmWhite relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-warmOrange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-warmOrange-400/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-beige-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 mb-8 px-5 py-3 bg-gradient-to-r from-warmOrange-400/20 via-warmOrange-500/20 to-warmOrange-600/20 rounded-full border border-warmOrange-400/30 shadow-sm">
          <Sparkles className="w-4 h-4 text-warmOrange-500" />
          <span className="text-sm font-semibold bg-gradient-to-r from-warmOrange-600 to-warmOrange-500 bg-clip-text text-transparent">
            28 Days to AI-First
          </span>
        </div>

        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-charcoal mb-6 leading-[1.1] tracking-tight">
          Build Something<br />Online
        </h1>

        <div className="w-20 h-1.5 bg-gradient-to-r from-warmOrange-400 via-warmOrange-500 to-warmOrange-600 mx-auto mb-8 rounded-full"></div>

        <p className="text-2xl md:text-3xl text-charcoal/80 mb-8 font-medium">
          Build products and become AI-first in 28 days.
        </p>

        <p className="text-lg md:text-xl text-charcoal/70 mb-12 max-w-2xl mx-auto leading-relaxed">
          Daily lessons and hands-on homework designed to help you ship something real.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button variant="primary" onClick={onJoinClick}>Join the Workshop</Button>
          <Button 
            variant="secondary"
            onClick={() => {
              const curriculumSection = document.getElementById('curriculum');
              if (curriculumSection) {
                curriculumSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
          >
            See the Curriculum
          </Button>
        </div>

        <div className="inline-flex flex-wrap justify-center gap-3 text-sm text-charcoal/60 bg-beige-100/50 px-6 py-3 rounded-full border border-beige-200/50">
          <span className="font-medium">Beginner-friendly</span>
          <span className="text-warmOrange-500">•</span>
          <span className="font-medium">Hands-on</span>
          <span className="text-warmOrange-500">•</span>
          <span className="font-medium">Practical</span>
          <span className="text-warmOrange-500">•</span>
          <span className="font-medium">No fluff</span>
        </div>
      </div>
    </section>
  );
};
