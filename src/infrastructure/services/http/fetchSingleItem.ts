import instance from "../instance/instance";

export const fetchSingleItem = () => {
  return instance({
    url: `https://fakestoreapi.com/products/${
      Math.floor(Math.random() * 10) + 1
    }`,
    method: "get",
  });
};
