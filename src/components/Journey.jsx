import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, Code2, Trophy, Rocket } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Journey = () => {
  const journeyRef = useRef(null);
  const lineRef = useRef(null);

  const journey = [
    {
      year: "2023",
      title: "Started Web Development",
      description:
        "Started building my foundation in web development with HTML, CSS and JavaScript. Learned how websites work and began creating my first projects.",
      skills: ["HTML", "CSS", "JavaScript"],
      icon: Code2,
    },
    {
      year: "2024",
      title: "First Professional Experience",
      description:
        "Started working as a Frontend Developer at Governsafe, building responsive interfaces from Figma designs and working with modern frontend tools.",
      skills: ["Next.js", "Tailwind CSS", "Figma"],
      icon: Briefcase,
    },
    {
      year: "2025",
      title: "React & Real-World Development",
      description:
        "Joined EcoServeDev and started working on real-world applications using React and TypeScript. Focused on reusable components, APIs and performance.",
      skills: ["React", "TypeScript", "REST APIs"],
      icon: Code2,
    },
    {
      year: "2026",
      title: "Building & Competing",
      description:
        "Focused on strengthening my React skills, building products and exploring interactive experiences with GSAP. Also participated in hackathons and challenged myself to build better.",
      skills: ["React", "GSAP", "Hackathons"],
      icon: Trophy,
    },
    {
      year: "Now",
      title: "Becoming a Better Frontend Engineer",
      description:
        "Currently deepening my knowledge of React, state management, animations and scalable frontend architecture while continuing to build meaningful projects.",
      skills: ["React", "JavaScript", "GSAP"],
      icon: Rocket,
    },
  ];

 useLayoutEffect(() => {
  const gContext = gsap.context(() => {
    const items = gsap.utils.toArray('.journey-item');
    const dots = gsap.utils.toArray('.journey-dot');

    // header
    gsap.from('.journey-header', {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: journeyRef.current,
        start: 'top 75%'
      }
    })

    // purple line grows on users scroll
    gsap.to(lineRef.current, {
      scaleY: 1,
      transformOrigin: 'top',
      ease: 'none',
      scrollTrigger: {
        trigger: '.journey-timeline',
        start: 'top 70%',
        end: 'bottom 70%',
        scrub: true
      }

    })

    // Journey content appears one after other
    items.forEach((item, index) => {
      gsap.to(item, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 80%'
        }
      })

      gsap.to(dots[index], {
        scale: 1.4,
        backgroundColor: '#a855f7',
        borderColor: '#c084fc',
        duration: 0.3,
        scrollTrigger: {
          trigger: item,
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        }
      })
    })
  }, journeyRef)

  return () => gContext.revert();
 },[])

  return (
    <section
      ref={journeyRef}
      id="journey"
      className="relative flex min-h-screen items-center overflow-hidden bg-gray-900 px-6 py-20 text-white sm:px-10 lg:px-16"
    >
      <div className="mx-auto w-full max-w-6xl">
        {/* HEADER */}
        <div className="journey-header mb-14">
          <div className="flex items-center gap-4">
            <span className="text-xs tracking-[0.35em] text-purple-400">
              04 /
            </span>

            <span className="text-xs uppercase tracking-[0.35em] text-gray-500">
              My Journey
            </span>

            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="mt-12 max-w-3xl">
            <h2 className="text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              From learning
              <br />
              to <span className="text-purple-400">building.</span>
            </h2>

            <p className="mt-7 max-w-xl text-base leading-relaxed text-gray-400 sm:text-lg">
              A few milestones that shaped the way I approach frontend
              development today.
            </p>
          </div>
        </div>

        {/* TIMELINE */}
        <div className="journey-timeline relative">
          {/* Background line */}
          <div className="absolute left-[11px] top-0 h-full w-px bg-white/10 sm:left-1/2 sm:-translate-x-1/2" />

          {/* Animated line */}
          <div
            ref={lineRef}
            className="absolute left-[11px] top-0 h-full w-px origin-top scale-y-0 bg-purple-400 sm:left-1/2 sm:-translate-x-1/2"
          />

          <div className="space-y-8 sm:space-y-0">
            {journey.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.year}
                  className={`journey-item relative flex translate-y-8 items-start opacity-0 sm:min-h-[130px] ${
                    index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  {/* CONTENT */}
                  <div
                    className={`ml-10 w-full sm:ml-0 sm:w-[45%] ${
                      index % 2 === 0
                        ? "sm:pr-12 sm:text-right"
                        : "sm:pl-12 sm:text-left"
                    }`}
                  >
                    <p className="text-sm font-medium tracking-[0.3em] text-purple-400">
                      {item.year}
                    </p>

                    <div
                      className={`mt-2 flex items-center gap-3 ${
                        index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
                      }`}
                    >
                      <h3 className="text-xl font-semibold sm:text-2xl">
                        {item.title}
                      </h3>

                      <Icon
                        size={20}
                        className="hidden text-purple-400 sm:block"
                      />
                    </div>

                    <p className="mt-3 text-sm leading-relaxed text-gray-500 sm:text-base">
                      {item.description}
                    </p>

                    <div
                      className={`mt-4 flex flex-wrap gap-2 ${
                        index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
                      }`}
                    >
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-white/10 bg-white/3 px-3 py-1 text-xs text-gray-400"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* DOT */}
                  <div className="journey-dot absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full border border-white/20 bg-gray-900 transition-all sm:left-1/2 sm:-translate-x-1/2">
                    <div className="h-2 w-2 rounded-full bg-gray-600" />
                  </div>

                  {/* EMPTY SIDE */}
                  <div className="hidden sm:block sm:w-[45%]" />
                </div>
              );
            })}
          </div>
        </div>

        {/* FOOTER */}
        <div className="mt-10 border-t border-white/10 pt-5">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-600">
            Still learning. Still building. Still improving.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Journey;
