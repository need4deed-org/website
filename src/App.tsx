import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Land404 from "./components/Land404";
import Home from "./pages/Home";
import Legal from "./pages/Legal";
import { Legals } from "./types";

const App: React.FC = () => {
  useEffect(() => {
    fetch("/version.json")
      .then(response => response.json())
      .then(data => console.log("Current version:", data.commitHash))
      .catch(error => console.error("Failed to load version info:", error));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path={`/${Legals.NOTICE}/:lng`}
          element={<Legal type={Legals.NOTICE} />}
        />
        <Route
          path={`/${Legals.DATA_PROTECTION}/:lng`}
          element={<Legal type={Legals.DATA_PROTECTION} />}
        />
        <Route path="/:lng" element={<Home />} />
        <Route path="*" element={<Land404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
