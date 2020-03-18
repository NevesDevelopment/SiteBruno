//--------------------------------------Carrega Bibliotecas-----------------------------------------//
import React, { Component } from 'react';
import {Alert} from 'react-bootstrap';
//-------------------------------------------------------------------------------------------------//
export default class ContatoHome extends Component {
    render() {
        return (
//--------------------------------Apresenta elementos em tela--------------------------------------//
            <div  className="col-12 col-md-12 col-sm-3 " >
                <div align="center">
                <Alert variant="light">
                    <Alert.Heading>&nbsp;Fale Comigo!</Alert.Heading>
                    <hr />
                    <p><i className="fab fa-whatsapp"></i>&nbsp;(31) 97533-7286</p>
                    <p><i className="fas fa-mobile-alt"></i>&nbsp;(31) 97533-7286</p>
                    <p><i className="fas fa-envelope-square"></i>&nbsp;brunoornelas17@gmail.com</p>
                    <hr />
                    <p className="mb-0">Desde já, agradeço o seu contato e preferência!</p>
                </Alert>
                </div>
            </div>
        );
    }
}
//-------------------------------------------------------------------------------------------------//