import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ToDoList from './components/ToDoList';
import Login from './pages/Login';
import Register from './pages/Register';
import ToDoListPage from './pages/ToDoListPage';



function App() {


  return (
    <Router>

      <Switch>
        <Route exact path = "/">
           <Login>
              
           </Login>
        </Route>

        <Route path = "/register">
           <Register>
              
           </Register>
        </Route>

        <Route path = "/ToDoList">
           <ToDoListPage>
              
           </ToDoListPage>
        </Route>


      </Switch>
    </Router>
  
  );
}

export default App;
