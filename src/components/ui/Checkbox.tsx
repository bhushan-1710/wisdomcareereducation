'use client';

import React, { forwardRef, useId } from 'react';
import { Check } from 'lucide-react';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: React.ReactNode;
  error?: string;
  containerClassName?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, error, required, id, containerClassName = '', className = '', checked, disabled, ...props }, ref) => {
    const generatedId = useId();
    const checkboxId = id || generatedId;
    const errorId = `${checkboxId}-error`;

    return (
      <div className={`flex flex-col gap-1.5 ${containerClassName}`}>
        <label
          htmlFor={checkboxId}
          className={`group flex items-start gap-3 cursor-pointer select-none ${
            disabled ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          <div className="relative flex items-center justify-center mt-0.5">
            <input
              ref={ref}
              type="checkbox"
              id={checkboxId}
              disabled={disabled}
              required={required}
              checked={checked}
              aria-invalid={Boolean(error)}
              aria-describedby={error ? errorId : undefined}
              className="peer sr-only"
              {...props}
            />
            <div
              className={`h-5 w-5 rounded-[6px] border transition-all duration-160 flex items-center justify-center peer-focus-visible:ring-3 peer-focus-visible:ring-wce-blue-500 peer-focus-visible:ring-offset-2 ${
                error
                  ? 'border-wce-coral-700 bg-wce-white'
                  : 'border-wce-slate-300 bg-wce-white peer-checked:bg-wce-coral-700 peer-checked:border-wce-coral-700'
              } ${className}`}
            >
              <Check className="h-3.5 w-3.5 text-wce-white opacity-0 transition-opacity peer-checked:opacity-100" />
            </div>
          </div>

          <div className="text-[14px] leading-snug text-wce-slate-600">
            {label}
            {required && <span className="text-wce-coral-700 ml-1">*</span>}
          </div>
        </label>

        {error && (
          <p id={errorId} aria-live="polite" className="text-[13px] font-medium text-wce-coral-700 pl-8">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';
