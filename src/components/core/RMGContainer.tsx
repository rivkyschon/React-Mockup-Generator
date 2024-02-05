import React from 'react';

interface RMGContainerProps {
  children: React.ReactNode;
}

const RMGContainer: React.FC<RMGContainerProps> = ({children}) => {
  return (
    <div className="flex items-center gap-4 justify-center bg-gray-100">
      {children}
    </div>
  );
};

export default RMGContainer;
