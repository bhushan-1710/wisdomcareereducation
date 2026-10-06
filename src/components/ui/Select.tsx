'use client';

import React, { forwardRef, useId } from 'react';
import { ChevronDown, AlertCircle } from 'lucide-react';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: SelectOption[];
  error?: string;
  placeholder?: string;
  containerClassName?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      options,
      error,
      placeholder,
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
    const selectId = id || generatedId;
    const errorId = `${selectId}-error`;

    return (
      <div className={`flex flex-col gap-1.5 w-full ${containerClassName}`}>
        <label
          htmlFor={selectId}
          className="text-[14px] font-semibold text-wce-navy-900"
        >
          {label}
          {required && <span className="text-wce-coral-700 ml-1">*</span>}
        </label>

        <div className="relative flex items-center">
          <select
            ref={ref}
            id={selectId}
            disabled={disabled}
            required={required}
            aria-invalid={Boolean(error)}
            aria-describedby={error ? errorId : undefined}
            className={`w-full h-12 rounded-[14px] border bg-wce-white px-4 pr-10 text-[15px] text-wce-ink appearance-none transition-all duration-160 focus:outline-none focus:ring-3 focus:ring-wce-blue-500 focus:border-wce-blue-500 disabled:opacity-50 disabled:cursor-not-allowed ${
              error
                ? 'border-wce-coral-700 focus:ring-wce-coral-700/30'
                : 'border-wce-slate-300'
            } ${className}`}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>

          <span className="absolute right-3.5 pointer-events-none text-wce-slate-600">
            {error ? <AlertCircle className="w-5 h-5 text-wce-coral-700" /> : <ChevronDown className="w-5 h-5" />}
          </span>
        </div>

        {error && (
          <p id={errorId} aria-live="polite" className="text-[13px] font-medium text-wce-coral-700">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';
