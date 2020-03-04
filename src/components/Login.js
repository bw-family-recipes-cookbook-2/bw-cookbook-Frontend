import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Image from "../Images/BackgroundImg.jpg";

// import axiosWithAuth from "../utils/AxiosWithAuth";
import { useHistory } from "react-router-dom";
// import { Link } from "react-router-dom";
//import { connect } from "react-redux";
//import { getLogin } from "../actions/LoginAction";

// import { withFormik, Form, Field } from "formik";

// function LoginForm() {
//   return (
//     <Form>
//       <Field type="username" name="username" placeholder="Username" />
//       <Field type="password" name="password" placeholder="Password" />
//       <button>Sign in</button>
//     </Form>
//   );
// }

// const FormikLoginForm = withFormik({
//   mapPropsToValues({ username, password }) {
//     return {
//       username: username || "",
//       password: password || ""
//     };
//   },

//   handleSubmit(values) {
//     console.log(values);
//     //THIS IS WHERE YOU DO YOUR FORM SUBMISSION CODE... HTTP REQUESTS, ETC.
//   }
// })(LoginForm);

// export default FormikLoginForm;


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © BWFRC2 2020"}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  flex: {
    display: "flex",
    justifyContent: "center"
  },
  background: {
    backgroundImage: `url(${Image})`,
    height: "100vh",
    width: "50%",
    backgroundSize: "cover"
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const Login = props => {
  const classes = useStyles();
  const history = useHistory();
  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  const handleChanges = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.getLogin(user);
    history.push("/dashboard");
  };

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
              Sign in
            </Typography>
            <form className={classes.form} noValidate >
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="userName"
                label="User Name"
                name="userName"
                autoComplete="uname"
                value={user.username}
                onChange={handleChanges}
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={user.password}
                 onChange={handleChanges}
                autoComplete="current-password"
              />
              <Button 
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign In
              </Button>
              <Grid container justify="center">
                <Grid item>
                  <Link href="/register" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
          <Box mt={8}>
            <Copyright />
          </Box>
        </Container>
      </div>
    </div>
  );

 const mapStateToProps = state => {
   return state;
 };

  export default connect(mapStateToProps, { getLogin })(Login);
 }