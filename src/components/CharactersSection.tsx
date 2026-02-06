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
    
    cards.forEach((card, index) => {
      gsap.from(card, {
        y: 100,
        opacity: 0,
        rotateY: index % 2 === 0 ? -30 : 30,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      });
    });
  }, []);

  const engineer = {
    title: 'Player One',
    emoji: '👨‍💻',
    role: 'The Engineer',
    stats: [
      { name: 'Logic & Structure', value: 95 },
      { name: 'Debug Skills', value: 92 },
      { name: 'Coffee Dependency', value: 100 },
      { name: 'Love Quotient', value: 99 }
    ],
    accent: 'tech' as const,
    description: '"I promise to debug your sadness and compile our happiness."'
  };

  const advocate = {
    title: 'Player Two',
    emoji: '👩‍⚖️',
    role: 'The Advocate',
    stats: [
      { name: 'Grace & Poise', value: 100 },
      { name: 'Winning Arguments', value: 98 },
      { name: 'Legal Expertise', value: 96 },
      { name: 'Love Quotient', value: 99 }
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
      { name: 'Adventure Score', value: 95 },
      { name: 'Happiness Index', value: 100 },
      { name: 'Forever Rating', value: 100 }
    ],
    accent: 'union' as const,
    description: '"Two hearts, one verdict: Together forever."'
  };

  return (
    <section ref={sectionRef} className="relative py-32 px-4 overflow-hidden">
      {/* Section header with gavel */}
      <GavelDrop>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-primary text-center mb-4">
          The Parties Involved
        </h2>
      </GavelDrop>
      
      <p className="font-script text-2xl text-secondary text-center mb-16">
        Meet the key witnesses to this love story
      </p>

      {/* Character cards grid */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 max-w-6xl mx-auto">
        <div className="character-card">
          <CharacterCard {...engineer} />
        </div>
        
        {/* VS indicator */}
        <div className="hidden lg:flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center text-2xl font-bold text-slate shadow-lg shadow-gold/50">
            &
          </div>
        </div>

        <div className="character-card">
          <CharacterCard {...advocate} />
        </div>
      </div>

      {/* Union card below */}
      <div className="mt-16 flex justify-center">
        <div className="character-card relative">
          {/* Decorative hearts */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-4xl animate-bounce">💕</div>
          <CharacterCard {...union} />
        </div>
      </div>
    </section>
  );
};

export default CharactersSection;
