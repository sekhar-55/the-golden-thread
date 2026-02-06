import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CharacterCard from './CharacterCard';
import GavelDrop from './GavelDrop';

gsap.registerPlugin(ScrollTrigger);

const CharactersSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const cards = sectionRef.current.querySelectorAll('.character-card');

    // Always set cards visible by default (fallback for mobile)
    gsap.set(cards, { opacity: 1, y: 0, rotateY: 0 });

    // Animate in on scroll for desktop, but cards remain visible if scrollTrigger fails
    if (window.innerWidth >= 640) { // sm: breakpoint
      cards.forEach((card, index) => {
        gsap.from(card, {
          y: 100,
          opacity: 0,
          rotateY: index % 2 === 0 ? -30 : 30,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            once: true
          }
        });
      });
    }
  }, []);

  const engineer = {
    title: 'Player One',
    emoji: '👨‍💻',
    role: 'The Engineer',
    stats: [
      { name: 'Building our Dreams', value: 98 },
      { name: 'The "Yes, Dear"', value: 92 },
      { name: 'Hugs and cuddles Dependency', value: 100 },
      { name: 'Love for You', value: 100 }
    ],
    accent: 'tech' as const,
    description: '"I may not always have the right words, but I promise to always build a life where you feel safe, loved, and happy every single day."'
  };

  const advocate = {
    title: 'Player Two',
    emoji: '👩‍⚖️',
    role: 'The Advocate (My Queen)',
    stats: [
      { name: 'Beauty & Grace', value: 100 },
      { name: 'Winning Every Heart', value: 100 },
      { name: 'Love for me', value: 100 },
      { name: 'Talkative and Foodie', value: 100 }
    ],
    accent: 'legal' as const,
    description: '"I object to any future without you in it."'
  };

  const union = {
    title: 'The Union',
    emoji: '💑',
    role: 'A Perfect Merger',
    stats: [
      { name: 'Compatibility', value: 100 },
      { name: 'Traveling & Fun', value: 95 },
      { name: 'Daily Laughter', value: 100 },
      { name: 'Growing Old Together', value: 100 }
    ],
    accent: 'union' as const,
    description: '"Two hearts, one verdict: No objections—just us, forever."'
  };

  return (
    <section ref={sectionRef} className="relative py-12 sm:py-20 md:py-28 lg:py-32 px-4 sm:px-6 md:px-8">
      {/* Section header with gavel */}
      <GavelDrop>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary text-center mb-3 sm:mb-4">
          The Parties Involved
        </h2>
      </GavelDrop>
      
      <p className="font-script text-lg sm:text-2xl text-secondary text-center mb-10 sm:mb-16 px-2 tracking-[2px]">
        Meet the key players in this love story
      </p>

      {/* Character cards grid */}
      <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:flex-row lg:gap-12 max-w-6xl mx-auto">
        <div className="character-card w-full sm:w-auto flex justify-center">
          <CharacterCard {...engineer} />
        </div>
        {/* VS indicator - always visible */}
        <div className="flex flex-col items-center my-2 sm:my-0">
          <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-gold flex items-center justify-center text-lg sm:text-2xl font-bold text-slate shadow-lg shadow-gold/50">
            &
          </div>
        </div>
        <div className="character-card w-full sm:w-auto flex justify-center">
          <CharacterCard {...advocate} />
        </div>
      </div>

      {/* Union card below */}
      <div className="mt-8 sm:mt-12 md:mt-16 flex justify-center">
        <div className="character-card relative w-full sm:w-auto flex justify-center">
          {/* Decorative hearts */}
          <div className="absolute -top-5 sm:-top-8 left-1/2 -translate-x-1/2 text-2xl sm:text-4xl animate-bounce">💕</div>
          <CharacterCard {...union} />
        </div>
      </div>
    </section>
  );
};

export default CharactersSection;
