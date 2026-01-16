import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  onClick,
  className = ''
}) => {
  const baseStyles = 'px-8 py-4 rounded-lg font-medium transition-all duration-200 text-base';
  const variants = {
    primary: 'bg-warmOrange-500 text-white hover:bg-warmOrange-600 shadow-sm hover:shadow-md',
    secondary: 'bg-transparent text-charcoal border-2 border-charcoal hover:bg-charcoal hover:text-warmWhite'
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};
