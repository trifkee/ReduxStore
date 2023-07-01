import { useQuery } from "react-query";
import { fetchItems } from "../../services/http/fetchItems";

export const useFetchItems = () => {
  return useQuery({
    queryKey: ["itemList"],
    queryFn: fetchItems,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });
};
