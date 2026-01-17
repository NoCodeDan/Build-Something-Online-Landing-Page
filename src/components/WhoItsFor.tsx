"use client";

import { useState, useEffect, useRef } from 'react';
import aiCuriousImg from '@/images/Target ICPs/man-coder-and-glasses-in-office-for-portrait-web-2026-01-09-10-23-10-utc (1).jpg';
import careerFocusedImg from '@/images/Target ICPs/conference-speech-for-work-future-and-man-with-mi-2026-01-09-11-07-12-utc (1).jpg';
import indieHackerImg from '@/images/Target ICPs/working-on-a-new-game-cropped-shot-of-a-young-pro-2026-01-09-11-45-23-utc (1).jpg';
import creativeImg from '@/images/Target ICPs/studio-man-and-picture-editor-on-computer-with-po-2026-01-09-10-40-22-utc (1).jpg';
import generalistImg from '@/images/Target ICPs/laptop-author-or-asian-woman-in-home-office-typin-2026-01-09-11-15-08-utc (1).jpg';
import youImg from '@/images/Target ICPs/woman-laptop-and-hacker-typing-in-home-with-softw-2026-01-09-11-43-46-utc (1).jpg';

const audiences = [
  {
    title: 'AI Curious',
    subtitle: 'Exploring AI tools and wondering how to put them to work',
    image: careerFocusedImg,
  },
  {
    title: 'Career Focused',
    subtitle: 'Ready to add AI-first skills to your professional toolkit',
    image: aiCuriousImg,
  },
  {
    title: 'Generalists',
    subtitle: 'Jacks-of-all-trades building versatile, adaptable skills',
    image: generalistImg,
  },
  {
    title: 'Indie Hackers',
    subtitle: 'Shipping products and side projects with AI as your co-pilot',
    image: indieHackerImg,
  },
  {
    title: 'Creatives',
    subtitle: 'Artists, designers, and makers ready to amplify your craft',
    image: creativeImg,
  },
  {
    title: 'You!',
    subtitle: 'Anyone ready to build something real in 28 days',
    image: youImg,
  },
];

export const WhoItsFor = () => {
  const [expandedCard, setExpandedCard] = useState(0);
  const [mobileOpenCard, setMobileOpenCard] = useState<number | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const getCardWidth = (index: number) =>
    index === expandedCard ? '28rem' : '8rem';

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setMobileOpenCard(null);
      }
    };

    if (mobileOpenCard !== null) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [mobileOpenCard]);

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
                  style={{
                    objectPosition: audience.title === 'Career Focused' ? '68% center' : 
                                   audience.title === 'Indie Hackers' ? '80% center' : 
                                   audience.title === 'You!' ? '32% center' : 
                                   'center center'
                  }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
                
                {/* Content */}
                <div className={`absolute bottom-0 left-0 right-0 p-6 text-white ${
                  idx !== expandedCard && audience.title === 'Generalists' ? 'flex items-center justify-center' : ''
                }`}>
                  <h3 className={`font-bold transition-all duration-500 ${
                    idx === expandedCard ? 'text-2xl mb-2' : 
                    audience.title === 'Generalists' ? 'text-lg' : 
                    'text-lg writing-mode-vertical'
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
            className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
            style={{ height: '14rem' }}
            onClick={() => setMobileOpenCard(idx)}
          >
            {/* Image */}
            <img
              className="w-full h-full object-cover"
              src={audience.image}
              alt={audience.title}
              style={{
                objectPosition: audience.title === 'Career Focused' ? '68% center' : 
                               audience.title === 'Indie Hackers' ? '80% center' : 
                               audience.title === 'You!' ? '32% center' : 
                               'center center'
              }}
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

      {/* Mobile Modal/Overlay */}
      {mobileOpenCard !== null && (
        <div className="fixed inset-0 bg-charcoal/80 z-50 lg:hidden flex items-center justify-center p-6">
          <div
            ref={modalRef}
            className="relative overflow-hidden rounded-2xl shadow-2xl w-full max-w-sm"
            style={{ height: '20rem' }}
          >
            {/* Image */}
            <img
              className="w-full h-full object-cover"
              src={audiences[mobileOpenCard].image}
              alt={audiences[mobileOpenCard].title}
              style={{
                objectPosition: audiences[mobileOpenCard].title === 'Career Focused' ? '68% center' : 
                               audiences[mobileOpenCard].title === 'Indie Hackers' ? '80% center' : 
                               audiences[mobileOpenCard].title === 'You!' ? '32% center' : 
                               'center center'
              }}
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
            
            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="font-bold text-xl mb-2">{audiences[mobileOpenCard].title}</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                {audiences[mobileOpenCard].subtitle}
              </p>
            </div>
            
            {/* Orange accent bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-warmOrange-500" />
          </div>
        </div>
      )}

      {/* Bottom tagline */}
      <div className="max-w-6xl mx-auto px-6 mt-12 text-center">
        <p className="text-charcoal/60 text-lg">
          Whether you're technical or not — if you want to build, this is for you.
        </p>
      </div>
    </section>
  );
};
