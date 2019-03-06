import React, {Component} from 'react';
import HomeOne from "./HomeOne";
import User from './User'
import Profile from "./Profile";
import RouteLogin from './RouteLogin'

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'

import MenuLink from "./MenuLink";
import './index.less'
import Login from "./Login";


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Router>
                <div>
                    <nav>
                        <ul>
                            <MenuLink to='/home' label='主页'/>
                            <MenuLink to='/profile' label='详情页'/>
                            <MenuLink to='/user' label='用户'/>
                        </ul>
                    </nav>
                    <div>
                        <Switch>
                            <Route exact path='/' component={HomeOne}/>
                            <Route path='/home' component={HomeOne}/>
                            <Route path='/login' component={Login}/>
                            <Route path='/profile' component={Profile}/>
                            <RouteLogin path='/user' component={User}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}