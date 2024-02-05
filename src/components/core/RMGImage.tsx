// src/components/RMGImage.tsx

import React from 'react';

interface RMGImageProps {
  src?: string;
  alt?: string;
  width?: string;
  height?: string;
}

const RMGImage: React.FC<RMGImageProps> = ({src, alt, width, height}) => {
  return (
    <div className="w-60 h-60 m-auto flex justify-center items-center bg-gray-200">
      <img
        className="mx-auto d-block rounded shadow"
        src={src || 'https://placehold.jp/150x150.png'}
        alt={alt}
      />
    </div>
  );
};

export default RMGImage;
