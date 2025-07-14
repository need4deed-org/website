import { useRef } from "react";

const useSwipe = (
  onSwipeLeft: () => void,
  onSwipeRight: () => void,
  threshold = 50,
) => {
  const startX = useRef<number | null>(null);

  const processSwipe = (deltaX: number) => {
    if (Math.abs(deltaX) > threshold) {
      if (deltaX > 0) {
        onSwipeLeft();
      } else {
        onSwipeRight();
      }
    }
  };

  // ✅ Touch Events
  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (startX.current === null) return;
    const deltaX = startX.current - e.changedTouches[0].clientX;
    processSwipe(deltaX);
    startX.current = null;
  };

  return {
    onTouchStart: handleTouchStart,
    onTouchEnd: handleTouchEnd,
  };
};

export default useSwipe;
