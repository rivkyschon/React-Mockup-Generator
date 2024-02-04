import React from 'react';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode; // Add this line to accept children components
};

const Modal: React.FC<ModalProps> = ({isOpen, onClose, children}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
      id="my-modal">
      <div className="relative top-20 mx-auto p-5 border w-1/2 shadow-lg rounded-md bg-white">
        <div className="mt-3 text-center">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
