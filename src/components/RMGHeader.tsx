// src/components/RMGHeader.tsx
import React from 'react';

interface RMGHeaderProps {
  text: string;
}

const RMGHeader: React.FC<RMGHeaderProps> = ({ text }) => {
  return (
    <h1 className="font-bold text-4xl text-gray-900 mb-6">{text}</h1>  
    );
};

export default RMGHeader;
