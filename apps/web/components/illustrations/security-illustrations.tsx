export default function SecurityIllustration() {
  return (
    <div className="w-80 h-80 relative">
      <svg viewBox="0 0 300 300" className="w-full h-full">
        {/* Background circle with halftone pattern */}
        <defs>
          <pattern id="halftone" patternUnits="userSpaceOnUse" width="4" height="4">
            <circle cx="2" cy="2" r="1" fill="black" opacity="0.3" />
          </pattern>
        </defs>

        {/* Body */}
        <ellipse cx="150" cy="250" rx="60" ry="40" fill="#C4FF00" stroke="black" strokeWidth="3" />

        {/* Torso */}
        <rect x="120" y="180" width="60" height="80" fill="#C4FF00" stroke="black" strokeWidth="3" rx="10" />

        {/* Arms */}
        <ellipse cx="100" cy="200" rx="15" ry="40" fill="#C4FF00" stroke="black" strokeWidth="3" />
        <ellipse cx="200" cy="200" rx="15" ry="40" fill="#C4FF00" stroke="black" strokeWidth="3" />

        {/* Hands holding shield */}
        <circle cx="85" cy="220" r="12" fill="#C4FF00" stroke="black" strokeWidth="3" />
        <circle cx="215" cy="220" r="12" fill="#C4FF00" stroke="black" strokeWidth="3" />

        {/* Shield in center */}
        <path
          d="M150 200 L130 210 L130 240 L150 250 L170 240 L170 210 Z"
          fill="#C4FF00"
          stroke="black"
          strokeWidth="3"
        />
        <path d="M150 210 L140 215 L140 235 L150 240 L160 235 L160 215 Z" fill="none" stroke="black" strokeWidth="2" />

        {/* Head */}
        <circle cx="150" cy="120" r="40" fill="#C4FF00" stroke="black" strokeWidth="3" />

        {/* Hair */}
        <path d="M110 100 Q120 80 150 85 Q180 80 190 100 Q185 90 150 95 Q115 90 110 100" fill="black" />

        {/* Face */}
        <circle cx="135" cy="115" r="3" fill="black" />
        <circle cx="165" cy="115" r="3" fill="black" />
        <path d="M140 130 Q150 135 160 130" stroke="black" strokeWidth="2" fill="none" />

        {/* Halftone pattern overlay */}
        <rect x="0" y="0" width="300" height="300" fill="url(#halftone)" opacity="0.3" />
      </svg>
    </div>
  )
}
