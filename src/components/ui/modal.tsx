import { CircleX } from "lucide-react";
import React, { ReactNode, FC } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; 

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-overlay  bg-opacity-50"
        onClick={onClose}
      />

      {/* Container */}
      <div className="relative bg-bg rounded-xl shadow-lg w-full max-w-3xl p-6 z-10">
        {/* Header */}
        <div className="flex justify-end items-center mb-4">
          <button onClick={onClose} className="text-gray-500 hover:text-black">
            <CircleX />
          </button>
        </div>

        {children}
      </div>
    </div>
  );
};

export default Modal;
