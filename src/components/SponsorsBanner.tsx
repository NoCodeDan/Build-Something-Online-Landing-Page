export const SponsorsBanner = () => {
  const sponsors = [
    'ChatGPT',
    'Claude',
    'Google Gemini',
    'Cursor',
    'Convex',
    'Vercel',
    'Supabase',
    'Lovable'
  ];

  // Duplicate sponsors for seamless loop
  const duplicatedSponsors = [...sponsors, ...sponsors];

  return (
    <section className="py-6 px-6 bg-charcoal overflow-hidden border-y border-charcoal/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-6 md:gap-8">
          <span className="text-warmWhite/70 font-semibold text-xs md:text-sm whitespace-nowrap flex-shrink-0">
            Powered by:
          </span>
          <div className="flex-1 overflow-hidden relative">
            <div className="flex animate-scroll gap-8 md:gap-12">
              {duplicatedSponsors.map((sponsor, index) => (
                <span
                  key={`${sponsor}-${index}`}
                  className="text-warmWhite/50 hover:text-warmOrange-400 transition-colors text-xs md:text-sm font-medium whitespace-nowrap flex-shrink-0"
                >
                  {sponsor}
                </span>
              ))}
            </div>
            {/* Gradient fade on edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-charcoal to-transparent pointer-events-none z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-charcoal to-transparent pointer-events-none z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
