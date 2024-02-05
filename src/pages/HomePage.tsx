import React, {useState} from 'react';
import RMGButton from '../components/core/RMGButton';
import RMGHeader from '../components/core/RMGHeader';
import RMGInput from '../components/core/RMGInput';
import RMGText from '../components/core/RMGText';
import RMGImage from '../components/core/RMGImage';
import RMGLabel from '../components/core/RMGLabel';
import ComponentFactory from '../services/ComponentFactoryService';
import AIMockupGenerator from '../components/AIMockupGenerator';
import TestButton from '../components/ShowComponentsButton';
import ScreenshotButton from '../components/ScreenShotButton';
import DynamicUIComponent from '../components/DynamicUIComponent';
import MyLoader from '../components/MyLoader';
import RMGSubtitle from '../components/core/RMGSubtitle';

const HomePage: React.FC = () => {
  const components = [];

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-grow">
        <AIMockupGenerator />
      </div>
      <div className="flex items-center justify-center space-x-4 p-4">
        <p>Do you want to see all the components?</p>
        <TestButton />
      </div>
    </div>
  );
};

export default HomePage;
