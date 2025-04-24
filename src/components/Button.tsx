import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  fullWidth?: boolean;
  href?: string;
  whatsappNumber?: string;
  whatsappMessage?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  fullWidth = false,
  href,
  whatsappNumber,
  whatsappMessage = 'Hi! I\'m interested in your beauty products.',
}) => {
  // Style variants
  const variants = {
    primary: 'bg-pink-500 hover:bg-pink-600 text-white',
    secondary: 'bg-purple-400 hover:bg-purple-500 text-white',
    outline: 'bg-transparent border border-pink-500 text-pink-500 hover:bg-pink-50',
  };

  // Size variants
  const sizes = {
    sm: 'py-1.5 px-3 text-sm',
    md: 'py-2 px-5 text-base',
    lg: 'py-3 px-8 text-lg',
  };

  const baseStyle = 'rounded-md font-medium transition-all duration-300 inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50';
  const buttonStyle = `${baseStyle} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`;

  // Handle WhatsApp redirection
  const handleWhatsAppClick = () => {
    if (whatsappNumber) {
      const encodedMessage = encodeURIComponent(whatsappMessage);
      window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
    }
  };

  // If it's a WhatsApp button
  if (whatsappNumber) {
    return (
      <button
        type={type}
        className={buttonStyle}
        onClick={handleWhatsAppClick}
      >
        {children}
      </button>
    );
  }

  // If it's a link
  if (href) {
    return (
      <a href={href} className={buttonStyle}>
        {children}
      </a>
    );
  }

  // Regular button
  return (
    <button
      type={type}
      className={buttonStyle}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;