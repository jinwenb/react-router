import React from 'react';
import ReactDom from 'react-dom';
import {Switch, Route, HashRouter as Router} from 'react-router-dom'
import App from "./App";
import User from "./User";
import Profile from "./Profile";


ReactDom.render(
    <Router>
        <div>
            <Switch>
                <Route exact path='/' component={App}/>
                <Route path='/user' component={User}/>
                <Route path='/profile' component={Profile}/>
            </Switch>

        </div>
    </Router>
    , document.querySelector('#root'));