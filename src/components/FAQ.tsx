import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'How much does it cost to attend?',
    answer: 'It\'s completely free! Just sign up and you\'ll begin receiving the series of videos through email starting February 1st. No credit card required, no hidden fees—just sign up and start learning.'
  },
  {
    question: 'Do I need technical experience?',
    answer: 'No. This workshop is designed for beginners. We\'ll guide you through every step with clear instructions, templates, and modern AI tools that handle the heavy lifting.'
  },
  {
    question: 'What tools will I use?',
    answer: 'You\'ll use modern AI tools and no-code/low-code platforms. We focus on practical tools that help you build quickly without requiring advanced programming knowledge.'
  },
  {
    question: 'Is this live or self-paced?',
    answer: 'The workshop is self-paced with daily lessons delivered via video and email. You can complete the exercises on your own schedule, though we recommend following the 28-day structure for best results.'
  },
  {
    question: 'What if I fall behind?',
    answer: 'Falling behind is okay. All lessons are available on demand, and the program is designed to fit around real life. Focus on progress, not perfection.'
  },
  {
    question: 'What will I have at the end?',
    answer: 'You\'ll have a live landing page, a working AI agent or workflow, a product prototype, and an AI-first system you can reuse. Plus the skills and confidence to keep building.'
  },
  {
    question: 'Can I apply this to my current job?',
    answer: 'Absolutely. The AI-first workflows and systems you\'ll learn apply to any industry. Many participants use these skills to streamline their current work and add value to their teams.'
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-6 bg-warmWhite">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-1 bg-warmOrange-500 mx-auto mt-6"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-beige-50 rounded-xl border border-beige-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-beige-100 transition-colors"
              >
                <span className="text-lg font-semibold text-charcoal pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-warmOrange-500 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-warmOrange-500 flex-shrink-0" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 pt-4 pb-6">
                  <p className="text-charcoal/70 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
