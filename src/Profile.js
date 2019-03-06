import React,{Component} from 'react';
import {Link,Route,Switch} from 'react-router-dom'
import ProfileAdd from "./ProfileAdd";
import ProfileUser from "./ProfileUser";

export default  class Profile extends  Component{
    constructor(props){
        super(props);
        this.state =  {}
    }
    render(){
        return (
            <div className='Profile'>
                <div>
                    <ul>
                        <li><Link to='/profile/user/:id'>详细信息</Link></li>
                        <li><Link to='/profile/add'>提交信息</Link></li>
                    </ul>

                </div>
                <div>
                    <Switch>
                    <Route path='/profile/user/:id' component={ProfileUser}/>
                    <Route path='/profile/add' component={ProfileAdd}/>
                    </Switch>
                </div>
            </div>

        )
    }
}