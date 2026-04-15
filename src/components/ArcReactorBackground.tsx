const ArcReactorBackground = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 flex items-center justify-center">
      <div className="relative h-[28rem] w-[28rem] md:h-[34rem] md:w-[34rem] opacity-35">
        <svg
          viewBox="0 0 600 600"
          className="h-full w-full"
          role="img"
          aria-label="Futuristic arc reactor background"
        >
          <defs>
            <radialGradient id="reactorCoreGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#7ee8ff" stopOpacity="0.95" />
              <stop offset="38%" stopColor="#4cb9ff" stopOpacity="0.7" />
              <stop offset="72%" stopColor="#7a78ff" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#070d1d" stopOpacity="0" />
            </radialGradient>

            <linearGradient id="ringStrokeA" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7de3ff" />
              <stop offset="52%" stopColor="#54b5ff" />
              <stop offset="100%" stopColor="#8675ff" />
            </linearGradient>

            <linearGradient id="ringStrokeB" x1="100%" y1="10%" x2="0%" y2="90%">
              <stop offset="0%" stopColor="#71d5ff" />
              <stop offset="45%" stopColor="#5f9dff" />
              <stop offset="100%" stopColor="#9a7cff" />
            </linearGradient>

            <linearGradient id="triFill" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#84f0ff" stopOpacity="0.9" />
              <stop offset="52%" stopColor="#5fbeff" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#7f7bff" stopOpacity="0.42" />
            </linearGradient>

            <filter id="softOuterGlow" x="-120%" y="-120%" width="340%" height="340%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <filter id="coreBloom" x="-200%" y="-200%" width="500%" height="500%">
              <feGaussianBlur stdDeviation="22" result="soft" />
              <feColorMatrix
                in="soft"
                type="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"
              />
            </filter>
          </defs>

          <g>
            <circle cx="300" cy="300" r="210" fill="url(#reactorCoreGlow)" opacity="0.35" />
            <circle cx="300" cy="300" r="160" fill="url(#reactorCoreGlow)" opacity="0.28" />
          </g>

          <g filter="url(#coreBloom)">
            <circle cx="300" cy="300" r="58" fill="#6be3ff" opacity="0.42" />
          </g>

          <g filter="url(#softOuterGlow)" fill="none" strokeLinecap="round">
            <circle cx="300" cy="300" r="214" stroke="url(#ringStrokeA)" strokeWidth="3.8" opacity="0.7" />

            <path d="M 300 80 A 220 220 0 0 1 496 201" stroke="url(#ringStrokeB)" strokeWidth="4" opacity="0.85" />
            <path d="M 536 300 A 236 236 0 0 1 431 494" stroke="url(#ringStrokeA)" strokeWidth="3.6" opacity="0.72" />
            <path d="M 161 498 A 232 232 0 0 1 70 298" stroke="url(#ringStrokeB)" strokeWidth="3.6" opacity="0.7" />
            <path d="M 124 168 A 218 218 0 0 1 248 86" stroke="url(#ringStrokeA)" strokeWidth="3.2" opacity="0.78" />

            <circle cx="300" cy="300" r="170" stroke="url(#ringStrokeB)" strokeWidth="2.8" opacity="0.56" />
            <path d="M 300 138 A 162 162 0 0 1 449 247" stroke="url(#ringStrokeA)" strokeWidth="3" opacity="0.74" />
            <path d="M 445 364 A 156 156 0 0 1 321 454" stroke="url(#ringStrokeB)" strokeWidth="2.8" opacity="0.65" />
            <path d="M 209 432 A 154 154 0 0 1 152 296" stroke="url(#ringStrokeA)" strokeWidth="2.8" opacity="0.64" />
            <path d="M 170 215 A 152 152 0 0 1 260 147" stroke="url(#ringStrokeB)" strokeWidth="2.6" opacity="0.62" />

            <circle cx="300" cy="300" r="122" stroke="url(#ringStrokeA)" strokeWidth="2.6" opacity="0.52" />
          </g>

          <g strokeLinecap="round" fill="none" opacity="0.5">
            <path d="M 300 99 L 300 120" stroke="#7fdfff" strokeWidth="2.4" />
            <path d="M 501 300 L 480 300" stroke="#73cfff" strokeWidth="2.4" />
            <path d="M 300 501 L 300 480" stroke="#7fdfff" strokeWidth="2.4" />
            <path d="M 99 300 L 120 300" stroke="#73cfff" strokeWidth="2.4" />
          </g>

          <g filter="url(#softOuterGlow)">
            <polygon
              points="300,222 358,335 242,335"
              fill="url(#triFill)"
              stroke="#83e7ff"
              strokeWidth="3.4"
              opacity="0.9"
            />
            <polygon
              points="300,244 340,325 260,325"
              fill="#6dbfff"
              fillOpacity="0.2"
              stroke="#9ae9ff"
              strokeWidth="2.3"
              opacity="0.92"
            />
            <polygon
              points="300,266 325,318 275,318"
              fill="#86edff"
              fillOpacity="0.35"
              stroke="#b0f3ff"
              strokeWidth="1.8"
              opacity="0.9"
            />

            <circle cx="300" cy="300" r="10" fill="#c3f8ff" opacity="0.95" />
            <circle cx="300" cy="300" r="24" fill="#86e8ff" opacity="0.2" />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default ArcReactorBackground;