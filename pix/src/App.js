import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from './components/navbar.component';
import Home from './components/home.component';
import Login from './components/login.component';
import CreateUser from './components/create-user.component';
import Profile from './components/profile.component';

function App() {
  return (
      <Router>
        <div className="container"> 
        <Navbar />
        <br/>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />   
        <Route path="/create-user" component={CreateUser}/>
        <Route path="/profile" component={Profile} />
        </div>
      </Router>
  );
}

export default App;
