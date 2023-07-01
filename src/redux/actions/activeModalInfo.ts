import { item } from "../../domain/interfaces/item";

const activeModalInfo = (item: item) => {
  return {
    type: "MODAL/ITEM",
    payload: item,
  };
};

export default activeModalInfo;
