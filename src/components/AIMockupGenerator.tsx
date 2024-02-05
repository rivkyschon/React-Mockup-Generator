import React from 'react';
import {useMockupGenerator} from '../hooks/useMockupGenerator';
import Modal from './Modal';
import ScreenshotButton from './ScreenShotButton';
import RMGButton from './core/RMGButton';
import RMGLabel from './core/RMGLabel';
import DynamicUIComponent from './DynamicUIComponent';
import RMGContainer from './core/RMGContainer';
import RMGHeader from './core/RMGHeader';
import RMGInput from './core/RMGInput';
import MyLoader from './MyLoader';
import RMGText from './core/RMGText';

const AIMockupGenerator: React.FC = () => {
  const {
    input,
    handleInputChange,
    handleSubmit,
    handleKeyDown,
    components,
    isError,
    isLoading,
    isModalOpen,
    handleCloseModal,
  } = useMockupGenerator();

  return (
    <div className="flex flex-col items-center justify-center h-full bg-gray-100 p-6">
      <RMGHeader text="AI Mockup Generator" />

      <div className=" relative w-full max-w-md p-8 bg-white shadow-md rounded-lg">
        <RMGLabel
          content="Enter Text"
          className="block text-lg font-medium text-gray-700 mb-2"
        />
        <RMGInput
          value={input}
          onChange={handleInputChange}
          onKeyDown={e => {
            handleKeyDown(e);
          }}
          className="w-full p-4 border-2 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-blue-500 transition-colors"
        />
        <RMGButton
          title="Generate Mockup"
          onClick={() => {
            handleSubmit();
          }}
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
        />

        {isError && (
          <RMGText
            content="There was an error generating the component."
            className="text-red-500 text-sm mt-2"
          />
        )}
      </div>

      {isLoading && <MyLoader />}

      <Modal isOpen={isModalOpen}>
        <ScreenshotButton />
        <RMGButton
          className="text-center mb-4 font-bold text-gray-800 p-4 hover:bg-gray-300 rounded-full"
          title="close"
          onClick={handleCloseModal}
        />
        <RMGContainer>
          <DynamicUIComponent components={components} />
        </RMGContainer>
      </Modal>
    </div>
  );
};

export default AIMockupGenerator;
