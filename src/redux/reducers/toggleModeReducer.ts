const initialState = false;

// @ts-ignore
export const toggleModeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "THEME/TOGGLE":
      return !state;

    default:
      return state;
  }
};
