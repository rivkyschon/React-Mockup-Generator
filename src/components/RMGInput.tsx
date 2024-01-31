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
    className="border-2 block border-gray-300 w-full p-3 rounded focus:outline-none focus:border-gray-500"
  />

  );
};

export default RMGInput;
