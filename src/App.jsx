import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Map from "./pages/Map";
import Rest from "./pages/Rest";
import Hookes from "./pages/Hookes";
import Parent from "./pages/Parent";
import Effect from "./pages/Effect";
import Local from "./pages/Local";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<Map />} />
        <Route path="/rest" element={<Rest />} />
        <Route path="/hookes" element={<Hookes />} />
        <Route path="/parent" element={<Parent />} />
        <Route path="/effect" element={<Effect />} />
        <Route path="/local" element={<Local />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
