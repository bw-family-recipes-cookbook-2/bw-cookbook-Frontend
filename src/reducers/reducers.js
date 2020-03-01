import {UPDATE_TITLE} from '../actions/actions';

const initialState = {
    title: 'Title from Redux store'
  };

  function reducer(state = initialState, action) {
    switch(action.type) {
        case UPDATE_TITLE:
      return {
        ...state,
        title: action.payload
      }
      default:
        return state;
    }
  }
  
  export default reducer;