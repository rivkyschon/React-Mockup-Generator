// src/components/RMGInput.tsx

import React, {ChangeEventHandler} from 'react';

interface RMGInputProps {
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: any) => void;
  onKeyDown?: (e: any) => void;
  className?: string;
}

const RMGInput: React.FC<RMGInputProps> = ({
  placeholder,
  type,
  className,
  value,
  onChange,
  onKeyDown,
}) => {
  return (
    <input
      type={type || 'text'}
      placeholder={placeholder || 'Type here..'}
      value={value}
      onKeyDown={onKeyDown}
      onChange={onChange}
      className={
        className ||
        'border-2 block border-gray-300 w-full p-3 rounded focus:outline-none focus:border-gray-500'
      }
    />
  );
};

export default RMGInput;
