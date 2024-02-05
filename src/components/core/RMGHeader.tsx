// src/components/RMGHeader.tsx
import React from 'react';

interface RMGHeaderProps {
  text: string;
  className?: string;
}

const RMGHeader: React.FC<RMGHeaderProps> = ({text, className}) => {
  return (
    <h1
      className={
        className || 'text-center text-4xl font-bold text-gray-800 mb-6'
      }>
      {text}
    </h1>
  );
};

export default RMGHeader;
