//--------------------------------------Carrega Bibliotecas-----------------------------------------//
import React, { Component } from 'react';
//----------------------------------------Carrega Rotas--------------------------------------------//
import NavBar from '../ui/NavBar';
import ContatoHome from './ContatoHome'
//-------------------------------------------------------------------------------------------------//
export default class Contato extends Component {
    render() {
        return (
//--------------------------------Apresenta elementos em tela--------------------------------------//
            <div  className="col-12 col-md-12 col-sm-3 " >
                <NavBar />
                <div id="contato" align="center">
                    <ContatoHome/>
                </div>
            </div>
        );
    }
}
//-------------------------------------------------------------------------------------------------//