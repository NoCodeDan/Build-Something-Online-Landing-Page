import { Globe, Bot, Package, Settings, Layers, Sparkles } from 'lucide-react';

const outcomes = [
  {
    icon: Globe,
    title: 'A Live Landing Page',
    description: 'From idea to published page using AI-first workflows for copy, layout, and structure.'
  },
  {
    icon: Bot,
    title: 'An AI Agent or Workflow',
    description: 'An agent that plans, executes, or automates real tasks — not a demo, a real system.'
  },
  {
    icon: Package,
    title: 'A Product Prototype',
    description: 'A simple but functional app, tool, or internal system built with modern AI-powered builders.'
  },
  {
    icon: Sparkles,
    title: 'A Creative Project',
    description: 'Including brand assets, media, and distribution — proving you can ship, not just experiment.'
  },
  {
    icon: Settings,
    title: 'A Reusable AI System',
    description: 'A workflow you can apply again and again for work, side projects, or business ideas.'
  },
  {
    icon: Layers,
    title: 'A Portfolio Case Study',
    description: 'A documented project that shows how you think, build, and operate in an AI-first way.'
  }
];

export const Outcomes = () => {
  return (
    <section className="py-16 md:py-24 bg-beige-50 overflow-hidden">
      {/* Header - centered */}
      <div className="max-w-6xl mx-auto px-6 mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
          What You'll Build in 28 Days
        </h2>
        <p className="text-lg text-charcoal/70 mb-4">
          Real projects. Real skills. A portfolio that proves you can ship.
        </p>
        <div className="w-16 h-1 bg-warmOrange-500 mx-auto"></div>
      </div>

      {/* Grid - Desktop - matches WhoItsFor slider width exactly */}
      <div className="hidden lg:block">
        <div className="max-w-6xl mx-auto px-6">
          <div 
            className="grid grid-cols-3 divide-x divide-y divide-beige-200 border border-beige-200 rounded-2xl bg-warmWhite overflow-hidden"
            style={{ width: '72rem' }}
          >
            {outcomes.map((outcome, index) => (
              <div 
                key={index} 
                className="space-y-4 p-8 hover:bg-warmOrange-500/5 transition-colors duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-warmOrange-500/10 rounded-xl">
                    <outcome.icon className="size-6 text-warmOrange-600" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-semibold text-charcoal">{outcome.title}</h3>
                </div>
                <p className="text-base text-charcoal/60 leading-relaxed">{outcome.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Grid */}
      <div className="lg:hidden px-6">
        <div className="grid sm:grid-cols-2 divide-x divide-y divide-beige-200 border border-beige-200 rounded-2xl bg-warmWhite overflow-hidden">
          {outcomes.map((outcome, index) => (
            <div 
              key={index} 
              className="space-y-3 p-5 hover:bg-warmOrange-500/5 transition-colors duration-300"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-warmOrange-500/10 rounded-lg">
                  <outcome.icon className="size-5 text-warmOrange-600" strokeWidth={1.5} />
                </div>
                <h3 className="text-base font-semibold text-charcoal">{outcome.title}</h3>
              </div>
              <p className="text-sm text-charcoal/60 leading-relaxed">{outcome.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
