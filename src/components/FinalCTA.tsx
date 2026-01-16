import { Button } from './Button';

export const FinalCTA = () => {
  return (
    <section className="py-32 px-6 bg-beige-50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
          Become AI-first by building something real.
        </h2>

        <p className="text-xl text-charcoal/70 mb-12 leading-relaxed">
          In 28 days, you'll have the skills, systems, and portfolio to prove you can build online.
        </p>

        <Button variant="primary">Join the Workshop</Button>

        <p className="text-sm text-charcoal/50 mt-8">
          Early cohort pricing available
        </p>
      </div>
    </section>
  );
};
