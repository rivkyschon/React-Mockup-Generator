import React, { useState } from 'react';
import RMGButton from '../components/RMGButton';
import RMGHeader from '../components/RMGHeader';
import RMGInput from '../components/RMGInput';
import RMGText from '../components/RMGText';
import RMGImage from '../components/RMGImage';
import AIMockupGenerator from '../components/AIMockupGenerator';
import TestButton from '../components/TestButton';

const MainPage: React.FC = () => {

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