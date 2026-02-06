import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!heroRef.current || !titleRef.current) return;

    // Parallax effect for hero
    gsap.to('.hero-bg', {
      yPercent: 50,
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });

    // Animate title on load
    gsap.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      ease: 'power3.out'
    });

    gsap.from('.hero-subtitle', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      delay: 0.8,
      ease: 'power3.out'
    });

    gsap.from('.hero-case-number', {
      scale: 0.8,
      opacity: 0,
      duration: 0.6,
      delay: 1.1,
      ease: 'back.out(1.7)'
    });
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layer with parallax */}
      <div className="hero-bg absolute inset-0 bg-legal-paper">
        {/* Ornate border pattern */}
        <div className="absolute inset-8 border-4 border-double border-gold/30 rounded-lg" />
        <div className="absolute inset-12 border border-gold/20 rounded-lg" />
        
        {/* Corner decorations */}
        <div className="absolute top-16 left-16 text-6xl text-gold/30 font-script">❧</div>
        <div className="absolute top-16 right-16 text-6xl text-gold/30 font-script transform scale-x-[-1]">❧</div>
        <div className="absolute bottom-16 left-16 text-6xl text-gold/30 font-script transform scale-y-[-1]">❧</div>
        <div className="absolute bottom-16 right-16 text-6xl text-gold/30 font-script transform scale-[-1]">❧</div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Legal seal */}
        <div className="hero-case-number inline-block mb-8">
          <div className="relative">
            <div className="w-24 h-24 mx-auto rounded-full border-4 border-gold flex items-center justify-center bg-cream shadow-lg">
              <span className="text-4xl">⚖️</span>
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 text-xs font-mono rounded">
              Case No. 1402-2026
            </div>
          </div>
        </div>

        {/* Main title */}
        <h1 ref={titleRef} className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary mb-6 text-shadow-gold">
          The Divine Precedent
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle font-script text-3xl md:text-4xl text-secondary mb-8">
          A Matter of the Heart v. Logic
        </p>

        {/* Decorative line */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-gold" />
          <span className="text-gold text-2xl">💍</span>
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-gold" />
        </div>

        {/* Case description */}
        <p className="font-display text-lg md:text-xl text-muted-foreground italic max-w-2xl mx-auto">
          "In the honorable court of destiny, we present the case for an eternal union 
          between two souls, bound by love and the sacred traditions of Tirupati."
        </p>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gold rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-gold rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
