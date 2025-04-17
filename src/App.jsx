import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Marcus1 from "./pages/Marcus1";
import Marcus2 from "./pages/Marcus2";
import Marcus3 from "./pages/Marcus3";
import Marcus4 from "./pages/Marcus4";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marcus1" element={<Marcus1 />} />
        <Route path="/marcus2" element={<Marcus2 />} />
        <Route path="/marcus3" element={<Marcus3 />} />
        <Route path="/marcus4" element={<Marcus4 />} />
      </Routes>
    </>
  );
}

export default App;