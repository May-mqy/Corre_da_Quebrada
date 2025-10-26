import './App.css';

import VLibras from "./components/Vlibras.jsx";


import { Routes, Route } from 'react-router-dom'; 

import Home from "./pages/Home.jsx"; 
import Catalogo from "./pages/Catalogo.jsx"; 
import Sobre from "./pages/Sobre.jsx";    

function App() {
  return (
    <main>
         <VLibras />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
    </main>
    

    
  );
}

export default App;