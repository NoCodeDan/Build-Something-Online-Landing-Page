import { cn } from '@/lib/utils';

const cardContents = [
  {
    title: "AI-First Thinking",
    description:
      "Learn to approach every project with AI as your co-pilot. You'll develop mental models for when and how to leverage AI tools, turning what used to take days into hours.",
  },
  {
    title: "Rapid Product Building",
    description:
      "Master modern tools like Cursor, Lovable, and Bolt.new to go from idea to working prototype in record time. No traditional coding background required.",
  },
  {
    title: "Agents & Automation",
    description:
      "Build AI agents that plan, execute, and automate real tasks. From simple workflows to complex multi-step processes, you'll learn to create systems that work for you 24/7. Understand how to chain tools together, handle errors gracefully, and scale your automation as your needs grow.",
  },
  {
    title: "Design & Content Systems",
    description:
      "Create professional brand assets, videos, and content using AI tools like Midjourney, ElevenLabs, and more.",
  },
  {
    title: "Future-Proof Skills",
    description:
      "The AI landscape changes fast. Learn frameworks for evaluating new tools and adapting your workflow as technology evolves.",
  },
];

const PlusIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    strokeWidth="1.5"
    stroke="currentColor"
    className={cn("size-5 text-warmOrange-400", className)}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
  </svg>
);

const CornerPlusIcons = () => (
  <>
    <PlusIcon className="absolute -top-2.5 -left-2.5" />
    <PlusIcon className="absolute -top-2.5 -right-2.5" />
    <PlusIcon className="absolute -bottom-2.5 -left-2.5" />
    <PlusIcon className="absolute -bottom-2.5 -right-2.5" />
  </>
);

const BentoCard = ({
  className = "",
  title,
  description,
}: {
  className?: string;
  title: string;
  description: string;
}) => {
  return (
    <div
      className={cn(
        "relative border-2 border-dashed border-beige-300 rounded-xl p-6 md:p-8 bg-warmWhite min-h-[180px]",
        "flex flex-col justify-between hover:border-warmOrange-400 hover:bg-warmOrange-500/5 transition-all duration-300",
        className
      )}
    >
      <CornerPlusIcons />
      <div className="relative z-10 space-y-3">
        <h3 className="text-xl font-bold text-charcoal">
          {title}
        </h3>
        <p className="text-charcoal/70 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export const WhatYoullLearn = () => {
  return (
    <section className="pt-12 md:pt-16 pb-20 md:pb-28 bg-beige-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
            What You'll Learn
          </h2>
          <div className="w-16 h-1 bg-warmOrange-500"></div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 auto-rows-auto gap-4">
          <BentoCard {...cardContents[0]} className="lg:col-span-3 lg:row-span-2" />
          <BentoCard {...cardContents[1]} className="lg:col-span-3 lg:row-span-2" />
          <BentoCard {...cardContents[2]} className="lg:col-span-4 lg:row-span-1" />
          <BentoCard {...cardContents[3]} className="lg:col-span-2 lg:row-span-1" />
          <BentoCard {...cardContents[4]} className="lg:col-span-2 lg:row-span-1" />
        </div>

        {/* Footer Tagline */}
        <div className="max-w-2xl ml-auto text-right mt-8 lg:-mt-16 relative z-10">
          <p className="text-2xl md:text-3xl font-bold text-charcoal mb-2">
            Skills that compound.
          </p>
          <p className="text-charcoal/60">
            Everything you learn builds on the previous day—by Day 28, you'll have a complete AI-first toolkit.
          </p>
        </div>
      </div>
    </section>
  );
};
