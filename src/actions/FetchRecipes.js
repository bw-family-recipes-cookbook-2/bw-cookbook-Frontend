import AxiosWithAuth from '../utils/AxiosWithAuth';

export const FETCH_RECIPE_START = 'FETCH_RECIPE_START';
export const FETCH_RECIPE_SUCCESS = 'FETCH_RECIPE_SUCCESS';
export const FETCH_RECIPE_FAIL = 'FETCH_RECIPE_FAIL';

export const fetchRecipes = id => dispatch => {
    dispatch({type: FETCH_RECIPE_START});
    AxiosWithAuth()
    .get(`api/recipes`)
    .then(res => {
        dispatch ({type: FETCH_RECIPE_SUCCESS, payload: res.data});
    })
    .catch(err => dispatch ({ type: FETCH_RECIPE_FAIL, payload: err}))
}