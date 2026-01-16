import { Globe, Bot, Package, Settings, Layers, Sparkles } from 'lucide-react';

const outcomes = [
  {
    icon: Globe,
    title: 'A Live Landing Page',
    description: 'From idea to published page using AI-first workflows for copy, layout, and structure.'
  },
  {
    icon: Bot,
    title: 'A Working AI Agent or Agent-Powered Workflow',
    description: 'An agent that plans, executes, or automates real tasks — not a demo, a real system.'
  },
  {
    icon: Package,
    title: 'A Product or Tool Prototype',
    description: 'A simple but functional app, tool, or internal system built with modern AI-powered builders.'
  },
  {
    icon: Sparkles,
    title: 'A Complete End-to-End Creative Project',
    description: 'Including brand assets, media, and distribution — proving you can ship, not just experiment.'
  },
  {
    icon: Settings,
    title: 'A Reusable AI-First System',
    description: 'A workflow you can apply again and again for work, side projects, or business ideas.'
  },
  {
    icon: Layers,
    title: 'A Portfolio-Ready Case Study',
    description: 'A documented project that shows how you think, build, and operate in an AI-first way.'
  }
];

export const Outcomes = () => {
  return (
    <section className="py-24 px-6 bg-beige-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
            What You'll Build in 28 Days
          </h2>
          <div className="w-16 h-1 bg-warmOrange-500 mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {outcomes.map((outcome, index) => (
            <div
              key={index}
              className="bg-warmWhite p-8 rounded-xl border border-beige-200 hover:border-warmOrange-400 transition-all duration-300 hover:shadow-lg"
            >
              <outcome.icon className="w-10 h-10 text-warmOrange-500 mb-4" strokeWidth={1.5} />
              <h3 className="text-xl font-semibold text-charcoal mb-2">
                {outcome.title}
              </h3>
              <p className="text-charcoal/60">
                {outcome.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
