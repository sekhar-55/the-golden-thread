import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GavelDrop from './GavelDrop';

gsap.registerPlugin(ScrollTrigger);

interface Exhibit {
  id: string;
  title: string;
  content: string;
  icon: string;
}

const exhibits: Exhibit[] = [
  {
    id: 'A',
    title: 'How the Case Began',
    content: 'It was written in the stars, coded in destiny, and filed in the court of fate. Two paths crossed at the intersection of logic and law, where a software engineer\'s algorithms met an advocate\'s eloquence. What started as chance became choice, and choice became commitment.',
    icon: '📜'
  },
  {
    id: 'B',
    title: 'Evidence of Compatibility',
    content: 'Exhibit B presents irrefutable evidence: shared laughter that echoes through time, silent understandings that speak volumes, and a love that compiles without errors. The prosecution rests its case on the foundation of 1000 shared moments.',
    icon: '🔍'
  },
  {
    id: 'C',
    title: 'Precedents of Love',
    content: 'This court acknowledges the precedents: every sunrise witnessed together, every challenge overcome as one, every dream woven into a shared tapestry. These precedents establish beyond reasonable doubt that this union is destined.',
    icon: '⚖️'
  }
];

const NarrativeSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visibleStamps, setVisibleStamps] = useState<Set<string>>(new Set());
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return;

    const exhibitCards = sectionRef.current.querySelectorAll('.exhibit-card');
    
    // Set initial state for exhibits
    gsap.set(exhibitCards, { opacity: 1, x: 0 });
    
    exhibitCards.forEach((exhibit, index) => {
      gsap.from(exhibit, {
        x: index % 2 === 0 ? -100 : 100,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: exhibit,
          start: 'top 85%',
          once: true
        }
      });

      // For mobile: add click handler to show/hide stamp
      if (isMobile) {
        const exhibitId = exhibit.getAttribute('data-exhibit-id');
        exhibit.addEventListener('click', () => toggleStamp(exhibitId));
      }
    });

    return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }, [isMobile]);

  const toggleStamp = (id: string) => {
    setVisibleStamps(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const hideStamp = (id: string) => {
    setVisibleStamps(prev => {
      const newSet = new Set(prev);
      newSet.delete(id);
      return newSet;
    });
  };

  return (
    <section ref={sectionRef} className="relative py-2 sm:py-2 md:py-3 px-3 sm:px-4 bg-gradient-to-b from-background to-muted/30">
      {/* Section header with gavel */}
      <GavelDrop>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary text-center mb-3 sm:mb-4">
          The Case File
        </h2>
      </GavelDrop>
      
      <p className="font-script text-lg sm:text-2xl text-secondary text-center mb-10 sm:mb-16 px-2">
        Documented evidence of eternal love
      </p>

      {/* Exhibits */}
      <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12 pb-10 sm:pb-20">
        {exhibits.map((exhibit, index) => (
          <div 
            key={exhibit.id}
            data-exhibit-id={exhibit.id}
            className={`exhibit-card relative ${index % 2 === 0 ? 'md:ml-0 md:mr-auto' : 'md:ml-auto md:mr-0'} max-w-2xl ${isMobile ? 'cursor-pointer' : ''}`}
            onMouseEnter={() => !isMobile && toggleStamp(exhibit.id)}
            onMouseLeave={() => !isMobile && hideStamp(exhibit.id)}
          >
            {/* Exhibit label */}
            <div className="absolute -top-2 sm:-top-3 -left-2 sm:-left-3 w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-mono text-xs sm:text-sm font-bold shadow-lg z-10">
              Ex. {exhibit.id}
            </div>

            {/* Card */}
            <div className="neumorphic bg-card rounded-xl p-4 sm:p-6 md:p-8 border border-gold/20 relative overflow-visible">
              {/* Background pattern - reduced opacity */}
              <div className="absolute inset-0 bg-legal-paper opacity-10 rounded-xl" />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <span className="text-2xl sm:text-3xl">{exhibit.icon}</span>
                  <h3 className="font-display text-lg sm:text-xl md:text-2xl font-bold text-foreground">
                    {exhibit.title}
                  </h3>
                </div>
                
                <p className="font-display text-muted-foreground leading-relaxed italic text-sm sm:text-base">
                  "{exhibit.content}"
                </p>
              </div>

              {/* Decorative stamp & Click indicator for mobile */}
              <div className="absolute bottom-4 right-4 opacity-20 text-5xl pointer-events-none">
                ✓
              </div>

              {/* Mobile click indicator */}
              {isMobile && !visibleStamps.has(exhibit.id) && (
                <div className="absolute bottom-2 right-2 md:hidden animate-pulse text-xs bg-primary text-primary-foreground px-2 py-1 rounded-full font-bold pointer-events-none">
                  Tap to see
                </div>
              )}

              {/* Objection stamp - clickable on mobile */}
              {visibleStamps.has(exhibit.id) && (
                <div 
                  className={`absolute inset-0 z-50 flex items-center justify-center stamp-slam ${isMobile ? 'cursor-pointer' : 'pointer-events-none'}`}
                  onClick={isMobile ? () => hideStamp(exhibit.id) : undefined}
                >
                  <div className="relative">
                    <div className="bg-primary border-2 sm:border-4 border-primary px-2 sm:px-4 py-1 sm:py-2 rounded transform -rotate-3 shadow-2xl">
                      <div className="border border-sm:border-2 border-dashed border-primary-foreground/50 px-2 sm:px-3 py-0.5 sm:py-1">
                        <span className="font-mono text-xs text-primary-foreground uppercase tracking-wider whitespace-nowrap font-bold block">
                          {exhibit.id === 'A' ? "Objection: Too much cuteness!" :
                           exhibit.id === 'B' ? "Sustained: Love is evident!" :
                           "Overruled: Forever approved!"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NarrativeSection;
