import { useMemo } from 'react';

interface FallingLeavesProps {
  count?: number;
}

export default function FallingLeaves({ count = 12 }: FallingLeavesProps) {
  const leaves = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 8 + Math.random() * 7,
      size: 16 + Math.random() * 20,
      opacity: 0.3 + Math.random() * 0.5,
      variant: Math.random() > 0.5 ? 'fall' : 'fall2',
    }));
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="absolute"
          style={{
            left: `${leaf.left}%`,
            top: '-5%',
            animation: `${leaf.variant} ${leaf.duration}s ease-in-out ${leaf.delay}s infinite`,
            opacity: leaf.opacity,
          }}
        >
          <svg
            width={leaf.size}
            height={leaf.size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.5S2 11.5 2 13.5s1.75 3.75 1.75 3.75"
              fill="rgb(35, 56, 30)"
              opacity="0.7"
            />
          </svg>
        </div>
      ))}
    </div>
  );
}
