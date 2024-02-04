import React, {useState} from 'react';
import RMGButton from '../components/RMGButton';
import RMGHeader from '../components/RMGHeader';
import RMGInput from '../components/RMGInput';
import RMGText from '../components/RMGText';
import RMGImage from '../components/RMGImage';
import RMGLabel from '../components/RMGLabel';
import ComponentFactory from '../services/ComponentFactoryService';
import AIMockupGenerator from '../components/AIMockupGenerator';
import TestButton from '../components/ShowComponentsButton';
import ScreenshotButton from '../components/ScreenShotButton';

const MainPage: React.FC = () => {
  const components = [
    {
      component: 'RMGHeader',
      props: {
        text: 'Photo Gallery',
      },
    },
    {
      component: 'RMGImage',
      props: {
        src: 'path/to/photo1.jpg',
        alt: 'Photo 1',
        width: '300px',
        height: '200px',
      },
    },
    {
      component: 'RMGImage',
      props: {
        src: 'path/to/photo2.jpg',
        alt: 'Photo 2',
        width: '300px',
        height: '200px',
      },
    },
    {
      component: 'RMGImage',
      props: {
        src: 'path/to/photo3.jpg',
        alt: 'Photo 3',
        width: '300px',
        height: '200px',
      },
    },
  ];

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

export default MainPage;
