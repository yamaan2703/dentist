import Image from 'next/image';
import { Check } from 'lucide-react';
import heroBannerImage from '@/components/images/hero-banner.jpg';
import aboutBannerImage from '@/components/images/about-banner.jpg';
import { aboutDescription } from '@/lib/landing-content';
import { MotionFade } from './motion-fade';

const aboutHighlights: string[] = [
  'Personalized Treatment Plans',
  'State-of-the-Art Technology',
  'Gentle Care for Kids and Adults',
  'Flexible Appointment Scheduling',
];

export function AboutSection() {
  return (
    <section id="about" className="bg-gray-50 px-6 py-20">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2">
        <MotionFade className="grid max-w-[500px] grid-cols-2 gap-2">
          <div className="relative h-[400px] overflow-hidden rounded-3xl border border-gray-200">
            <Image
              src={aboutBannerImage}
              alt="Patient during dental consultation"
              fill
              className="object-cover object-[30%_center]"
            />
          </div>
          <div className="relative mt-10 h-[400px] overflow-hidden rounded-3xl border border-[#00B9DC]/20">
            <Image
              src={heroBannerImage}
              alt="Dentist and patient in clinic"
              fill
              className="object-cover object-[65%_center]"
            />
          </div>
        </MotionFade>
        <MotionFade delay={0.08} className="max-w-2xl space-y-3">
          <p className="text-sm font-semibold text-[#00B9DC]">About Us</p>
          <h2 className="text-4xl font-semibold leading-tight text-black sm:text-4xl">
            Professionals and Personalized Dental Excellence
          </h2>
          <p className="text-lg leading-tight text-gray-500">{aboutDescription[0]}</p>
          <div className="grid gap-2 sm:grid-cols-2">
            {aboutHighlights.map((item) => (
              <p
                key={item}
                className="flex items-center gap-2 text-md text-gray-500"
              >
                <Check size={16} className="text-[#00B9DC]" />
                {item}
              </p>
            ))}
          </div>
          <a
            href="#contact"
            className="inline-flex rounded-full bg-[#00B9DC] px-6 py-3 text-md font-semibold text-white transition hover:bg-[#08a7c5]"
          >
            Book Appointment
          </a>
        </MotionFade>
      </div>
    </section>
  );
}
