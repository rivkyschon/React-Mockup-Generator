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
      className="text-center mb-4 font-bold text-gray-800 p-4 hover:bg-gray-300 rounded-full "
      // title="&#8681;"
      title="Download"
      onClick={handleTakeScreenshot}
    />
  );
};

export default ScreenshotButton;
