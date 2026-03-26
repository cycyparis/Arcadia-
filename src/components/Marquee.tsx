"use client";

import { useEffect, useRef } from "react";

export default function Marquee() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationId: number;
    let position = 0;

    const animate = () => {
      position -= 0.5;
      if (position <= -50) position = 0;
      el.style.transform = `translateX(${position}%)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  const text = "Arcadia • 7/7 Midi et Soir • Brunch le Weekend • 30 Rue Gosselet, Lille • ";

  return (
    <section className="overflow-hidden bg-arcadia-cream py-8 md:py-10">
      <div ref={scrollRef} className="flex whitespace-nowrap">
        {[...Array(4)].map((_, i) => (
          <span
            key={i}
            className="inline-block px-4 text-2xl font-light tracking-[0.2em] text-arcadia-gold uppercase md:text-3xl"
          >
            {text}
          </span>
        ))}
      </div>
    </section>
  );
}
