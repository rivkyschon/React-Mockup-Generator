// src/components/RMGHeader.tsx
import React from 'react';

interface RMGHeaderProps {
  text: string;
  className?: string;
}

const RMGSubtitle: React.FC<RMGHeaderProps> = ({text, className}) => {
  return (
    <h3
      className={
        className || 'text-center text-2xl font-bold text-gray-800 mb-6'
      }>
      {text}
    </h3>
  );
};

export default RMGSubtitle;
