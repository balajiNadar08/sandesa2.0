"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Editor", href: "/editor" },
    { name: "News", href: "/news" },
    { name: "Extra", href: "/extra" },
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/45 bg-black/30 px-5 py-4 text-white shadow-lg backdrop-blur-xl md:px-10">
      <div className="flex items-center justify-between">
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="font-playfair-sc text-2xl font-bold tracking-wide"
        >
          Sandesa 2.0
        </Link>

        <div className="hidden items-center gap-8 font-lato md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-md font-medium text-white/80 transition-colors hover:text-cyan-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 border border-white/20 bg-white/10 transition hover:bg-white/20 md:hidden"
        >
          <span
            className={`h-0.5 w-5 bg-white transition-all ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 bg-white transition-all ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 bg-white transition-all ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`grid font-lato transition-all duration-300 ease-in-out md:hidden ${
          menuOpen
            ? "mt-4 grid-rows-[1fr] opacity-100"
            : "mt-0 grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col gap-1 border-t border-white/15 pt-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-3 py-3 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-cyan-300"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
