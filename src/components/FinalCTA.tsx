import { Button } from './Button';

interface FinalCTAProps {
  onJoinClick: () => void;
}

export const FinalCTA = ({ onJoinClick }: FinalCTAProps) => {
  return (
    <section className="py-32 px-6 bg-beige-50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
          Become AI-first by building something real.
        </h2>

        <p className="text-xl text-charcoal/70 mb-12 leading-relaxed">
          In 28 days, you'll have the skills, systems, and portfolio to prove you can build online.
        </p>

        <Button variant="primary" onClick={onJoinClick}>Join the Workshop</Button>
      </div>
    </section>
  );
};
