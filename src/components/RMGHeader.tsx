// src/components/RMGHeader.tsx
import React from 'react';

interface RMGHeaderProps {
  text: string;
}

const RMGHeader: React.FC<RMGHeaderProps> = ({ text }) => {
  return (
    <h1 className="font-bold text-3xl text-gray-900">{text}</h1>
  );
};

export default RMGHeader;
