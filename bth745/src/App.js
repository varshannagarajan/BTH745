import React from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Slider from './Components/Slider/Slider'
import GameLaunchCard from './Components/GameLaunchCard/GameLaunchCard'
import { Game } from './assests/objects/Game'
import './App.css';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Footer></Footer>
    </div>
  );
}

export default App;
