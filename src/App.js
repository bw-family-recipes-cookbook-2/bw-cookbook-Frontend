import React from "react";
import "./App.css";
//components
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";

import RecipeCard from "./components/Card";
import NavBar from "./components/NavBar";
import RecipeForm from "./components/RecipeForm"


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
          </Route>

          <Route exact path="/register" component={Register}/>
            
          

          <Route exact path="/navbar">
            <NavBar />
          </Route>
          <Route exact path="/card">
            <RecipeCard />
          </Route>

          <Route exact path="/rform">
            <RecipeForm />
          </Route>

          <PrivateRoute exact path="/dashboard">
            <Dashboard />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
