import AxiosWithAuth from "../utils/AxiosWithAuth";

export const CREATE_RECIPE_START = "CREATE_RECIPE_START";
export const CREATE_RECIPE_SUCCESS = "CREATE_RECIPE_SUCCESS";
export const CREATE_RECIPE_FAILURE = "CREATE_RECIPE_FAILURE";

export const createRecipe = id => dispatch => {
    dispatch({ type: CREATE_RECIPE_START });
    console.log("checking recipe", id);
    AxiosWithAuth()
      .post(`api/recipes/user/2`,id)
      .then(res => {
        console.log("create post", res.data);
        dispatch({ type: CREATE_RECIPE_SUCCESS, payload: res.data });
      })
      .catch(err => {
        console.error(err);
        dispatch({ type: CREATE_RECIPE_FAILURE, payload: err });
      });
  };
