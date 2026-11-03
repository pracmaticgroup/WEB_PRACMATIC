import { Routes, Route } from "react-router-dom";

import "./App.css";

import Presentacion from "./pages/Presentacion.jsx";
import Nosotros from "./pages/Nosotros";
import Ruletas from "./pages/ruletas";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Presentacion />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/ruletas" element={<Ruletas />} />
    </Routes>
  );
}

export default App;