import React, {useState, useEffect} from 'react';
import {Link, useParams, useHistory } from "react-router-dom";
import AxiosWithAuth from '../utils/AxiosWithAuth';
import NavBar from '../components/NavBar';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import Container from "@material-ui/core/Container";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
    flex: {
      display: "flex",
      justifyContent: "center",
    },
    // root: {
    //   width:"80%",
    // },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  
  });



const SecretRecipe =  (props) => {
    const classes = useStyles();
    const history = useHistory();
    const {id} = useParams();

    const initialValue = {
      name: `${props.location.secretRecipe.name} `,
      source: `${props.location.secretRecipe.source}`,
      category: `${props.location.secretRecipe.category}`,
      instructions: `${props.location.secretRecipe.instructions}`,
      ingredients: `${props.location.secretRecipe.ingredients}`,
      };

console.log("inital value", initialValue);

console.log('this is props', props)

  const handleDelete = event => {
    event.preventDefault();
//     const userId  = localStorage.getItem("user_id")
//   const idNum = parseInt(userId);  
    AxiosWithAuth()
    .delete(`api/recipes/${id}`)
    .then(() => {
      history.push('/dashboard');
    })
    .catch(err => {
      console.log('this is the error for delete', err)
    })
   
};

const handleEdit = event => {
    event.preventDefault();
    AxiosWithAuth()
    .put(`api/recipes/${id}`, editRecipe)
    .then(() => {
        history.push('/dashboard')
    })
    .catch(err => {
        console.log(err)
    })
};



const [editRecipe, setEditRecipe] = useState(initialValue

  // name: `${props.location.secretRecipe.name} `,
  // source: `${props.location.secretRecipe.source}`,
  // category: `${props.location.secretRecipe.category}`,
  // instructions: `${props.location.secretRecipe.instructions}`,
  // ingredients: `${props.location.secretRecipe.ingredients}`,
  // user_id: localStorage.getItem('user_id')
  // instructions: "",
);
console.log(editRecipe)

const handleChange = event => {
  setEditRecipe({ ...editRecipe, [event.target.name]: event.target.value });
  console.log("this is the edited recipe",editRecipe)
};


//  useEffect((rec)=> {
//   isInEditMode: false
//  }, [])
   
    return(
      <div>
      <NavBar/>
      <div >  
        <Grid container spacing={2} direction="row" justify="center"  >
          <Grid item xs={12} sm={6}>
            <form >
              <TextField 
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="name"
                label="Title" 
                // defaultValue={props.location.secretRecipe.name}
                name="name"
                autoComplete="name"
                autoFocus
                value={editRecipe.name || ""}
                onChange={handleChange}
              />
              <TextField 
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="name"
                label="Source"
                // defaultValue={props.location.secretRecipe.source} 
                name="name"
                autoComplete="name"
                autoFocus
                value={editRecipe.source || ""}
                onChange={handleChange}
              />
              <TextField 
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="name"
                label="Ingredients"
                // defaultValue={props.location.secretRecipe.ingredients}
                name="name"
                autoComplete="name"
                autoFocus
                value={editRecipe.ingredients || ""}
                onChange={handleChange}
              />
              <TextField 
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="name"
                label="Instructions"
                // defaultValue={props.location.secretRecipe.instructions} 
                name="name"
                autoComplete="name"
                autoFocus
                value={editRecipe.instructions || ""}
                onChange={handleChange}
              />
              <TextField 
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="name"
                label="Category"
                // defaultValue={props.location.secretRecipe.category} 
                name="name"
                autoComplete="name"
                autoFocus
                value={editRecipe.category || ""}
                onChange={handleChange}
              />
            <Button size="medium" onClick={handleEdit}>Edit</Button>
            <Link to='/dashboard'>
            <Button size="medium" onClick={handleDelete}>Delete</Button>
            </Link>
        </form>
      </Grid>
    </Grid>
        </div>
        </div>
    )
}

export default SecretRecipe;