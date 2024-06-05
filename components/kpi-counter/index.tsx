import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

interface KpiCounterProps {
  target: number;
  decimals?: number; 
}

const KpiCounter: React.FC<KpiCounterProps> = ({ target, decimals = 0 }) => {
  const [ref, inView] = useInView({ triggerOnce: true });
  const [count, setCount] = useState<number>(0);

  const { number } = useSpring({
    number: inView ? target : 0,
    from: { number: 0 },
    config: { duration: 1000 },
    onRest: () => setCount(target),
  });

  useEffect(() => {
    if (inView) {
      setCount(target);
    }
  }, [inView, target]);

  return (
    <span ref={ref}>
      <animated.span>{number.to(n => n.toFixed(decimals))}</animated.span>
    </span>
  );
};

export default KpiCounter;
