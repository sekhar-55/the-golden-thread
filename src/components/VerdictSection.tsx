import { useState, useRef, useEffect, useCallback } from 'react';
import confetti from 'canvas-confetti';
import { gsap } from 'gsap';

interface VerdictSectionProps {
  onCelebrate: () => void;
}

const VerdictSection = ({ onCelebrate }: VerdictSectionProps) => {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [escapeCount, setEscapeCount] = useState(0);
  const [showCelebration, setShowCelebration] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const noButtonRef = useRef<HTMLButtonElement>(null);

  const escapeButton = useCallback(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current.getBoundingClientRect();
    const buttonWidth = 150;
    const buttonHeight = 50;
    
    const maxX = container.width - buttonWidth - 50;
    const maxY = 200;
    
    const newX = Math.random() * maxX - maxX / 2;
    const newY = Math.random() * maxY - maxY / 2;
    
    setNoButtonPosition({ x: newX, y: newY });
    setEscapeCount(prev => prev + 1);
  }, []);

  const handleMouseEnterNo = () => {
    escapeButton();
  };

  const handleTouchNo = (e: React.TouchEvent) => {
    e.preventDefault();
    escapeButton();
  };

  const triggerCelebration = () => {
    setShowCelebration(true);

    // Fire confetti
    const duration = 5000;
    const end = Date.now() + duration;

    const colors = ['#d4af37', '#800000', '#fdfbf7', '#ff69b4'];

    const frame = () => {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.7 },
        colors
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.7 },
        colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();

    // Center burst
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 },
      colors
    });

    onCelebrate();
  };

  useEffect(() => {
    if (showCelebration) {
      gsap.from('.celebration-content', {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        ease: 'elastic.out(1, 0.5)'
      });
    }
  }, [showCelebration]);

  const escapeMessages = [
    "Nice try! 😏",
    "Can't escape love!",
    "Too slow!",
    "Give up already! 💕",
    "Resistance is futile!",
    "Just say yes! 💍"
  ];

  return (
    <section ref={containerRef} className="relative min-h-screen py-32 px-4 flex items-center justify-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-background" />
      
      {!showCelebration ? (
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          {/* Document header */}
          <div className="neumorphic bg-card rounded-xl p-8 md:p-12 border border-gold/30">
            {/* Seal */}
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary flex items-center justify-center shadow-lg">
              <span className="text-4xl">⚖️</span>
            </div>

            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-2">
              THE FINAL DECREE
            </h2>
            
            <div className="h-px w-32 mx-auto bg-gold my-6" />

            <p className="font-display text-xl md:text-2xl text-foreground mb-8 leading-relaxed">
              In the matter of a <span className="text-secondary font-bold">Lifetime Partnership</span>,<br />
              this court seeks your verdict on the following motion:
            </p>

            <p className="font-script text-3xl md:text-4xl text-primary mb-12">
              "Will you marry me?"
            </p>

            {/* Buttons */}
            <div className="relative flex flex-col sm:flex-row items-center justify-center gap-6 min-h-[120px]">
              {/* Yes Button */}
              <button
                onClick={triggerCelebration}
                className="relative px-12 py-4 bg-gradient-to-r from-secondary via-gold-glow to-secondary text-secondary-foreground font-display text-xl font-bold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-secondary z-10"
              >
                <span className="relative z-10">I Concur 💍</span>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary via-gold-glow to-secondary rounded-lg animate-shimmer opacity-50" 
                     style={{ backgroundSize: '200% 100%' }} />
              </button>

              {/* No Button (Escapes) */}
              <button
                ref={noButtonRef}
                onMouseEnter={handleMouseEnterNo}
                onTouchStart={handleTouchNo}
                className="px-8 py-3 bg-muted text-muted-foreground font-display text-lg rounded-lg border border-border hover:bg-muted/80 transition-all duration-100"
                style={{
                  transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
                  transition: 'transform 0.15s ease-out'
                }}
              >
                File Appeal
              </button>
            </div>

            {/* Escape counter message */}
            {escapeCount > 0 && (
              <p className="mt-6 text-muted-foreground font-mono text-sm animate-pulse">
                {escapeMessages[Math.min(escapeCount - 1, escapeMessages.length - 1)]}
              </p>
            )}
          </div>
        </div>
      ) : (
        /* Celebration Screen */
        <div className="celebration-content fixed inset-0 z-50 flex items-center justify-center bg-slate/95 backdrop-blur-sm">
          <div className="text-center px-4">
            {/* Pulsating ring */}
            <div className="ring-pulse mx-auto mb-8 w-32 h-32 flex items-center justify-center">
              <span className="text-8xl">💍</span>
            </div>

            <h2 className="font-display text-4xl md:text-6xl font-bold text-gold mb-4 text-shadow-gold">
              Objection Overruled!
            </h2>
            
            <p className="font-script text-3xl md:text-5xl text-primary-foreground mb-8">
              Marriage Approved!
            </p>

            <div className="flex items-center justify-center gap-2 text-gold">
              {['💕', '💖', '💗', '💓', '💝'].map((heart, i) => (
                <span 
                  key={i} 
                  className="text-3xl animate-bounce"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {heart}
                </span>
              ))}
            </div>

            <p className="mt-12 font-display text-xl text-muted-foreground">
              See you at Tirupati! 🛕
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default VerdictSection;
