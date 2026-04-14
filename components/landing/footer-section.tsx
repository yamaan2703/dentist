import { ArrowUp, Instagram, Linkedin, Send, Twitter } from 'lucide-react';
import Image from 'next/image';
import logoImage from '@/components/images/logo.png';
import { MotionFade } from './motion-fade';

const footerLinks = ['Home', 'About', 'Services', 'Blog', 'Contact'];
const workTime = [
  { label: 'Mon - Fri', value: '10:00 - 20:00' },
  { label: 'Saturday', value: '10:00 - 12:00' },
  { label: 'Sunday', value: 'Closed' },
  { label: 'Emergency', value: '24 / 7 Hours' },
];

export function FooterSection() {
  return (
    <footer className="border-t border-[#dce9ef] bg-white px-6 pb-8 pt-14">
      <MotionFade className="mx-auto w-full max-w-7xl text-[#08314a]">
        <div className="grid gap-10 lg:grid-cols-3">
          <div>
            <Image
              src={logoImage}
              alt="Dental Clinic logo"
              width={130}
              height={56}
              className="h-14 w-auto object-contain"
            />
            <p className="mt-5 max-w-sm text-base leading-tight text-gray-500">
              Providing trusted dental care with comfort, quality, and care you
              can rely on.
            </p>
            <p className="max-w-sm text-base leading-tight text-gray-500">
              Your smile is our priority every step of the way.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="text-[#00B9DC] transition hover:text-[#0097b4]"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-[#00B9DC] transition hover:text-[#0097b4]"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-[#00B9DC] transition hover:text-[#0097b4]"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-stone-900">Work Time</p>
            <div className="mt-5 space-y-3">
              {workTime.map((item) => (
                <div key={item.label} className="flex items-center justify-between gap-4">
                  <p className="text-base text-gray-500">{item.label}</p>
                  <span className="h-px flex-1 border-b border-dotted border-gray-200" />
                  <p className="text-base font-medium text-stone-900">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-stone-900">Subscribe</p>
            <p className="mt-5 max-w-md text-base leading-8 text-gray-500">
              Subscribe to stay informed about our dental care promotions and gift certificates.
            </p>
            <div className="mt-5 flex items-center rounded-full border border-[#00B9DC] p-1">
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-transparent px-4 py-1.5 text-sm text-stone-900 placeholder:text-gray-500 focus:outline-none"
              />
              <button
                type="button"
                className="inline-flex size-12 items-center justify-center rounded-full px-2 text-[#00B9DC] transition"
                aria-label="Send email"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-[#dce9ef] pt-6">
          <div className="flex flex-col gap-4 text-sm text-[#08314a]/70 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-5">
              {footerLinks.map((item) => (
                <a key={item} href="#" className="transition hover:text-[#00B9DC]">
                  {item}
                </a>
              ))}
            </div>
            <p>© All rights reserved. Designed by Your Dental Clinic.</p>

          </div>
        </div>
      </MotionFade>
    </footer>
  );
}
