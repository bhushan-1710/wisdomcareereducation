'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useReducedMotion } from '@/components/motion/useReducedMotion';

export interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
  defaultOpenId?: string;
  allowMultiple?: boolean;
  className?: string;
}

export function Accordion({
  items,
  defaultOpenId,
  allowMultiple = false,
  className = '',
}: AccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>(defaultOpenId ? [defaultOpenId] : []);
  const prefersReduced = useReducedMotion();

  const toggle = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={`w-full max-w-[760px] mx-auto flex flex-col gap-3 ${className}`}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        return (
          <div
            key={item.id}
            className={`rounded-[14px] border border-wce-slate-300 bg-wce-white transition-colors duration-200 overflow-hidden ${
              isOpen ? 'bg-wce-blue-50/40 border-wce-navy-900/20' : 'hover:bg-wce-blue-50/50'
            }`}
          >
            <button
              type="button"
              id={`accordion-btn-${item.id}`}
              aria-expanded={isOpen}
              aria-controls={`accordion-content-${item.id}`}
              onClick={() => toggle(item.id)}
              className="flex w-full items-center justify-between p-5 text-left focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-wce-blue-500 rounded-[14px] cursor-pointer"
            >
              <span className="text-[17px] md:text-[18px] font-semibold text-wce-navy-900 pr-4">
                {item.title}
              </span>
              <span
                className={`flex h-8 w-8 min-w-[32px] items-center justify-center rounded-full bg-wce-blue-100 text-wce-navy-900 transition-all duration-200 ${
                  isOpen ? 'rotate-180 bg-wce-coral-100 text-wce-coral-800' : ''
                }`}
              >
                <ChevronDown className="h-4 w-4" />
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`accordion-content-${item.id}`}
                  role="region"
                  aria-labelledby={`accordion-btn-${item.id}`}
                  initial={{ height: 0, opacity: prefersReduced ? 1 : 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: prefersReduced ? 1 : 0 }}
                  transition={{
                    duration: prefersReduced ? 0 : 0.28,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5 pt-1 text-[15px] md:text-[16px] leading-relaxed text-wce-slate-600 border-t border-wce-slate-300/40">
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
