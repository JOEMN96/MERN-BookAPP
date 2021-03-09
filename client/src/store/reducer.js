const reducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCHALL":
      console.log(state);
      return {
        ...state,
        books: action.payload,
      };
    case "CREATE":
      return state;
    default:
      return state;
  }
};

export default reducer;
