import { CheckCircle } from 'lucide-react';

const learningPoints = [
  'AI-first thinking and workflows',
  'Rapid product building with modern tools',
  'Using agents and automation for leverage',
  'Design, content, and systems for shipping',
  'How to keep adapting as tools evolve'
];

export const WhatYoullLearn = () => {
  return (
    <section className="py-24 px-6 bg-warmWhite">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
            What You'll Learn
          </h2>
          <div className="w-16 h-1 bg-warmOrange-500 mx-auto mt-6"></div>
        </div>

        <div className="space-y-6">
          {learningPoints.map((point, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 bg-beige-50 rounded-xl border border-beige-200 hover:border-warmOrange-400 transition-colors"
            >
              <CheckCircle className="w-6 h-6 text-warmOrange-500 flex-shrink-0 mt-1" strokeWidth={2} />
              <p className="text-lg text-charcoal font-medium">
                {point}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
