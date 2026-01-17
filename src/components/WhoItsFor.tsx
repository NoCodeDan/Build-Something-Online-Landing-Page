"use client";

import { useState } from 'react';

const audiences = [
  {
    title: 'AI Curious',
    subtitle: 'Exploring AI tools and wondering how to put them to work',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80',
  },
  {
    title: 'Career Switcher / Upskiller',
    subtitle: 'Ready to add AI-first skills to your professional toolkit',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80',
  },
  {
    title: 'Solo Builder/Indie Hacker',
    subtitle: 'Shipping products and side projects with AI as your co-pilot',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
  },
  {
    title: 'Creative',
    subtitle: 'Artists, designers, and makers ready to amplify your craft',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80',
  },
  {
    title: 'Generalist',
    subtitle: 'Jacks-of-all-trades building versatile, adaptable skills',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
  },
  {
    title: 'You!',
    subtitle: 'Anyone ready to build something real in 28 days',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80',
  },
];

export const WhoItsFor = () => {
  const [expandedCard, setExpandedCard] = useState(0);

  const getCardWidth = (index: number) =>
    index === expandedCard ? '28rem' : '8rem';

  return (
    <section className="py-20 md:py-28 bg-warmWhite overflow-hidden">
      {/* Header - constrained width */}
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
          Who This Sprint Is For
        </h2>
        <div className="w-16 h-1 bg-warmOrange-500"></div>
      </div>

      {/* Expanding Cards - Desktop - extends beyond container */}
      <div className="hidden lg:block">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-start gap-3">
            {audiences.map((audience, idx) => (
              <div
                key={idx}
                className="relative cursor-pointer overflow-hidden rounded-2xl transition-all duration-500 ease-in-out shadow-lg flex-shrink-0"
                style={{
                  width: getCardWidth(idx),
                  height: '22rem',
                }}
                onMouseEnter={() => setExpandedCard(idx)}
              >
                {/* Image */}
                <img
                  className="w-full h-full object-cover"
                  src={audience.image}
                  alt={audience.title}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className={`font-bold transition-all duration-500 ${
                    idx === expandedCard ? 'text-2xl mb-2' : 'text-lg writing-mode-vertical'
                  }`}>
                    {audience.title}
                  </h3>
                  <p className={`text-white/80 text-sm leading-relaxed transition-all duration-500 ${
                    idx === expandedCard ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0'
                  } overflow-hidden`}>
                    {audience.subtitle}
                  </p>
                </div>
                
                {/* Orange accent bar */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-warmOrange-500 transition-all duration-500 ${
                  idx === expandedCard ? 'opacity-100' : 'opacity-0'
                }`} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Grid */}
      <div className="grid grid-cols-2 gap-4 lg:hidden px-6">
        {audiences.map((audience, idx) => (
          <div
            key={idx}
            className="relative overflow-hidden rounded-2xl shadow-lg"
            style={{ height: '14rem' }}
          >
            {/* Image */}
            <img
              className="w-full h-full object-cover"
              src={audience.image}
              alt={audience.title}
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
            
            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h3 className="font-bold text-base mb-1">{audience.title}</h3>
              <p className="text-white/80 text-xs leading-relaxed line-clamp-2">
                {audience.subtitle}
              </p>
            </div>
            
            {/* Orange accent bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-warmOrange-500" />
          </div>
        ))}
      </div>

      {/* Bottom tagline */}
      <div className="max-w-6xl mx-auto px-6 mt-12 text-center">
        <p className="text-charcoal/60 text-lg">
          Whether you're technical or not — if you want to build, this is for you.
        </p>
      </div>
    </section>
  );
};
