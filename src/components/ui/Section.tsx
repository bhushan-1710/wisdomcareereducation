import React from 'react';

export type SectionBg = 'white' | 'blue-50' | 'blue-100' | 'navy-800' | 'navy-900';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  bg?: SectionBg;
  className?: string;
  id?: string;
}

export function Section({
  children,
  bg = 'white',
  className = '',
  id,
  ...props
}: SectionProps) {
  let bgStyles = 'bg-wce-white text-wce-slate-600';

  switch (bg) {
    case 'blue-50':
      bgStyles = 'bg-wce-blue-50 text-wce-slate-600';
      break;
    case 'blue-100':
      bgStyles = 'bg-wce-blue-100 text-wce-slate-600';
      break;
    case 'navy-800':
      bgStyles = 'bg-wce-navy-800 text-wce-white';
      break;
    case 'navy-900':
      bgStyles = 'bg-wce-navy-900 text-wce-white';
      break;
  }

  return (
    <section
      id={id}
      className={`relative py-14 md:py-24 ${bgStyles} ${className}`}
      {...props}
    >
      {children}
    </section>
  );
}
