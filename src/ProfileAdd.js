import React,{Component} from 'react';

export default  class ProfileAdd extends  Component{
    constructor(props){
        super(props);
        this.state =  {}
    }
    changeSubmit = (ev)=>{

        ev.preventDefault();
     let store = localStorage.getItem('store')?JSON.parse(localStorage.getItem('store')):[];
        let val = this.user.value;
        if(val.length===0){
            return
        }
        let id = Math.random();
        store.push({id,val});
        localStorage.setItem('store',JSON.stringify(store))
       this.props.history.push(`/profile/user/${id}`)
    };
    handleChange= ()=>{

    };
    render(){

        return (
            <form

                onSubmit={this.changeSubmit}>
                <input type="text"
                       ref={ref=>this.user=ref}
                       onChange={this.handleChange}/>
                <input type="submit" value='提交'/>
            </form>
        )
    }
}