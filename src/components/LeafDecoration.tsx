interface LeafDecorationProps {
  position?: 'left' | 'right' | 'both';
  className?: string;
}

export default function LeafDecoration({ position = 'both', className = '' }: LeafDecorationProps) {
  const leafSvg = (flip: boolean = false) => (
    <svg
      width="180"
      height="300"
      viewBox="0 0 180 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: flip ? 'scaleX(-1)' : undefined }}
      className="opacity-20"
    >
      {/* Main branch */}
      <path
        d="M90 280 C85 240, 70 200, 60 160 C50 120, 55 80, 70 40 C75 25, 80 15, 85 10"
        stroke="rgb(35, 56, 30)"
        strokeWidth="2"
        fill="none"
      />
      {/* Leaf 1 */}
      <path
        d="M70 40 C50 35, 30 50, 20 70 C30 55, 50 45, 70 40"
        fill="rgb(35, 56, 30)"
        opacity="0.6"
      />
      {/* Leaf 2 */}
      <path
        d="M65 80 C45 75, 25 90, 15 110 C25 95, 45 85, 65 80"
        fill="rgb(60, 90, 50)"
        opacity="0.5"
      />
      {/* Leaf 3 */}
      <path
        d="M60 120 C40 115, 20 130, 10 150 C20 135, 40 125, 60 120"
        fill="rgb(35, 56, 30)"
        opacity="0.4"
      />
      {/* Leaf 4 */}
      <path
        d="M58 160 C38 155, 18 170, 8 190 C18 175, 38 165, 58 160"
        fill="rgb(60, 90, 50)"
        opacity="0.5"
      />
      {/* Right side leaves */}
      <path
        d="M75 60 C95 55, 115 70, 125 90 C115 75, 95 65, 75 60"
        fill="rgb(90, 120, 75)"
        opacity="0.4"
      />
      <path
        d="M63 100 C83 95, 103 110, 113 130 C103 115, 83 105, 63 100"
        fill="rgb(35, 56, 30)"
        opacity="0.5"
      />
      <path
        d="M60 140 C80 135, 100 150, 110 170 C100 155, 80 145, 60 140"
        fill="rgb(60, 90, 50)"
        opacity="0.4"
      />
      {/* Small accent leaves */}
      <path
        d="M72 50 C62 42, 48 48, 42 58 C50 50, 62 46, 72 50"
        fill="rgb(90, 120, 75)"
        opacity="0.6"
      />
      <path
        d="M68 90 C58 82, 44 88, 38 98 C46 90, 58 86, 68 90"
        fill="rgb(35, 56, 30)"
        opacity="0.45"
      />
    </svg>
  );

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {(position === 'left' || position === 'both') && (
        <div
          className="absolute -left-4 top-0"
          style={{ animation: 'sway 6s ease-in-out infinite' }}
        >
          {leafSvg(false)}
        </div>
      )}
      {(position === 'right' || position === 'both') && (
        <div
          className="absolute -right-4 top-0"
          style={{ animation: 'sway 7s ease-in-out infinite reverse' }}
        >
          {leafSvg(true)}
        </div>
      )}
    </div>
  );
}
