import React, { useLayoutEffect, useRef } from "react";
import heroBg from "../assets/hero.jpg";
import gsap from "gsap";

const Hero = () => {
  /** giving gsap a ref to hero component */
  const heroRef = useRef(null);
  const bgRef = useRef(null);
  const glowRef = useRef(null);

  useLayoutEffect(() => {
    const gContext = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(".hero-bg", {
        scale: 1.15,
        duration: 1.5,
        ease: "power3.out",
      })
        .from(
          ".hero-eyebrow",
          {
            y: 30,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.8",
        )
        .from(
          ".hero-title",
          {
            y: 80,
            opacity: 0,
            duration: 1,
            ease: "power4.out",
          },
          "-=0.5",
        )
        .from(
          ".hero-description",
          {
            y: 25,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.5",
        )
        .from(
          ".hero-meta",
          {
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.3",
        );

      // mouse parallax
      const moveBackgroundX = gsap.quickTo(bgRef.current, "x", {
        duration: 0.6,
        ease: "power3.out",
      });

      const moveBackgroundY = gsap.quickTo(bgRef.current, "y", {
        duration: 0.6,
        ease: "power3.out",
      });

      const moveGlowX = gsap.quickTo(glowRef.current, "x", {
        duration: 0.8,
        ease: "power3.out",
      });

      const moveGlowY = gsap.quickTo(glowRef.current, "y", {
        duration: 0.8,
        ease: "power3.out",
      });

      const handleMouseMove = (event) => {
        const { clientX, clientY } = event;

        const x = Math.round((clientX / window.innerWidth - 0.5) * 100);
        const y = Math.round((clientY / window.innerHeight - 0.5) * 100);
        
        
        moveBackgroundX(-x);
        moveBackgroundY(-y);

        moveGlowX(x);
        moveGlowY(y);
      };

      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }, heroRef);

    return () => gContext.revert();
  }, []);
  return (
    <section
      ref={heroRef}
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* background */}
      <div
        ref={bgRef}
        className="hero-bg absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      ></div>

      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* purple glow */}
      <div
        ref={glowRef}
        className="absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/20 blur-[120px]"
      ></div>

      {/* content */}
      <div className="relative z-10 mx-auto flex w-[90%] max-w-5xl flex-col items-center text-center">
        <p className="hero-eyebrow mb-5 text-sm uppercase tracking-[0.4em] text-purple-300">
          Hello, I'm
        </p>

        <h1 className="hero-title text-2xl font-bold leading-none tracking-tight sm:text-3xl md:text-4xl lg:text-6xl">
          Chanchal Kumari<span className="text-purple-400">.</span>
        </h1>

        <p className="hero-description mt-4 text-sm uppercase tracking-[0.3em] text-gray-300 sm:text-base">
          Frontend Developer · React · JavaScript · GSAP
        </p>
      </div>

      {/* Bottom Moto */}
      <div className="hero-meta absolute bottom-8 left-1/2 flex w-[90%] -translate-x-1/2 items-center justify-between text-xs uppercase tracking-widest text-gray-400">
        <span>Based in India</span>

        <span className="hidden sm:block">Open to opportunities</span>

        <span>2026</span>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-7 right-6 hidden flex-col items-center gap-2 text-gray-500 sm:flex">
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>

        <div className="h-10 w-px bg-gray-600" />
      </div>

    </section>
  );
};

export default Hero;
