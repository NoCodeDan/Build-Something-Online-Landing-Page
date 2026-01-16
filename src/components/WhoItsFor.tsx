import { Users, Briefcase, Lightbulb, GraduationCap } from 'lucide-react';

const audiences = [
  {
    icon: Users,
    title: 'Creators and content builders',
  },
  {
    icon: Briefcase,
    title: 'Freelancers and consultants',
  },
  {
    icon: Lightbulb,
    title: 'Aspiring entrepreneurs and side-project builders',
  },
  {
    icon: GraduationCap,
    title: 'Beginners welcome',
    subtitle: 'No advanced background required'
  }
];

export const WhoItsFor = () => {
  return (
    <section className="py-24 px-6 bg-beige-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Who It's For
          </h2>
          <div className="w-16 h-1 bg-warmOrange-500 mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-8 bg-warmWhite rounded-xl border border-beige-200"
            >
              <audience.icon className="w-8 h-8 text-warmOrange-500 flex-shrink-0" strokeWidth={1.5} />
              <div>
                <h3 className="text-lg font-semibold text-charcoal mb-1">
                  {audience.title}
                </h3>
                {audience.subtitle && (
                  <p className="text-charcoal/60 text-sm">
                    {audience.subtitle}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
