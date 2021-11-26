import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.scss';
import Header from './components/Header';
import Home from './pages/Home';
import Curador from './components/Curator';
import Footer from './components/Footer';
import Places from './components/Places';

const CONFIG = {
  uf: 'SP',
  city: 'São Bernardo do Campo'
}

ReactDOM.render(
  <div className="main__wrapper">
    <div className="main__container">
      <Header city={CONFIG.city} uf={CONFIG.uf}/>
      <Home city={CONFIG.city}/>
      <Places />      
      <Curador />
    </div>
    <Footer />
  </div>
  ,
  document.getElementById('root')
);
