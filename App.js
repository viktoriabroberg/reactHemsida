import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'; 
import Hitta from './pages/Hitta';
import Bestall from './pages/Bestall';
import Meny from './pages/Meny';
import Pizza from './pages/Pizza';
import Rulle from './pages/Rulle';
import Sallad from './pages/Sallad';
import Tallrik from './pages/Tallrik';
import Tillbehor from './pages/Tillbehor';
import Ovrigt from './pages/Ovrigt';
import LikeButton from './LikeButton';
import './App.css';

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Hitta" element={<Hitta />} />
        <Route path="/Bestall" element={<Bestall />} />
        <Route path="/Meny" element={<Meny />} />
        <Route path="/Pizza" element={<Pizza />} />
        <Route path="/Rulle" element={<Rulle />} />
        <Route path="/Sallad" element={<Sallad />} />
        <Route path="/Tallrik" element={<Tallrik />} />
        <Route path="/Tillbehor" element={<Tillbehor />} />
        <Route path="/Ovrigt" element={<Ovrigt />} />
      </Routes>
      <div>
         <LikeButton />
      </div>
    </Router>

  );
}

export default App;
