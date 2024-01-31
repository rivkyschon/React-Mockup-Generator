// src/components/RMGText.tsx

import React from 'react';

interface RMGTextProps {
  content: string;
}

const RMGText: React.FC<RMGTextProps> = ({ content }) => {
  return (
    <p className="bg-gray-100 p-4 rounded shadow">{content}</p>
    )};

export default RMGText;
