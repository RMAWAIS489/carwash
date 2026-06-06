import { useEffect, useRef, useState } from 'react';

export function useCountUp(target, duration = 1800, inView = false) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;

    // Extract numeric part and suffix (e.g. "50+" → 50, "+")
    const numeric = parseFloat(target);
    const suffix = target.toString().replace(/[0-9.]/g, '');

    let startTime = null;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * numeric));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(numeric);
    };

    requestAnimationFrame(step);
  }, [inView, target, duration]);

  const numeric = parseFloat(target);
  const suffix = target.toString().replace(/[0-9.]/g, '');
  return `${count}${suffix}`;
}
