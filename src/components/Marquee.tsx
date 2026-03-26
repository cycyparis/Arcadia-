export default function Marquee() {
  const items = [
    "7/7 Midi et Soir",
    "Brunch le Weekend",
    "30 Rue Gosselet, Lille",
    "Arcadia",
  ];

  // Repeat enough times to fill the scroll seamlessly
  const repeated = [...Array(8)].flatMap(() => items);

  return (
    <section className="relative overflow-hidden bg-[#E0C097]">
      {/* Top rule */}
      <div className="h-px w-full bg-arcadia-brown/20" />

      <div className="py-5 md:py-6">
        <div className="flex whitespace-nowrap animate-marquee">
          {repeated.map((item, i) => (
            <span key={i} className="inline-flex items-center">
              <span className="px-6 text-[0.7rem] font-semibold tracking-[0.3em] text-arcadia-brown uppercase md:text-xs">
                {item}
              </span>
              {/* Diamond separator */}
              <svg
                width="8"
                height="8"
                viewBox="0 0 8 8"
                className="text-arcadia-brown/50 shrink-0"
                fill="currentColor"
              >
                <polygon points="4,0 8,4 4,8 0,4" />
              </svg>
            </span>
          ))}
        </div>
      </div>

      {/* Bottom rule */}
      <div className="h-px w-full bg-arcadia-brown/20" />

      {/* Left & right fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#E0C097] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#E0C097] to-transparent" />
    </section>
  );
}
