const reducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCHALL":
      console.log(state);
      return {
        ...state,
        books: action.payload,
      };
    case "NEWPOST":
      return { ...state, books: action.payload };
    default:
      return state;
  }
};

export default reducer;
