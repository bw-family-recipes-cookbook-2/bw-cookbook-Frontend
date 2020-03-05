import {
  CREATE_RECIPE_START,
  CREATE_RECIPE_FAILURE,
  CREATE_RECIPE_SUCCESS
} from "../actions/CreateRecipe";

import {
  FETCH_LOGIN_START,
  FETCH_LOGIN_SUCCESS,
  FETCH_LOGIN_FAIL
} from "../actions/LoginAction";

import {
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from "../actions/RegisterAction";
import { 
  FETCH_RECIPE_START,
  FETCH_RECIPE_SUCCESS,
  FETCH_RECIPE_FAIL
} from "../actions/FetchRecipes";

const initialState = {

  userInfo: {
    username: "",
    password: "",
    email: "",
    id: 0
  },
  userRecipe: [],
  isLoading: false,
  recipes: []
};
export const reducers = (state = initialState, action) => {
  switch (action.type) {
    //login
    case FETCH_LOGIN_START:
      return {
        ...state,
        // isFetching: true,
        isLoading: true,
        error: ""
      };
    case FETCH_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userInfo: action.payload,
        // isFetching: false,
        error: ""
      };
    case FETCH_LOGIN_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    //register
    case REGISTER_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userInfo: action.payload,
        error: ""
      };
    case REGISTER_FAIL:
      return {
        ...state,
        isLoading: false,
        error: ""
      };
    case CREATE_RECIPE_START:
      return {
        ...state,
        isLoading: true
      };
    case CREATE_RECIPE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userRecipe: action.payload
      };
    case CREATE_RECIPE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
      //get recipes
      case FETCH_RECIPE_START: 
      return{
          ...state,
          isLoading: true,

      };
      case FETCH_RECIPE_SUCCESS:
        return{
            ...state,
            isLoading: false,
            userRecipe: action.payload
        };
        case FETCH_RECIPE_FAIL:
          return {
            ...state,
            isLoading: false,
            error: action.payload
          };
    default:
      return state;
  }
};
