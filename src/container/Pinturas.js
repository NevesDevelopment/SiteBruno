//--------------------------------------Carrega Bibliotecas-----------------------------------------//
import React, { Component } from 'react';
//----------------------------------------Carrega Rotas--------------------------------------------//
import NavBar from '../ui/NavBar';
import Carousel from './Carousel';
//-------------------------------------------------------------------------------------------------//
export default class Pintura extends Component {
    render() {
        return (
//--------------------------------Apresenta elementos em tela--------------------------------------//
            <div> 
                <NavBar/>
                <Carousel Child="ImagesPintura"/>
            </div>
        );
    }
}
//-------------------------------------------------------------------------------------------------//