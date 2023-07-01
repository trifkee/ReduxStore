import instance from "../instance/instance";

export const fetchItems = () => {
  return instance({
    url: "/products?limit=20",
    method: "GET",
  });
};
