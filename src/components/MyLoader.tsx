import React from 'react';

type LoaderProps = {};

const MyLoader: React.FC<LoaderProps> = ({}) => {
  return (
    <div className="scale-75 absolute top-[410px] flex justify-center items-center">
      <div className="w-24 h-24 animate-spinning">
        <svg width="100" height="100">
          <circle
            cx="50"
            cy="50"
            r="45"
            strokeWidth="10"
            stroke="#eee"
            fill="none"></circle>

          <path
            d="M50 5 A 45 45 0 0 1 95 50"
            fill="none"
            strokeWidth="10"
            stroke="#0079b8"></path>
        </svg>
      </div>
    </div>
  );
};

export default MyLoader;
