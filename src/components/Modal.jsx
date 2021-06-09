import React from "react";

const Modal = ({ children }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center overflow-hidden">
      {children}
    </div>
  );
};

export default Modal;
