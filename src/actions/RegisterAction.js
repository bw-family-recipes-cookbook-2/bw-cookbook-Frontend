import AxiosWithAuth from '../utils/AxiosWithAuth';

export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';

export const register = info => {
    return dispatch => {
        dispatch({ type: REGISTER_START});
        console.log(info);
        AxiosWithAuth()
        .post('api/auth/register', info)
        .then(res => {
            console.log('this is sign up', res);
            dispatch({ type: REGISTER_SUCCESS, payload: res.data});
            console.log('this is the response of register', res);
        })
        .catch(err => {
            dispatch({ type:REGISTER_FAIL, payload: err})
        })
    }
}