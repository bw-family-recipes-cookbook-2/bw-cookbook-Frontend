import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { findByLabelText } from '@testing-library/react';
import NavBar from "./NavBar"


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


export default function RecipeForm() {
  const classes = useStyles();
  

  return (
    <div>
        <NavBar />    
        <div className={classes.root}>
            <form >
                <TextField 
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="title"
                    label="Title"
                    name="title"
                    autoComplete="title"
                    autoFocus
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
                />
                <TextField className={classes.tallText}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="ingredients"
                    label="Ingredients"
                    name="ingredients"
                    autoComplete="ingredients"
                    autoFocus
                />
                <TextField 
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="instructions"
                    label="Instructions"
                    name="instructions"
                    autoComplete="instructions"
                    autoFocus
                />
                <TextField 
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="category"
                    label="Category ie. dinner, chicken, grandma"
                    name="category"
                    autoComplete="category"
                    autoFocus
                />

            </form>
            <Button> Update Recipe </Button>
        </div>
    </div>
  );
}



