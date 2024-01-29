// src/components/RMGText.tsx

import React from 'react';

interface RMGTextProps {
  content: string;
}

const RMGText: React.FC<RMGTextProps> = ({ content }) => {
  return (
    <p className="text-gray-700 text-base">{content}</p>
  );
};

export default RMGText;
