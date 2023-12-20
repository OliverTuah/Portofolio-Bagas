import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Beranda from './Halaman/Beranda/Beranda';
import Portofolio from './Halaman/Portofolio/porto';
import Cursor from './Komponen/cursor/cursor';
import {Scrollbar} from 'smooth-scrollbar-react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
        
        <BrowserRouter>
          <span onAnimationStart={onDelay} id="splash-overlay" class="splash"></span>
          <span id="welcome" class="z-depth-4"></span>
          <Cursor/>
          <div className="App" data-barba="container">
              <Routes>
                <Route path="/" element={<Beranda />} />
                <Route path="/porto" element={<Portofolio />} />
              </Routes>
          </div>
         </BrowserRouter>
     
  );
  function onDelay(){
    var splash1 = document.getElementById('splash-overlay');
    var splash2 = document.getElementById('welcome');
    setTimeout(function(){ splash1.style.display= "none"; },1000);
    setTimeout(function(){ splash2.style.display= "none"; },1000);
  }
  
}


export default App;
