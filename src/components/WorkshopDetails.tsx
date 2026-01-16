import { Calendar, Video, Clock, Package, PlayCircle, Users } from 'lucide-react';
import DisplayCards from './ui/display-cards';

const details = [
  {
    icon: Calendar,
    label: 'Duration',
    value: '28 days'
  },
  {
    icon: Video,
    label: 'Format',
    value: 'Daily videos + email guidance'
  },
  {
    icon: Clock,
    label: 'Time commitment',
    value: '20-45 minutes per day'
  },
  {
    icon: Package,
    label: 'Includes',
    value: 'Prompts, templates, checklists, walkthroughs'
  },
  {
    icon: PlayCircle,
    label: 'Start date',
    value: 'February 1st 2026'
  },
  {
    icon: Users,
    label: 'Community',
    value: 'Access to private group and support'
  }
];

export const WorkshopDetails = () => {
  return (
    <section id="workshop-details" className="py-24 px-6 bg-beige-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Workshop Details
          </h2>
          <div className="w-16 h-1 bg-warmOrange-500 mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {details.map((detail, index) => (
            <div
              key={index}
              className="bg-warmWhite p-8 rounded-xl border border-beige-200"
            >
              <detail.icon className="w-8 h-8 text-warmOrange-500 mb-4" strokeWidth={1.5} />
              <div className="text-sm font-medium text-charcoal/60 mb-2">
                {detail.label}
              </div>
              <div className="text-lg font-semibold text-charcoal">
                {detail.value}
              </div>
            </div>
          ))}
        </div>

        {/* Display Cards Section */}
        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            <DisplayCards />
          </div>
        </div>
      </div>
    </section>
  );
};
