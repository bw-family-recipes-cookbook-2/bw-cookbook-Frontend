import React from 'react';
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


export default function RecipeCard(props) {
  const classes = useStyles();
  

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}></Grid>
      <Grid item xs>
        <Card className={classes.root}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              Title: {props.rec.name}
            </Typography>
            <Typography variant="h5" component="h2">
              Source: {props.rec.source}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              Ingredients: {props.rec.ingredients}
            </Typography>
            <Typography variant="body2" component="p">
              Instructions: {props.rec.instructions}
            </Typography>
            <Typography variant="body2" component="p">
              Categories: {props.rec.category}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="medium">Edit</Button>
          </CardActions>
          <CardActions>
            <Button size="medium">Delete</Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}
