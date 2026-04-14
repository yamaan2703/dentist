'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import heroTwoImage from '@/components/images/doctor.png';
import { CalendarCheck2 } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-14 sm:pt-16 lg:pt-20 pb-10 sm:pb-14 overflow-hidden font-sf-pro">
      {/* Content Container */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1 space-y-4 max-w-2xl text-left mx-auto lg:mx-0"
            >
              {/* Main Heading */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-black leading-tight tracking-tight">
                  Your Comfort, Your Smile, Our Care
                </h1>
              </motion.div>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-base sm:text-lg text-gray-500 leading-relaxed"
              >
                Experience gentle, modern dental care with advanced technology and a team that truly cares about your comfort and confidence. Our comprehensive dental services are designed to meet your unique needs, from routine cleanings to advanced treatments.
              </motion.p>


              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-3 w-full max-w-xl mx-auto lg:mx-0"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 rounded-full bg-[#00B9DC] px-7 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-[#07a7c6]"
                    >
                      <CalendarCheck2 size={18} />
                      Book Appointment
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Side - Banner Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="order-1 lg:order-2 relative flex justify-center items-center mb-10 lg:mb-0"
            >
              <div className="relative w-3/4 sm:w-4/5 lg:w-3/5">
                <Image
                  src={heroTwoImage}
                  alt="Dental care team"
                  width={900}
                  height={900}
                  priority
                  className="h-auto w-full object-contain"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/70 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
