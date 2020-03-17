//--------------------------------------Carrega Bibliotecas-----------------------------------------//
import React from 'react';
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
//-------------------------------------------------------------------------------------------------//
const HomeCard = (props) => (
//--------------------------------Apresenta elementos em tela--------------------------------------//
    <div id="homeCard" className="col-12  col-sm-4 " >
        <div className="card" id="card">   
            <Card>
                <Card.Img className="imagem" variant="top" src={props.foto}/>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text><i>{props.descricao}.</i></Card.Text>
                    <Link  to={props.tela} className="btn btn-dark">Confira</Link>
                </Card.Body>
            </Card>
        </div>   
    </div>
);
//-------------------------------------------------------------------------------------------------//
export default HomeCard;