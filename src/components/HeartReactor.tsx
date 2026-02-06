import { useEffect, useState } from 'react';

const HeartReactor = () => {
  const [hearts, setHearts] = useState<Array<{ id: number; left: number; delay: number; duration: number; size: number }>>([]);

  useEffect(() => {
    let idCounter = 0;
    
    const createHeart = () => {
      const newHeart = {
        id: idCounter++,
        left: Math.random() * 100,
        delay: 0,
        duration: 4 + Math.random() * 3,
        size: 0.5 + Math.random() * 1.5
      };

      setHearts(prev => [...prev, newHeart]);

      // Remove heart after animation completes
      setTimeout(() => {
        setHearts(prev => prev.filter(h => h.id !== newHeart.id));
      }, newHeart.duration * 1000);
    };

    // Create hearts periodically
    const interval = setInterval(createHeart, 500);

    // Initial burst
    for (let i = 0; i < 5; i++) {
      setTimeout(createHeart, i * 100);
    }

    return () => clearInterval(interval);
  }, []);

  const heartEmojis = ['💕', '💖', '💗', '💓', '💝', '❤️', '💘'];

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
