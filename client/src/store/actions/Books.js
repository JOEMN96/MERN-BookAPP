import axios from "axios";
const url = "http://localhost:4000/books";
export const fetchPostASync = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(url);
      if (data) {
        dispatch({ type: "FETCHALL", payload: data });
      }
    } catch (e) {
      console.log(e.message);
      dispatch({ type: "FETCHALL", payload: [] });
    }
  };
};

export const newPost = (newPost) => {
  return async (dispatch) => {
    console.log(newPost);
    try {
      const { data } = await axios.post(url, newPost);
      dispatch({ type: "NEWPOST", payload: data });
    } catch (error) {
      console.log(error);
    }
  };
};
