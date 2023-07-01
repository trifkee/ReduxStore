import { item } from "../../domain/interfaces/item";

const initialState: Array<item> = [];

// @ts-ignore
export const cartItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CART/ADD":
      const updatedItems = state.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            qty: action.payload.qty,
          };
        }

        return item;
      });

      const itemInArr = state.some((item) => item.id === action.payload.id);

      if (itemInArr) {
        return [...updatedItems];
      }

      return [...state, { ...action.payload }];

    case "CART/REMOVE":
      return [...state.filter((item) => item.id !== action.payload)];

    default:
      return state;
  }
};
