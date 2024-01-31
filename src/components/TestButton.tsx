import React, { useState } from 'react';
import TestPage from '../pages/TestPage';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="my-modal">
      <div className="relative top-20 mx-auto p-5 border w-1/2 shadow-lg rounded-md bg-white">
        <div className="mt-3 text-center">
          <h3 className="text-4xl font-bold text-blue-500 mb-6">Available components:</h3>

          <div className="w-full mt-2 px-7 py-3">
              <TestPage />
          </div>

          <div className="items-center px-4 py-3">
            <button
              id="ok-btn"
              className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const TestButton: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  return (
    <div className="App">
      <button
        className="bg-gray-600 text-white font-bold py-2 px-4 rounded hover:bg-gray-800 focus:ring-2 focus:ring-blue-300 transition-colors"
        onClick={handleOpen}
      >
        Show Components
      </button>

      <Modal isOpen={isModalOpen} onClose={handleClose} />
    </div>
  );
};

export default TestButton;
