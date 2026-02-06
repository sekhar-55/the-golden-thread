import { useRef, useEffect, useState, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface GavelDropProps {
  children: ReactNode;
}

const GavelDrop = ({ children }: GavelDropProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const gavelRef = useRef<HTMLDivElement>(null);
  const shockwaveRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!containerRef.current || !gavelRef.current || hasAnimated) return;

    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top 70%',
      onEnter: () => {
        if (hasAnimated) return;
        setHasAnimated(true);

        const tl = gsap.timeline();

        // Gavel drops
        tl.fromTo(gavelRef.current, 
          { rotation: -45, y: -50, opacity: 0 },
          { rotation: 0, y: 0, opacity: 1, duration: 0.4, ease: 'power2.in' }
        )
        // Shockwave on impact
        .fromTo(shockwaveRef.current,
          { scale: 0, opacity: 1 },
          { scale: 2.5, opacity: 0, duration: 0.4, ease: 'power2.out' },
          '-=0.1'
        )
        // Slight bounce
        .to(gavelRef.current, {
          rotation: -8,
          duration: 0.1,
          ease: 'power1.out'
        })
        .to(gavelRef.current, {
          rotation: 0,
          duration: 0.2,
          ease: 'elastic.out(1, 0.5)'
        });
      }
    });

    return () => trigger.kill();
  }, [hasAnimated]);

  return (
    <div ref={containerRef} className="relative">
      {/* Gavel */}
      <div className="flex justify-center mb-6">
        <div ref={gavelRef} className="relative opacity-0">
          <span className="text-5xl">🔨</span>
          {/* Shockwave circle */}
          <div 
            ref={shockwaveRef}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-4 border-gold opacity-0 pointer-events-none"
          />
        </div>
      </div>
      
      {children}
    </div>
  );
};

export default GavelDrop;
