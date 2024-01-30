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
<img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="rounded shadow-lg"
    />
  );
};

export default RMGImage;
