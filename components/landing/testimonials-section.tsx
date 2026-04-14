'use client';

import { Star } from 'lucide-react';
import { testimonials } from '@/lib/landing-content';
import { MotionFade } from './motion-fade';
import { SectionHeading } from './section-heading';

interface TestimonialClient {
  name: string;
  role: string;
}

const testimonialClients: TestimonialClient[] = [
  { name: 'James Miller', role: 'Client' },
  { name: 'Emily Carter', role: 'Client' },
  { name: 'Robert Anderson', role: 'Client' },
];

function getInitials({ name }: { name: string }): string {
  return name
    .split(' ')
    .map((value) => value[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

export function TestimonialsSection() {
  const sliderItems = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className=" px-6 py-20">
      <div className="mx-auto w-full max-w-7xl">
        <MotionFade>
          <SectionHeading
            eyebrow="What Our Patients Say"
            title="Real Experiences, Real Confidence"
            description="Our patients are our best advocates. See what they have to say about their experience with our clinic."
          />
        </MotionFade>
        <MotionFade delay={0.08} className="space-y-4">
          <div className="overflow-hidden">
            <div className="testimonial-slider-track flex w-max gap-6 py-2">
              {sliderItems.map((item, index) => (
                <article
                  key={`row1-${item.quote}-${index + 1}`}
                  className="w-[340px] shrink-0 rounded-3xl bg-white p-5 shadow"
                >
                  <div className="flex items-center gap-1 text-[#00B9DC]">
                    {Array.from({ length: item.rating }).map((_, starIndex) => (
                      <Star
                        key={`row1-${item.quote}-${index + 1}-star-${starIndex + 1}`}
                        size={14}
                        className="fill-current"
                      />
                    ))}
                  </div>
                  <p className="mt-4 text-lg leading-8 text-gray-500">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <div className="mt-7 flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#00B9DC] text-xs font-semibold text-white">
                      {getInitials({
                        name:
                          testimonialClients[
                            index % testimonialClients.length
                          ].name,
                      })}
                    </span>
                    <div>
                      <p className="text-base font-semibold text-stone-900">
                        {testimonialClients[index % testimonialClients.length].name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {testimonialClients[index % testimonialClients.length].role}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="overflow-hidden">
            <div className="testimonial-slider-track-reverse flex w-max gap-6 py-2">
              {sliderItems.map((item, index) => (
                <article
                  key={`row2-${item.quote}-${index + 1}`}
                  className="w-[340px] shrink-0 rounded-3xl bg-white p-5 shadow"
                >
                  <div className="flex items-center gap-1 text-[#00B9DC]">
                    {Array.from({ length: item.rating }).map((_, starIndex) => (
                      <Star
                        key={`row2-${item.quote}-${index + 1}-star-${starIndex + 1}`}
                        size={14}
                        className="fill-current"
                      />
                    ))}
                  </div>
                  <p className="mt-4 text-lg leading-8 text-gray-500">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <div className="mt-7 flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#00B9DC] text-xs font-semibold text-white">
                      {getInitials({
                        name:
                          testimonialClients[
                            (index + 1) % testimonialClients.length
                          ].name,
                      })}
                    </span>
                    <div>
                      <p className="text-base font-semibold text-stone-900">
                        {
                          testimonialClients[
                            (index + 1) % testimonialClients.length
                          ].name
                        }
                      </p>
                      <p className="text-sm text-gray-500">
                        {
                          testimonialClients[
                            (index + 1) % testimonialClients.length
                          ].role
                        }
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </MotionFade>
      </div>
      <style jsx>{`
        .testimonial-slider-track {
          animation: testimonialMarquee 26s linear infinite;
        }

        .testimonial-slider-track-reverse {
          animation: testimonialMarqueeReverse 30s linear infinite;
        }

        @keyframes testimonialMarquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-50% - 12px));
          }
        }

        @keyframes testimonialMarqueeReverse {
          from {
            transform: translateX(calc(-50% - 12px));
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}
