import React,{Component} from 'react';

export default  class Login extends  Component{
    constructor(props){
        super(props);
        this.state =  {}
    }
    handleClick= ()=>{
        localStorage.setItem('login',true);
        this.props.history.push(this.props.location.state.from)
    }
    render(){
        return (
          <button onClick={this.handleClick}>点击</button>
        )
    }
}