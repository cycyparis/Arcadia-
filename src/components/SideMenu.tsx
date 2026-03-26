"use client";

import { useState } from "react";

const links = [
  { label: "Réserver", href: "#reserver" },
  { label: "Menu", href: "#menu" },
  { label: "Contact", href: "#contact" },
];

export default function SideMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger button */}
      <button
        className="relative z-[60] flex h-10 w-10 flex-col items-center justify-center gap-[6px] p-2"
        aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        onClick={() => setIsOpen((v) => !v)}
      >
        <span
          className="block h-px w-6 bg-white transition-all duration-300 ease-in-out"
          style={isOpen ? { transform: "translateY(7px) rotate(45deg)" } : {}}
        />
        <span
          className="block h-px w-6 bg-white transition-all duration-300 ease-in-out"
          style={isOpen ? { opacity: 0, transform: "scaleX(0)" } : {}}
        />
        <span
          className="block h-px w-6 bg-white transition-all duration-300 ease-in-out"
          style={isOpen ? { transform: "translateY(-7px) rotate(-45deg)" } : {}}
        />
      </button>

      {/* Full-screen overlay */}
      <div
        className="fixed inset-0 z-50 flex flex-col justify-between bg-arcadia-brown px-10 py-10 transition-all duration-500 ease-in-out"
        style={{
          clipPath: isOpen ? "inset(0% 0% 0% 0%)" : "inset(0% 0% 100% 0%)",
        }}
      >
        {/* Top: logo */}
        <div className="flex justify-end">
          <img
            src="/logo-arcadia.png"
            alt="Arcadia"
            className="w-32 opacity-90"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </div>

        {/* Center: nav links */}
        <nav className="flex flex-col gap-6">
          {links.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="group relative w-fit text-4xl font-normal text-white/90 hover:text-arcadia-gold md:text-5xl title-gravure"
              style={{
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? "translateY(0)" : "translateY(20px)",
                transitionProperty: "opacity, transform, color",
                transitionDuration: "0.5s, 0.5s, 0.3s",
                transitionTimingFunction: "ease, ease, ease",
                transitionDelay: isOpen ? `${i * 80 + 200}ms, ${i * 80 + 200}ms, 0ms` : "0ms, 0ms, 0ms",
              }}
            >
              {link.label}
              <span className="absolute bottom-0 left-0 h-px w-0 bg-arcadia-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Bottom: socials + legal */}
        <div className="flex flex-col gap-4">
          <div className="h-px w-full bg-white/10" />
          <div className="flex gap-6">
            <a href="#" className="text-xs tracking-[0.15em] text-white/40 uppercase transition-colors hover:text-white/80">Facebook</a>
            <a href="https://www.instagram.com/arcadia.lille/" target="_blank" rel="noopener noreferrer" className="text-xs tracking-[0.15em] text-white/40 uppercase transition-colors hover:text-white/80">Instagram</a>
            <a href="mailto:contact@arcadia-lille.com" className="text-xs tracking-[0.15em] text-white/40 uppercase transition-colors hover:text-white/80">Email</a>
          </div>
        </div>
      </div>
    </>
  );
}

