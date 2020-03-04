import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import NavBar from "./NavBar";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { createRecipe } from "../actions/CreateRecipe"



const useStyles = makeStyles({
  root: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    marginTop: "10%",
  },

  tallText:{
    height: 50,
  },
});


const RecipeForm= (props) => {
  const classes = useStyles();
  const history = useHistory();

  const [newRecipe, setNewRecipe] = useState({
      name: "",
      source: "",
      category: "",
      // user_id: localStorage.getItem('user_id')
      // instructions: "",
});

    const handleChange = event => {
        setNewRecipe({ ...newRecipe, [event.target.name]: event.target.value });
        console.log("this is the new recipe",newRecipe)
    };

    const submitRecipe = event => {
        event.preventDefault();
        props.createRecipe(newRecipe);
        history.push("/dashboard");
        console.log("submit",newRecipe);
        
      };
  

  return (
    <div>
        <NavBar />    
        <div className={classes.root}>
            <form onSubmit={submitRecipe}>
                <TextField 
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Title"
                    name="name"
                    autoComplete="name"
                    autoFocus
                    value={newRecipe.name}
                    onChange={handleChange}
                />
                <TextField 
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="source"
                    label="Source"
                    name="source"
                    autoComplete="source"
                    autoFocus
                    value={newRecipe.source}
                    onChange={handleChange}
                />
                {/* <TextField className={classes.tallText}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="ingredients"
                    label="Ingredients"
                    name="ingredients"
                    autoComplete="ingredients"
                    autoFocus
                /> */}
                {/* <TextField 
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="instructions"
                    label="Instructions"
                    name="instructions"
                    autoComplete="instructions"
                    autoFocus
                    value={newRecipe.instructions}
                    onChange={handleChange}
                /> */}
                <TextField 
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="category"
                    label="Category ie. dinner, chicken, grandma"
                    name="category"
                    autoComplete="category"
                    autoFocus
                    value={newRecipe.category}
                    onChange={handleChange}
                />
                <Button type="submit" > Add Recipe </Button>
            </form>
            
        </div>
    </div>
  );
}

const mapStateToProps = state => {
    return state;
  };
  export default connect(mapStateToProps, { createRecipe })(RecipeForm);



