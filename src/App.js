import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './pages/Login';



function App() {


  return (
    <Router>

      <Switch>
        <Route exact path = "/">
           <Login>
              
           </Login>
        </Route>


      </Switch>
    </Router>
  
  );
}

export default App;
