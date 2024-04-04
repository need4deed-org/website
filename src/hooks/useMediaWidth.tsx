import { useEffect, useState } from 'react';

function useMedia(width: string = '768px') {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia(`(max-width: ${width})`).matches,
  );

  useEffect(() => {
    window
      .matchMedia('(max-width: 768px)')
      .addEventListener('change', e => setIsMobile(e.matches));
  }, []);

  return isMobile;
}

export default useMedia;
