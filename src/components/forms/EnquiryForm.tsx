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

    // Simulated submission delay for UI verification
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 600);
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
