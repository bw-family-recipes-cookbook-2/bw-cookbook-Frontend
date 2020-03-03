import AxiosWithAuth from "../utils/AxiosWithAuth";

export const CREATE_RECIPE_START = "CREATE_RECIPE_START";
export const CREATE_RECIPE_SUCCESS = "CREATE_EXERCISE_SUCCESS";
export const CREATE_RECIPE_FAILURE = "CREATE_EXERCISE_FAILURE";

export const createRecipe = recipe => dispatch => {
    dispatch({ type: CREATE_RECIPE_START });
    console.log("checking recipe", recipe);
    AxiosWithAuth()
      .post(`api/recipe/user/6`, recipe)
      .then(res => {
        console.log("create post", res.data);
        dispatch({ type: CREATE_RECIPE_SUCCESS, payload: res.data });
      })
      .catch(err => {
        console.error(err);
        dispatch({ type: CREATE_RECIPE_FAILURE, payload: err });
      });
  };
