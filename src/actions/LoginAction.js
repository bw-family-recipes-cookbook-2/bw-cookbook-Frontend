import axiosWithAuth from '../utils/AxiosWithAuth';

export const FETCH_LOGIN_START = 'FETCH_LOGIN_START';
export const FETCH_LOGIN_SUCCESS = "FETCH_LOGIN_SUCCESS";
export const FETCH_LOGIN_FAIL = 'FETCH_LOGIN_FAIL';

export const getLogin = info => dispatch => {
    dispatch({ type: FETCH_LOGIN_START });
    axiosWithAuth()
                .post('api/auth/login', info)
                .then(res => {
                    dispatch ({type: FETCH_LOGIN_SUCCESS, payload: res.data});
                    localStorage.setItem('this is the token', res.data.token);
                    // localStorage.setItem('this is the messge', res.data.message);
                    console.log('this is from loginAction', res.data);
})
                .catch(err => dispatch({ type: FETCH_LOGIN_FAIL, payload: err}));
};