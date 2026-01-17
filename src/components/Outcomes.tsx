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
    <section className="py-16 md:py-24 bg-beige-50">
      <div className="mx-auto max-w-6xl space-y-8 md:space-y-16 px-6">
        {/* Header */}
        <div className="relative z-10 mx-auto max-w-xl space-y-4 text-center md:space-y-6">
          <h2 className="text-balance text-4xl font-bold text-charcoal lg:text-5xl">
            What You'll Build in 28 Days
          </h2>
          <p className="text-lg text-charcoal/70">
            Real projects. Real skills. A portfolio that proves you can ship.
          </p>
          <div className="w-16 h-1 bg-warmOrange-500 mx-auto"></div>
        </div>

        {/* Grid */}
        <div className="relative mx-auto grid divide-x divide-y divide-beige-200 border border-beige-200 rounded-2xl bg-warmWhite overflow-hidden sm:grid-cols-2 lg:grid-cols-3">
          {outcomes.map((outcome, index) => (
            <div 
              key={index} 
              className="space-y-4 p-8 md:p-12 hover:bg-warmOrange-500/5 transition-colors duration-300"
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
    </section>
  );
};
