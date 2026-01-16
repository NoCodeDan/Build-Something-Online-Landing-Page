import { BookOpen, Hammer, Rocket } from 'lucide-react';

const steps = [
  {
    icon: BookOpen,
    number: '01',
    title: 'Learn',
    description: 'Short daily lessons that teach you AI-first workflows and practical building techniques.'
  },
  {
    icon: Hammer,
    number: '02',
    title: 'Build',
    description: 'Daily hands-on exercises with templates and prompts to help you create real outputs.'
  },
  {
    icon: Rocket,
    number: '03',
    title: 'Launch',
    description: 'Ship something real by the end—a working product, tool, or system you can use and showcase.'
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-24 px-6 bg-warmWhite">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
            How It Works
          </h2>
          <div className="w-16 h-1 bg-warmOrange-500 mx-auto mt-6"></div>
        </div>

        <div className="relative grid md:grid-cols-3 gap-8">
          {/* Connecting lines behind cards - connect from card edge to card edge */}
          <div 
            className="hidden md:block absolute top-1/2 -translate-y-1/2 h-0.5 bg-warmOrange-500/30 z-0 pointer-events-none"
            style={{
              left: 'calc((100% - 4rem) / 3 - 0.5rem)',
              width: 'calc(2rem + 1rem)'
            }}
          ></div>
          <div 
            className="hidden md:block absolute top-1/2 -translate-y-1/2 h-0.5 bg-warmOrange-500/30 z-0 pointer-events-none"
            style={{
              left: 'calc((100% - 4rem) / 3 * 2 + 2rem - 0.5rem)',
              width: 'calc(2rem + 1rem)'
            }}
          ></div>

          {steps.map((step, index) => (
            <div key={index} className="relative z-10">
              <div className="bg-beige-50 p-10 rounded-xl border border-beige-200 hover:border-warmOrange-400 transition-all duration-300 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-5xl font-bold text-warmOrange-500/20">
                    {step.number}
                  </span>
                  <step.icon className="w-10 h-10 text-warmOrange-500" strokeWidth={1.5} />
                </div>

                <h3 className="text-2xl font-bold text-charcoal mb-4">
                  {step.title}
                </h3>

                <p className="text-charcoal/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
