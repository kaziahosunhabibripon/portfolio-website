import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from './Components/Home/Home';


function App() {
  return (
    <div className="App">
     
      <Router>
        <Switch>
          <Route path="/">
            <Home></Home>
          </Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
