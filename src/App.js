import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Layout from './pages/Layout'
import Eventos from './pages/Eventos'
import Ticketeras from './pages/Ticketeras';
import IniciarSesion from './pages/IniciarSesion';
import TokenProvider from './context/TokenContext';

function App() {
  return (
    <TokenProvider>
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path='/'   element={<IniciarSesion />} />
        <Route path = "/home" element={<Home />} />
        <Route path = "/eventos" element={<Eventos />} />
        <Route path = "/ticketeras" element={<Ticketeras />} />
        <Route path = "/*" element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>
  </TokenProvider>
  );
}

export default App;
