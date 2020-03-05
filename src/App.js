import React from "react";
import "./App.css";
//components
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";

import RecipeCard from "./components/Card";
import NavBar from "./components/NavBar";
import RecipeForm from "./components/RecipeForm"
import SecretRecipe from './components/SecretRecipe'


//router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
   
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

          <Route path='/recipe/:id' component={SecretRecipe}/>

          <PrivateRoute exact path="/dashboard">
            <Dashboard />
          </PrivateRoute>
        </Switch>
      </div>
    
  );
}

export default App;
