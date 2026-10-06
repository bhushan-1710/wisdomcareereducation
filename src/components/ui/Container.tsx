import React from 'react';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  size?: 'default' | 'narrow' | 'wide';
}

export function Container({
  children,
  className = '',
  size = 'default',
  ...props
}: ContainerProps) {
  let sizeClass = 'max-w-[1200px]';
  if (size === 'narrow') sizeClass = 'max-w-[760px]';
  if (size === 'wide') sizeClass = 'max-w-[1440px]';

  return (
    <div
      className={`mx-auto w-full px-6 md:px-8 ${sizeClass} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
