import React,{useState} from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/sass/comp.scss';
import './assets/sass/main.scss';

import Home from './views/home';

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
