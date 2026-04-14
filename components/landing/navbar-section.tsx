'use client';

import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import logoImage from '@/components/images/logo.png';
import { navItems } from '@/lib/landing-content';

const sectionIdsInPageOrder = [
  'home',
  'about',
  'services',
  'how-we-work',
  'team',
  'testimonials',
  'faq',
  'contact',
] as const;

function computeActiveHrefFromScroll(): string {
  const headerEl = document.querySelector('header');
  const headerHeight = headerEl?.getBoundingClientRect().height ?? 80;
  const marker = window.scrollY + headerHeight + 32;
  const scrollBottom = window.scrollY + window.innerHeight;
  const docHeight = document.documentElement.scrollHeight;

  if (scrollBottom >= docHeight - 8) {
    return '#contact';
  }

  let activeId: (typeof sectionIdsInPageOrder)[number] = 'home';

  for (const id of sectionIdsInPageOrder) {
    const el = document.getElementById(id);
    if (!el) {
      continue;
    }
    const top = el.getBoundingClientRect().top + window.scrollY;
    if (top <= marker) {
      activeId = id;
    }
  }

  return `#${activeId}`;
}

export function NavbarSection() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState('#home');
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const desktopNavItems = useMemo(() => {
    return [
      ...navItems.slice(0, 5),
      { label: 'Appointment', href: '#contact' },
    ];
  }, []);

  const syncActiveFromViewport = useCallback((): void => {
    setActiveHref(computeActiveHrefFromScroll());
  }, []);

  useEffect(() => {
    let scrollTicking = false;

    function handleScroll(): void {
      setIsScrolled(window.scrollY > 12);

      if (!scrollTicking) {
        scrollTicking = true;
        window.requestAnimationFrame(() => {
          syncActiveFromViewport();
          scrollTicking = false;
        });
      }
    }

    function handleHashChange(): void {
      window.requestAnimationFrame(() => {
        syncActiveFromViewport();
      });
    }

    handleScroll();
    syncActiveFromViewport();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [syncActiveFromViewport]);

  useEffect(() => {
    if (!isMobileOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent): void {
      if (event.key === 'Escape') {
        setIsMobileOpen(false);
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileOpen]);

  const headerClassName = isScrolled
    ? 'fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-white/90 shadow-sm backdrop-blur-xl'
    : 'fixed inset-x-0 top-0 z-50 border-b border-transparent bg-white/70 backdrop-blur-xl';

  return (
    <header className={headerClassName}>
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a
          href="#home"
          className="group flex items-center"
          onClick={() => {
            setActiveHref('#home');
            setIsMobileOpen(false);
          }}
        >
          <Image
            src={logoImage}
            alt="Dental Clinic logo"
            width={80}
            height={40}
            className="h-9 w-auto object-contain"
            priority
          />
        </a>

        <nav className="hidden max-w-[min(100%,52rem)] flex-1 items-center justify-center gap-0.5 overflow-x-auto rounded-full border border-black/10 bg-white/70 p-1 shadow-[0_10px_30px_rgba(0,185,220,0.08)] backdrop-blur md:flex md:min-w-0">
          {desktopNavItems.map((item) => {
            const isActive = activeHref === item.href;

            return (
              <a
                key={`${item.label}-${item.href}`}
                href={item.href}
                onClick={() => {
                  setActiveHref(item.href);
                }}
                className={`shrink-0 whitespace-nowrap rounded-full px-2.5 py-2 text-xs font-semibold transition xl:px-4 xl:text-sm ${isActive
                  ? 'bg-[#00B9DC] text-white shadow-sm'
                  : 'text-[#08314a] hover:bg-[#00B9DC]/10 hover:text-[#00B9DC]'
                  }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden shrink-0 items-center gap-3 md:flex">
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-[#00B9DC] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0097b4]"
            onClick={() => {
              setActiveHref('#contact');
            }}
          >
            Book Now
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-[#08314a] shadow-sm transition hover:border-[#00B9DC]/35 hover:text-[#00B9DC]"
            aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileOpen}
            onClick={() => {
              setIsMobileOpen((value) => !value);
            }}
          >
            {isMobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {isMobileOpen ? (
        <div className="md:hidden">
          <button
            type="button"
            className="fixed inset-0 z-40 bg-black/30"
            aria-label="Close menu overlay"
            onClick={() => {
              setIsMobileOpen(false);
            }}
          />
          <div className="fixed inset-x-4 top-[72px] z-50 rounded-2xl border border-black/10 bg-white p-3 shadow-xl">
            <div className="space-y-1">
              {navItems.map((item) => {
                const isActive = activeHref === item.href;

                return (
                  <a
                    key={`mobile-${item.label}-${item.href}`}
                    href={item.href}
                    className={`block rounded-xl px-3 py-3 text-sm font-semibold transition ${isActive
                      ? 'bg-[#00B9DC]/10 text-[#00B9DC]'
                      : 'text-[#08314a] hover:bg-black/[0.03]'
                      }`}
                    onClick={() => {
                      setActiveHref(item.href);
                      setIsMobileOpen(false);
                    }}
                  >
                    {item.label}
                  </a>
                );
              })}
              <a
                href="#contact"
                className="block rounded-xl px-3 py-3 text-sm font-semibold text-[#00B9DC] hover:bg-[#00B9DC]/10"
                onClick={() => {
                  setActiveHref('#contact');
                  setIsMobileOpen(false);
                }}
              >
                Appointment
              </a>
            </div>
            <div className="mt-3 grid gap-2 border-t border-black/10 pt-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-4 py-3 text-sm font-semibold text-[#08314a] transition hover:border-[#00B9DC]/35 hover:text-[#00B9DC]"
                onClick={() => {
                  setActiveHref('#contact');
                  setIsMobileOpen(false);
                }}
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
