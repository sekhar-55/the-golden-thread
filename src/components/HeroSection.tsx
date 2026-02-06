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
        start: 'top 90%',
        end: 'bottom top',
        scrub: true
      }
    });

    // Set initial states
     gsap.set([titleRef.current, '.hero-subtitle', '.hero-case-number'], { opacity: 1, y: 0, scale: 1, clearProps: 'all' });

    // Animate title on scroll (only on sm+)
    if (window.innerWidth >= 640) {
      gsap.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top 90%',
          once: true
        },
        clearProps: 'all'
      });

      gsap.from('.hero-subtitle', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top 90%',
          once: true
        },
        clearProps: 'all'
      });

      gsap.from('.hero-case-number', {
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top 90%',
          once: true
        },
        clearProps: 'all'
      });
    }
  }, []);

  return (
  <section ref={heroRef} className="relative min-h-screen flex items-center justify-center">
      {/* Background layer with parallax */}
  <div className="hero-bg absolute inset-0 bg-legal-paper">
        {/* Ornate border pattern */}
  <div className="absolute left-0 top-0 right-0 bottom-0 sm:inset-6 md:inset-8 border-2 sm:border-4 border-double border-gold/30 rounded-lg" />
  <div className="absolute left-0 top-0 right-0 bottom-0 sm:inset-8 md:inset-12 border border-gold/20 rounded-lg" />
        
        {/* Corner decorations */}
  <div className="absolute top-0 sm:top-8 md:top-16 left-0 sm:left-8 md:left-16 text-3xl sm:text-4xl md:text-6xl text-gold/30 font-script max-w-full">❧</div>
  <div className="absolute top-0 sm:top-8 md:top-16 right-0 sm:right-8 md:right-16 text-3xl sm:text-4xl md:text-6xl text-gold/30 font-script transform scale-x-[-1] max-w-full">❧</div>
  <div className="absolute bottom-0 sm:bottom-8 md:bottom-16 left-0 sm:left-8 md:left-16 text-3xl sm:text-4xl md:text-6xl text-gold/30 font-script transform scale-y-[-1] max-w-full">❧</div>
  <div className="absolute bottom-0 sm:bottom-8 md:bottom-16 right-0 sm:right-8 md:right-16 text-3xl sm:text-4xl md:text-6xl text-gold/30 font-script transform scale-[-1] max-w-full">❧</div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-3 sm:px-4 max-w-4xl mx-auto">
        {/* Legal seal */}
        <div className="hero-case-number inline-block mb-6 sm:mb-8">
          <div className="relative">
            <div className="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 mx-auto rounded-full border-2 sm:border-4 border-gold flex items-center justify-center bg-cream shadow-lg">
              <span className="text-2xl sm:text-3xl md:text-4xl">⚖️</span>
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-2 sm:px-4 py-1 text-xs font-mono rounded whitespace-nowrap">
              Case No. 1402-2026
            </div>
          </div>
        </div>

        {/* Main title */}
        <h1 ref={titleRef} className="font-display text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-primary mb-4 sm:mb-6 text-shadow-gold">
          The Divine Precedent
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle font-script text-xl sm:text-3xl md:text-4xl text-secondary mb-6 sm:mb-8">
          A Matter of the Heart vs Logic
        </p>

        {/* Decorative line */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-6 sm:mb-8">
          <div className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-gold" />
          <span className="text-gold text-2xl sm:text-4xl">💍</span>
          <div className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-gold" />
        </div>

        {/* Case description */}
        <p className="font-display text-sm sm:text-lg md:text-xl text-muted-foreground italic max-w-2xl mx-auto px-2 sm:px-0 leading-relaxed">
          "In the honorable court of destiny, we present the case for an eternal union 
          between two souls, bound by love and the sacred traditions of Tirupati."
        </p>

        {/* Scroll indicator */}
        {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gold rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-gold rounded-full mt-2 animate-pulse" />
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default HeroSection;
