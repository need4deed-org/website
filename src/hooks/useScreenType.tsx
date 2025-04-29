import { useState, useEffect } from "react";
import { screenSizeThresholds } from "../config/constants";
import { ScreenTypes } from "../config/types";

const getScreenType = () => {
  if (window.innerWidth < screenSizeThresholds.tablet)
    return ScreenTypes.MOBILE;

  if (window.innerWidth < screenSizeThresholds.desktop)
    return ScreenTypes.TABLET;

  return ScreenTypes.DESKTOP;
};

function useScreenType() {
  const [screenType, setScreenType] = useState<ScreenTypes>(getScreenType());

  useEffect(() => {
    const handleResize = () => {
      setScreenType(getScreenType());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenType;
}

export default useScreenType;
