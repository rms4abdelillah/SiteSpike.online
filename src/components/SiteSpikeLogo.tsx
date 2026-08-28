interface SiteSpikeLogoProps {
  className?: string;
  showText?: boolean;
  showTagline?: boolean;
  iconSize?: number;
  size?: 'sm' | 'md' | 'lg';
  lightText?: boolean;
}

export default function SiteSpikeLogo({
  className = '',
  showText = true,
  showTagline = false,
  iconSize,
  size = 'md',
  lightText = true,
}: SiteSpikeLogoProps) {
  const computedIconSize = iconSize || (size === 'sm' ? 28 : size === 'lg' ? 44 : 36);

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* SiteSpike Mountain + Cyan Surge + Green Arrow Logo Icon */}
      <svg
        width={computedIconSize}
        height={computedIconSize}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 group-hover:scale-105"
      >
        <defs>
          <linearGradient id="spikeCyanGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#38BDF8" />
          </linearGradient>
          <linearGradient id="spikeGreenGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#22C55E" />
          </linearGradient>
          <linearGradient id="mountainDark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#334155" />
            <stop offset="100%" stopColor="#1E293B" />
          </linearGradient>
          <linearGradient id="mountainLight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#475569" />
            <stop offset="100%" stopColor="#334155" />
          </linearGradient>
          <filter id="spikeGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Mountain Left Facet (Dark Slate) */}
        <path
          d="M10 82L44 26L48 40L28 74L10 82Z"
          fill="url(#mountainLight)"
        />

        {/* Mountain Right Base (Slate 800/700) */}
        <path
          d="M48 40L62 14L86 82L44 82L52 64L38 68L48 40Z"
          fill="url(#mountainDark)"
        />

        {/* Mountain Secondary Peak/Shadow */}
        <path
          d="M28 74L44 82L86 82L66 82L52 64L28 74Z"
          fill="#1E293B"
          opacity="0.8"
        />

        {/* Electric Cyan Lightning Surge Bolt */}
        <path
          d="M18 78L40 38L34 52L54 22L44 48L64 26L52 60L42 56L32 76L18 78Z"
          fill="url(#spikeCyanGrad)"
          filter="url(#spikeGlow)"
        />

        {/* Cyan Main Dynamic Bolt */}
        <polygon
          points="20,76 42,34 36,46 54,20 46,44 60,26 48,60 36,54 26,76"
          fill="url(#spikeCyanGrad)"
        />

        {/* Vibrant Lime/Emerald Growth Arrow */}
        {/* Arrow Shaft */}
        <path
          d="M46 44L72 14"
          stroke="url(#spikeGreenGrad)"
          strokeWidth="6.5"
          strokeLinecap="round"
        />
        {/* Arrow Head */}
        <path
          d="M56 12L76 10L78 30L68 20L56 12Z"
          fill="url(#spikeGreenGrad)"
        />
        <polygon
          points="54,12 80,8 82,34 70,22"
          fill="#22C55E"
        />
      </svg>

      {/* Brand Typography */}
      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center tracking-tight font-bold">
            <span
              className={`text-xl sm:text-2xl font-bold font-heading ${
                lightText ? 'text-white' : 'text-[#0B1120]'
              }`}
            >
              Site<span className="text-[#10B981]">Spike</span>
            </span>
          </div>
          {showTagline && (
            <span className="text-[9px] sm:text-[10px] font-semibold tracking-widest text-[#10B981] uppercase -mt-0.5">
              Web Design & Digital Growth
            </span>
          )}
        </div>
      )}
    </div>
  );
}
