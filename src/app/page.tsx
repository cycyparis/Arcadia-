import SideMenu from "@/components/SideMenu";
import Marquee from "@/components/Marquee";
import OrnamentDiamond from "@/components/OrnamentDiamond";

export default function Home() {
  return (
    <div className="relative">
      {/* Dark brown border frame */}
      <div className="fixed inset-0 z-20 pointer-events-none border-[12px] border-arcadia-brown md:border-[20px]" />

      {/* ===== HERO SECTION ===== */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Split background images */}
        <div className="absolute inset-0 flex">
          <div
            className="relative w-1/2 bg-cover bg-center"
            style={{ backgroundImage: "url('/hero-left.jpg')" }}
          >
            <div className="absolute inset-0 bg-arcadia-brown/65" />
          </div>
          <div
            className="relative w-1/2 bg-cover bg-center"
            style={{ backgroundImage: "url('/hero-right.jpg')" }}
          >
            <div className="absolute inset-0 bg-arcadia-brown/65" />
          </div>
        </div>

        {/* Hero content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-between px-6 py-8 md:px-12 md:py-12" style={{ textShadow: "0 2px 16px rgba(0,0,0,0.95), 0 6px 40px rgba(0,0,0,0.85)" }}>
          {/* Top bar */}
          <header className="flex w-full items-center justify-between">
            <SideMenu />
            <nav className="flex items-center gap-4">
              <a href="#" aria-label="Facebook" className="text-white/80 transition-colors hover:text-white">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/arcadia.lille/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white/80 transition-colors hover:text-white">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a href="mailto:contact@arcadia-lille.com" aria-label="Email" className="text-white/80 transition-colors hover:text-white">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </a>
            </nav>
          </header>

          {/* Center content */}
          <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
            <div className="flex flex-col items-center">
              <div className="mb-1 flex items-center gap-3">
                <svg className="h-6 w-9 text-white/70 sm:h-8 sm:w-12 md:h-10 md:w-16" viewBox="0 0 64 40" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M0 20 L16 8 L32 20 L16 32 Z" />
                  <path d="M12 20 L32 4 L52 20" />
                  <path d="M20 20 L32 12 L44 20" />
                </svg>
                <svg className="h-6 w-9 -scale-x-100 text-white/70 sm:h-8 sm:w-12 md:h-10 md:w-16" viewBox="0 0 64 40" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M0 20 L16 8 L32 20 L16 32 Z" />
                  <path d="M12 20 L32 4 L52 20" />
                  <path d="M20 20 L32 12 L44 20" />
                </svg>
              </div>
              <img
                src="/logo-arcadia.png"
                alt="Arcadia"
                className="w-52 drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)] sm:w-72 md:w-[28rem] lg:w-[36rem]"
              />
            </div>
            <div className="flex items-center gap-6 text-[0.65rem] font-semibold tracking-[0.25em] text-white uppercase sm:text-xs sm:tracking-[0.3em] md:text-sm">
              <span>Frais</span>
              <OrnamentDiamond className="h-2 w-2 text-arcadia-gold/80" />
              <span>Saisonnier</span>
              <OrnamentDiamond className="h-2 w-2 text-arcadia-gold/80" />
              <span>Authentique</span>
            </div>
            <p className="text-xs font-semibold tracking-[0.12em] text-white uppercase sm:text-sm sm:tracking-[0.15em] md:text-base">
              30 Rue Gosselet, 59000 Lille
            </p>
            <div className="flex flex-row items-center gap-4 sm:gap-8">
              <a href="#reserver" className="btn-deco">
                <span className="corner-tl" />
                <span className="corner-tr" />
                <span className="corner-bl" />
                <span className="corner-br" />
                Réserver
              </a>
              <a href="#menu" className="btn-deco">
                <span className="corner-tl" />
                <span className="corner-tr" />
                <span className="corner-bl" />
                <span className="corner-br" />
                Menu
              </a>
            </div>
          </div>
          <div />
        </div>
      </section>

      {/* ===== MARQUEE BAND ===== */}
      <Marquee />

      {/* ===== ABOUT SECTION ===== */}
      <section className="bg-arcadia-brown">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-8 py-20 md:flex-row md:gap-20 md:px-16 md:py-32">

          {/* Left: text */}
          <div className="flex-1">
            {/* Eyebrow */}
            <p className="mb-6 text-[0.65rem] font-semibold tracking-[0.4em] text-arcadia-gold uppercase">
              Restaurant · Lille
            </p>

            <img
              src="/logo-arcadia.png"
              alt="Arcadia"
              className="w-56 md:w-64 brightness-0 invert opacity-90"
            />

            {/* Art-deco rule */}
            <div className="mt-4 flex items-center gap-3 text-arcadia-gold/60">
              <OrnamentDiamond className="h-2 w-2 text-arcadia-gold/80" />
              <div className="h-px w-6 bg-arcadia-gold/40" />
              <div className="h-px w-12 bg-arcadia-gold" />
              <div className="h-px w-6 bg-arcadia-gold/40" />
              <OrnamentDiamond className="h-2 w-2 text-arcadia-gold/80" />
            </div>

            <p className="mt-8 max-w-lg typography-body text-white/75">
              Au cœur de Lille, nous avons créé un lieu où la cuisine est une
              célébration. Des produits frais, de saison, travaillés avec
              authenticité pour inspirer chacun de nos convives à savourer
              chaque instant autour de notre table.
            </p>
            <p className="mt-4 max-w-lg typography-body text-white/75">
              Arcadia, c&apos;est l&apos;envie de partager, d&apos;explorer les saveurs et de
              créer des moments uniques dans un cadre chaleureux et raffiné.
            </p>

            {/* Hours line */}
            <div className="mt-10 flex items-center gap-4 text-arcadia-gold/60">
              <div className="h-px w-8 bg-arcadia-gold/50" />
              <OrnamentDiamond className="h-2 w-2 text-arcadia-gold/80" />
              <div className="h-px w-8 bg-arcadia-gold/50" />
            </div>
          </div>

          {/* Right: image */}
          <div className="w-full flex-1 pb-3 pr-3">
            {/* Offset gold frame — padding makes room for the offset border */}
            <div className="relative">
              <div className="absolute -bottom-3 -right-3 h-full w-full border border-arcadia-gold/30" />
              <div className="overflow-hidden">
                <img
                  src="/about-restaurant.jpg"
                  alt="Restaurant Arcadia"
                  className="h-auto w-full object-cover transition-transform duration-700 ease-in-out hover:scale-105"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ===== MENU SECTION ===== */}
      <section id="menu" className="bg-arcadia-brown">
        {/* Compat : certains liens pointent encore vers #reserver */}
        <div id="reserver" className="sr-only" aria-hidden="true" />

        <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 py-10 md:gap-16 md:px-16 md:py-16">
          {/* Left: Menu */}
          <div className="flex-1 w-full order-2">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              <div>
                <p className="mb-5 text-[0.7rem] font-semibold tracking-[0.35em] text-arcadia-gold uppercase">
                  Entrées
                </p>

                <div className="space-y-6">
                  <div>
                    <div className="flex items-start justify-between gap-6">
                      <p className="font-semibold text-white/90">
                        Velouté de légumes rôtis
                      </p>
                      <span className="shrink-0 font-semibold text-white/90">
                        7€
                      </span>
                    </div>
                    <p className="mt-1 text-sm italic leading-relaxed text-white/60">
                      Selon saison et arrivée
                    </p>
                  </div>

                  <div>
                    <div className="flex items-start justify-between gap-6">
                      <p className="font-semibold text-white/90">
                        Chou-fleur rôti
                      </p>
                      <span className="shrink-0 font-semibold text-white/90">
                        6€
                      </span>
                    </div>
                    <p className="mt-1 text-sm italic leading-relaxed text-white/60">
                      Sauce miso soja et tahini, sumac
                    </p>
                  </div>

                  <div>
                    <div className="flex items-start justify-between gap-6">
                      <p className="font-semibold text-white/90">
                        Salade de betteraves, chou rouge et lentilles vertes
                      </p>
                      <span className="shrink-0 font-semibold text-white/90">
                        6,50€
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <p className="mb-5 text-[0.7rem] font-semibold tracking-[0.35em] text-arcadia-gold uppercase">
                    Desserts
                  </p>

                  <div className="space-y-6">
                    <div>
                      <div className="flex items-start justify-between gap-6">
                        <p className="font-semibold text-white/90">
                          Pavlova aux agrumes
                        </p>
                        <span className="shrink-0 font-semibold text-white/90">
                          5,50€
                        </span>
                      </div>
                      <p className="mt-1 text-sm italic leading-relaxed text-white/60">
                        Clémentine, pamplemousse, suprême d&apos;orange, chantilly maison
                      </p>
                    </div>

                    <div>
                      <div className="flex items-start justify-between gap-6">
                        <p className="font-semibold text-white/90">
                          Croumble aux pommes
                        </p>
                        <span className="shrink-0 font-semibold text-white/90">
                          5,50€
                        </span>
                      </div>
                      <p className="mt-1 text-sm italic leading-relaxed text-white/60">
                        Épices
                      </p>
                    </div>

                    <div>
                      <div className="flex items-start justify-between gap-6">
                        <p className="font-semibold text-white/90">
                          Mousse au chocolat Barry 64%
                        </p>
                        <span className="shrink-0 font-semibold text-white/90">
                          7€
                        </span>
                      </div>
                      <p className="mt-1 text-sm italic leading-relaxed text-white/60">
                        Noisettes torrfiées, fleur de sel
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <p className="mb-5 text-[0.7rem] font-semibold tracking-[0.35em] text-arcadia-gold uppercase">
                  Plats
                </p>

                <div className="space-y-6">
                  <div>
                    <div className="flex items-start justify-between gap-6">
                      <p className="font-semibold text-white/90">Poutine</p>
                      <span className="shrink-0 font-semibold text-white/90">
                        15€
                      </span>
                    </div>
                    <p className="mt-1 text-sm italic leading-relaxed text-white/60">
                      Frites maison, jus vegan, fromage (Maroilles, Tome)
                    </p>
                  </div>

                  <div>
                    <div className="flex items-start justify-between gap-6">
                      <p className="font-semibold text-white/90">
                        Blanquette de dinde
                      </p>
                      <span className="shrink-0 font-semibold text-white/90">
                        14€
                      </span>
                    </div>
                    <p className="mt-1 text-sm italic leading-relaxed text-white/60">
                      Carotte, poireaux, oignons, riz Basmati
                    </p>
                  </div>

                  <div>
                    <div className="flex items-start justify-between gap-6">
                      <p className="font-semibold text-white/90">
                        Fromage chaud du Jura - 200g
                      </p>
                      <span className="shrink-0 font-semibold text-white/90">
                        17€
                      </span>
                    </div>
                    <p className="mt-1 text-sm italic leading-relaxed text-white/60">
                      Pdt grenailles au four, herbes
                    </p>
                  </div>

                  <div>
                    <div className="flex items-start justify-between gap-6">
                      <p className="font-semibold text-white/90">
                        Poisson blanc - selon pêche
                      </p>
                      <span className="shrink-0 font-semibold text-white/90">
                        19€
                      </span>
                    </div>
                    <p className="mt-1 text-sm italic leading-relaxed text-white/60">
                      Chapelure aux herbes, noisettes, pot grenailles, chantilly salée
                    </p>
                  </div>

                  <div>
                    <div className="flex items-start justify-between gap-6">
                      <p className="font-semibold text-white/90">
                        Magret de canard - 240g
                      </p>
                      <span className="shrink-0 font-semibold text-white/90">
                        19€
                      </span>
                    </div>
                    <p className="mt-1 text-sm italic leading-relaxed text-white/60">
                      Endives braisées, purée de céleri rave et de pdt, sauce soja et miel
                    </p>
                  </div>
                </div>

                <div className="mt-12">
                  <p className="mb-3 text-[0.7rem] font-semibold tracking-[0.35em] text-white/70 uppercase">
                    Pour les enfants !
                  </p>
                  <p className="typography-body text-white/70">
                    Tous nos plats sont disponibles en portion réduites
                  </p>

                  <div className="mt-5 flex items-center justify-start gap-8 text-white/60">
                    <div className="flex items-center gap-2">
                      <span className="inline-block h-3 w-3 rounded-full bg-emerald-400/80" aria-hidden="true" />
                      <span className="text-sm">Plat Végétarien</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="inline-block h-3 w-3 rounded-full bg-emerald-400/80" aria-hidden="true" />
                      <span className="text-sm">Plat Vegan</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Title */}
          <div className="w-full order-1 md:max-w-[340px]">
            <div className="flex flex-col items-center gap-5">
              <img
                src="/menu.png"
                alt="Menu"
                className="w-[240px] md:w-[260px] brightness-0 invert opacity-90"
              />

              <div className="flex items-center gap-3 text-arcadia-gold/70">
                <OrnamentDiamond className="h-2 w-2 text-arcadia-gold/80" />
                <div className="h-px w-12 bg-arcadia-gold/40" />
                <OrnamentDiamond className="h-2 w-2 text-arcadia-gold/80" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-arcadia-brown border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-12 md:px-16 md:py-20">

          {/* Top row */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:flex md:flex-row md:items-start md:justify-between md:gap-16">

            {/* Logo + tagline */}
            <div className="flex flex-col gap-4 md:self-center">
              <img
                src="/logo-arcadia.png"
                alt="Arcadia"
                className="w-44 md:w-48 brightness-0 invert opacity-80"
              />

            </div>

            {/* Nav columns */}
            <div className="flex gap-10 sm:gap-16">
              <div className="flex flex-col gap-3">
                <p className="mb-1 text-[0.6rem] font-semibold tracking-[0.35em] text-arcadia-gold uppercase">
                  Navigation
                </p>
                {[
                  { label: "Réserver", href: "#reserver" },
                  { label: "Menu", href: "#menu" },
                  { label: "À propos", href: "#about" },
                ].map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="text-sm tracking-widest text-white/50 uppercase transition-colors hover:text-white/90"
                  >
                    {l.label}
                  </a>
                ))}
              </div>

              <div className="flex flex-col gap-3">
                <p className="mb-1 text-[0.6rem] font-semibold tracking-[0.35em] text-arcadia-gold uppercase">
                  Contact
                </p>
                <a
                  href="mailto:contact@arcadia-lille.com"
                  className="text-sm tracking-widest text-white/50 uppercase transition-colors hover:text-white/90"
                >
                  Email
                </a>
                <a
                  href="https://www.instagram.com/arcadia.lille/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm tracking-widest text-white/50 uppercase transition-colors hover:text-white/90"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="text-sm tracking-widest text-white/50 uppercase transition-colors hover:text-white/90"
                >
                  Facebook
                </a>
              </div>
            </div>

            {/* Address + hours */}
            <div className="flex flex-col gap-2 md:ml-0">
              <p className="mb-1 text-[0.6rem] font-semibold tracking-[0.35em] text-arcadia-gold uppercase">
                Adresse
              </p>
              <p className="text-sm leading-relaxed text-white/50">
                30 Rue Gosselet<br />
                59000 Lille
              </p>
              <div className="mt-3 h-px w-8 bg-arcadia-gold/30" />
              <p className="text-[0.65rem] font-semibold tracking-[0.3em] text-white/30 uppercase">
                Ouvert 7j/7 · Midi &amp; Soir
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-16 flex items-center gap-4">
            <div className="h-px flex-1 bg-white/10" />
            <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor" className="text-arcadia-gold/40">
              <polygon points="3,0 6,3 3,6 0,3" />
            </svg>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          {/* Copyright */}
          <p className="mt-6 text-center text-[0.6rem] tracking-[0.3em] text-white/20 uppercase">
            © {new Date().getFullYear()} Arcadia · Tous droits réservés
          </p>

        </div>
      </footer>
    </div>
  );
}
