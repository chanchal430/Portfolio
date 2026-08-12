import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const Loader = ({ onComplete }) => {
  const loaderRef = useRef(null);

  useLayoutEffect(() => {
    const gContext = gsap.context(() => {
      const tl = gsap.timeline({ onComplete });

      tl.from(".loader-greet", {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: "power2.out",
      })
        .from(
          ".loader-line",
          {
            scaleX: 0,
            transformOrigin: "left",
            duration: 0.8,
            ease: "power3.inOut",
          },
          "-=0.2",
        )
        .from(".loader-name", {
          y: 60,
          opacity: 0,
          duration: 0.9,
          ease: "power4.out",
        }, "-=0.3")
        .to(".loader-content", {
          opacity: 0,
          y: -30,
          duration: 0.5,
          delay: 0.4,
          ease: "power3.in",
        })
        .to(
          loaderRef.current,
          {
            yPercent: -100,
            duration: 1,
            ease: "power4.inOut",
          },
          "-=0.2",
        );
    }, loaderRef);

    return () => gContext.revert();
  }, [onComplete]);
  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-100 flex items-center justify-center bg-black text-white"
    >
      <div className="loader-content flex w-[85%] max-w-2xl flex-col items-center text-center">
        <span className="loader-greet mb-6 text-xs tracking-[0.5em] text-purple-400">
          welcome
        </span>

        <div className="loader-line mb-6 h-px w-full bg-purple-400" />

        <h1 className="loader-name text-xl font-bold tracking-tight ">
          CHANCHALKumari
          <span className="text-purple-400">.</span>
        </h1>
      </div>
    </div>
  );
};

export default Loader;
