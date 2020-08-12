import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./app.scss";
import UserManagement from "./pages/UserManagement";
import Home from "./pages/Home";
import PublicLayout from "./layouts/PublicLayout";

const PublicRoute = ({ children, ...rest }) => {
  return (
    <Route
    {...rest}
    render={() =>
      (
        
        <PublicLayout>
          {children}
        </PublicLayout>
      ) 
    }
  />
  )
}

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <PublicRoute path="/" exact>
            <Home />
          </PublicRoute>

          <PublicRoute path="/user-management" exact>
            <UserManagement />
          </PublicRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
