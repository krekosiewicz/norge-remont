// LxModal.tsx
import React, { FC, ReactNode } from 'react'
import ReactDOM from 'react-dom'

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
  overlayVisible?: boolean;
}

export const Modal: FC<ModalProps> = ({ isOpen, onClose, children, className, overlayVisible = false }) => {
  if (!isOpen) return null

  return ReactDOM.createPortal(
    (
      <div className='overflow-auto fixed inset-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50' onClick={onClose}>
        <div className={`bg-transparent relative rounded-lg w-5/6 h-5/6 overflow-auto ${className}`} onClick={onClose}>
          {overlayVisible && (
            <div className={"absolute inset-0 z-10 flex justify-center items-center bg-white bg-opacity-70"}>
              Loading...
            </div>
          )}
          {children}
        </div>
      </div>
    ),
    document.body
  )
}
