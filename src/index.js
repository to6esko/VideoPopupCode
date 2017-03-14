import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';


import App from './components/app';

const app = document.getElementById("app");

ReactDOM.render(
    <Router history={hashHistory}>
        <Route>
            <Route path='/' component={App}/>
            <IndexRoute component={App} />
        </Route>
    </Router>
    , app);