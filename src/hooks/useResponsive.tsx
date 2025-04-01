import { useState, useEffect } from "react";

function useResponsive(threshold: number) {
  const [isResponsive, setIsResponsive] = useState(
    window.innerWidth < threshold,
  );

  useEffect(() => {
    const handleResize = () => {
      setIsResponsive(window.innerWidth < threshold);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [threshold]);

  return isResponsive;
}

export default useResponsive;
