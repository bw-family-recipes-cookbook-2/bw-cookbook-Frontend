import React, {useState} from "react";
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import {register} from '../actions/RegisterAction';

const Register = props => {
const history = useHistory();
const [user, setUser] = useState ({
    username:'',
    password:'',
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
};

  return (
    <div>
      
    </div>
  );
};

const mapStateToProps = state => {
    return state;
};
export default connect(mapStateToProps, {register})(Register);
