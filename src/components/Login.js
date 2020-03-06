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

import AxiosWithAuth from "../utils/AxiosWithAuth";
import { useHistory } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { connect } from "react-redux";
// import { getLogin } from "../actions/LoginAction";

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
    background: `url(${Image})no-repeat center center`,
    height: "100vh",
    width: "100%",
    backgroundSize: "cover",

  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    "&:hover": {
      backgroundColor: "#e0f7fa",
    color:'black'
    }
  },
  username:{
color:'red',
  },
}));

const Login = props => {
  const history = useHistory();
  const classes = useStyles();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    email: ""
  });
  const handleChanges = e => {
    let name = e.target.name;
    setCredentials({ ...credentials, [name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // const id = localStorage.getItem('user_id');
    AxiosWithAuth()
      .post("api/auth/login", credentials)
      .then(res => {
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("message", res.data.message);
        localStorage.setItem("user_id", res.data.user_id);

        history.push("/dashboard");
      })
      .catch(err => console.log(err));
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
            <form className={classes.form} onSubmit={handleSubmit}>
              <TextField className={classes.username}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                label="username"
                name="username"
                autoComplete="uname"
                value={credentials.username}
                onChange={handleChanges}
                autoFocus
              />
              {/* <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="email"
                name="email"
                autoComplete="email"
                value={credentials.email}
                onChange={handleChanges}
                autoFocus
              /> */}
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={credentials.password}
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
};
// const mapStateToProps = state => {
//   return state;
// };

// export default connect(mapStateToProps, { getLogin })(Login);
export default Login;
