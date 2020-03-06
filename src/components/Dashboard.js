import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import NavBar from "./NavBar";
import Card from "./Card";
import AxiosWithAuth from "../utils/AxiosWithAuth";

import { connect } from "react-redux";
import { fetchRecipes } from "../actions/FetchRecipes";

import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles({
  cards: {
    display: "flex",
    flexWrap:'wrap',
    justifyContent:'space-evenly'
    // justifyContent: "center",
  },
title:{
  fontSize:60
},
body:{
  backgroundColor:'#e0f7fa'
},
button:{
  border:'1px solid black',
  backgroundColor:'white'
}
});

const Dashboard = () => {
  const classes = useStyles();

  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const userId = localStorage.getItem("user_id");
    const idNum = parseInt(userId);
    console.log(idNum);
    AxiosWithAuth()
      .get(`api/recipes/user/${idNum}`)
      .then(res => {
        console.log("this is the recipes", res.data);
        setRecipes(res.data);
        const recipeResults = res.data.filter(e =>
          e.name.toLowerCase().includes(query.toLowerCase())
        );
        setRecipes(recipeResults);
      })
      .catch(err => {
        console.log("this is the show recipes error", err);
      });
  }, [query]);

  const handleInputChange = e => {
    setQuery(e.target.value);
  };

  return (
    <div className={classes.body}>
      <NavBar handleInputChange={handleInputChange} query={query} />

      <div>
        <h1 className={classes.title}>Secret Family Recipes</h1>

        <Button className={classes.button} href="/rform/">Add Recipe</Button>
        <div className={classes.cards}>
          {recipes.map(e => (
            <Card e={e} key={e.id} />
          ))}
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, { fetchRecipes })(Dashboard);
