import { UPDATE_TITLE } from "../actions/actions";
import {
  FETCH_POKEMON_START,
  FETCH_POKEMON_SUCCESS,
  FETCH_POKEMON_FAIL
} from "../actions/LoginAction";

const initialState = {
  title: "Title from Redux store",

  pokemon: [],
  error: "",
  isFetching: false
};
export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TITLE:
      return {
        ...state,
        title: action.payload
      };
    case FETCH_POKEMON_START:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case FETCH_POKEMON_SUCCESS:
      return {
        ...state,
        pokemon: action.payload,
        isFetching: false,
        error: ""
      };
    case FETCH_POKEMON_FAIL:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
