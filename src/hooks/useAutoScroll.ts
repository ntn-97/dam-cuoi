import { useEffect, useRef, useCallback } from 'react';

export function useAutoScroll(isActive: boolean, delayMs: number = 15000) {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const scrollIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isAutoScrollingRef = useRef(false);

  const stopAutoScroll = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    if (scrollIntervalRef.current) {
      clearInterval(scrollIntervalRef.current);
      scrollIntervalRef.current = null;
    }
    isAutoScrollingRef.current = false;
  }, []);

  const startAutoScroll = useCallback(() => {
    stopAutoScroll();
    isAutoScrollingRef.current = true;

    scrollIntervalRef.current = setInterval(() => {
      // Use clientHeight instead of innerHeight — more stable on iOS (address bar)
      const viewportHeight = document.documentElement.clientHeight;
      const fullHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight
      );
      const maxScroll = fullHeight - viewportHeight;
      // pageYOffset is more compatible with older iOS than scrollY
      const currentScroll = window.pageYOffset ?? document.documentElement.scrollTop;

      if (currentScroll >= maxScroll - 10) {
        stopAutoScroll();
        return;
      }
      // Use (x, y) form instead of options object — works on all iOS Safari versions
      window.scrollBy(0, 2);
    }, 30);
  }, [stopAutoScroll]);

  useEffect(() => {
    if (!isActive) return;

    // Only interrupt auto-scroll if it's ALREADY running.
    // This prevents a touch during the delay period from blocking the auto-scroll start.
    const handleUserInteraction = () => {
      if (isAutoScrollingRef.current) {
        stopAutoScroll();
      }
    };

    // Always start the timer — ignore any touches that happen before it fires
    timerRef.current = setTimeout(() => {
      startAutoScroll();
    }, delayMs);

    window.addEventListener('wheel', handleUserInteraction, { passive: true });
    window.addEventListener('touchstart', handleUserInteraction, { passive: true });
    window.addEventListener('touchmove', handleUserInteraction, { passive: true });

    return () => {
      stopAutoScroll();
      window.removeEventListener('wheel', handleUserInteraction);
      window.removeEventListener('touchstart', handleUserInteraction);
      window.removeEventListener('touchmove', handleUserInteraction);
    };
  }, [isActive, delayMs, startAutoScroll, stopAutoScroll]);
}
