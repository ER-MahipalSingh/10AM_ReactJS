import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Map from "./pages/Map";
import Rest from "./pages/Rest";
import Hookes from "./pages/Hookes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<Map />} />
        <Route path="/rest" element={<Rest />} />
        <Route path="/hookes" element={<Hookes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
