import React,{Component} from 'react';

export default  class ProfileUser extends  Component{
    constructor(props){
        super(props);
        this.state =  {
            list:[]
        }
    }
    componentWillMount(){
        let store = localStorage.getItem('store')?JSON.parse(localStorage.getItem('store')):[];
        this.setState({
            list:store
        })
    }
    render(){
        let {list} = this.state;
        return (
            <div style={{lineHeight:'30px'}}>

                <ul>
                    {
                        list.map((item,index)=>(
                            <li key={index}>
                                {item.id}:
                                {item.val}
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}