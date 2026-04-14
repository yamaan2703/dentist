'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { faqs } from '@/lib/landing-content';
import { MotionFade } from './motion-fade';
import { SectionHeading } from './section-heading';

const accordionEase = [0.22, 1, 0.36, 1] as const;

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  function toggleItem(index: number): void {
    setOpenIndex((current) => (current === index ? null : index));
  }

  return (
    <section id="faq" className="bg-gray-50 px-6 py-24">
      <div className="mx-auto w-full max-w-6xl">
        <MotionFade>
          <SectionHeading
            eyebrow="Frequently Asked Questions"
            title="Everything You Need to Know"
            description="Clear answers about appointments, treatment safety, and dental care so you always feel confident before your visit."
          />
        </MotionFade>
        <MotionFade delay={0.08} className="mx-auto max-w-5xl border-t border-[#dde4ee]">
          <div>
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const contentId = `faq-panel-${index}`;
              const triggerId = `faq-trigger-${index}`;

              return (
                <div key={faq.question} className="border-b border-[#dde4ee]">
                  <button
                    type="button"
                    id={triggerId}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    className="flex w-full cursor-pointer items-center justify-between gap-6 py-6 text-left transition-colors hover:text-[#00B9DC]"
                    onClick={() => {
                      toggleItem(index);
                    }}
                  >
                    <p className="text-xl font-semibold leading-normal text-[#26344d] md:text-2xl">
                      {faq.question}
                    </p>
                    <ChevronDown
                      size={20}
                      aria-hidden
                      className={`shrink-0 text-[#0d2b72] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${isOpen ? 'rotate-180' : ''
                        }`}
                    />
                  </button>
                  <motion.div
                    id={contentId}
                    role="region"
                    aria-labelledby={triggerId}
                    initial={false}
                    animate={{
                      height: isOpen ? 'auto' : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                    transition={{
                      duration: shouldReduceMotion ? 0 : 0.38,
                      ease: accordionEase,
                    }}
                    className="overflow-hidden"
                  >
                    <div className="pb-6 pr-10 pt-0">
                      <p className="text-base leading-8 text-[#26344d]/75">{faq.answer}</p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </MotionFade>
        <MotionFade delay={0.2} className="mt-10 text-center">
          <p className="text-sm text-[#08314a]/65">
            Still have questions?{' '}
            <a href="#contact" className="font-semibold text-[#00B9DC]">
              Contact our team
            </a>
            .
          </p>
        </MotionFade>
      </div>
    </section>
  );
}
