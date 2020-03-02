import React from "react";
import "./App.css";
//components
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Card from "./components/Card";
//router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Login />
            <Dashboard/>
          </Route>

          <Route exact path="dashboard">
            <Dashboard/>
          </Route>

          <Route exact path="card">
            <Card />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
