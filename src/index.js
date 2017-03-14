import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';


import App from './components/app';
import Pop from './components/pages/pop'
import RenderItems from './components/pages/renderItems';

const app = document.getElementById("app");

ReactDOM.render(
    <Router history={hashHistory}>
        <Route>
            <Route path='/' component={App}/>
            <IndexRoute component={App} />
        </Route>    
        <Route path="renderItems" component={RenderItems} />
        <Route path='pop' component={Pop} />
    </Router>
    , app);