import React, {useState, useEffect} from 'react';
import { Link, useHistory, useParams } from "react-router-dom";
import AxiosWithAuth from '../utils/AxiosWithAuth';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from "@material-ui/core/Container";
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles({
  flex: {
    display: "flex",
    justifyContent: "center",
  },
  root: {
    flexGrow: 1,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  // title: {
  //   fontSize: 14,
  // },
  pos: {
    marginBottom: 12,
  },

});


export default function RecipeCard({e}) {
  const classes = useStyles();

  // const history = useHistory();
  // const {id} = useParams ();
  // console.log('this is props from caard', e);
  // useEffect(() => {
  //   AxiosWithAuth()

  // })
  // const handleDelete = event => {
  //   // event.preventDefault();
  //   const userId  = localStorage.getItem("user_id")
  // // const idNum = parseInt(userId);  
  //   AxiosWithAuth()
  //   .delete(`api/recipes/${e.id}`)
  //   .then(() => {
  //     history.push('/dashboard');
  //   })
  //   .catch(err => {
  //     console.log('this is the error for delete', err)
  //   })
  // }


  return (
    
    <Grid container spacing={10} direction="row" justify="center" >
      <Grid item xs={12}sm={6} >
        <Card >
          <CardContent>
            <Typography variant="h3" component="h2" gutterBottom>
              Title: {e.name}
            </Typography>
            <Typography variant="h5" component="h3" color="textSecondary">
              Source: {e.source}
            </Typography>
            <Typography variant="h5" component="h3" className={classes.pos} color="textSecondary">
              Ingredients: {e.ingredients}
            </Typography>
            <Typography variant="h6" component="p" className={classes.pos}>
              Instructions: {e.instructions}
            </Typography>
            <Typography variant="h6" component="p">
              Categories: {e.category}
            </Typography>
          </CardContent>
          {/* <CardActions>
            <Button size="medium">Edit</Button>
          </CardActions> */}
          <CardActions>
            <Link to={{
              pathname: `/recipe/${e.id}`,
              secretRecipe: e
            }} >
            <Button size="medium">Make changes</Button>
            </Link>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
    
  );
}
