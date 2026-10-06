import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  interactive?: boolean;
  elevation?: 'sm' | 'md' | 'float';
  className?: string;
}

export function Card({
  children,
  interactive = false,
  elevation = 'sm',
  className = '',
  ...props
}: CardProps) {
  let elevationClass = 'shadow-wce-sm';
  if (elevation === 'md') elevationClass = 'shadow-wce-md';
  if (elevation === 'float') elevationClass = 'shadow-wce-float';

  const interactiveClasses = interactive
    ? 'cursor-pointer transition-all duration-320 hover:-translate-y-2 hover:shadow-wce-float'
    : 'transition-shadow duration-320';

  return (
    <div
      className={`rounded-[20px] border border-wce-slate-300 bg-wce-white p-6 ${elevationClass} ${interactiveClasses} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
