
export const initialState = {
  stateprop: false,
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SUCCESS":
      return {
        ...state,
        stateprop: true,
      };
    case "FAILURE":
      return {
        ...state,
        stateprop: false,
      };
    default:
      return state;
  }
};
