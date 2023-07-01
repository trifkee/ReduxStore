const initialState = {};

// @ts-ignore
export const itemModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "MODAL/ITEM":
      return { ...action.payload };

    default:
      return state;
  }
};
