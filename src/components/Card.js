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
  // root: {
  //   flexGrow: 1,
  // },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
 
  pos: {
    marginBottom: 5,
  },
  card:{
    margin:50
  },
centerLink:{
  display:"flex",
  justifyContent:'center'
},
link:{
  textDecoration:'none'
},
button:{
  border:'1px solid black',
  backgroundColor:'white'
}
});


export default function RecipeCard({e}) {
  const classes = useStyles();



  return (
    
    
      <Grid item xs={12} sm={6} md={4} >
        
        <Card className={classes.card}>
          
          <CardContent>
            <Typography variant="h2" component="h2" className={classes.pos} gutterBottom>
              {e.name}
            </Typography>
            <Typography variant="h5" component="h3" className={classes.pos} >
              Source: {e.source}
            </Typography>
            <Typography variant="h5" component="h3" className={classes.pos} >
              Ingredients: {e.ingredients}
            </Typography>
            <Typography variant="h5" component="h5" className={classes.pos}>
              Instructions: {e.instructions}
            </Typography>
            <Typography variant="h5" component="h5">
              Categories: {e.category}
            </Typography>
          </CardContent>
          <div className={classes.centerLink}>
          <CardActions>
            <Link className={classes.link} to={{
              pathname: `/recipe/${e.id}`,
              secretRecipe: e
            }} >
            <Button className={classes.button} size="medium">Make changes</Button>
            </Link>
          </CardActions>
          </div>
        </Card>
        </Grid>
    
    
  );
}
