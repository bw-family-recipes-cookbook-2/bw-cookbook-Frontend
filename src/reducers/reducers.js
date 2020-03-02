import { UPDATE_TITLE } from "../actions/actions";
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

const initialState = {
  title: "THIS IS THE DASHBOARD",

  userInfo: {
    username: "",
    password: "",
    id: 0
  }
};
export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TITLE:
      return {
        ...state,
        title: action.payload
      };
    //login
    case FETCH_LOGIN_START:
      return {
        ...state,
        // isFetching: true,
        isLoading:true,
        error: ""
      };
    case FETCH_LOGIN_SUCCESS:
      return {
        ...state,
        userInfo: action.payload,
        isLoading: true,
        // isFetching: false,
        error: ""
      };
    case FETCH_LOGIN_FAIL:
      return {
        ...state,
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
        isLoading: true,
        userInfo: action.payload,
        error: ""
      };
    case REGISTER_FAIL:
      return {
        ...state,
        isLoading: false,
        error: ""
      };
    default:
      return state;
  }
};
