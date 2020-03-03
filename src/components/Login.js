import React, {useState} from "react";
import axiosWithAuth from "../utils/AxiosWithAuth";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

import {connect} from 'react-redux';
import {getLogin} from '../actions/LoginAction';

const Login = props => {
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
      props.getLogin(user)
        history.push("/dashboard");
      };
      


  return (
    <div>
    </div>
  );
};
const mapStateToProps = state => {
    return state;
};

export default connect(mapStateToProps, {getLogin})(Login);
