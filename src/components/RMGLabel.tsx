import React from 'react';

interface RMGLabelProps {
  content: string;
}

const RMGLabel: React.FC<RMGLabelProps> = ({content}) => {
  return (
    <label
      className="block text-lg font-medium text-gray-700 mb-2"
      htmlFor="email">
      {content}
    </label>
  );
};

export default RMGLabel;
