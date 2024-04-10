import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Land404 from "./components/Land404";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:lng" element={<Home />} />
        <Route path="*" element={<Land404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
