import React, { Component } from 'react';
import axios from 'axios';


export default class Login extends Component{
    constructor(props){
        super(props);
    
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDisplayName = this.onChangeDisplayName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        

        this.state = {
            name: '',
            displayName: '',
            id: ''
        }
    }

    componentDidMount(){
        
        this.setState({
            
            name: 'Name',
            displayname: 'DisplayName',
            id: this.props.match.params.id
        });
    }
    
    onChangeName(e){
        this.setState({
            name: e.target.value
        });
    }
    
    onChangeDisplayName(e){
        this.setState({
            displayName: e.target.value
        });
    }
    
    onSubmit(e){
        e.preventDefault();
        console.log('submitted something');
        const user = {
            name: this.state.name,
            displayName: this.state.displayName,
        };
        const { match: {params} } = this.props;
        
        axios.get('http://localhost:8080/users/'+this.props.match.params.id, user)
        .then(res => console.log(user.data));
  
        window.location = '/login';
    }


    render(){
        return(
            <div>
            <h1>Login</h1>
            <form onSubmit={this.onSubmit}>
            <div className="form-group">  
                    <label> name: </label>
                    <input type="text"
                        required
                        
                        className={"form-control"}          
                        vlaue={this.state.name}
                        onChange={this.onChangeName}
                        /> 
                </div>
                <div className="form-group">  
                    <label>Display name: </label>
                    <input type="text"
                        required
                        
                        className={"form-control"}          
                        vlaue={this.state.displayName}
                        onChange={this.onChangeDisplayName}
                        /> 
                </div>

                <div className="form-group">
                    <input type="submit" value="Submit" className="btn btn-primary"/>
                </div>
            </form>
        </div>
        )
    }
}