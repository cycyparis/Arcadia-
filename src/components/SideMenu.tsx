"use client";

import { useState } from "react";

export default function SideMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger button */}
      <button
        className="flex flex-col gap-[5px] p-2 z-30 relative"
        aria-label="Ouvrir le menu"
        onClick={() => setIsOpen(true)}
      >
        <span className="block h-[2px] w-7 bg-white" />
        <span className="block h-[2px] w-7 bg-white" />
        <span className="block h-[2px] w-7 bg-white" />
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-arcadia-brown/70 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Side panel */}
      <nav
        className={`fixed top-0 left-0 z-50 flex h-full w-[340px] flex-col justify-between bg-arcadia-cream px-10 py-10 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Top section */}
        <div>
          {/* Header: logo + close */}
          <div className="flex items-start justify-between">
            <img
              src="/logo-arcadia.png"
              alt="Arcadia"
              className="w-40 brightness-0 sepia"
              style={{ filter: "brightness(0) sepia(1) saturate(3) hue-rotate(-15deg) brightness(0.25)" }}
            />
            <button
              className="mt-1 text-arcadia-brown/50 transition-colors hover:text-arcadia-brown"
              aria-label="Fermer le menu"
              onClick={() => setIsOpen(false)}
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Separator */}
          <div className="mt-8 h-px bg-arcadia-brown/10" />

          {/* Main nav */}
          <div className="mt-8 flex flex-col gap-4">
            <a
              href="#reserver"
              className="text-[0.95rem] font-bold tracking-[0.08em] text-arcadia-brown transition-colors hover:text-arcadia-gold"
              onClick={() => setIsOpen(false)}
            >
              Réserver
            </a>
            <a
              href="#menu"
              className="text-[0.95rem] font-bold tracking-[0.08em] text-arcadia-brown transition-colors hover:text-arcadia-gold"
              onClick={() => setIsOpen(false)}
            >
              Menu
            </a>
            <a
              href="#contact"
              className="text-[0.95rem] font-medium tracking-[0.08em] text-arcadia-brown transition-colors hover:text-arcadia-gold"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </div>

          {/* Separator */}
          <div className="mt-8 h-px bg-arcadia-brown/10" />

          {/* Social */}
          <div className="mt-6 flex flex-col gap-3">
            <a
              href="#"
              className="text-[0.8rem] tracking-[0.05em] text-arcadia-brown/50 transition-colors hover:text-arcadia-brown"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/arcadia.lille/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.8rem] tracking-[0.05em] text-arcadia-brown/50 transition-colors hover:text-arcadia-brown"
            >
              Instagram
            </a>
            <a
              href="mailto:contact@arcadia-lille.com"
              className="text-[0.8rem] tracking-[0.05em] text-arcadia-brown/50 transition-colors hover:text-arcadia-brown"
            >
              contact@arcadia-lille.com
            </a>
          </div>
        </div>

        {/* Bottom: legal */}
        <div className="flex flex-col gap-2">
          <div className="mb-4 h-px bg-arcadia-brown/10" />
          <a
            href="#mentions-legales"
            className="text-[0.7rem] tracking-[0.03em] text-arcadia-brown/35 transition-colors hover:text-arcadia-brown/60"
            onClick={() => setIsOpen(false)}
          >
            Mentions légales
          </a>
          <a
            href="#confidentialite"
            className="text-[0.7rem] tracking-[0.03em] text-arcadia-brown/35 transition-colors hover:text-arcadia-brown/60"
            onClick={() => setIsOpen(false)}
          >
            Confidentialité
          </a>
        </div>
      </nav>
    </>
  );
}
