import { useEffect, useState } from 'react';

export function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let rafId: number;
    let currentY = 0;

    const handleScroll = () => {
      currentY = window.scrollY;
    };

    const update = () => {
      setScrollY(currentY);
      rafId = requestAnimationFrame(update);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    rafId = requestAnimationFrame(update);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return scrollY;
}
