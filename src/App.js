import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./app.scss";
import UserManagement from "./pages/UserManagement";
import Home from "./pages/Home";
import PublicLayout from "./layouts/PublicLayout";
import LoginPage from './pages/LoginPage';
import Intro from "./components/Intro";
import { useSelector } from "react-redux";
import UserDetailPage from "./pages/UserDetail";
import 'antd/dist/antd.css';

const PublicRoute = ({ children, ...rest }) => {
  return (
    <Route {...rest} render={() => <PublicLayout>{children}</PublicLayout>} />
  );
};


const ProtectedRoute = ({ children, location, ...rest }) => {

  const authUser = useSelector(s => s.auth.authUser);

  return (
    <Route
      {...rest}
      render={() => (
        <>
          {!authUser ? (
            <Redirect to={{
              pathname: "/login",
              state: { from: location }
            }} />
          ) : (
            <PublicLayout>{children}</PublicLayout>
          )}
        </>
      )}
    />
  );
};

function App() {


  const [ isIntroLoaded, setIsIntroLoaded ] = useState(false);


  if(!isIntroLoaded){
    return <Intro onDone={() => setIsIntroLoaded(true)} />;
  }

  return (
    <>
    <div className="App">
      <Router>
        <Switch>
          <ProtectedRoute path="/" exact>
            <Home />
          </ProtectedRoute>

          <ProtectedRoute path="/user-management" exact>
            <UserManagement />
          </ProtectedRoute>
          
          <ProtectedRoute path="/user-detail/:id" exact>
            <UserDetailPage />
          </ProtectedRoute>

          <Route path="/login" exact>
            <LoginPage />
          </Route>
        </Switch>
      </Router>
    </div>
    </>
  );
}

export default App;
