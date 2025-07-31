import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  onClick,
  disabled = false,
  type = 'button',
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95';
  
  const variants = {
    primary: 'bg-amber-600 hover:bg-amber-700 text-white shadow-lg hover:shadow-xl focus:ring-amber-500',
    secondary: 'bg-white hover:bg-gray-100 text-amber-600 border border-amber-600 hover:border-amber-700 shadow-md hover:shadow-lg focus:ring-amber-500',
    outline: 'bg-transparent hover:bg-amber-50 text-amber-600 border border-amber-600 hover:border-amber-700 focus:ring-amber-500',
    ghost: 'bg-transparent hover:bg-amber-50 text-amber-600 focus:ring-amber-500',
    dark: 'bg-gray-900 hover:bg-gray-800 text-white shadow-lg hover:shadow-xl focus:ring-gray-500',
    white: 'bg-white hover:bg-gray-50 text-gray-900 shadow-lg hover:shadow-xl focus:ring-gray-500'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl'
  };
  
  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
  
  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
