import axiosWithAuth from '../utils/AxiosWithAuth';

export const FETCH_POKEMON_START = 'FETCH_POKEMON_START';
export const FETCH_POKEMON_SUCCESS = "FETCH_POKEMON_SUCCESS";
export const FETCH_POKEMON_FAIL = 'FETCH_POKEMON_FAIL';

export const getPokemon = () => dispatch => {
    dispatch({ type: FETCH_POKEMON_START });
    axiosWithAuth()
                .get('pokemon/')
                .then(res => 
                    dispatch ({type: FETCH_POKEMON_SUCCESS, payload: res.data.results})
                )
                .catch(err => dispatch({ type: FETCH_POKEMON_FAIL, payload: err}));
};