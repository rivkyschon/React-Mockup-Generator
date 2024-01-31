// src/components/RMGImage.tsx

import React from 'react';

interface RMGImageProps {
  src: string;
  alt: string;
  width?: string;
  height?: string;
}

const RMGImage: React.FC<RMGImageProps> = ({ src, alt, width, height }) => {
  return (
    <img className="mx-auto d-block rounded shadow" src={src} alt={alt} />
  );
};

export default RMGImage;
