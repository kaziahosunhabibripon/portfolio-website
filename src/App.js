import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from './Components/Home/Home';
function App() {
  return (
    <div >
      <Router>
        <Switch>
          <Route path="/">
            <Home></Home>
          </Route>
          <Route path="/projects">
            
          </Route>
          <Route path="/blog">
            
          </Route>
          <Route path="/resume">
            
          </Route>
          <Route path="/contact">
            
          </Route>
          
          <Route exact path="*">
            
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
