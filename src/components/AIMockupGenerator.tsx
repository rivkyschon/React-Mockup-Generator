import React, {useState} from 'react';
import {useMockupGenerator} from '../hooks/useMockupGenerator';
import Modal from './Modal';
import ComponentFactory from '../services/ComponentFactoryService';
import ScreenshotButton from './ScreenShotButton';
import RMGButton from './RMGButton';
import RMGLabel from './RMGLabel';

const AIMockupGenerator: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    input,
    handleInputChange,
    handleSubmit,
    handleKeyDown,
    componentsConfig,
    isError,
  } = useMockupGenerator();

  return (
    <div className="flex flex-col items-center justify-center h-full bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        AI Mockup Generator
      </h1>
      <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
        <RMGLabel content="Enter Text" />

        <input
          id="input"
          type="text"
          placeholder="Type here..."
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
            setIsModalOpen(true);
            handleSubmit();
          }}
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
        />

        {isError && (
          <p className="text-red-500 text-sm mt-2">
            There was an error generating the component.
          </p>
        )}
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="flex items-center gap-4 justify-center bg-gray-100">
          <div className="max-w-md mb-8 mt-8 w-full space-y-8">
            <ScreenshotButton />
            <ComponentFactory components={componentsConfig} />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AIMockupGenerator;
