import axios from "axios";

export const fetchPostASync = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("http://localhost:4000/books");
      dispatch({ type: "FETCHALL", payload: data });
    } catch (e) {
      console.log(e.message);
    }
  };
};
