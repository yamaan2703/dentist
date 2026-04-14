'use client';

import Image from 'next/image';
import { Menu, Phone } from 'lucide-react';
import { useEffect, useState } from 'react';
import logoImage from '@/components/images/logo.png';
import { navItems } from '@/lib/landing-content';
import { MotionFade } from './motion-fade';

export function NavbarSection() {
  const topNavItems = navItems.slice(0, 4);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll(): void {
      setIsScrolled(window.scrollY > 80);
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerClassName = isScrolled
    ? 'fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-white/95 shadow-md backdrop-blur'
    : 'fixed inset-x-0 top-0 z-50';

  const desktopNavClassName = isScrolled
    ? 'hidden items-center gap-2 rounded-full border border-black/10 bg-white p-1 shadow-sm md:flex'
    : 'hidden items-center gap-2 rounded-full border border-white/20 bg-black/35 p-1 shadow-xl shadow-black/20 backdrop-blur md:flex';

  const desktopTextClassName = isScrolled
    ? 'text-black hover:bg-[#00B9DC]/10 hover:text-[#00B9DC]'
    : 'text-white hover:bg-white/20 hover:text-white';

  const mobileSummaryClassName = isScrolled
    ? 'flex list-none cursor-pointer items-center justify-center rounded-full border border-black/30 bg-white p-2.5 text-black marker:content-[\'\']'
    : 'flex list-none cursor-pointer items-center justify-center rounded-full border border-white/30 bg-black/35 p-2.5 text-white backdrop-blur marker:content-[\'\']';

  const mobilePanelClassName = isScrolled
    ? 'absolute right-0 mt-3 w-56 rounded-2xl border border-black/10 bg-white p-2 shadow-xl'
    : 'absolute right-0 mt-3 w-56 rounded-2xl border border-white/20 bg-black/75 p-2 shadow-xl backdrop-blur';

  const mobileLinkClassName = isScrolled
    ? 'block rounded-xl px-3 py-2.5 text-sm font-medium text-black transition hover:bg-[#00B9DC]/10 hover:text-[#00B9DC]'
    : 'block rounded-xl px-3 py-2.5 text-sm font-medium text-white transition hover:bg-white/20';

  return (
    <header className={headerClassName}>
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <a
          href="#home"
          className="group flex items-center px-1 py-0.5 transition"
        >
          <Image
            src={logoImage}
            alt="Dental Clinic logo"
            width={80}
            height={40}
            className="h-8 w-16 object-contain"
            priority
          />
        </a>
        <nav className={desktopNavClassName}>
          {topNavItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${index === 0
                ? isScrolled
                  ? 'bg-[#00B9DC] text-white'
                  : 'bg-white text-black shadow-sm'
                : desktopTextClassName
                }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${desktopTextClassName}`}
          >
            Appointment
          </a>
        </nav>
        <MotionFade className="hidden md:block">
          <a
            href="tel:+92XXXXXXXXXX"
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition ${isScrolled
              ? 'bg-[#00B9DC] text-white shadow-sm hover:bg-[#0097b4]'
              : 'bg-white text-black shadow-lg shadow-black/20 hover:bg-[#00B9DC] hover:text-white'
              }`}
          >
            <Phone size={16} />
            Call Now
          </a>
        </MotionFade>
        <details className="relative md:hidden">
          <summary className={mobileSummaryClassName}>
            <Menu size={18} />
          </summary>
          <div className={mobilePanelClassName}>
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={mobileLinkClassName}
              >
                {item.label}
              </a>
            ))}
            <a
              href="tel:+92XXXXXXXXXX"
              className={`mt-1 flex items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-sm font-semibold transition ${isScrolled
                ? 'bg-[#00B9DC] text-white hover:bg-[#0097b4]'
                : 'bg-white text-black hover:bg-[#00B9DC] hover:text-white'
                }`}
            >
              <Phone size={15} />
              Call Now
            </a>
          </div>
        </details>
      </div>
    </header>
  );
}
