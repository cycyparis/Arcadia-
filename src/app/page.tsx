export default function Home() {
  return (
    <div className="relative min-h-screen w-full">
      {/* Dark brown border frame */}
      <div className="fixed inset-0 z-20 pointer-events-none border-[12px] border-arcadia-brown md:border-[20px]" />

      {/* Split background images */}
      <div className="absolute inset-0 flex">
        {/* Left image */}
        <div
          className="relative w-1/2 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-left.jpg')" }}
        >
          <div className="absolute inset-0 bg-arcadia-brown/50" />
        </div>
        {/* Right image */}
        <div
          className="relative w-1/2 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-right.jpg')" }}
        >
          <div className="absolute inset-0 bg-arcadia-brown/50" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-between px-6 py-8 md:px-12 md:py-12">
        {/* Top bar */}
        <header className="flex w-full items-center justify-between">
          {/* Hamburger menu */}
          <button
            className="flex flex-col gap-[5px] p-2"
            aria-label="Menu"
          >
            <span className="block h-[2px] w-7 bg-white" />
            <span className="block h-[2px] w-7 bg-white" />
            <span className="block h-[2px] w-7 bg-white" />
          </button>

          {/* Social links */}
          <nav className="flex items-center gap-4">
            <a
              href="#"
              aria-label="Facebook"
              className="text-white/80 transition-colors hover:text-white"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-white/80 transition-colors hover:text-white"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-white/80 transition-colors hover:text-white"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </nav>
        </header>

        {/* Center content */}
        <div className="flex flex-1 flex-col items-center justify-center gap-8 text-center">
          {/* Decorative art-deco logo ornament */}
          <div className="flex items-center gap-3">
            <svg
              className="h-8 w-12 text-white/70 md:h-10 md:w-16"
              viewBox="0 0 64 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M0 20 L16 8 L32 20 L16 32 Z" />
              <path d="M12 20 L32 4 L52 20" />
              <path d="M20 20 L32 12 L44 20" />
            </svg>
            <svg
              className="h-8 w-12 -scale-x-100 text-white/70 md:h-10 md:w-16"
              viewBox="0 0 64 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M0 20 L16 8 L32 20 L16 32 Z" />
              <path d="M12 20 L32 4 L52 20" />
              <path d="M20 20 L32 12 L44 20" />
            </svg>
          </div>

          {/* Main title */}
          <h1
            className="text-5xl leading-tight tracking-wide text-white md:text-7xl lg:text-8xl"
            style={{ fontFamily: "'Brush Script MT', 'Segoe Script', 'Dancing Script', cursive" }}
          >
            Arcadia
          </h1>

          {/* Subtitle with ornament lines */}
          <div className="ornament-line text-xs tracking-[0.3em] text-white/80 uppercase md:text-sm">
            Le Marais Paris
          </div>

          {/* Address */}
          <p className="text-sm tracking-[0.15em] text-white/90 uppercase md:text-base">
            148 Rue du Temple, Paris 3
          </p>

          {/* CTA Buttons */}
          <div className="mt-4 flex flex-col items-center gap-6 sm:flex-row sm:gap-8">
            <a href="#reserver" className="btn-deco">
              <span className="corner-tl" />
              <span className="corner-tr" />
              <span className="corner-bl" />
              <span className="corner-br" />
              Réserver
            </a>
            <a href="#buffets" className="btn-deco">
              <span className="corner-tl" />
              <span className="corner-tr" />
              <span className="corner-bl" />
              <span className="corner-br" />
              Plan des Buffets
            </a>
            <a href="#groupe" className="btn-deco">
              <span className="corner-tl" />
              <span className="corner-tr" />
              <span className="corner-bl" />
              <span className="corner-br" />
              Groupe
            </a>
          </div>
        </div>

        {/* Bottom spacer */}
        <div />
      </div>
    </div>
  );
}
