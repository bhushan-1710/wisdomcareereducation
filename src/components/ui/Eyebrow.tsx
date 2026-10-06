import React from 'react';

export interface EyebrowProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}

export function Eyebrow({ children, className = '', light = false, ...props }: EyebrowProps) {
  const colorClass = light ? 'text-wce-coral-400' : 'text-wce-coral-800';

  return (
    <p
      className={`text-[12px] font-semibold tracking-[0.08em] uppercase ${colorClass} ${className}`}
      {...props}
    >
      {children}
    </p>
  );
}
