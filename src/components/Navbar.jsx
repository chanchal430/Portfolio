import React, { useState } from "react";
import { X, Menu } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Work", href: "#work" },
    { name: "Journey", href: "#journey" },
  ];

  return (
    <nav className="fixed top-4 left-1/2 z-50 w-[90%] max-w-6xl -translate-x-1/2">
      <div className="relative rounded-full border border-white/10 bg-gray-900/80 px-5 py-3 text-white shadow-lg backdrop-blur-md">
        {/* Desktop + mobile header */}
        <div className=" flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="text-xl font-bold tracking-wider">
            CK<span className="text-purple-400">.</span>
          </a>

          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((linkItem) => {
              return (
                <a
                  key={linkItem.name}
                  href={linkItem.href}
                  className="relative text-sm font-medium text-gray-300 transition hover:text-white after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-0 after:bg-purple-400 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {linkItem.name}
                </a>
              );
            })}
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden rounded-full bg-white px-5 py-2 text-sm font-semibold text-gray-900 transition hover:bg-purple-400 hover:text-white md:block"
          >
            Let's Talk
          </a>

          {/* Mobile menu only in mobile */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="text-2xl md:hidden"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile nav */}
        {isOpen && (
          <div className="absolute right-0 top-[calc(100%+10px)] min-w-48 rounded-2xl border border-white/10 bg-gray-800/95 p-4 shadow-xl backdrop-blur-md md:hidden">
            <div className="flex flex-col gap-2">
              {navLinks.map((linkItem) => {
                return (
                  <a
                    key={linkItem.name}
                    href={linkItem.href}
                    onClick={() => setIsOpen(false)}
                    className="rounded-xl px-4 py-3 text-gray-300 transition hover:bg-white/10 hover:text-white"
                  >
                    {linkItem.name}
                  </a>
                );
              })}

              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 rounded-xl bg-white px-4 py-3 text-center text-sm font-semibold text-gray-900 transition hover:bg-purple-400 hover:text-white"
              >
                Let's Talk
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
