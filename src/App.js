import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Layout from './pages/Layout'
import Eventos from './pages/Eventos'
import CrearEvento from './pages/CrearEvento';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path = "/eventos" element={<Eventos />} />
        <Route path = "/nuevoEvento" element={<CrearEvento />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
