'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Checkbox } from '@/components/ui/Checkbox';
import { Button } from '@/components/ui/Button';
import { FormSuccess } from './FormSuccess';
import { ArrowRight, Loader2 } from 'lucide-react';

export interface EnquiryFormProps {
  id?: string;
  className?: string;
  initialProgram?: string;
}

export function EnquiryForm({ id = 'enquiry-form', className = '', initialProgram = '' }: EnquiryFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    program: initialProgram,
    destination: '',
    message: '',
    consent: false,
    website: '',
  });

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Contact number is required';
    } else if (formData.phone.replace(/[^0-9]/g, '').length < 8) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.program) {
      newErrors.program = 'Please select a program of interest';
    }
    if (!formData.consent) {
      newErrors.consent = 'Your consent is required to contact you';
    }
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsLoading(true);

    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          sourcePage: typeof window !== 'undefined' ? window.location.pathname : '/',
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data.ok) {
        if (data.fieldErrors) {
          setErrors(data.fieldErrors);
        } else {
          setErrors({
            submit: data.error || 'Failed to submit enquiry. Please try again or reach us via WhatsApp.',
          });
        }
        setIsLoading(false);
        return;
      }

      // Track analytics conversion event (Requirement 18)
      if (typeof window !== 'undefined') {
        const win = window as unknown as {
          gtag?: (command: string, action: string, params?: Record<string, unknown>) => void;
        };
        if (typeof win.gtag === 'function') {
          win.gtag('event', 'enquiry_submit', {
            program: formData.program,
            destination: formData.destination || 'none',
          });
        }
        window.dispatchEvent(
          new CustomEvent('wce:analytics', {
            detail: { event: 'enquiry_submit', program: formData.program },
          })
        );
      }

      setIsLoading(false);
      setIsSubmitted(true);
    } catch {
      setErrors({
        submit: 'Network connection issue. Please check your internet or connect with us directly via WhatsApp.',
      });
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <FormSuccess
        onReset={() => {
          setIsSubmitted(false);
          setFormData({
            fullName: '',
            phone: '',
            email: '',
            program: '',
            destination: '',
            message: '',
            consent: false,
            website: '',
          });
        }}
        className={className}
      />
    );
  }

  return (
    <form
      id={id}
      onSubmit={handleSubmit}
      noValidate
      className={`rounded-[20px] bg-wce-white p-6 sm:p-8 md:p-10 shadow-xl border border-wce-slate-200/80 ${className}`}
    >
      <div className="mb-6">
        <h3 className="text-[22px] md:text-[24px] font-bold text-wce-navy-900 tracking-tight">
          Book free counselling
        </h3>
        <p className="mt-1 text-[14px] md:text-[15px] text-wce-slate-600">
          Tell us about your background and where you want to go.
        </p>
      </div>

      <div className="space-y-4">
        {/* Anti-spam Honeypot field (hidden from screen readers and visual users) */}
        <div aria-hidden="true" className="sr-only opacity-0 pointer-events-none h-0 w-0 overflow-hidden">
          <label htmlFor={`${id}-website`}>Leave this field blank</label>
          <input
            id={`${id}-website`}
            type="text"
            name="website"
            value={formData.website}
            onChange={(e) => setFormData({ ...formData, website: e.target.value })}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {/* Global submission error alert */}
        {errors.submit && (
          <div
            role="alert"
            aria-live="assertive"
            className="rounded-[12px] bg-rose-50 border border-rose-200 p-3.5 text-xs sm:text-sm text-rose-800 font-medium leading-relaxed"
          >
            {errors.submit}
          </div>
        )}

        {/* Full Name */}
        <Input
          label="Full Name"
          required
          placeholder="e.g. Priya Sharma"
          value={formData.fullName}
          onChange={(e) => {
            setFormData({ ...formData, fullName: e.target.value });
            if (errors.fullName) setErrors({ ...errors, fullName: '' });
          }}
          error={errors.fullName}
          disabled={isLoading}
        />

        {/* Contact details row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            label="Phone Number"
            type="tel"
            required
            placeholder="+91 98765 43210"
            value={formData.phone}
            onChange={(e) => {
              setFormData({ ...formData, phone: e.target.value });
              if (errors.phone) setErrors({ ...errors, phone: '' });
            }}
            error={errors.phone}
            disabled={isLoading}
          />

          <Input
            label="Email Address"
            type="email"
            required
            placeholder="priya@example.com"
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
              if (errors.email) setErrors({ ...errors, email: '' });
            }}
            error={errors.email}
            disabled={isLoading}
          />
        </div>

        {/* Program of interest */}
        <Select
          label="Interested in"
          required
          placeholder="Select a pathway"
          value={formData.program}
          onChange={(e) => {
            setFormData({ ...formData, program: e.target.value });
            if (errors.program) setErrors({ ...errors, program: '' });
          }}
          error={errors.program}
          disabled={isLoading}
          options={[
            { value: 'study-abroad', label: 'Study Abroad & University Admissions' },
            { value: 'student-internships', label: 'Student Internships' },
            { value: 'graduate-internships', label: 'Graduate Internships' },
            { value: 'professional-development', label: 'Professional Development Programs' },
          ]}
        />

        {/* Preferred country */}
        <Select
          label="Preferred Country"
          placeholder="Select a destination (optional)"
          value={formData.destination}
          onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
          disabled={isLoading}
          options={[
            { value: 'malaysia', label: 'Malaysia' },
            { value: 'france', label: 'France' },
            { value: 'other', label: 'Other destination / Undecided' },
          ]}
        />

        {/* Message / notes */}
        <div className="flex flex-col gap-1.5 w-full">
          <label htmlFor={`${id}-message`} className="text-[14px] font-semibold text-wce-navy-900">
            Your Goals or Questions <span className="text-wce-slate-400 font-normal">(Optional)</span>
          </label>
          <textarea
            id={`${id}-message`}
            rows={3}
            placeholder="Tell us your academic background, degree, or question..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            disabled={isLoading}
            className="w-full rounded-[12px] border border-wce-slate-300 bg-wce-white px-4 py-3 text-[15px] text-wce-navy-900 placeholder:text-wce-slate-400 transition-colors focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-wce-blue-500 focus-visible:border-wce-blue-500"
          />
        </div>

        {/* Consent checkbox */}
        <div className="pt-1">
          <Checkbox
            id={`${id}-consent`}
            required
            label="I agree to receive counselling details from WCE via phone, email or WhatsApp."
            checked={formData.consent}
            onChange={(e) => {
              setFormData({ ...formData, consent: e.target.checked });
              if (errors.consent) setErrors({ ...errors, consent: '' });
            }}
            error={errors.consent}
            disabled={isLoading}
          />
        </div>

        {/* Submit button */}
        <div className="pt-2">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full justify-center group"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin mr-2" />
                <span>Submitting request...</span>
              </>
            ) : (
              <>
                <span>Book free counselling</span>
                <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
              </>
            )}
          </Button>
        </div>
      </div>
    </form>
  );
}
