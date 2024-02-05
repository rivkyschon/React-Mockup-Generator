import React from 'react';

type ModalProps = {
  isOpen: boolean;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({isOpen, children}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
      id="my-modal">
      <div className="relative top-10 mx-auto p-4 border w-1/2 shadow-lg rounded-md bg-white">
        <div className="mt-3">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
