import './Logo.css';

// The 3D-CUSTOM symbol: two charcoal bands and a blue middle band.
// On dark backgrounds the charcoal turns white and the blue lightens.
export function LogoSymbol({ size = 32, onDark = false, title }) {
  const ink = onDark ? '#FFFFFF' : 'var(--c-dark)';
  const blue = onDark ? 'var(--c-blue-accent)' : 'var(--c-blue)';
  return (
    <svg
      className="logo-symbol"
      width={(size * 68) / 84}
      height={size}
      viewBox="16 8 68 84"
      xmlns="http://www.w3.org/2000/svg"
      role={title ? 'img' : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : 'true'}
    >
      <path d="M16 8 H42 A42 42 0 0 1 79.10 30.32 H16 Z" fill={ink} />
      <path d="M29.8 38.84 H82.49 A42 42 0 0 1 82.49 61.16 H29.8 Z" fill={blue} />
      <path d="M16 69.68 H79.10 A42 42 0 0 1 42 92 H16 Z" fill={ink} />
    </svg>
  );
}

// Horizontal lockup: symbol + wordmark.
function Logo({ size = 32, onDark = false }) {
  return (
    <span
      className={onDark ? 'logo logo--on-dark' : 'logo'}
      style={{ '--logo-size': `${size}px` }}
    >
      <LogoSymbol size={size} onDark={onDark} />
      <span className="logo__wordmark">3D-CUSTOM</span>
    </span>
  );
}

export default Logo;
