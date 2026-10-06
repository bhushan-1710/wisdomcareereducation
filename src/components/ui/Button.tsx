'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Loader2 } from 'lucide-react';

export type ButtonVariant = 'primary' | 'secondary' | 'dark' | 'text' | 'icon-circle';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
  loading?: boolean;
  showArrow?: boolean;
  children?: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  external,
  loading = false,
  showArrow = true,
  disabled = false,
  className = '',
  children,
  onClick,
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading;

  // Base styles
  const baseStyles =
    'group inline-flex items-center justify-center font-semibold transition-all duration-160 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-wce-blue-500 focus-visible:ring-offset-2 active:scale-[0.97] cursor-pointer';

  // Variant styles
  let variantStyles = '';
  switch (variant) {
    case 'primary':
      variantStyles =
        'bg-wce-coral-700 hover:bg-wce-coral-800 text-wce-white rounded-full shadow-wce-sm hover:-translate-y-0.5 active:translate-y-0';
      break;
    case 'secondary':
      variantStyles =
        'bg-transparent border-[1.5px] border-wce-navy-900 text-wce-navy-900 hover:bg-wce-navy-900/5 rounded-full hover:-translate-y-0.5 active:translate-y-0';
      break;
    case 'dark':
      variantStyles =
        'bg-wce-navy-800 hover:bg-wce-navy-900 text-wce-white rounded-full shadow-wce-sm hover:-translate-y-0.5 active:translate-y-0';
      break;
    case 'text':
      variantStyles =
        'bg-transparent text-wce-navy-700 hover:text-wce-navy-900 underline-offset-4 hover:underline p-0 active:scale-100';
      break;
    case 'icon-circle':
      variantStyles =
        'w-11 h-11 min-w-[44px] min-h-[44px] rounded-full border border-wce-navy-900/40 text-wce-navy-900 hover:bg-wce-coral-700 hover:border-wce-coral-700 hover:text-wce-white transition-colors duration-200';
      break;
  }

  // Size styles
  let sizeStyles = '';
  if (variant === 'icon-circle') {
    sizeStyles = 'p-0';
  } else if (variant === 'text') {
    sizeStyles = 'text-[15px]';
  } else {
    switch (size) {
      case 'sm':
        sizeStyles = 'h-10 px-5 text-[14px]';
        break;
      case 'md':
        sizeStyles = 'h-[52px] px-7 text-[16px]';
        break;
      case 'lg':
        sizeStyles = 'h-[56px] px-8 text-[17px]';
        break;
    }
  }

  const disabledStyles = isDisabled ? 'opacity-50 pointer-events-none cursor-not-allowed' : '';

  const combinedClasses = `${baseStyles} ${variantStyles} ${sizeStyles} ${disabledStyles} ${className}`.trim();

  const content = (
    <>
      {loading ? (
        <Loader2 className="w-5 h-5 animate-spin mr-2" />
      ) : null}

      {children ? <span>{children}</span> : null}

      {variant === 'icon-circle' ? (
        <ArrowUpRight className="w-5 h-5 transition-transform duration-200 group-hover:rotate-45" />
      ) : showArrow && (variant === 'primary' || variant === 'dark' || variant === 'text') ? (
        <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-160 group-hover:translate-x-1" />
      ) : null}
    </>
  );

  if (href && !isDisabled) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
          aria-disabled={isDisabled}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses} aria-disabled={isDisabled}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={props.type || 'button'}
      disabled={isDisabled}
      className={combinedClasses}
      onClick={onClick}
      {...props}
    >
      {content}
    </button>
  );
}
