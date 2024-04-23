import React, { createContext, useContext, useState, useCallback } from 'react';
import { Toast } from '@/components/toast/toast'

const ToastContext = createContext({ toggleToast: () => {} });

export const useToast = () => useContext(ToastContext);

export const ToastProvider = ({ children, }: {children: React.ReactNode}) => {
  const [toast, setToast] = useState({ visible: false, message: '', type: '' });

  const toggleToast = useCallback((type = 'success', message = '') => {
    setToast({ visible: true, message, type });
    setTimeout(() => {
      setToast({ visible: false, message: '', type: '' });
    }, 3000);  // dismiss toast after 3 seconds
  }, []);

  return (
    <ToastContext.Provider value={{ toggleToast }}>
      {children}
      {toast.visible && <Toast type={'success'} message={toast.message} />}
    </ToastContext.Provider>
  );
};