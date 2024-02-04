// src/components/RMGText.tsx

import React from 'react';

interface RMGTextProps {
  content: string;
}

const RMGText: React.FC<RMGTextProps> = ({content}) => {
  return (
    <p className="text-gray-500 text-lg md:text-l font-normal leading-relaxed text-center">
      {content}
    </p>
  );
};

export default RMGText;
