import Image from 'next/image';
import {
  BadgeCheck,
  CreditCard,
  HeartHandshake,
  PhoneCall,
  Stethoscope,
  Wrench,
} from 'lucide-react';
import toothImage from '@/components/images/tooth.jpg';
import { MotionFade } from './motion-fade';
import { SectionHeading } from './section-heading';

interface FeatureItem {
  title: string;
  description: string;
}

const leftFeatures: FeatureItem[] = [
  {
    title: 'Experienced Doctor',
    description:
      'The goal of our clinic is to provide friendly, caring dentistry and the.',
  },
  {
    title: 'Personalized Care',
    description:
      'The goal of our clinic is to provide friendly, caring dentistry and the.',
  },
  {
    title: 'Flexible Payment Options',
    description:
      'The goal of our clinic is to provide friendly, caring dentistry and the.',
  },
];

const rightFeatures: FeatureItem[] = [
  {
    title: 'Emergency Services',
    description:
      'The goal of our clinic is to provide friendly, caring dentistry and the.',
  },
  {
    title: 'Positive Patient Reviews',
    description:
      'The goal of our clinic is to provide friendly, caring dentistry and the.',
  },
  {
    title: 'Latest Technology',
    description:
      'The goal of our clinic is to provide friendly, caring dentistry and the.',
  },
];

const leftIcons = [Stethoscope, HeartHandshake, CreditCard];
const rightIcons = [PhoneCall, BadgeCheck, Wrench];

export function WhyChooseUsSection() {
  return (
    <section className="relative overflow-hidden px-6 py-20">
      <div className="mx-auto w-full max-w-7xl">
        <MotionFade>
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Trusted Care You Can Count On"
          />
        </MotionFade>

        <div className="relative mt-10 grid items-center lg:grid-cols-[1fr_auto_1fr] lg:gap-12">

          {/* Left features — right-aligned text, icon facing center */}
          <div className="flex flex-col gap-10">
            {leftFeatures.map((item, index) => {
              const Icon = leftIcons[index];
              return (
                <MotionFade
                  key={item.title}
                  delay={index * 0.07}
                  className="relative flex items-start justify-end gap-3"
                >
                  <div className="text-right">
                    <p className="text-lg font-bold text-stone-900">{item.title}</p>
                    <p className="mt-1 text-sm leading-tight text-gray-500">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex shrink-0 items-center">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#00B9DC]/25 bg-white text-[#00B9DC]">
                      <Icon size={20} strokeWidth={1.6} />
                    </span>
                  </div>
                </MotionFade>
              );
            })}
          </div>

          {/* Center tooth image — overflow-hidden clips image to circle */}
          <MotionFade
            delay={0.1}
            className="relative mx-auto flex items-center justify-center py-6"
          >
            <div className="relative z-10 h-[350px] w-[350px] overflow-hidden rounded-full border-dashed border-2 border-[#00B9DC]">
              <Image
                src={toothImage}
                alt="Tooth illustration"
                fill
                className="object-cover object-center"
              />
            </div>
          </MotionFade>

          {/* Right features — icon facing center, left-aligned text */}
          <div className="flex flex-col gap-10">
            {rightFeatures.map((item, index) => {
              const Icon = rightIcons[index];
              return (
                <MotionFade
                  key={item.title}
                  delay={0.14 + index * 0.07}
                  className="relative flex items-start gap-3"
                >
                  <div className="flex shrink-0 items-center">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#00B9DC]/25 bg-white text-[#00B9DC]">
                      <Icon size={20} strokeWidth={1.6} />
                    </span>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-stone-900">{item.title}</p>
                    <p className="mt-1 text-sm leading-tight text-gray-500">
                      {item.description}
                    </p>
                  </div>
                </MotionFade>
              );
            })}
          </div>
        </div>


      </div>
    </section>
  );
}
