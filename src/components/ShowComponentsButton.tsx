import React, {useState} from 'react';
import TestPage from '../pages/TestPage';
import ScreenshotButton from './ScreenShotButton';
import Modal from './Modal';

const TestButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="App">
      <button
        className="bg-gray-600 text-white font-bold py-2 px-4 rounded hover:bg-gray-800 focus:ring-2 focus:ring-blue-300 transition-colors"
        onClick={handleOpen}>
        Show Components
      </button>

      <Modal isOpen={isOpen} onClose={handleClose}>
        <div>
          {' '}
          <h3 className="text-4xl font-bold text-blue-500 mb-6">
            Available components:
          </h3>
          <div className="w-full mt-2 px-7 py-3">
            {' '}
            <TestPage />
          </div>
          <div className="items-center px-4 py-3">
            <button
              id="ok-btn"
              className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
              onClick={handleClose}>
              Close
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default TestButton;
