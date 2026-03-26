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
        className={`fixed top-0 left-0 z-50 flex h-full w-80 flex-col bg-arcadia-cream transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close button */}
        <button
          className="absolute top-6 right-6 text-arcadia-brown"
          aria-label="Fermer le menu"
          onClick={() => setIsOpen(false)}
        >
          <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Logo */}
        <div className="px-8 pt-8 pb-4">
          <img
            src="/logo-arcadia.png"
            alt="Arcadia"
            className="w-44 brightness-0"
          />
        </div>

        {/* Separator */}
        <div className="mx-8 h-px bg-arcadia-brown/20" />

        {/* Main nav links */}
        <div className="flex flex-col gap-1 px-8 pt-6">
          <a
            href="#reserver"
            className="text-sm font-bold tracking-[0.15em] text-arcadia-brown uppercase hover:text-arcadia-brown-light"
            onClick={() => setIsOpen(false)}
          >
            Réserver
          </a>
          <a
            href="#menu"
            className="text-sm font-bold tracking-[0.15em] text-arcadia-brown uppercase hover:text-arcadia-brown-light"
            onClick={() => setIsOpen(false)}
          >
            Menu
          </a>
          <a
            href="#contact"
            className="text-sm font-bold tracking-[0.15em] text-arcadia-brown uppercase hover:text-arcadia-brown-light"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </div>

        {/* Separator */}
        <div className="mx-8 mt-6 h-px bg-arcadia-brown/20" />

        {/* Social links */}
        <div className="flex flex-col gap-1 px-8 pt-6">
          <a
            href="#"
            className="text-xs font-semibold tracking-[0.15em] text-arcadia-brown/80 uppercase hover:text-arcadia-brown"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/arcadia.lille/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold tracking-[0.15em] text-arcadia-brown/80 uppercase hover:text-arcadia-brown"
          >
            Instagram
          </a>
          <a
            href="#"
            className="text-xs font-semibold tracking-[0.15em] text-arcadia-brown/80 uppercase hover:text-arcadia-brown"
          >
            LinkedIn
          </a>
        </div>

        {/* Separator */}
        <div className="mx-8 mt-6 h-px bg-arcadia-brown/20" />

        {/* Legal links */}
        <div className="flex flex-col gap-1 px-8 pt-6">
          <a
            href="#mentions-legales"
            className="text-xs font-semibold tracking-[0.15em] text-arcadia-brown/60 uppercase hover:text-arcadia-brown"
            onClick={() => setIsOpen(false)}
          >
            Mentions Légales
          </a>
          <a
            href="#confidentialite"
            className="text-xs font-semibold tracking-[0.15em] text-arcadia-brown/60 uppercase hover:text-arcadia-brown"
            onClick={() => setIsOpen(false)}
          >
            Confidentialité
          </a>
        </div>
      </nav>
    </>
  );
}
