import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ObjectionStamp from './ObjectionStamp';
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

  useEffect(() => {
    if (!sectionRef.current) return;

    const exhibits = sectionRef.current.querySelectorAll('.exhibit-card');
    
    exhibits.forEach((exhibit, index) => {
      gsap.from(exhibit, {
        x: index % 2 === 0 ? -100 : 100,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: exhibit,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      });
    });
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 px-4 bg-gradient-to-b from-background to-muted/30">
      {/* Section header with gavel */}
      <GavelDrop>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-primary text-center mb-4">
          The Case File
        </h2>
      </GavelDrop>
      
      <p className="font-script text-2xl text-secondary text-center mb-16">
        Documented evidence of eternal love
      </p>

      {/* Exhibits */}
      <div className="max-w-4xl mx-auto space-y-12">
        {exhibits.map((exhibit, index) => (
          <div 
            key={exhibit.id}
            className={`exhibit-card relative ${index % 2 === 0 ? 'md:ml-0 md:mr-auto' : 'md:ml-auto md:mr-0'} max-w-2xl`}
          >
            {/* Exhibit label */}
            <div className="absolute -top-3 -left-3 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-mono text-sm font-bold shadow-lg">
              Ex. {exhibit.id}
            </div>

            {/* Card */}
            <div className="neumorphic bg-card rounded-xl p-8 border border-gold/20 relative overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 bg-legal-paper opacity-50" />
              
              {/* Content */}
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{exhibit.icon}</span>
                  <h3 className="font-display text-2xl font-bold text-foreground">
                    {exhibit.title}
                  </h3>
                </div>
                
                <p className="font-display text-muted-foreground leading-relaxed italic">
                  "{exhibit.content}"
                </p>

                {/* Objection stamp on hover */}
                <ObjectionStamp 
                  message={
                    exhibit.id === 'A' ? "Objection: Too much cuteness!" :
                    exhibit.id === 'B' ? "Sustained: Love is evident!" :
                    "Overruled: Forever approved!"
                  }
                />
              </div>

              {/* Decorative stamp */}
              <div className="absolute bottom-4 right-4 opacity-20 text-5xl">
                ✓
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NarrativeSection;
