//--------------------------------------Carrega Bibliotecas-----------------------------------------//
import React, { Component } from 'react';
//----------------------------------------Carrega Rotas--------------------------------------------//
import NavBar from '../ui/NavBar';
import Carousel from './Carousel';
//-------------------------------------------------------------------------------------------------//
export default class Gessos extends Component {
    render() {
        return (
//--------------------------------Apresenta elementos em tela--------------------------------------//
            <div> 
                <NavBar/>
                <Carousel Child="ImagesGesso"/>
            </div>
        );
    }
}
//-------------------------------------------------------------------------------------------------//
