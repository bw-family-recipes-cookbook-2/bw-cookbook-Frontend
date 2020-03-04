import AxiosWithAuth from "../utils/AxiosWithAuth";

export const CREATE_RECIPE_START = "CREATE_RECIPE_START";
export const CREATE_RECIPE_SUCCESS = "CREATE_RECIPE_SUCCESS";
export const CREATE_RECIPE_FAILURE = "CREATE_RECIPE_FAILURE";

export const createRecipe = id => dispatch => {
  const userId  = localStorage.getItem("user_id")
  const idNum = parseInt(userId);  
  console.log(idNum);
    dispatch({ type: CREATE_RECIPE_START });
    // console.log("checking recipe", id);
    // console.log(typeof(idNum))
    AxiosWithAuth()
      .post(`api/recipes/user/${idNum}`, id)
      .then(res => {
        console.log("create post", res.data);
        dispatch({ type: CREATE_RECIPE_SUCCESS, payload: res.data });
      })
      .catch(err => {
        console.error(err);
        dispatch({ type: CREATE_RECIPE_FAILURE, payload: err });
      });
  };
