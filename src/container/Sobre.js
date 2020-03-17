//--------------------------------------Carrega Bibliotecas-----------------------------------------//
import React, { Component } from 'react';
import {Alert} from 'react-bootstrap';
//----------------------------------------Carrega Rotas--------------------------------------------//
import NavBar from '../ui/NavBar';
//-------------------------------------------------------------------------------------------------//
export default class Sobre extends Component {
    render() {
        return (
//--------------------------------Apresenta elementos em tela--------------------------------------//
            <div  className="col-12 col-md-12 col-sm-3 " >
                <NavBar />
                <div id="sobre" align="center">
                <Alert variant="light">
                    <Alert.Heading><i className="fas fa-fill-drip p-1 ">&nbsp;Bruno Pintor</i></Alert.Heading>
                    <hr />
                    <p>&nbsp;É um profissional que busca promover, através de 
                    seus serviços, uma relaçao harmônica entre funcionarios, pessoas e seus clientes.</p>
                    <p>&nbsp;<i className="fas fa-low-vision"></i></p>
                    <p className="mb-0">Busca ser um profissional de referência  pela qualidade dos seus serviços 
                    e atendimento.</p>
                </Alert>
                </div>
            </div>
        );
    }
}
//-------------------------------------------------------------------------------------------------//