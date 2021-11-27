import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.scss';
import Header from './components/Header';
import Curador from './components/Curator';
import Footer from './components/Footer';
import Places from './components/Places';
import Routes from './routes';

const CONFIG = {
  uf: 'SP',
  city: 'São Bernardo do Campo'
}

ReactDOM.render(
  <div className="main__wrapper">
    <div className="main__container">
      <Header city={CONFIG.city} uf={CONFIG.uf}/>
      <Routes city={CONFIG.city} uf={CONFIG.uf}/>
      <Places />      
      <Curador />
    </div>
    <Footer />
  </div>
  ,
  document.getElementById('root')
);
