import { item } from "../../domain/interfaces/item";

const addToCart = (item: item) => {
  return {
    type: "CART/ADD",
    payload: item,
  };
};

export default addToCart;
