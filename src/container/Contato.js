//--------------------------------------Carrega Bibliotecas-----------------------------------------//
import React, { Component } from 'react';
import {Alert} from 'react-bootstrap';
//----------------------------------------Carrega Rotas--------------------------------------------//
import NavBar from '../ui/NavBar';
//-------------------------------------------------------------------------------------------------//
export default class Gessos extends Component {
    render() {
        return (
//--------------------------------Apresenta elementos em tela--------------------------------------//
            <div style={{marginTop:'20%'}}>
                <NavBar />
                <Alert variant="light">
                    <Alert.Heading>&nbsp;Fale Comigo!</Alert.Heading>
                    <hr />
                    <p><i className="fab fa-whatsapp"></i>&nbsp;(00) 0000-0000</p>
                    <p><i className="fas fa-mobile-alt"></i>&nbsp;(00) 0000-0000</p>
                    <p><i className="fas fa-envelope-square"></i>&nbsp;brunoPintura@gmail.com</p>
                    <hr />
                    <p className="mb-0">Desde já, agradeço o seu contato e preferência!</p>
                </Alert>
            </div>
        );
    }
}
//-------------------------------------------------------------------------------------------------//