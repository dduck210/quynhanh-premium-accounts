const OUTER_PETALS = [0, 45, 90, 135, 180, 225, 270, 315];
const INNER_PETALS = [22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5];
const STAMENS     = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];

export default function LogoMark({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-115 -115 230 230"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="qa-petal" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#E69AB8" />
          <stop offset="1" stopColor="#F3C4D6" />
        </linearGradient>
      </defs>

      {OUTER_PETALS.map((r) => (
        <path
          key={r}
          transform={`rotate(${r})`}
          d="M0,0 C -16,-38 -13,-86 0,-108 C 13,-86 16,-38 0,0 Z"
          fill="url(#qa-petal)"
          stroke="#C27CA2"
          strokeWidth="1.3"
          strokeOpacity="0.7"
          opacity="0.95"
        />
      ))}

      {INNER_PETALS.map((r) => (
        <path
          key={r}
          transform={`rotate(${r})`}
          d="M0,0 C -19,-26 -15,-62 0,-82 C 15,-62 19,-26 0,0 Z"
          fill="url(#qa-petal)"
          stroke="#B96E96"
          strokeWidth="1.2"
          strokeOpacity="0.8"
        />
      ))}

      {STAMENS.map((r) => (
        <g key={r} transform={`rotate(${r})`}>
          <path d="M0,-2 Q 3,-20 1,-34" fill="none" stroke="#BC7398" strokeWidth="1.3" strokeLinecap="round" />
          <circle cx="1" cy="-34" r="3" fill="#E0B873" />
        </g>
      ))}

      <circle r="9" fill="#F5DFA8" stroke="#D9A86A" strokeWidth="1.2" />
    </svg>
  );
}
