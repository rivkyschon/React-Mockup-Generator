import React from 'react';

interface RMGLabelProps {
  content: string;
  className?: string;
}

const RMGLabel: React.FC<RMGLabelProps> = ({content, className}) => {
  return (
    <label className={className || 'block text-lg font-medium text-gray-900'}>
      {content}
    </label>
  );
};

export default RMGLabel;
