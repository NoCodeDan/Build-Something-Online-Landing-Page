export const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="py-12 px-6 bg-charcoal text-warmWhite">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-2">Build Something Online</h3>
          <p className="text-warmWhite/60">28 days to AI-first</p>
        </div>

        <div className="h-px w-32 bg-warmWhite/20 mx-auto mb-8"></div>

        {/* Internal links for SEO */}
        <nav className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
          <a 
            href="#curriculum" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('curriculum');
            }}
            className="text-warmWhite/70 hover:text-warmWhite transition-colors"
          >
            Curriculum
          </a>
          <a 
            href="#faq" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('faq');
            }}
            className="text-warmWhite/70 hover:text-warmWhite transition-colors"
          >
            FAQ
          </a>
          <a 
            href="#about" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('about');
            }}
            className="text-warmWhite/70 hover:text-warmWhite transition-colors"
          >
            About
          </a>
          <a 
            href="#sprint-details" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('sprint-details');
            }}
            className="text-warmWhite/70 hover:text-warmWhite transition-colors"
          >
            Details
          </a>
        </nav>

        <p className="text-warmWhite/40 text-sm text-center">
          © 2026 Build Something Online. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
