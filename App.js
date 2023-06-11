import './App.css';
import Main from './main.js';
import P1 from './p1.js';
import P2 from './p2.js';
import P3 from './p3.js';


import {BackGround, TopHeader, LibGrid, ArtistLib, LibImg} from './style.js'
import {Grommet} from 'grommet';
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/P1" element={<P1 />} />
        <Route path="/P2" element={<P2 />} />
        <Route path="/P3" element={<P3 />} />



    </Routes>
  );
}

export default App;
