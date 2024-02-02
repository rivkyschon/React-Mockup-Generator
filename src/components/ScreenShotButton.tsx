// ScreenshotButton.tsx

import React, { ReactElement } from 'react';
import { takeScreenshot, downloadImage } from '../services/ScreenshotService';

const ScreenshotButton: React.FC = (): ReactElement => {
    
  const handleTakeScreenshot = async () => {
    const base64image = await takeScreenshot();
    if (base64image) {
      downloadImage(base64image);
    }
  };

  return (
    <button onClick={handleTakeScreenshot}>
      Take Screenshot
    </button>
  );
};

export default ScreenshotButton;
