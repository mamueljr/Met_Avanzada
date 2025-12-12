import { useState, useEffect } from 'react';

/**
 * A custom hook that provides the vertical scroll position, throttled for performance.
 * @param {number} delay - The delay in milliseconds to throttle the scroll event. Defaults to 10ms.
 * @returns {number} The current vertical scroll position (scrollY).
 */
export const useThrottledScroll = (delay = 10): number => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let isThrottled = false;

    const handleScroll = () => {
      if (!isThrottled) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          isThrottled = false;
        });
        isThrottled = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // No dependencies needed, runs once on mount

  return scrollY;
};