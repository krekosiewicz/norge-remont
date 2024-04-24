'use client'

import { useRef, useState, useCallback } from 'react';

interface CustomDivElements extends HTMLDivElement {
  scrollLeftOnClickStart: number;
  scrollTopOnClickStart: number;
  clientXOnClickStart: number;
  clientYOnClickStart: number;
}

interface UseDragToScrollReturnType {
  containerRef: React.RefObject<CustomDivElements>;
  onMouseDown: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseMove: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseUp: () => void;
  onMouseLeave: () => void;
  isGrabbing: boolean;
}

export const useDragToScroll = (): UseDragToScrollReturnType => {
  const containerRef = useRef<CustomDivElements>(null);
  const [isGrabbing, setIsGrabbing] = useState<boolean>(false);

  const onMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = containerRef.current;
    if (el) {
      setIsGrabbing(true);
      el.style.userSelect = 'none'; // Prevent text selection during drag
      el.scrollLeftOnClickStart = el.scrollLeft;
      el.scrollTopOnClickStart = el.scrollTop;
      el.clientXOnClickStart = e.clientX;
      el.clientYOnClickStart = e.clientY;
    }
  }, []);

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (isGrabbing) {
      const el = containerRef.current;
      if (el) {

        el.scrollLeft = el.scrollLeftOnClickStart - (e.clientX - el.clientXOnClickStart);
        el.scrollTop = el.scrollTopOnClickStart - (e.clientY - el.clientYOnClickStart);
      }
    }
  }, [isGrabbing]);

  const onMouseUp = useCallback(() => {
    if (isGrabbing) {
      setIsGrabbing(false);
      const el = containerRef.current;
      if (el) {
        el.style.userSelect = ''; // Re-enable text selection
      }
    }
  }, [isGrabbing]);

  const onMouseLeave = useCallback(() => {
    if (isGrabbing) {
      setIsGrabbing(false);
      const el = containerRef.current;
      if (el) {
        el.style.userSelect = ''; // Re-enable text selection
      }
    }
  }, [isGrabbing]);

  return { containerRef, onMouseDown, onMouseMove, onMouseUp, onMouseLeave, isGrabbing };
};
