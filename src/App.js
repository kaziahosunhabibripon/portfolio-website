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
          <Home></Home>
          </Route>
          <Route path="/blog">
          <Home></Home>
          </Route>
          <Route path="/resume">
          <Home></Home>
          </Route>
          <Route path="/contact">
          <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
