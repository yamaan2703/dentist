import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import { Facebook, Linkedin, Twitter } from 'lucide-react';
import teamImageOne from '@/components/images/team-1.jpg';
import teamImageTwo from '@/components/images/team-2.jpg';
import teamImageThree from '@/components/images/team-3.jpg';
import teamImageFour from '@/components/images/team-4.jpg';
import teamImageFive from '@/components/images/team-5.png';
import { MotionFade } from './motion-fade';
import { SectionHeading } from './section-heading';

interface TeamMember {
  name: string;
  role: string;
  image: StaticImageData;
}

const teamMembers: TeamMember[] = [
  { name: 'Dr. Johan Joe', role: 'Lead Dentist', image: teamImageOne },
  { name: 'Dr. Mike Johnson', role: 'Senior Dentist', image: teamImageTwo },
  { name: 'Dr. David Lee', role: 'Periodontist', image: teamImageFive },
  { name: 'Dr. Alison Banson', role: 'Orthodontist', image: teamImageThree },
  { name: 'Dr. Sarah Smith', role: 'Pediatric Dentist', image: teamImageFour },
];

export function TeamSection() {
  const visibleTeamMembers = teamMembers.slice(0, 5);

  return (
    <section id="team" className="bg-white px-6 py-20">
      <div className="mx-auto w-full max-w-7xl">
        <MotionFade>
          <SectionHeading
            eyebrow="Meet Our Experts"
            title="A Team Focused on Your Smile"
          />
        </MotionFade>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {visibleTeamMembers.map((member, index) => (
            <MotionFade key={member.name} delay={index * 0.08}>
              <article className="group">
                <div className="relative h-[360px] overflow-hidden rounded-3xl bg-[#f1f7fb]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-center transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-5 flex justify-center gap-1 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <a
                      href="#"
                      aria-label={`${member.name} on Facebook`}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-stone-900 text-white transition hover:bg-[#00B9DC]"
                    >
                      <Facebook size={17} />
                    </a>
                    <a
                      href="#"
                      aria-label={`${member.name} on Linkedin`}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-stone-900 text-white transition hover:bg-[#00B9DC]"
                    >
                      <Linkedin size={17} />
                    </a>
                    <a
                      href="#"
                      aria-label={`${member.name} on Twitter`}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-stone-900 text-white transition hover:bg-[#00B9DC]"
                    >
                      <Twitter size={17} />
                    </a>
                  </div>
                </div>
                <div className="pt-3 text-center">
                  <h3 className="text-xl font-bold text-stone-900 md:text-2xl">
                    {member.name}
                  </h3>
                  <p className="text-xs font-medium text-gray-500 md:text-sm">
                    {member.role}
                  </p>
                </div>
              </article>
            </MotionFade>
          ))}
        </div>
      </div>
    </section>
  );
}
