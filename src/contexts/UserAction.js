import axios from "axios";

// Set Loading
export const setLoading = (dispatch, status) =>
  dispatch({ type: "SET_LOADING", payload: status });

// Set Error
export const setError = (dispatch, error) =>
  dispatch({
    type: "SET_ERROR",
    payload: { error: error.status, message: error.message }
  });

// Set User (get user info)
export const getUser = async dispatch => {
  setLoading(dispatch, true);

  // do fetch
  await axios
    .get(`http://localhost:5006/api/contact/`)
    .then(res => {
      const result = res.data;

      // set user info
      dispatch({
        type: "SET_USER",
        payload: result
      });
    })
    .catch(error => {
      const result = error;

      // set error if has any
      dispatch({
        type: "SET_ERROR",
        payload: {
          error: true,
          message: result
        }
      });
    });
};

export const postuser = async (user) => {
  const config = {
    headers: {
      'Content-type': 'application/json'
    }
  }

  try {

    const res = await axios.post(`http://localhost:5006/api/contact/`, user, config);
    console.log(res)

  } catch (error) {
    const result = error;
    console.log(error );

  }
}