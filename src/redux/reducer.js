const initialState = {
  selectedOption: "option1",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SELECTED_OPTION":
      return {
        ...state,
        selectedOption: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
