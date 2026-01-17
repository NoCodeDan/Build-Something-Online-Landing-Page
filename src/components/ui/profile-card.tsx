import { motion } from "framer-motion";
import { Twitter, Linkedin, Instagram } from "lucide-react";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export interface ProfileCardProps {
  name?: string;
  title?: string | ReactNode;
  description?: string | ReactNode;
  imageUrl?: string;
  twitterUrl?: string;
  linkedinUrl?: string;
  instagramUrl?: string;
  className?: string;
}

export function ProfileCard(props: ProfileCardProps) {
  const {
    name = "No-Code Dan",
    title = "Builder • Designer • Educator",
    description = "",
    imageUrl = "",
    twitterUrl = "#",
    linkedinUrl = "#",
    instagramUrl = "#",
    className,
  } = props;

  const socialIcons = [
    { icon: Twitter, url: twitterUrl, label: "X (Twitter)" },
    { icon: Linkedin, url: linkedinUrl, label: "LinkedIn" },
    { icon: Instagram, url: instagramUrl, label: "Instagram" },
  ];

  return (
    <div className={cn("w-full max-w-6xl mx-auto px-4", className)}>
      {/* Desktop */}
      <div className='hidden md:flex relative items-center justify-center'>
        {/* Square Image */}
        <div className='w-[470px] h-[470px] rounded-3xl overflow-hidden bg-warmOrange-500 flex-shrink-0 flex items-center justify-center'>
          <img
            src={imageUrl}
            alt={name}
            className='w-full h-full object-contain'
            draggable={false}
            style={{ 
              transform: 'scale(1.1) translate(0%, 5%)',
              objectPosition: 'center top'
            }}
          />
        </div>
        {/* Overlapping Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className='bg-warmWhite rounded-3xl shadow-2xl p-8 ml-[-80px] z-10 max-w-5xl flex-1 min-w-[700px] border border-beige-200'
        >
          <div className='mb-6'>
            <h2 className='text-2xl font-bold text-charcoal mb-2'>
              {name}
            </h2>

            <div className='text-sm font-medium text-charcoal/70'>
              {title}
            </div>
          </div>

          <div className='text-charcoal/80 text-base leading-relaxed mb-8 space-y-4'>
            {description}
          </div>

          <div className='flex space-x-4'>
            {socialIcons.map(({ icon: Icon, url, label }) => (
              <a
                key={label}
                href={url}
                target='_blank'
                rel='noopener noreferrer'
                className='w-12 h-12 bg-charcoal rounded-full flex items-center justify-center transition-colors hover:bg-warmOrange-500 hover:scale-105'
                aria-label={label}
              >
                <Icon className='w-5 h-5 text-warmWhite' />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Mobile */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className='md:hidden max-w-sm mx-auto text-center bg-transparent'
      >
        {/* Square Mobile Image */}
        <div className='w-full aspect-square bg-warmOrange-500 rounded-3xl overflow-hidden mb-6 flex items-center justify-center'>
          <img
            src={imageUrl}
            alt={name}
            className='w-full h-full object-contain'
            draggable={false}
            style={{ 
              transform: 'scale(1.1) translate(0%, 5%)',
              objectPosition: 'center top'
            }}
          />
        </div>

        <div className='px-4'>
          <h2 className='text-xl font-bold text-charcoal mb-2'>
            {name}
          </h2>

          <div className='text-sm font-medium text-charcoal/70 mb-4'>
            {title}
          </div>

          <div className='text-charcoal/80 text-sm leading-relaxed mb-6 space-y-4'>
            {description}
          </div>

          <div className='flex justify-center space-x-4'>
            {socialIcons.map(({ icon: Icon, url, label }) => (
              <a
                key={label}
                href={url}
                target='_blank'
                rel='noopener noreferrer'
                className='w-12 h-12 bg-charcoal rounded-full flex items-center justify-center transition-colors hover:bg-warmOrange-500'
                aria-label={label}
              >
                <Icon className='w-5 h-5 text-warmWhite' />
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
