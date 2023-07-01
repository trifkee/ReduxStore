import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../reducers/test";
import { openedCheckoutPageReducer } from "../reducers/checkoutPage";
import { cartItemsReducer } from "../reducers/cartItemsReducer";
import { itemModalReducer } from "../reducers/itemModalReducer";
import { toggleModeReducer } from "../reducers/toggleModeReducer";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    openedScreen: openedCheckoutPageReducer,
    cartItems: cartItemsReducer,
    modalInfo: itemModalReducer,
    darkMode: toggleModeReducer,
  },
});

export default store;
