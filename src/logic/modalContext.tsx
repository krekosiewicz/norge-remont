'use client'

import { createContext, useContext, useState, ReactNode, FC, useEffect, useCallback } from 'react'
import { Modal } from '../components/modal/modal'
import { usePathname } from 'next/navigation'

interface ModalProviderProps {
  children: ReactNode
}

interface ModalContextType {
  showModal: (content: ReactNode, className?: string) => void
  hideModal: () => void
  toggleOverlay: (show: boolean) => void
}

const ModalContextDefault = {
  showModal: () => { return },
  hideModal: () => { return },
  toggleOverlay: () => { return }
}

const ModalContext = createContext<ModalContextType>(ModalContextDefault)

export const ModalProvider: FC<ModalProviderProps> = ({ children }) => {
  const [ isVisible, setIsVisible ] = useState(false)
  const [ modalContent, setModalContent ] = useState<ReactNode>(null)
  const [ className, setClassName ] = useState<string>('')
  const [ overlayVisible, setOverlayVisible ] = useState(false) // Overlay visibility state
  const pathname = usePathname()


  const showModal = useCallback((content: ReactNode, className: string = '') => {
    setModalContent(content)
    setIsVisible(true)
    setClassName(className)
  }, [])

  const hideModal = useCallback(() => {
    setIsVisible(false)
    setModalContent(null)
    setClassName('')
  }, [])


  const toggleOverlay = useCallback((show: boolean) => {
    setOverlayVisible(show)
  }, [])


  useEffect(() => {
    hideModal()
  }, [ pathname ])

  return (
    <ModalContext.Provider value={{ showModal, hideModal, toggleOverlay }}>
      {children}
      <Modal isOpen={isVisible} onClose={hideModal} overlayVisible={overlayVisible} className={className}>
        {modalContent}
      </Modal>
    </ModalContext.Provider>
  )
}

export const useModal = () => {
  const context = useContext(ModalContext)
  if (context === undefined) {
    return ModalContextDefault
  }
  return context
}
