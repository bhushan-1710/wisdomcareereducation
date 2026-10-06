'use client';

import React, { forwardRef, useId } from 'react';
import { CheckCircle2, AlertCircle } from 'lucide-react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  isValid?: boolean;
  helperText?: string;
  containerClassName?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      isValid = false,
      helperText,
      required,
      id,
      containerClassName = '',
      className = '',
      disabled,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const inputId = id || generatedId;
    const errorId = `${inputId}-error`;
    const helperId = `${inputId}-helper`;

    return (
      <div className={`flex flex-col gap-1.5 w-full ${containerClassName}`}>
        <label
          htmlFor={inputId}
          className="text-[14px] font-semibold text-wce-navy-900 flex items-center justify-between"
        >
          <span>
            {label}
            {required && <span className="text-wce-coral-700 ml-1">*</span>}
          </span>
        </label>

        <div className="relative flex items-center">
          <input
            ref={ref}
            id={inputId}
            disabled={disabled}
            required={required}
            aria-invalid={Boolean(error)}
            aria-describedby={error ? errorId : helperText ? helperId : undefined}
            className={`w-full h-12 rounded-[14px] border bg-wce-white px-4 text-[15px] text-wce-ink placeholder:text-wce-slate-600/50 transition-all duration-160 focus:outline-none focus:ring-3 focus:ring-wce-blue-500 focus:border-wce-blue-500 disabled:opacity-50 disabled:bg-wce-slate-300/20 disabled:cursor-not-allowed ${
              error
                ? 'border-wce-coral-700 pr-10 focus:ring-wce-coral-700/30 focus:border-wce-coral-700'
                : isValid
                ? 'border-wce-green-400 pr-10'
                : 'border-wce-slate-300'
            } ${className}`}
            {...props}
          />

          {error && (
            <span className="absolute right-3.5 text-wce-coral-700 pointer-events-none">
              <AlertCircle className="w-5 h-5" />
            </span>
          )}

          {!error && isValid && (
            <span className="absolute right-3.5 text-wce-green-400 pointer-events-none">
              <CheckCircle2 className="w-5 h-5" />
            </span>
          )}
        </div>

        {error && (
          <p id={errorId} aria-live="polite" className="text-[13px] font-medium text-wce-coral-700 flex items-center gap-1">
            {error}
          </p>
        )}

        {!error && helperText && (
          <p id={helperId} className="text-[13px] text-wce-slate-600">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
