import { useEffect, useState, useCallback } from 'react';

const HeartReactor = () => {
  const [hearts, setHearts] = useState<Array<{ id: number; left: number; delay: number; duration: number; size: number }>>([]);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const createHeart = useCallback(() => {
    const newHeart = {
      id: Date.now() + Math.random(),
      left: Math.random() * 100,
      delay: 0,
      duration: 4 + Math.random() * 3,
      size: 0.5 + Math.random() * 1.5
    };

    setHearts(prev => {
      // Limit max hearts on screen - fewer on mobile
      const maxHearts = isMobile ? 5 : 15;
      const updated = [...prev, newHeart];
      return updated.length > maxHearts ? updated.slice(1) : updated;
    });

    // Remove heart after animation completes
    setTimeout(() => {
      setHearts(prev => prev.filter(h => h.id !== newHeart.id));
    }, newHeart.duration * 1000);
  }, [isMobile]);

  useEffect(() => {
    // Skip heart creation on mobile to reduce lag
    if (isMobile) return;

    // Create hearts less frequently - every 2 seconds instead of 1
    const interval = setInterval(createHeart, 2000);

    // Initial burst with fewer hearts
    for (let i = 0; i < 3; i++) {
      setTimeout(createHeart, i * 150);
    }

    return () => clearInterval(interval);
  }, [createHeart, isMobile]);

  const heartEmojis = ['💕', '💖', '💗', '💓', '💝', '❤️', '💘'];

  // CSS-based hearts for mobile
  if (isMobile) {
    return (
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
        {/* Static CSS animation hearts for mobile - no JS overhead */}
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="floating-heart-css absolute bottom-0 text-2xl"
            style={{
              left: `${(i + 1) * 20}%`,
              animationDelay: `${i * 1.2}s`
            }}
          >
            {heartEmojis[i % heartEmojis.length]}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {hearts.map(heart => (
        <div
          key={heart.id}
          className="floating-heart absolute bottom-0 text-2xl"
          style={{
            left: `${heart.left}%`,
            '--duration': `${heart.duration}s`,
            '--delay': `${heart.delay}s`,
            transform: `scale(${heart.size})`
          } as React.CSSProperties}
        >
          {heartEmojis[Math.floor(Math.random() * heartEmojis.length)]}
        </div>
      ))}
    </div>
  );
};

export default HeartReactor;
