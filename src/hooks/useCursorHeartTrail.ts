import { useEffect, useCallback, useRef } from 'react';

export const useCursorHeartTrail = (enabled: boolean = true) => {
  const lastPosition = useRef({ x: 0, y: 0 });
  const throttleRef = useRef(false);

  const createHeart = useCallback((x: number, y: number) => {
    if (!enabled) return;
    
    const heart = document.createElement('div');
    heart.innerHTML = '💕';
    heart.className = 'heart-trail fixed text-lg pointer-events-none z-50';
    heart.style.left = `${x - 10}px`;
    heart.style.top = `${y - 10}px`;
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 800);
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;

    const handleMouseMove = (e: MouseEvent) => {
      const distance = Math.sqrt(
        Math.pow(e.clientX - lastPosition.current.x, 2) +
        Math.pow(e.clientY - lastPosition.current.y, 2)
      );

      if (distance > 50 && !throttleRef.current) {
        throttleRef.current = true;
        createHeart(e.clientX, e.clientY);
        lastPosition.current = { x: e.clientX, y: e.clientY };
        
        setTimeout(() => {
          throttleRef.current = false;
        }, 100);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [enabled, createHeart]);
};
