//--------------------------------------Carrega Bibliotecas-----------------------------------------//
import React, { Component } from 'react';
import {Alert} from 'react-bootstrap';
//----------------------------------------Carrega Rotas--------------------------------------------//
import NavBar from '../ui/NavBar';
import ContatoHome from './ContatoHome';
//-------------------------------------------------------------------------------------------------//
export default class Gessos extends Component {
    render() {
        return (
//--------------------------------Apresenta elementos em tela--------------------------------------//
            <div style={{marginTop:'20%'}}>
                <NavBar />
                <ContatoHome/>
            </div>
        );
    }
}
//-------------------------------------------------------------------------------------------------//