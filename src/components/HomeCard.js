//--------------------------------------Carrega Bibliotecas-----------------------------------------//
import React, { Text, Component } from 'react';
import firebase from 'firebase';
//----------------------------------------Carrega Rotas--------------------------------------------//
import HomeCard from '../ui/Card';
import config from '../firebase/Config';
//-------------------------------------------------------------------------------------------------//
export default class Home extends Component{
//----------------------Cria o estados para amazenar caminhos para imagem--------------------------//
    constructor() {
        super();
        this.state = {
            caminho : ['https://www.terramarear.info/wp-content/uploads/2019/08/default.jpg']
        }
    }
//--------------------------------------Busca no banco fb-----------------------------------------//
    componentDidMount () {
        firebase.initializeApp(config);
        const rooRef = firebase.database().ref().child('ImageCard');
        //const TexturaRef = rooRef.child('Textura1')
        rooRef.on('value', snap => {
            this.setState({
                caminho: snap.val()
            })
        });
    }
    render() {
        return (
//--------------------------------Apresenta componentes em tela--------------------------------------//
            <div className="container text-center ">
                <div className="row">
                    <HomeCard 
                    tela="/Gessos" 
                    title="GESSO" 
                    foto="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQs_fxi_gosSy20qJzf6Ki6qX6R2y_1MbYM7ZWx_x3kLgLyakKA" 
                    descricao="Revestimentos em gesso, elimina a necessidade de massa corrida na pintura, muito ultilizado em acabmentos  e efeitos decorativo."
                    />
                    <HomeCard 
                    tela="/Texturas" 
                    title="TEXTURA" 
                    foto="https://assets.izap.com.br/clubedastintas.com/uploads/img5a3bda309ceef.jpg" 
                    descricao="Trabalhos com textura é uma ótima alternativa para a decoração, aplicadas em uma demão, possuem uma grande variedade de cores."
                    />
                    <HomeCard 
                    tela="/Pinturas" 
                    title="PINTURA" 
                    foto="https://construindodecor.com.br/wp-content/uploads/2015/08/textura-com-rolo.jpg" 
                    descricao="A escolha dos materiais e técnica adequadas está diretamente ligada ao resultado desejado para o trabalho."
                    />
                </div>
            </div>
        );
    }
}
//-------------------------------------------------------------------------------------------------//
