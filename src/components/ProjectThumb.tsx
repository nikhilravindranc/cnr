type Variant =
  | "evoq"
  | "archiron"
  | "trident"
  | "mobilesync"
  | "alaska"
  | "lumiere"
  | "socialdna"
  | "kalatrace"
  | "sosholdings"
  | "eftmra"
  | "ovidmedia"
  | "melrose";

/**
 * Abstract, brand-agnostic stand-ins for case-study imagery — gradients and
 * simple shapes evoking each project's domain, deliberately without any
 * wordmarks or logos.
 */
export default function ProjectThumb({ variant }: { variant: Variant }) {
  switch (variant) {
    case "evoq":
      // Brand colors sampled from evoq.one: indigo→violet gradient with a magenta glow.
      return (
        <svg viewBox="0 0 300 400" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full">
          <defs>
            <linearGradient id="evoq-g" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#4B3FC4" />
              <stop offset="55%" stopColor="#6D3FD6" />
              <stop offset="100%" stopColor="#9333EA" />
            </linearGradient>
            <radialGradient id="evoq-glow" cx="65%" cy="55%" r="55%">
              <stop offset="0%" stopColor="#F2F2FF" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#F2F2FF" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="300" height="400" fill="url(#evoq-g)" />
          <rect width="300" height="400" fill="url(#evoq-glow)" />
          <rect x="35" y="250" width="60" height="150" rx="12" fill="#ffffff" opacity="0.16" />
          <rect x="120" y="210" width="60" height="190" rx="12" fill="#ffffff" opacity="0.22" />
          <rect x="205" y="270" width="60" height="130" rx="12" fill="#ffffff" opacity="0.16" />
        </svg>
      );
    case "archiron":
      // Brand colors sampled from archirondesign.com: near-black with a warm terracotta accent.
      return (
        <svg viewBox="0 0 300 400" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full">
          <defs>
            <linearGradient id="arch-g" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#EFDFD6" />
              <stop offset="60%" stopColor="#9B614B" />
              <stop offset="100%" stopColor="#1A1817" />
            </linearGradient>
          </defs>
          <rect width="300" height="400" fill="url(#arch-g)" />
          <path d="M60 400V220a90 90 0 0 1 180 0v180" fill="none" stroke="#ffffff" strokeOpacity="0.45" strokeWidth="10" />
          <rect x="120" y="300" width="60" height="100" fill="#ffffff" opacity="0.12" />
        </svg>
      );
    case "trident":
      // Brand colors sampled from tridentmea.com: deep navy to cyan.
      return (
        <svg viewBox="0 0 300 400" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full">
          <defs>
            <linearGradient id="trident-g" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0A1628" />
              <stop offset="55%" stopColor="#003060" />
              <stop offset="100%" stopColor="#009CD9" />
            </linearGradient>
          </defs>
          <rect width="300" height="400" fill="url(#trident-g)" />
          <polygon points="70,400 70,150 150,60 150,400" fill="#ffffff" opacity="0.1" />
          <polygon points="150,400 150,90 230,180 230,400" fill="#ffffff" opacity="0.16" />
          <line x1="150" y1="60" x2="150" y2="400" stroke="#ffffff" strokeOpacity="0.3" strokeWidth="2" />
        </svg>
      );
    case "mobilesync":
      // Brand colors sampled from 365mobilesync.com: bright orange over near-black.
      return (
        <svg viewBox="0 0 300 400" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full">
          <defs>
            <linearGradient id="sync-g" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#1a1a1a" />
              <stop offset="100%" stopColor="#2b2b2b" />
            </linearGradient>
            <linearGradient id="sync-wave" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#EA5300" />
              <stop offset="100%" stopColor="#ED6200" />
            </linearGradient>
          </defs>
          <rect width="300" height="400" fill="url(#sync-g)" />
          <path d="M0 260c60-40 90 40 150 0s90-40 150 0v140H0Z" fill="url(#sync-wave)" opacity="0.9" />
          <path d="M0 300c60-30 90 30 150 0s90-30 150 0v100H0Z" fill="url(#sync-wave)" opacity="0.5" />
          <circle cx="150" cy="140" r="46" fill="none" stroke="#ED6200" strokeOpacity="0.7" strokeWidth="6" />
          <path d="M150 108v-14M150 178v-14" stroke="#ED6200" strokeOpacity="0.7" strokeWidth="6" strokeLinecap="round" />
        </svg>
      );
    case "alaska":
      return (
        <svg viewBox="0 0 300 400" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full">
          <defs>
            <linearGradient id="alaska-g" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#7c93ab" />
              <stop offset="55%" stopColor="#3f5a75" />
              <stop offset="100%" stopColor="#1c2e42" />
            </linearGradient>
          </defs>
          <rect width="300" height="400" fill="url(#alaska-g)" />
          <polygon points="0,230 60,150 110,210 160,120 220,210 300,170 300,400 0,400" fill="#ffffff" opacity="0.14" />
          <polygon points="0,260 80,200 150,250 230,190 300,230 300,400 0,400" fill="#ffffff" opacity="0.1" />
        </svg>
      );
    case "lumiere":
      return (
        <svg viewBox="0 0 300 400" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full">
          <defs>
            <linearGradient id="lum-g" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#efe7da" />
              <stop offset="100%" stopColor="#cdbfa8" />
            </linearGradient>
          </defs>
          <rect width="300" height="400" fill="url(#lum-g)" />
          <path d="M-20 260c90-70 150 70 260 10s80-40 80-40v170H-20Z" fill="#ffffff" opacity="0.45" />
          <path d="M-20 310c90-50 150 40 260 0s80-20 80-20v110H-20Z" fill="#8a7a5f" opacity="0.18" />
        </svg>
      );
    case "socialdna":
      // AI-era transformation: deep indigo to teal, a network of connected nodes.
      return (
        <svg viewBox="0 0 300 400" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full">
          <defs>
            <linearGradient id="sdl-g" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#12142b" />
              <stop offset="55%" stopColor="#22306b" />
              <stop offset="100%" stopColor="#1a9c8c" />
            </linearGradient>
          </defs>
          <rect width="300" height="400" fill="url(#sdl-g)" />
          <g stroke="#ffffff" strokeOpacity="0.35" strokeWidth="1.5">
            <line x1="70" y1="120" x2="150" y2="80" />
            <line x1="150" y1="80" x2="230" y2="140" />
            <line x1="70" y1="120" x2="110" y2="220" />
            <line x1="150" y1="80" x2="110" y2="220" />
            <line x1="110" y1="220" x2="200" y2="280" />
            <line x1="230" y1="140" x2="200" y2="280" />
          </g>
          <g fill="#ffffff">
            <circle cx="70" cy="120" r="5" opacity="0.7" />
            <circle cx="150" cy="80" r="6" opacity="0.9" />
            <circle cx="230" cy="140" r="5" opacity="0.7" />
            <circle cx="110" cy="220" r="7" opacity="0.95" />
            <circle cx="200" cy="280" r="5" opacity="0.7" />
          </g>
        </svg>
      );
    case "kalatrace":
      // Gifting & reciprocal networks: green with orbiting nodes.
      return (
        <svg viewBox="0 0 300 400" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full">
          <defs>
            <linearGradient id="kala-g" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4FBF8B" />
              <stop offset="100%" stopColor="#1F7A52" />
            </linearGradient>
          </defs>
          <rect width="300" height="400" fill="url(#kala-g)" />
          <circle cx="150" cy="180" r="70" fill="none" stroke="#ffffff" strokeOpacity="0.45" strokeWidth="2" />
          <circle cx="150" cy="180" r="110" fill="none" stroke="#ffffff" strokeOpacity="0.25" strokeWidth="2" />
          <circle cx="150" cy="110" r="8" fill="#ffffff" opacity="0.9" />
          <circle cx="228" cy="205" r="7" fill="#ffffff" opacity="0.8" />
          <circle cx="90" cy="230" r="6" fill="#ffffff" opacity="0.7" />
        </svg>
      );
    case "sosholdings":
      // Multi-brand conglomerate: SOS Holdings blues (sosholdings.net).
      return (
        <svg viewBox="0 0 300 400" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full">
          <defs>
            <linearGradient id="sos-g" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#00497C" />
              <stop offset="100%" stopColor="#15456B" />
            </linearGradient>
          </defs>
          <rect width="300" height="400" fill="url(#sos-g)" />
          <g fill="#ffffff">
            <rect x="40" y="230" width="60" height="80" opacity="0.14" />
            <rect x="120" y="180" width="60" height="130" opacity="0.2" />
            <rect x="200" y="140" width="60" height="170" opacity="0.16" />
          </g>
        </svg>
      );
    case "eftmra":
      // Training & booking: EFTMRA teal/navy with gold (eftmraindia.com).
      return (
        <svg viewBox="0 0 300 400" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full">
          <defs>
            <linearGradient id="eftmra-g" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4A9DAE" />
              <stop offset="100%" stopColor="#1A3B4C" />
            </linearGradient>
          </defs>
          <rect width="300" height="400" fill="url(#eftmra-g)" />
          <rect x="80" y="150" width="140" height="120" rx="10" fill="none" stroke="#ffffff" strokeOpacity="0.5" strokeWidth="3" />
          <line x1="80" y1="185" x2="220" y2="185" stroke="#ffffff" strokeOpacity="0.5" strokeWidth="3" />
          <line x1="115" y1="140" x2="115" y2="165" stroke="#ffffff" strokeOpacity="0.5" strokeWidth="3" strokeLinecap="round" />
          <line x1="185" y1="140" x2="185" y2="165" stroke="#ffffff" strokeOpacity="0.5" strokeWidth="3" strokeLinecap="round" />
          <circle cx="120" cy="220" r="5" fill="#ffffff" opacity="0.6" />
          <circle cx="150" cy="220" r="5" fill="#ffffff" opacity="0.6" />
          <circle cx="180" cy="220" r="5" fill="#ffffff" opacity="0.6" />
        </svg>
      );
    case "ovidmedia":
      // Brand refresh & media: Ovid navy with orange (ovid-media.com).
      return (
        <svg viewBox="0 0 300 400" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full">
          <defs>
            <linearGradient id="ovid-g" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#132952" />
              <stop offset="100%" stopColor="#0F253E" />
            </linearGradient>
          </defs>
          <rect width="300" height="400" fill="url(#ovid-g)" />
          <polygon points="120,140 200,190 120,240" fill="#F8521F" opacity="0.95" />
          <circle cx="220" cy="120" r="40" fill="#F8521F" opacity="0.18" />
        </svg>
      );
    case "melrose":
      // Heritage brand: Melrose blues with a warm-grey ornamental line (melrose-nl.com).
      return (
        <svg viewBox="0 0 300 400" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full">
          <defs>
            <linearGradient id="mel-g" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0874B4" />
              <stop offset="100%" stopColor="#004669" />
            </linearGradient>
          </defs>
          <rect width="300" height="400" fill="url(#mel-g)" />
          <circle cx="150" cy="200" r="60" fill="none" stroke="#F4F3F0" strokeOpacity="0.6" strokeWidth="2" />
          <circle cx="150" cy="200" r="3" fill="#F4F3F0" />
          <path d="M90 200h20M190 200h20M150 140v20M150 240v20" stroke="#F4F3F0" strokeOpacity="0.5" strokeWidth="2" />
        </svg>
      );
  }
}
