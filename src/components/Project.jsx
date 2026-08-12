import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, CodeXml } from "lucide-react";
import skymart from "../assets/projects/skymart.png";
import pDash from "../assets/projects/productivity-dashboard.png";
import fintrack from "../assets/projects/fintrack.png";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectsRef = useRef(null);

  const projects = [
    {
      number: "01",
      title: "SkyMart",
      description:
        "A modern e-commerce interface with authentication, product browsing, filtering and cart functionality.",
      tech: ["React", "Tailwind", "Context API"],
      image: skymart,
      featured: true,
      liveUrl: "https://sky-mart-orcin.vercel.app/",
      githubUrl: "https://github.com/chanchal430/SkyMart",
    },
    {
      number: "02",
      title: "Productivity",
      description:
        "An interactive frontend project focused on Context and DOM.",
      tech: ["React", "JavaScript", "DOM"],
      image: pDash,
      liveUrl: "https://productivity-dashboard-five-dusky.vercel.app/",
      githubUrl: "https://github.com/chanchal430/productivity-dashboard",
    },
    {
      number: "03",
      title: "FinTrack",
      description:
        "A responsive experience, React components to manage expenses and income.",
      tech: ["React", "Tailwind CSS", "DOM"],
      image: fintrack,
      liveUrl: "https://fin-track-cohort.vercel.app/",
      githubUrl: "https://github.com/chanchal430/FinTrack-cohort",
    },
  ];

  useLayoutEffect(() => {
    const gContext =gsap.context(() => {

      gsap.from('.projects-header', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: projectsRef.current,
          start: 'top 75%'
        }
      });

      gsap.from('.project-card', {
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.projects-grid',
          start: 'top 80%'
        }
      })
    }, projectsRef)

    return () => gContext.revert();
  },[])

  return (
    <section
      ref={projectsRef}
      id="work"
      className="relative overflow-hidden bg-gray-900 px-6 py-28 text-white sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        {/* HEADER */}
        <div className="projects-header">
          <div className="flex items-center gap-4">
            <span className="text-xs tracking-[0.35em] text-purple-400">
              03 /
            </span>

            <span className="text-xs uppercase tracking-[0.35em] text-gray-500">
              My Work
            </span>

            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="mt-16 max-w-3xl">
            <h2 className="text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              Things I've
              <br />
              <span className="text-purple-400">built.</span>
            </h2>

            <p className="mt-8 max-w-xl text-base leading-relaxed text-gray-400 sm:text-lg">
              A selection of projects where I explored frontend development,
              responsive design and interactive experiences.
            </p>
          </div>
        </div>

        {/* PROJECTS */}
        <div className="projects-grid mt-20 grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.number}
              className={`project-card group relative overflow-hidden rounded-3xl border border-white/10 bg-gray-800 ${
                project.featured ? "md:col-span-2" : ""
              }`}
            >
              {/* Project Image */}
              <div
                className={`relative overflow-hidden ${
                  project.featured
                    ? "h-[320px] sm:h-[400px]"
                    : "h-[380px] sm:h-[420px]"
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-110"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/70 md:bg-black/30 transition-opacity duration-500 group-hover:bg-black/70" />

                {/* Number */}
                <div className="absolute left-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/30 text-xs backdrop-blur-md">
                  {project.number}
                </div>

                {/* Featured */}
                {project.featured && (
                  <div className="absolute right-6 top-6 rounded-full border border-purple-400/30 bg-purple-500/20 px-4 py-2 text-xs uppercase tracking-widest text-purple-200 backdrop-blur-md">
                    Featured
                  </div>
                )}

                {/* CONTENT */}
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <div className="flex items-end justify-between gap-5">
                    <div className="max-w-2xl">
                      <p className="mb-2 text-xs uppercase tracking-[0.3em] text-purple-400">
                        {project.featured
                          ? "Featured Project"
                          : "Frontend Project"}
                      </p>

                      <h3 className="text-3xl font-semibold sm:text-4xl">
                        {project.title}
                      </h3>

                      {/* Hidden until hover on desktop */}
                      <div className="mt-4 max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:max-h-40 group-hover:opacity-100 max-md:max-h-40 max-md:opacity-100">
                        <p className="max-w-xl text-sm leading-relaxed text-gray-300 sm:text-base">
                          {project.description}
                        </p>

                        <div className="mt-5 flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs text-gray-300 backdrop-blur-md"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                      {/* Live Demo */}
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} live`}
                        className="group/link flex h-11 items-center gap-2 rounded-full bg-white px-4 text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-purple-400"
                      >

                        <ArrowUpRight
                          size={17}
                          className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                        />
                      </a>

                      {/* GitHub */}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} source code`}
                        className="group/link flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur-md transition-all duration-300 hover:border-purple-400 hover:bg-purple-400 hover:text-gray-900"
                      >
                        <CodeXml
                          size={18}
                          className="transition-transform duration-300 group-hover/link:scale-110"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM */}
        <div className="mt-16 flex flex-col justify-between gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-600">
            More projects coming soon
          </p>

          <a
            href="#contact"
            className="group flex items-center gap-2 text-sm text-gray-400 transition hover:text-white"
          >
            Let's build something
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
