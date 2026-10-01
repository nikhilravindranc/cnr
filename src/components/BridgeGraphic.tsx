/**
 * Fills its parent completely (like `object-fit: cover`) via an SVG with a
 * wide viewBox and `slice` preservation — an abstract stand-in for
 * architectural photography, echoing the brand's illustrative style.
 */
export default function BridgeGraphic() {
  return (
    <svg
      viewBox="0 0 600 500"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 h-full w-full"
      aria-hidden
    >
      <defs>
        <linearGradient id="bridge-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0a1628" />
          <stop offset="45%" stopColor="#3a5a86" />
          <stop offset="100%" stopColor="#a9c4e0" />
        </linearGradient>
        <linearGradient id="bridge-deck" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e9ecef" />
          <stop offset="100%" stopColor="#c7ccd1" />
        </linearGradient>
      </defs>

      <rect width="600" height="500" fill="url(#bridge-sky)" />
      <circle cx="560" cy="360" r="320" fill="#0a1628" />
      <circle cx="560" cy="360" r="320" fill="none" stroke="#ffffff" strokeOpacity="0.15" strokeWidth="1.5" />
      <circle cx="560" cy="360" r="255" fill="none" stroke="#ffffff" strokeOpacity="0.12" strokeWidth="1.5" />

      <polygon points="0,500 0,300 260,150 340,230 130,500" fill="url(#bridge-deck)" opacity="0.92" />
      <polygon points="130,500 340,230 420,300 260,500" fill="url(#bridge-deck)" opacity="0.7" />

      <line x1="250" y1="175" x2="250" y2="500" stroke="#1b2432" strokeOpacity="0.35" strokeWidth="3" />
      <line x1="330" y1="240" x2="330" y2="500" stroke="#1b2432" strokeOpacity="0.35" strokeWidth="3" />
      <line x1="410" y1="305" x2="410" y2="500" stroke="#1b2432" strokeOpacity="0.3" strokeWidth="3" />
    </svg>
  );
}
