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


export default function RecipeCard({e, props}) {
  const classes = useStyles();
  const [secretRecipe, setSecretRecipe] = useState({})
  const history = useHistory();
  const {id} = useParams ();
  console.log('this is props from caard', e);
  // useEffect(() => {
  //   AxiosWithAuth()

  // })
  const handleDelete = event => {
    // event.preventDefault();
    const userId  = localStorage.getItem("user_id")
  // const idNum = parseInt(userId);  
    AxiosWithAuth()
    .delete(`api/recipes/${e.id}`)
    .then(() => {
      history.push('/dashboard');
    })
    .catch(err => {
      console.log('this is the error for delete', err)
    })
  }


  return (
    <Grid container spacing={2}>
      <Grid item xs={12}></Grid>
      <Grid item xs>
        <Card className={classes.root}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              Title: {e.name}
            </Typography>
            <Typography variant="h5" component="h2">
              Source: {e.source}
            </Typography>
            {/* <Typography className={classes.pos} color="textSecondary">
              Ingredients: {props.rec.ingredients}
            </Typography> */}
            {/* <Typography variant="body2" component="p">
              Instructions: {props.rec.instructions}
            </Typography> */}
            <Typography variant="body2" component="p">
              Categories: {e.category}
            </Typography>
          </CardContent>
          {/* <CardActions>
            <Button size="medium">Edit</Button>
          </CardActions> */}
          <CardActions>
            {/* <Link to={`/recipe/${e.id}`}>
            <Button size="medium">Make changes</Button>
            </Link> */}
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}
