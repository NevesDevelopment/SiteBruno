import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {BrowserRouter, Switch, Route} from  'react-router-dom';
import Gessos from './container/Gessos';
import Texturas from './container/Texturas';
import Pinturas from './container/Pinturas';
import Contato from './container/ContatoPage';
import Sobre from './container/Sobre';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/Gessos" component={Gessos}/>
            <Route path="/Texturas" component={Texturas}/>
            <Route path="/Pinturas" component={Pinturas}/>
            <Route path="/Contato" component={Contato}/>
            <Route path="/Sobre" component={Sobre}/>
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));
serviceWorker.unregister();
