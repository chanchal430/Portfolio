import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import {
  ArrowUpRight,
  CodeXml,
  Handshake,
  Mail,
  MessageCircle,
} from "lucide-react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const contactRef = useRef(null);
  const linksRef = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Main content
      gsap.fromTo(
        ".contact-item",
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contactRef.current,
            start: "top 75%",
            once: true,
          },
        },
      );

      // Contact links
      gsap.fromTo(
        ".contact-link",
        {
          x: 80,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.5,
          ease: "power3.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: linksRef.current,
            start: "top 80%",
            once: true,
          },
        },
      );
    }, contactRef);

    return () => ctx.revert();
  }, []);

  const contactLinks = [
    {
      name: "Email",
      value: "kchanchal430@gmail.com",
      icon: Mail,
      link: "mailto:kchanchal430@gmail.com",
    },
    {
      name: "LinkedIn",
      value: "Let's connect professionally",
      icon: Handshake,
      link: "https://www.linkedin.com/in/chanchal-kumari-50896125b",
    },
    {
      name: "GitHub",
      value: "chanchal430",
      icon: CodeXml,
      link: "https://github.com/chanchal430",
    },
  ];

  return (
    <section
      ref={contactRef}
      id="contact"
      className="relative overflow-hidden bg-gray-900 px-6 py-28 text-white sm:px-10 lg:px-16"
    >
      <div className="relative mx-auto max-w-6xl">
        {/* Section heading */}
        <div className="contact-item flex items-center gap-4">
          <span className="text-xs tracking-[0.35em] text-purple-400">
            05 /
          </span>

          <span className="text-xs uppercase tracking-[0.35em] text-gray-500">
            Contact
          </span>

          <div className="h-px flex-1 bg-white/10" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Main content */}
          <div className="contact-item mt-20 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.3em] text-purple-400">
              Have an idea?
            </p>

            <h2 className="mt-5 text-6xl font-semibold leading-[0.9] tracking-tight sm:text-7xl lg:text-8xl">
              Let's
              <span className="text-purple-400"> talk.</span>
            </h2>

            <p className="mt-8 max-w-xl text-base leading-relaxed text-gray-400 sm:text-lg">
              Have a project, an opportunity, or just want to connect? I'm
              always open to interesting conversations.
            </p>

            {/* Main email button */}
            <a
              href="mailto:kchanchal430@gmail.com"
              className="group mt-10 inline-flex items-center gap-4 rounded-full border border-white/10 bg-white/5 px-6 py-4 text-sm text-gray-200 backdrop-blur-sm  hover:border-purple-400/50 hover:bg-purple-500/10"
            >
              <span>Get in touch</span>

              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-500 text-white group-hover:rotate-45">
                <ArrowUpRight size={17} />
              </span>
            </a>
          </div>

          {/* Contact links */}
          <div
            ref={linksRef}
            className="contact-links mt-24 border-t border-white/10"
          >
            {contactLinks.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.name}
                  href={item.link}
                  target={item.name === "Email" ? undefined : "_blank"}
                  rel={
                    item.name === "Email" ? undefined : "noopener noreferrer"
                  }
                  className="contact-link group flex items-center justify-between border-b border-white/10 py-6 hover:px-3"
                >
                  <div className="flex items-center gap-5">
                    <Icon
                      size={20}
                      className="text-gray-600 transition-colors duration-300 group-hover:text-purple-400"
                    />

                    <div>
                      <p className="text-xs uppercase tracking-[0.25em] text-gray-600">
                        {item.name}
                      </p>

                      <p className="mt-1 text-sm text-gray-300 sm:text-base">
                        {item.value}
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight
                    size={18}
                    className="text-gray-600 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-purple-400"
                  />
                </a>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="contact-item mt-20 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs uppercase tracking-[0.25em] text-gray-600">
            Chanchal Kumari · Frontend Developer
          </p>

          <p className="text-xs text-gray-600">
            © 2026 · Built with React & GSAP
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
