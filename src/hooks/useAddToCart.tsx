import React from "react";
import { useDispatch, useSelector } from "react-redux";
import addToCart from "../redux/actions/cartItems";
import { item } from "../domain/interfaces/item";

export const useAddToCart = ({ id, title, price, qty, image }: item) => {
  // @ts-ignore
  const items = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();
  console.log("lol");
  return dispatch(
    addToCart({
      id,
      title,
      price,
      qty: (!!qty && qty + 1) || 1,
      image,
    })
  );
};
