import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Redirect from "./components/Redirect";
import Home from "./pages/Home";
import { Lang } from "./types";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Redirect path="/en" />} />
        <Route path="/en" element={<Home lng={Lang.EN} />} />
        <Route path="/de" element={<Home lng={Lang.DE} />} />
        <Route path="/ar" element={<Home lng={Lang.AR} />} />
        <Route path="/fa" element={<Home lng={Lang.FA} />} />
        <Route path="/ru" element={<Home lng={Lang.RU} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
