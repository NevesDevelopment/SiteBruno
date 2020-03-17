//--------------------------------------Carrega Bibliotecas-----------------------------------------//
import React, { Component } from 'react';
//---------------------------------------Carrega Elementos------------------------------------------//
import './App.css';
import NavBar from './ui/NavBar';
import Home from './components/HomeCard';
import ContatoHome from './container/ContatoHome'
//-------------------------------------------------------------------------------------------------//
class App extends Component {
  render() {
    return (
      //---------------------------------Carrega os componentes em tela----------------------------------//
      <div id="divFundo" className="container-fluid " >
        <NavBar/>
        <div id="divCarousel">
          <Home/>
          <ContatoHome/>
        </div>
      </div>
    );
  }
}
//-------------------------------------------------------------------------------------------------//
export default App;
