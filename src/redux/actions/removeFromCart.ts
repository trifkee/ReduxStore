const removeFromCart = (id: string | number) => {
  return {
    type: "CART/REMOVE",
    payload: id,
  };
};

export default removeFromCart;
