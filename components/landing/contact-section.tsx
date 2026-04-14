import { ArrowUpRight, Mail, MapPin, Phone, Clock3 } from 'lucide-react';
import { contactInfo } from '@/lib/landing-content';
import { MotionFade } from './motion-fade';
import { SectionHeading } from './section-heading';

const contactIcons = {
  Address: MapPin,
  Phone: Phone,
  Email: Mail,
  'Working Hours': Clock3,
};

export function ContactSection() {
  return (
    <section id="contact" className="bg-gray-50 px-6 py-24">
      <div className="mx-auto w-full max-w-7xl">
        <MotionFade>
          <SectionHeading
            eyebrow="Get in Touch"
            title="Book Your Appointment Today"
            description="Have questions or want to book an appointment? We're here to help."
          />
        </MotionFade>
        <MotionFade
          delay={0.1}
          className="relative overflow-hidden "
        >
          <div className="pointer-events-none absolute inset-0" />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_1.05fr]">
            <div className="space-y-3">
              <div className="rounded-xl p-5">
                <p className="text-xl font-medium text-stone-900">Contact details</p>
                <p className="text-sm leading-tight text-gray-500">
                  Reach out anytime — we respond quickly and can help you choose the right
                  treatment plan.
                </p>
              </div>

              {contactInfo.map((item) => {
                const Icon = contactIcons[item.label as keyof typeof contactIcons];

                return (
                  <div
                    key={item.label}
                    className="group p-3 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-start gap-3">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#00B9DC]/10 text-[#00B9DC]">
                          {Icon ? <Icon size={18} /> : null}
                        </span>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-widest text-[#00B9DC]">
                            {item.label}
                          </p>
                          <p className="mt-1 text-base font-medium text-[#08314a]">{item.value}</p>
                        </div>
                      </div>
                      <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-black/40 transition group-hover:border-[#00B9DC]/30 group-hover:text-[#00B9DC]">
                        <ArrowUpRight size={16} />
                      </span>
                    </div>
                  </div>
                );
              })}

              <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
                <a
                  href="tel:+923000000000"
                  className="inline-flex w-full items-center justify-center rounded-full bg-[#00B9DC] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0097b4] sm:w-auto"
                >
                  Book Your Appointment Today
                </a>
                <a
                  href="mailto:info@yourclinic.com"
                  className="inline-flex w-full items-center justify-center rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-semibold text-[#08314a] transition hover:border-[#00B9DC]/40 hover:text-[#00B9DC] sm:w-auto"
                >
                  Email Us
                </a>
              </div>
            </div>

            <div className="relative overflow-hidden">
              <iframe
                title="Clinic location map"
                src="https://www.google.com/maps?q=Lahore%20Pakistan&output=embed"
                loading="lazy"
                className="h-[360px] w-full border-0 sm:h-[460px]"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </MotionFade>
      </div>
    </section>
  );
}
