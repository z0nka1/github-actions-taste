import React from 'react';
import './App.css';
import MyConcerns from './components/MyConcerns/MyConcerns';
import MyService from './components/MyService/MyService';
import Banner from './components/Banner/Banner';
import dance from './assets/dance.png';

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="nav"></div>
        <div className="wave_1"></div>
        <div className="wave_2"></div>
        <div className="search">
          <img className="dance" src={dance} alt="dance" />
        </div>
        <div className="banner">
          <Banner />
        </div>
      </div>
      <div className="body">
        <div className="content">
          <div className="pos-relative my_concerns_container">
            <MyConcerns />
          </div>
          <div className="pos-relative my_service_container">
            <MyService />
          </div>
          <div className="ad_container"></div>
          <div className="news_container"></div>
        </div>
      </div>
      <div className="footer"></div>
      <div className="size_bar"></div>
    </div>
  );
}

export default App;
