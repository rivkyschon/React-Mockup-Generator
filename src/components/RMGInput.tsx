// src/components/RMGInput.tsx

import React from 'react';

interface RMGInputProps {
  placeholder?: string;
  type: string;
}

const RMGInput: React.FC<RMGInputProps> = ({ placeholder, type }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="border-2 border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
    />
  );
};

export default RMGInput;
