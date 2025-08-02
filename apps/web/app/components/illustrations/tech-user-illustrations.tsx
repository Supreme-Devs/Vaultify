export default function TechUserIllustration() {
  return (
    <div className="w-80 h-80 relative">
      <svg viewBox="0 0 300 300" className="w-full h-full">
        {/* Background with halftone */}
        <defs>
          <pattern id="halftone2" patternUnits="userSpaceOnUse" width="4" height="4">
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

        {/* Hands holding device */}
        <circle cx="85" cy="220" r="12" fill="#C4FF00" stroke="black" strokeWidth="3" />
        <circle cx="215" cy="220" r="12" fill="#C4FF00" stroke="black" strokeWidth="3" />

        {/* Device/tablet */}
        <rect x="130" y="210" width="40" height="30" fill="#C4FF00" stroke="black" strokeWidth="3" rx="5" />
        <rect x="135" y="215" width="30" height="20" fill="white" stroke="black" strokeWidth="1" />

        {/* Head */}
        <circle cx="150" cy="120" r="40" fill="#C4FF00" stroke="black" strokeWidth="3" />

        {/* Hair/headphones */}
        <path d="M110 100 Q120 80 150 85 Q180 80 190 100" fill="black" stroke="black" strokeWidth="3" />
        <circle cx="110" cy="110" r="8" fill="black" />
        <circle cx="190" cy="110" r="8" fill="black" />

        {/* Face - happy expression */}
        <circle cx="135" cy="115" r="3" fill="black" />
        <circle cx="165" cy="115" r="3" fill="black" />
        <path d="M135 130 Q150 140 165 130" stroke="black" strokeWidth="3" fill="none" />

        {/* Halftone pattern overlay */}
        <rect x="0" y="0" width="300" height="300" fill="url(#halftone2)" opacity="0.3" />
      </svg>
    </div>
  )
}
