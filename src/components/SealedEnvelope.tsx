import { useState } from 'react';
import { gsap } from 'gsap';

interface SealedEnvelopeProps {
  onOpen: () => void;
}

const SealedEnvelope = ({ onOpen }: SealedEnvelopeProps) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleClick = () => {
    if (isOpening) return;
    setIsOpening(true);

    // Play envelope open animation
    const tl = gsap.timeline({
      onComplete: () => {
        onOpen();
      }
    });

    tl.to('.wax-seal', {
      scale: 1.2,
      rotation: 15,
      duration: 0.3,
      ease: 'power2.out'
    })
    .to('.wax-seal', {
      scale: 0,
      opacity: 0,
      duration: 0.2,
      ease: 'power2.in'
    })
    .to('.envelope-flap', {
      rotateX: 180,
      duration: 0.5,
      ease: 'power2.inOut'
    }, '-=0.1')
    .to('.envelope-container', {
      scale: 1.5,
      opacity: 0,
      duration: 0.6,
      ease: 'power2.inOut'
    }, '-=0.2')
    .to('.envelope-backdrop', {
      opacity: 0,
      duration: 0.4,
      ease: 'power2.out'
    }, '-=0.4');
  };

  return (
    <div className="envelope-backdrop fixed inset-0 z-50 flex items-center justify-center bg-slate cursor-pointer"
         onClick={handleClick}>
      {/* Subtle ambient particles */}
      <div className="absolute inset-0 overflow-visible">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-gold opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="envelope-container envelope-float relative">
        {/* Main envelope body */}
        <div className="relative w-64 h-48 sm:w-72 sm:h-56 md:w-96 md:h-64">
          {/* Envelope back */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-amber-200 rounded-lg shadow-2xl border-2 border-gold/30">
            {/* Paper texture lines */}
            <div className="absolute inset-2 sm:inset-3 md:inset-4 opacity-10">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="border-b border-slate/30 mb-4" />
              ))}
            </div>
          </div>

          {/* Envelope flap */}
          <div className="envelope-flap absolute -top-1 left-0 right-0 h-28 origin-bottom"
               style={{ transformStyle: 'preserve-3d' }}>
            <div className="absolute inset-0 bg-gradient-to-b from-amber-200 to-amber-100 rounded-t-lg"
                 style={{
                   clipPath: 'polygon(0 100%, 50% 20%, 100% 100%)',
                   backfaceVisibility: 'hidden'
                 }}>
              {/* Decorative border on flap */}
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
            {/* Valentine ribbon */}
            <div className="absolute -top-6 sm:-top-8 right-0 sm:right-2 flex items-center gap-2 px-3 sm:px-4 py-1 rounded-full bg-rose-50/90 border border-rose-200/70 shadow-md backdrop-blur-sm z-20">
              <span className="text-base sm:text-lg" aria-hidden="true">🌹</span>
              <span className="font-script text-xs sm:text-sm text-rose-700 tracking-wide">
                From your Valentine
              </span>
            </div>
            </div>
          </div>

          {/* Wax Seal */}
          <div className="wax-seal absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full flex items-center justify-center z-10">
            {/* Inner seal design */}
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Decorative ring */}
              <div className="absolute inset-2 rounded-full border-2 border-red-300/30" />
              
              {/* Heart emblem */}
              <span className="text-3xl filter drop-shadow-lg">💌</span>
              
              {/* Seal edge details */}
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-3 bg-red-900/20 rounded-full"
                  style={{
                    transform: `rotate(${i * 30}deg) translateY(-36px)`
                  }}
                />
              ))}
            </div>
          </div>

          {/* Click instruction */}
          <div className="absolute -bottom-10 sm:-bottom-12 left-1/2 -translate-x-1/2 text-gold/80 text-xs sm:text-sm font-display animate-pulse whitespace-nowrap px-2">
            Click to open the sealed decree...
          </div>
        </div>

        {/* Decorative corner flourishes */}
        <div className="absolute -top-4 sm:-top-8 -left-4 sm:-left-8 text-gold/40 text-2xl sm:text-4xl font-script">✦</div>
        <div className="absolute -top-4 sm:-top-8 -right-4 sm:-right-8 text-gold/40 text-2xl sm:text-4xl font-script">✦</div>
        <div className="absolute -bottom-2 sm:-bottom-4 -left-4 sm:-left-8 text-gold/40 text-2xl sm:text-4xl font-script">✦</div>
        <div className="absolute -bottom-2 sm:-bottom-4 -right-4 sm:-right-8 text-gold/40 text-2xl sm:text-4xl font-script">✦</div>
      </div>
    </div>
  );
};

export default SealedEnvelope;
