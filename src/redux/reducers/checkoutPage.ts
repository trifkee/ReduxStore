export const openedCheckoutPageReducer = (
  state: boolean = false,
  action: { type: string }
) => {
  switch (action.type) {
    case "TOGGLESCREEN":
      return !state;
    default:
      return state;
  }
};
