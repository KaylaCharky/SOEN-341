import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component{
constructor(props){
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDisplayName = this.onChangeDisplayName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        name: '',
        displayName: '',
        photos: []
    }
}

componentDidMount(){
    this.setState({
        name: 'Name',
        displayname: 'DisplayName',
        photos: ['test value']
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

    const user = {
        name: this.state.name,
        displayName: this.state.displayName
    };

    console.log(user.name);
    console.log(user.displayName);
    console.log('this is where you do the API call');

    axios.post('http://localhost:8080/users/add', user)
    .then(res => console.log(user.data));
    
    window.location = '/login';
}

    render(){
        return(
        <div>
            <h1>Create a user here</h1>
            <form onSubmit={this.onSubmit}>

                <div className="form-group">
                    <label>Name: </label>
                    <input type="text"
                        required
                        
                        className={"form-control"}
                        value={this.state.name}
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