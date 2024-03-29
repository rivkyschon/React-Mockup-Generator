// src/components/RMGButton.tsx

import React from 'react';

interface RMGButtonProps {
  title: string;
  className?: string;
  onClick?: () => void;
}

const RMGButton: React.FC<RMGButtonProps> = ({title, className, onClick}) => {
  return (
    <button
      onClick={onClick}
      className={
        className ||
        'bg-black text-white w-full py-2 px-4 rounded hover:bg-opacity-90 focus:outline-none'
      }>
      {title}
    </button>
  );
};

export default RMGButton;
