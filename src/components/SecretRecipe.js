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

const useStyles = makeStyles({
    flex: {
      display: "flex",
      flexWrap: "wrap",
    },
    root: {
      // width:"30%",
    },
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

const handleEdit = e => {
    e.preventDefault();
    AxiosWithAuth()
    .put(`api/recipes/${id}`)
    .then(() => {
        history.push('/dashboard')
    })
    .catch(err => {
        console.log(err)
    })
};





   
    return(
        <div>
            <NavBar/>
<Grid container spacing={2}>
      <Grid item xs={12}></Grid>
      <Grid item xs>
        <Card className={classes.root}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              Title: {props.location.secretRecipe.name} 
            </Typography>
            <Typography variant="h5" component="h2">
              Source: {props.location.secretRecipe.source}
            </Typography>
            {/* <Typography className={classes.pos} color="textSecondary">
              Ingredients: {props.rec.ingredients}
            </Typography> */}
            {/* <Typography variant="body2" component="p">
              Instructions: {props.rec.instructions}
            </Typography> */}
            <Typography variant="body2" component="p">
              Categories: {props.location.secretRecipe.category}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="medium">Edit</Button>
            <Link to='/dashboard'>
            <Button size="medium" onClick={handleDelete}>Delete</Button>
            </Link>
          </CardActions>

          <CardActions>
        
          </CardActions>
        </Card>
      </Grid>
    </Grid>
        </div>
    )
}

export default SecretRecipe;