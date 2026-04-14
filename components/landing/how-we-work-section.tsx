import type { LucideIcon } from 'lucide-react';
import {
  ArrowRight,
  ArrowUpRight,
  CalendarPlus,
  Check,
  ClipboardList,
  HeartHandshake,
  Sparkles,
} from 'lucide-react';
import { MotionFade } from './motion-fade';

interface HowWeWorkStep {
  tag: string;
  title: string;
  description: string;
  Icon: LucideIcon;
}

const steps: HowWeWorkStep[] = [
  {
    tag: 'Scheduling',
    title: 'Book online',
    description:
      'Choose a slot that works for you and tell us what you need — we confirm quickly and send everything for your first visit.',
    Icon: CalendarPlus,
  },
  {
    tag: 'Your visit',
    title: 'Welcome & assessment',
    description:
      'We take time to listen, review your history, and only recommend imaging or tests that truly support your goals.',
    Icon: ClipboardList,
  },
  {
    tag: 'Treatment',
    title: 'Personalized care plan',
    description:
      'Your dentist walks you through options in plain language so you can decide with confidence — no pressure, no surprises.',
    Icon: Sparkles,
  },
  {
    tag: 'Aftercare',
    title: 'Follow-up & prevention',
    description:
      'After treatment we stay in touch with reminders and hygiene tips so your results last and your smile stays protected.',
    Icon: HeartHandshake,
  },
];

const trustPoints: string[] = [
  'Clear pricing before treatment begins',
  'Calm, step-by-step explanations',
  'Same-week appointments when you need them',
];

export function HowWeWorkSection() {
  return (
    <section id="how-we-work" className="bg-gray-50 px-6 py-24">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-12 lg:items-start lg:gap-12">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <MotionFade>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#00B9DC]">
                How we work
              </p>
              <h2 className="mt-1 text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl sm:leading-[1.15]">
                A calm, predictable path from first hello to lasting results
              </h2>
              <p className="mt-3 max-w-md text-base leading-relaxed text-gray-500">
                Every visit follows the same rhythm: listen first, explain clearly, treat gently. You always know what happens
                next.
              </p>
            </MotionFade>

            <MotionFade delay={0.08} className="mt-5 space-y-2">
              {trustPoints.map((text) => (
                <p key={text} className="flex items-start gap-3 text-sm font-medium text-stone-800">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#00B9DC]/12 text-[#00B9DC]">
                    <Check size={12} strokeWidth={2.5} />
                  </span>
                  {text}
                </p>
              ))}
            </MotionFade>

            <MotionFade delay={0.12} className="mt-10">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-[#00B9DC] px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0097b4] hover:shadow-md"
              >
                Book your visit
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                  aria-hidden
                />
              </a>
            </MotionFade>
          </div>

          <div className="relative lg:col-span-7">
            <div
              className="pointer-events-none absolute left-3 top-4 bottom-8 hidden w-px bg-stone-200 md:block"
              aria-hidden
            />

            <ol className="relative z-10 list-none space-y-5 md:space-y-6">
              {steps.map((item, index) => {
                const Icon = item.Icon;

                return (
                  <MotionFade key={item.title} delay={0.06 + index * 0.06}>
                    <li className="relative">
                      <span
                        className="absolute left-3 top-10 z-10 hidden h-3.5 w-3.5 -translate-x-1/2 rounded-full border-[3px] border-white bg-[#00B9DC] shadow-[0_0_0_1px_rgba(0,185,220,0.2)] md:block"
                        aria-hidden
                      />

                      <article className="group relative ml-0 overflow-hidden rounded-[26px] border border-transparent p-4 transition-all duration-500 ease-out hover:-translate-y-1 md:ml-10 md:p-4 md:py-4">
                        <div className="absolute inset-0 z-0 origin-bottom scale-y-0 bg-[#00B9DC] transition-transform duration-500 ease-out group-hover:scale-y-100" />

                        <div className="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
                          <div className="shrink-0">
                            <div className="inline-flex rounded-xl border border-[#00B9DC]/20 bg-[#00B9DC]/5 p-3 text-[#007b95] transition-colors duration-500 group-hover:border-white group-hover:bg-white group-hover:text-[#00B9DC]">
                              <Icon size={28} strokeWidth={1.75} aria-hidden />
                            </div>
                          </div>

                          <div className="min-w-0 flex-1">
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#00B9DC] transition-colors duration-500 group-hover:text-white/90">
                              {item.tag}
                            </p>
                            <h3 className="mt-1 text-xl font-semibold text-stone-900 transition-colors duration-500 group-hover:text-white">
                              {item.title}
                            </h3>
                            <p className="mt-2 text-base leading-tight text-gray-500 transition-colors duration-500 group-hover:text-gray-100">
                              {item.description}
                            </p>
                            <a
                              href="#contact"
                              className="mt-3 inline-flex items-center gap-2.5 text-sm font-semibold text-[#00B9DC] transition-colors duration-500 group-hover:text-white"
                            >
                              Get in touch
                              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#00B9DC] text-white transition-colors duration-500 group-hover:bg-white group-hover:text-[#00B9DC]">
                                <ArrowUpRight size={14} aria-hidden />
                              </span>
                            </a>
                          </div>
                        </div>
                      </article>
                    </li>
                  </MotionFade>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
