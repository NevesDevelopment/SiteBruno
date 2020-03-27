//--------------------------------------Carrega Bibliotecas-----------------------------------------//
import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import firebase from 'firebase';
//----------------------------------------Carrega Rotas--------------------------------------------//
import NavBar from '../ui/NavBar';
import config from '../firebase/Config';
//-------------------------------------------------------------------------------------------------//
export default class Gessos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            caminho: ['https://www.terramarear.info/wp-content/uploads/2019/08/default.jpg']
        }
    }

    componentDidMount() {
        if (!firebase.apps.length) {
            firebase.initializeApp(config);
        }
        const rooRef = firebase.database().ref("ImageCarousel");
        const texturaRef = rooRef.child(this.props.Child)
        texturaRef.on('value', snap => {
            this.setState({
                caminho: snap.val()
            })
        })
    }
    render() {
        const v = Object.values(this.state.caminho)
        return (
//--------------------------------Apresenta elementos em tela--------------------------------------//
            <div> 
                <NavBar/>
                <Carousel id="carousel" >
                    {v.map((photo, i)=> {
                        return <Carousel.Item key={i}>
                                    <img 
                                    src={photo.imageUrl} 
                                    key={i} 
                                    alt="Frist slide"
                                    />
                        </Carousel.Item>
                    })}
                </Carousel>
            </div>
        );
    }
}
//-------------------------------------------------------------------------------------------------//
