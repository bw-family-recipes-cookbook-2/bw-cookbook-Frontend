import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import {register} from '../actions/RegisterAction';

import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Image from '../Images/BackgroundImg.jpg';
import {useForm} from 'react-hook-form';


function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © BWFRC2 2020'}
      </Typography>
    );
  }
  
  const useStyles = makeStyles(theme => ({
    flex: {
        display: "flex",
        justifyContent: "center",
    },
    background: {
        backgroundImage:`url(${Image})`,
        height: "100vh",
        width: "50%",
        backgroundSize: "cover",
    },
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', 
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      backgroundColor: "green"
    },

  }));


  const Register = props => {
    console.log("props",props);
    const {register, handleSubmit, errors} = useForm();
    const classes = useStyles();
    const history = useHistory();
    const [user, setUser] = useState ({
        username:'',
        password:'',
        email:'',
    });
    console.log('this is user', user)
    ;
    const handleSubmit1 = e => {
        // e.preventDefault();
        props.register(user);
        history.push('/');
    };
    
    const handleChanges = e => {
        e.preventDefault();
        setUser({
            ...user,
            [e.target.name] : e.target.value
        });
    }
  return (
    <div className={classes.flex}>
    <div className={classes.background}>
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
            Sign up
            </Typography>
            <form className={classes.form} onSubmit={handleSubmit(handleSubmit1)}>
            <Grid container spacing={2}>
                
                <Grid item xs={12}>
                <input
                    variant="outlined"
                    
                    fullWidth
                    id="username"
                    label="username"
                    name="username"
                    value={user.username}
                    onChange={handleChanges}
                    autoComplete="uname"
                    ref={register({required: true, minLength: 2})}
                />
                {errors.username && errors.username.type === "required" && <p>Username Required</p>}
                {errors.username && errors.username.type === "minLength" && <p>Length of 2 needed</p>}
                </Grid>
                <Grid item xs={12}>
                <input
                    variant="outlined"
                    
                    fullWidth
                    id="email"
                    label="email"
                    name="email"
                    autoComplete="email"
                    value={user.email}
                    onChange={handleChanges}
                    ref={register({required: true})}
                />
                </Grid>
                <Grid item xs={12}>
                <input
                    variant="outlined"
                    
                    fullWidth
                    name="password"
                    label="password"
                    type="password"
                    id="password"
                    value={user.password}
                    onChange={handleChanges}
                    autoComplete="current-password"
                    ref={register({required: true})}
                />
                </Grid>

            </Grid>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
            >
                Sign Up
            </Button>
            <Grid container justify="center">
                <Grid item>
                <Link href="/" variant="body2" >
                    Already have an account? Sign in
                </Link>
                </Grid>
            </Grid>
            </form>
        </div>
        <Box mt={5}>
            <Copyright />
        </Box>
        </Container>
    </div>
    </div>
  );


};
const mapStateToProps = state => {
    return state;
};
export default connect(mapStateToProps, {register})(Register);