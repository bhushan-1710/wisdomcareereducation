import React from 'react';

export type BadgeVariant = 'chip' | 'coral' | 'navy' | 'sticker';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

export function Badge({
  children,
  variant = 'chip',
  className = '',
  ...props
}: BadgeProps) {
  let variantStyles = '';

  switch (variant) {
    case 'chip':
      variantStyles =
        'bg-wce-blue-100 text-wce-navy-900 border border-wce-blue-100 font-medium px-3 py-1 rounded-full text-[13px]';
      break;
    case 'coral':
      variantStyles =
        'bg-wce-coral-100 text-wce-coral-800 border border-wce-coral-100 font-semibold px-3 py-1 rounded-full text-[13px]';
      break;
    case 'navy':
      variantStyles =
        'bg-wce-navy-900 text-wce-white font-medium px-3 py-1 rounded-full text-[13px]';
      break;
    case 'sticker':
      variantStyles =
        'w-24 h-24 rounded-full bg-wce-ink text-wce-white text-[12px] font-bold uppercase tracking-wider flex items-center justify-center text-center p-2 shadow-wce-md border-2 border-wce-white select-none';
      break;
  }

  return (
    <span
      className={`inline-flex items-center justify-center leading-none ${variantStyles} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
