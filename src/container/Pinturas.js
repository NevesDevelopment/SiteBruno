//--------------------------------------Carrega Bibliotecas-----------------------------------------//
import React, { Component } from 'react';
//----------------------------------------Carrega Rotas--------------------------------------------//
import NavBar from '../ui/NavBar';
import Carousel from './Carousel';
import Contato from './ContatoHome';
//-------------------------------------------------------------------------------------------------//
export default class Pintura extends Component {
    render() {
        return (
//--------------------------------Apresenta elementos em tela--------------------------------------//
            <div> 
                <NavBar/>
                <Carousel Child="ImagesPintura"/>
                <Contato/>
            </div>
        );
    }
}
//-------------------------------------------------------------------------------------------------//
