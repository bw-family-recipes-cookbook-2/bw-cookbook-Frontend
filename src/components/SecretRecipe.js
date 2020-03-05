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

    // const initialValue = {
    //   name: `${props.location.secretRecipe.name} `,
    //   source: `${props.location.secretRecipe.source}`,
    //   category: `${props.location.secretRecipe.category}`,
    //   instructions: `${props.location.secretRecipe.instructions}`,
    //   ingredients: `${props.location.secretRecipe.ingredients}`,
    //   };

    const user_id = localStorage.getItem('user_id');
    const idNum = parseInt(id);
    const [recipe, setRecipe] = useState({
        id: "",
        name: "",
        source: "",
        category: "",
        instructions: "",
        ingredients: "",
        user_id: idNum
      }); 

      useEffect(()=> {
        AxiosWithAuth()
        .get(`api/recipes/${id}`)
        .then(res => {
            console.log(res)
            setRecipe(res.data)
          })
        .catch(err => console.log(err))
    }, [])


// console.log("inital value", initialValue);

// console.log('this is props', props)

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
    .put(`api/recipes/${id}`, recipe)
    .then(() => {
        history.push('/dashboard')
    })
    .catch(err => {
        console.log(err)
    })
};



// const [editRecipe, setEditRecipe] = useState(initialValue

  // name: `${props.location.secretRecipe.name} `,
  // source: `${props.location.secretRecipe.source}`,
  // category: `${props.location.secretRecipe.category}`,
  // instructions: `${props.location.secretRecipe.instructions}`,
  // ingredients: `${props.location.secretRecipe.ingredients}`,
  // user_id: localStorage.getItem('user_id')
  // instructions: "",
// );
// console.log(editRecipe)

const handleChange = event => {
  setRecipe({ ...recipe, [event.target.name]: event.target.value });
  console.log("this is the edited recipe",recipe)
};

// const handleChange = e => {
//   setRecipe({
//       recipe,
//       [e.target.name]: e.target.value
//     });
//   }


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
                type="text"
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
                value={recipe.name}
                onChange={handleChange}
              />
              <TextField 
                type="text"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="source"
                label="Source"
                // defaultValue={props.location.secretRecipe.source} 
                name="source"
                autoComplete="source"
                autoFocus
                value={recipe.source}
                onChange={handleChange}
              />
              <TextField 
                type="text"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="ingredients"
                label="Ingredients"
                // defaultValue={props.location.secretRecipe.ingredients}
                name="ingredients"
                autoComplete="ingredients"
                autoFocus
                value={recipe.ingredients}
                onChange={handleChange}
              />
              <TextField 
                type="text"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="instructions"
                label="Instructions"
                // defaultValue={props.location.secretRecipe.instructions} 
                name="instructions"
                autoComplete="instructions"
                autoFocus
                value={recipe.instructions}
                onChange={handleChange}
              />
              <TextField 
                type="text"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="category"
                label="Category"
                // defaultValue={props.location.secretRecipe.category} 
                name="category"
                autoComplete="category"
                autoFocus
                value={recipe.category}
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