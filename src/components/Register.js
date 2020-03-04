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
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";



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


  const Register = ({props, errors, touched}) => {

    const classes = useStyles();
    const history = useHistory();
    const [user, setUser] = useState ({
        username:'',
        password:'',
        email:'',
    });
    console.log('this is user', user)
    ;
    const handleSubmit = e => {
        e.preventDefault();
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
            <Form className={classes.form} onSubmit={handleSubmit} noValidate>
            <Grid container spacing={2}>
                
                <Grid item xs={12}>
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="username"
                    label="username"
                    name="username"
                    value={user.username}
                    onChange={handleChanges}
                    autoComplete="uname"

                />
                </Grid>
                <Grid item xs={12}>
                <div>
                {touched.email && errors.email && <p>{errors.email}</p>}
                <Field
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="email"
                    name="email"
                    autoComplete="email"
                    value={user.email}
                    onChange={handleChanges}
                />
                </div>
                </Grid>
                <Grid item xs={12}>
                <div>
                {touched.password && errors.password && <p>{errors.password}</p>}
                <Field
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="password"
                    type="password"
                    id="password"
                    value={user.password}
                    onChange={handleChanges}
                    autoComplete="current-password"
                />
                </div>
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
            </Form>
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


const FormikLoginForm = withFormik({
  mapPropsToValues({ username, email, password }) {
    return {
      username: username || "",
      email: email || "",
      password: password || ""
    };
  },

  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email()
      .required(),
    password: Yup.string()
      .min(6, "Password must be 6 characters or longer")
      .required("Password is required")
  }),

})(Register)


export default connect(mapStateToProps, {register})(FormikLoginForm);