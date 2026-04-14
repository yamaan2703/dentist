'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { CalendarCheck2, ShieldCheck } from 'lucide-react';
import heroBannerImage from '@/components/images/hero-banner.jpg';
import { MotionFade } from './motion-fade';

export function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '16%']);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '24%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.45]);

  return (
    <section ref={sectionRef} id="home" className="relative h-screen overflow-hidden">
      <motion.div
        style={{ y: backgroundY, scale: backgroundScale }}
        className="absolute inset-0"
      >
        <Image
          src={heroBannerImage}
          alt="Patient smiling during dental treatment"
          fill
          priority
          className="object-cover object-center"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20" />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.5),transparent_40%)]" />
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative mx-auto grid h-screen w-full max-w-7xl items-center gap-10 px-6 pb-14 pt-32 md:grid-cols-12 md:pb-20 md:pt-36"
      >
        <MotionFade className="space-y-4 text-white md:col-span-7">
          <p className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[#8fefff] backdrop-blur">
            Gentle Modern Dental Care
          </p>
          <h1 className="text-4xl font-semibold leading-[1.05] sm:text-6xl">
            Your Smile,
            <br />
            Our Priority
          </h1>
          <p className="max-w-xl text-base leading-8 text-gray-300 sm:text-lg">
            Experience gentle, modern dental care with advanced technology and a
            team that truly cares about your comfort and confidence.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#00B9DC] px-7 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-[#07a7c6]"
            >
              <CalendarCheck2 size={18} />
              Book Appointment
            </a>
          </div>
        </MotionFade>
        <MotionFade
          delay={0.1}
          className="relative md:top-28 md:col-span-5 md:justify-self-end"
        >
          <div className="w-full max-w-sm rounded-2xl border border-white/20 bg-white/12 p-5 text-white backdrop-blur-lg">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8fefff]">
              Why Choose Us
            </p>
            <p className="mt-2 text-xl font-medium leading-snug">
              Advanced technology with comfort-first treatment.
            </p>
            <div className="mt-3 space-y-1 text-sm">
              <p className="flex items-center gap-2 text-white/90">
                <ShieldCheck size={16} className="text-[#8fefff]" />
                Certified dentists and hygienic environment
              </p>
              <p className="flex items-center gap-2 text-white/90">
                <ShieldCheck size={16} className="text-[#8fefff]" />
                Personalized plans with transparent pricing
              </p>
            </div>
          </div>
        </MotionFade>
      </motion.div>
    </section>
  );
}
