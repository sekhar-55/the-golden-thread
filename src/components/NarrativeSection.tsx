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
    title: 'Opening Statement of Fate',
    content: 'It’s electric to think we once brushed past each other in the crowd, never knowing that "stranger" was actually the love of my life. Now, look at us: a lifetime of dancing through the kitchen, endless cuddles, and a joy so deep it feels like a dream. The evidence is undeniable: the stars had our names written together from the very beginning. You are my forever verdict',
    icon: '💞'
  },
  {
    id: 'B',
    title: 'Traditions & Rituals',
    content: 'From Friday food trails to Sunday slow dances, our rituals are precedents binding on all future arguments. Once invoked, love must be applied generously.',
    icon: '🕯️'
  },
  {
    id: 'C',
    title: 'Valentine\'s Day Ruling',
    content: 'Filed Feb 14, 2026: the engineer pleads guilty to loving you wildly and proposes a lifelong sentence of shared pillows, road trips, and handwritten notes.',
    icon: '🌹'
  }
];

const stampMessages: Record<string, string> = {
  A: 'Sustained: Chemistry undeniable!',
  B: 'Precedent: Rituals of love!',
  C: 'Verdict: Valentine for life!'
};

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
          The Valentine Case File
        </h2>
      </GavelDrop>
      
      <p className="font-script text-lg sm:text-2xl text-secondary text-center mb-4 sm:mb-8 px-2 tracking-[2px]">
        Documented evidence of eternal love
      </p>

      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[11px] sm:text-xs font-mono text-muted-foreground mb-8 sm:mb-12">
        {['Exhibit Vault • Feb 14 Edition', 'Filed jointly under Rajasekhar × Lakshmi', 'Chain of custody: Heart → Heart'].map((chip) => (
          <span key={chip} className="px-3 py-1 rounded-full border border-gold/30 bg-white/60 backdrop-blur">
            {chip}
          </span>
        ))}
      </div>

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
                          {stampMessages[exhibit.id] ?? 'Forever approved!'}
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
