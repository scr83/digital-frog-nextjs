interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export function Logo({ className = '', size = 'md', showText = true }: LogoProps) {
  const sizes = {
    sm: { icon: 28, text: 'text-lg' },
    md: { icon: 36, text: 'text-xl' },
    lg: { icon: 48, text: 'text-2xl' },
  };

  const { icon, text } = sizes[size];

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Logo Image */}
      <img
        src="/Logo-Digital-Frog.png"
        alt="Digital Frog Logo"
        width={icon}
        height={icon}
        className="shrink-0"
      />

      {/* Text */}
      {showText && (
        <span className={`font-bold ${text} text-gradient`}>
          Digital Frog
        </span>
      )}
    </div>
  );
}

// Alternative: Icon-only version
export function LogoIcon({ size = 32, className = '' }: { size?: number; className?: string }) {
  return (
    <img
      src="/Logo-Digital-Frog.png"
      alt="Digital Frog Logo"
      width={size}
      height={size}
      className={className}
    />
  );
}
