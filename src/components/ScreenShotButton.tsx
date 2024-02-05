import React, {ReactElement} from 'react';
import {takeScreenshot, downloadImage} from '../services/ScreenshotService';
import RMGButton from './core/RMGButton';

const ScreenshotButton: React.FC = (): ReactElement => {
  const handleTakeScreenshot = async () => {
    const base64image = await takeScreenshot();
    if (base64image) {
      downloadImage(base64image);
    }
  };
  return (
    <RMGButton
      className="bg-blue-500 hover:bg-blue-700 text-white p-4 rounded-full inline-flex items-center justify-center"
      title="&#8681;"
      onClick={handleTakeScreenshot}
    />
  );
};

export default ScreenshotButton;
