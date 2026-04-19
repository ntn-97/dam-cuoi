import { useEffect, useRef, useCallback } from 'react';

export function useAutoScroll(isActive: boolean, delayMs: number = 15000) {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const scrollIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const userScrolledRef = useRef(false);

  const stopAutoScroll = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    if (scrollIntervalRef.current) {
      clearInterval(scrollIntervalRef.current);
      scrollIntervalRef.current = null;
    }
  }, []);

  const startAutoScroll = useCallback(() => {
    stopAutoScroll();

    scrollIntervalRef.current = setInterval(() => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (window.scrollY >= maxScroll - 10) {
        stopAutoScroll();
        return;
      }
      window.scrollBy({ top: 2, behavior: 'auto' });
    }, 30);
  }, [stopAutoScroll]);

  useEffect(() => {
    if (!isActive) return;

    const handleUserScroll = () => {
      if (!userScrolledRef.current) {
        userScrolledRef.current = true;
        stopAutoScroll();
      }
    };

    // Start timer for auto-scroll
    timerRef.current = setTimeout(() => {
      if (!userScrolledRef.current) {
        startAutoScroll();
      }
    }, delayMs);

    window.addEventListener('wheel', handleUserScroll, { passive: true });
    window.addEventListener('touchmove', handleUserScroll, { passive: true });

    return () => {
      stopAutoScroll();
      window.removeEventListener('wheel', handleUserScroll);
      window.removeEventListener('touchmove', handleUserScroll);
    };
  }, [isActive, delayMs, startAutoScroll, stopAutoScroll]);
}
