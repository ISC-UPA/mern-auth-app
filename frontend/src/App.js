import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/register" component={RegisterForm} />
          <Route path="/login" component={LoginForm} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/" exact>
            <h1>Welcome to the MERN Authentication App</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
