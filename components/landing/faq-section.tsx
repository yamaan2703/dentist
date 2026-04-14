import { ChevronDown } from 'lucide-react';
import { faqs } from '@/lib/landing-content';
import { MotionFade } from './motion-fade';
import { SectionHeading } from './section-heading';

export function FaqSection() {
  return (
    <section id="faq" className="bg-white px-6 py-24">
      <div className="mx-auto w-full max-w-6xl">
        <MotionFade>
          <SectionHeading
            eyebrow="Frequently Asked Questions"
            title="Everything You Need to Know"
            description="Clear answers about appointments, treatment safety, and dental care so you always feel confident before your visit."
          />
        </MotionFade>
        <div className="mx-auto max-w-5xl border-t border-[#dde4ee]">
          <div>
            {faqs.map((faq, index) => (
              <MotionFade key={faq.question} delay={index * 0.05}>
                <details className="group border-b border-[#dde4ee] py-6">
                  <summary className="flex list-none cursor-pointer items-center justify-between gap-6 marker:content-['']">
                    <p className="text-xl font-semibold leading-normal text-[#26344d] md:text-2xl">
                      {faq.question}
                    </p>
                    <ChevronDown
                      size={20}
                      className="shrink-0 text-[#0d2b72] transition-transform duration-300 group-open:rotate-180"
                    />
                  </summary>
                  <p className="pt-3 pr-10 text-base leading-8 text-[#26344d]/75">
                    {faq.answer}
                  </p>
                </details>
              </MotionFade>
            ))}
          </div>
        </div>
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
