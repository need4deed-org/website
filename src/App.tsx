import { FC, MutableRefObject, createContext, useEffect, useRef } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Land404 from "./pages/Land404";
import Subpage from "./pages/Subpage";
import { Subpages } from "./types";

export const AppContainerContext = createContext<
  MutableRefObject<HTMLDivElement | null>
>(undefined as unknown as MutableRefObject<HTMLDivElement | null>);

const App: FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    fetch("/version.json")
      .then(response => response.json())
      .then(data => console.log("Current version:", data.commitHash))
      .catch(error => console.error("Failed to load version info:", error));
  }, []);

  return (
    <AppContainerContext.Provider value={containerRef}>
      <div ref={containerRef} className="app-container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path={`/${Subpages.NOTICE}/:lng`}
              element={<Subpage type={Subpages.NOTICE} />}
            />
            <Route
              path={`/${Subpages.DATA_PROTECTION}/:lng`}
              element={<Subpage type={Subpages.DATA_PROTECTION} />}
            />
            <Route
              path={`/${Subpages.OPPORTUNITIES}/:lng`}
              element={<Subpage type={Subpages.OPPORTUNITIES} />}
            />
            <Route
              path={`/${Subpages.TRANSLATIONS}/:lng`}
              element={<Subpage type={Subpages.TRANSLATIONS} />}
            />
            <Route path="/:lng" element={<Home />} />
            <Route path="*" element={<Land404 />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AppContainerContext.Provider>
  );
};

export default App;
