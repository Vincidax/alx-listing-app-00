import React from 'react';
import { ButtonProps } from '../../interfaces';

const Button: React.FC<ButtonProps> = ({ label, onClick, variant = 'primary' }) => {
  const baseClasses = "py-2 px-4 rounded font-bold";
  const variantClasses = variant === 'primary' 
    ? "bg-blue-500 hover:bg-blue-700 text-white" 
    : "bg-gray-500 hover:bg-gray-700 text-white";

  return (
    <button 
      className={`${baseClasses} ${variantClasses}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;