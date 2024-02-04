import React from 'react';

interface RMGContainerProps {
  content: string;
}

const RMGContainer: React.FC<RMGContainerProps> = ({content}) => {
  return (
    <label className="block text-gray-900 font-bold mb-2" htmlFor="email">
      {content}
    </label>
  );
};

export default RMGContainer;
