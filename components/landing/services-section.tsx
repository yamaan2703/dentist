import {
  BadgeCheck,
  ArrowUpRight,
  Clock3,
  HeartPulse,
  ShieldPlus,
  Smile,
  Sparkles,
  Stethoscope,
} from 'lucide-react';
import { services } from '@/lib/landing-content';
import { MotionFade } from './motion-fade';
import { SectionHeading } from './section-heading';

const serviceIcons = [
  Stethoscope,
  Sparkles,
  BadgeCheck,
  Smile,
  HeartPulse,
  Clock3,
  ShieldPlus,
  BadgeCheck,
];

export function ServicesSection() {
  return (
    <section id="services" className="px-6 py-20">
      <div className="mx-auto w-full max-w-7xl">
        <MotionFade>
          <SectionHeading
            eyebrow="Our Dental Services"
            title="Care Designed for Every Smile"
          />
        </MotionFade>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <MotionFade
              key={service.title}
              delay={index * 0.06}
              className="group relative overflow-hidden rounded-[26px] shadow bg-white p-5 py-7 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-[#00B9DC]"
            >
              {/* 🔥 Hover Overlay */}
              <div className="absolute inset-0 bg-[#00B9DC] scale-y-0 origin-bottom transition-transform duration-500 ease-out group-hover:scale-y-100 z-0"></div>

              {/* Content */}
              <div className="relative z-10">
                <div className="mb-5 inline-flex rounded-xl border border-[#00B9DC]/20 bg-[#00B9DC]/5 p-2.5 text-[#007b95] transition-colors duration-500 group-hover:border-white group-hover:bg-white group-hover:text-[#00B9DC]">
                  {(() => {
                    const Icon = serviceIcons[index % serviceIcons.length];
                    return <Icon size={26} strokeWidth={1.8} />;
                  })()}
                </div>

                <h3 className="text-xl font-semibold text-stone-900 transition-colors duration-500 group-hover:text-white">
                  {service.title}
                </h3>

                <p className="mt-3 text-base leading-6 transition-colors duration-500 group-hover:text-gray-100 text-gray-500">
                  {service.description}
                </p>

                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2.5 text-base font-semibold text-[#00B9DC] transition-colors duration-500 group-hover:text-white"
                >
                  Read More
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#00B9DC] text-white transition-colors duration-500 group-hover:bg-white group-hover:text-[#00B9DC]">
                    <ArrowUpRight size={13} />
                  </span>
                </a>
              </div>
            </MotionFade>
          ))}
        </div>
      </div>
    </section>
  );
}
