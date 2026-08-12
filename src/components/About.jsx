import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import profileImage from "../assets/profile.png";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);
  const contentRef = useRef(null);
  const photoRef = useRef(null);

  useLayoutEffect(() => {
    const gContext = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Desktop mode
      mm.add("(min-width: 1024px)", () => {
        // Section entrance
        gsap
          .timeline({
            scrollTrigger: {
              trigger: aboutRef.current,
              start: "top 75%",
            },
          })
          .from(".about-label", {
            y: 20,
            opacity: 0,
            duration: 0.5,
            ease: "power3.out",
          })
          .from(
            ".about-intro",
            {
              y: 50,
              opacity: 0,
              duration: 0.8,
              ease: "power4.out",
            },
            "-=0.2",
          )
          .from(
            ".about-copy",
            {
              y: 30,
              opacity: 0,
              duration: 0.7,
              ease: "power3.out",
            },
            "-=0.4",
          )
          .from(
            ".about-photo",
            {
              scale: 0.94,
              opacity: 0,
              duration: 1,
              ease: "power3.out",
            },
            "-=0.7",
          );

        // PIN PHOTO
        ScrollTrigger.create({
          trigger: photoRef.current,
          start: "top 120px",
          endTrigger: contentRef.current,
          end: "bottom bottom",
          pin: true,
          pinSpacing: false,
        });

        // STORY REVEALS
        gsap.utils.toArray(".about-story").forEach((item) => {
          gsap.from(item, {
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
            },
            y: 40,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
          });
        });
      });

      // Mobile mode
      mm.add("(max-width: 1023px)", () => {
        gsap.from(".about-label", {
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 80%",
          },
          y: 20,
          opacity: 0,
          duration: 0.5,
        });

        gsap.from(".about-intro", {
          scrollTrigger: {
            trigger: ".about-intro",
            start: "top 80%",
          },
          y: 40,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
        });

        gsap.from(".about-photo", {
          scrollTrigger: {
            trigger: ".about-photo",
            start: "top 80%",
          },
          scale: 0.95,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        });

        // story
        gsap.utils.toArray(".about-story").forEach((item) => {
          gsap.from(item, {
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
            },
            y: 30,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
          });
        });
      });
    }, aboutRef);

    return () => gContext.revert();
  }, []);

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "GSAP",
    "Git",
  ];

  return (
    <section
      ref={aboutRef}
      id="about"
      className="relative overflow-hidden bg-gray-900 px-6 py-28 text-white sm:px-10 lg:px-16"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -right-60 top-1/3 h-150 w-150 rounded-full bg-purple-700/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* SECTION HEADER */}

        <div className="about-label flex items-center gap-4">
          <span className="text-xs font-medium tracking-[0.35em] text-purple-400">
            02 /
          </span>

          <span className="text-xs uppercase tracking-[0.35em] text-gray-500">
            About Me
          </span>

          <div className="h-px flex-1 bg-white/10" />
        </div>

        {/* MAIN CONTENT */}

        <div className="mt-20 grid gap-20 lg:grid-cols-[1fr_0.8fr]">
          {/* LEFT STORY */}

          <div ref={contentRef}>
            {/* INTRO */}

            <div className="about-intro">
              <p className="mb-6 text-xs uppercase tracking-[0.35em] text-purple-400">
                Frontend Engineer
              </p>

              <h2 className="max-w-4xl text-5xl font-semibold leading-[0.92] tracking-tighter sm:text-6xl lg:text-7xl">
                I build
                <br />
                <span className="text-purple-400">digital experiences</span>
                <br />
                for the web
                <span className="text-purple-400">.</span>
              </h2>

              <div className="about-copy mt-10 max-w-2xl">
                <p className="text-lg leading-relaxed text-gray-300">
                  I'm a frontend engineer who enjoys turning ideas into
                  responsive, interactive and user-friendly web experiences.
                </p>

                <p className="mt-5 text-base leading-relaxed text-gray-500">
                  I started with the fundamentals of web development and
                  gradually moved into modern frontend development. I'm
                  currently focused on strengthening my React skills and
                  building better interfaces through thoughtful design and
                  interaction.
                </p>
              </div>
            </div>

            {/* STORY 01 */}

            <div className="about-story mt-18 border-t border-white/10 pt-8">
              <div className="flex items-start gap-6">
                <span className="text-xs text-purple-400">01</span>

                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-600">
                    My Approach
                  </p>

                  <h3 className="mt-4 text-3xl font-medium leading-tight text-gray-200 sm:text-4xl">
                    Simple interfaces.
                    <br />
                    Thoughtful interactions.
                  </h3>

                  <p className="mt-5 max-w-xl text-sm leading-relaxed text-gray-500 sm:text-base">
                    I believe good frontend development should feel natural.
                    Clean layouts, responsive design and interactions should
                    work together without getting in the user's way.
                  </p>
                </div>
              </div>
            </div>

            {/* STORY 02 */}

            <div className="about-story mt-18 border-t border-white/10 pt-8">
              <div className="flex items-start gap-6">
                <span className="text-xs text-purple-400">02</span>

                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-600">
                    Currently Learning
                  </p>

                  <h3 className="mt-4 text-4xl font-medium text-gray-200">
                    React
                    <span className="text-purple-400">.</span>
                  </h3>

                  <p className="mt-5 max-w-xl text-sm leading-relaxed text-gray-500 sm:text-base">
                    I'm currently deepening my React knowledge, especially
                    component architecture, state management, reusable
                    components and interactive UI.
                  </p>

                  <div className="mt-6 flex items-center gap-3 text-sm text-gray-400">
                    <span className="h-2 w-2 rounded-full bg-purple-400" />
                    Improving every day.
                  </div>
                </div>
              </div>
            </div>

            {/* STORY 03 */}

            <div className="about-story mt-18 mb-18 border-t border-white/10 pt-8 ">
              <div className="flex items-start gap-6">
                <span className="text-xs text-purple-400">03</span>

                <div className="w-full">
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-600">
                    Technologies
                  </p>

                  <div className="mt-6 flex flex-wrap gap-x-7 gap-y-4">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-base text-gray-400 transition-colors duration-300 hover:text-purple-400 cursor-pointer"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT PHOTO */}

          <div className="relative">
            <div
              ref={photoRef}
              className="about-photo relative mx-auto w-full max-w-md lg:mt-10"
            >
              {/* Glow */}

              <div className="absolute -inset-8 rounded-full bg-purple-600/15 blur-[90px]" />

              {/* Image frame */}

              <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-gray-800 shadow-2xl shadow-black/40">
                <img
                  src={profileImage}
                  alt="Chanchal Kumari"
                  className="h-140 w-full object-cover object-top"
                />

                {/* DARK GRADIENT */}
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-gray-950/90 via-transparent to-black/50" />

                {/* Image information */}

                <div className="absolute bottom-6 left-6">
                  <p className="text-[10px] uppercase tracking-[0.35em] text-gray-400">
                    Chanchal Kumari
                  </p>

                  <p className="mt-2 text-sm text-gray-300">
                    Frontend Engineer
                  </p>
                </div>
              </div>

              {/* Number */}

              <div className="absolute -right-4 -top-5 flex h-14 w-14 items-center justify-center rounded-full border border-purple-400/30 bg-gray-900 text-xs font-medium text-purple-400 shadow-xl">
                02
              </div>

              {/* Location */}

              <div className="absolute -bottom-5 -right-5 rounded-xl border border-white/10 bg-gray-900/95 px-5 py-4 shadow-2xl backdrop-blur-md">
                <p className="text-[9px] uppercase tracking-[0.3em] text-gray-600">
                  Based in
                </p>

                <p className="mt-1 text-sm font-medium text-gray-300">India</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-600">
              Building · Learning · Improving
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
