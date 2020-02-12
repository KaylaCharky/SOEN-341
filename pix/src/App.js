import React from 'react';
import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import Search from './components/Search';
import Error from './components/Error';
import Navigation from './components/Navigation';


function App() {
  return (
    
      <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/profile" component={Profile}/>
             <Route path="/search" component={Search}/>
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
    
  );
}

export default App;
