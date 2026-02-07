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
  <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-rose-50 via-amber-50/40 to-rose-100">
      {/* Background layer with parallax */}
      <div className="hero-bg absolute inset-0">
        <div className="absolute inset-0 bg-legal-paper opacity-80" />
        {/* Ornate border pattern */}
        <div className="absolute left-0 top-0 right-0 bottom-0 sm:inset-6 md:inset-8 border-2 sm:border-4 border-double border-gold/40 rounded-[32px]" />
        <div className="absolute left-0 top-0 right-0 bottom-0 sm:inset-8 md:inset-12 border border-gold/20 rounded-[36px]" />

        {/* Corner decorations */}
        <div className="absolute top-2 sm:top-10 md:top-16 left-2 sm:left-10 md:left-16 text-3xl sm:text-4xl md:text-5xl text-rose-300 font-script">❦</div>
        <div className="absolute top-2 sm:top-10 md:top-16 right-2 sm:right-10 md:right-16 text-3xl sm:text-4xl md:text-5xl text-rose-300 font-script transform scale-x-[-1]">❦</div>
        <div className="absolute bottom-2 sm:bottom-10 md:bottom-16 left-2 sm:left-10 md:left-16 text-3xl sm:text-4xl md:text-5xl text-rose-200 font-script transform scale-y-[-1]">❦</div>
        <div className="absolute bottom-2 sm:bottom-10 md:bottom-16 right-2 sm:right-10 md:right-16 text-3xl sm:text-4xl md:text-5xl text-rose-200 font-script transform scale-[-1]">❦</div>
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top,_rgba(255,182,193,0.4),_transparent_55%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-3 sm:px-4 max-w-4xl mx-auto">
        <div className="hero-case-number inline-block mb-4 sm:mb-6">
          <div className="relative">
            <div className="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 mx-auto rounded-full border-2 sm:border-4 border-gold flex items-center justify-center bg-white shadow-lg">
              <span className="text-2xl sm:text-3xl md:text-4xl">💘</span>
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-2 sm:px-4 py-1 text-xs font-mono rounded whitespace-nowrap tracking-[2px]">
              Docket 02·14 / 2026
            </div>
          </div>
        </div>

        <p className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">
          Filed in the Court of Love • Anantapur
        </p>

        {/* Main title */}
        <h1 ref={titleRef} className="font-display text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-primary mb-3 sm:mb-4 text-shadow-gold">
          The Forever Valentine Verdict
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle font-script text-2xl sm:text-4xl text-secondary mb-6 sm:mb-8 tracking-[3px]">
          Two professions. One obsession: loving each other louder every year.
        </p>

        {/* Decorative line */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mb-6 sm:mb-8">
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-gold" />
          <div className="flex items-center gap-2 text-gold">
            <span className="text-2xl sm:text-4xl">💍</span>
            <span className="font-display uppercase text-xs tracking-[0.4em] text-muted-foreground">Feb 14</span>
          </div>
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-gold" />
        </div>

        {/* Case description */}
        <p className="font-display text-sm sm:text-lg md:text-xl text-muted-foreground italic max-w-2xl mx-auto px-2 sm:px-0 leading-relaxed">
          "Objection to ordinary love is hereby sustained. Henceforth, the engineer vows to debug every worry while the advocate promises cuddly cross-examinations. Penalty for non-compliance: infinite kisses."
        </p>

        {/* Hero tags */}
        <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {[
            'Love Clause §0214: Forever',
            'Evidence Locker: Red Roses',
            'Witness List: Every Sunset'
          ].map((tag) => (
            <span
              key={tag}
              className="px-3 sm:px-4 py-1 rounded-full border border-gold/40 text-[10px] sm:text-xs font-mono tracking-[0.2em] text-gold/90 bg-white/50 backdrop-blur"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="font-script text-lg sm:text-2xl text-secondary mt-5 tracking-[2px]">
          This Valentine, let the record show: I choose you, again and forever.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
