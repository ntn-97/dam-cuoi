import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import type { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'none';
}

export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: AnimatedSectionProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const getInitial = () => ({
    opacity: 0,
    y: direction === 'up' ? 40 : 0,
    x: direction === 'left' ? -50 : direction === 'right' ? 50 : 0,
  });

  const getAnimate = () => ({
    opacity: inView ? 1 : 0,
    y: inView ? 0 : direction === 'up' ? 40 : 0,
    x: inView ? 0 : direction === 'left' ? -50 : direction === 'right' ? 50 : 0,
  });

  return (
    <motion.div
      ref={ref}
      initial={getInitial()}
      animate={getAnimate()}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
