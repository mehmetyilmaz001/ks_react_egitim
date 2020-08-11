import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "./app.scss";
import UserManagement from "./pages/UserManagement";
import Home from "./pages/Home";



function App() {

  return (
    <div className="App">
      

      <Router>
        <Switch>
          
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/user-management" exact>
            <UserManagement />
          </Route>

        </Switch>
      </Router>

      
    </div>
  );
}

export default App;
