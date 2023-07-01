import { useQuery } from "react-query";
import { fetchSingleItem } from "../../services/http/fetchSingleItem";

export const useFetchFeaturedItem = () => {
  return useQuery({
    queryKey: ["featuredItem"],
    queryFn: fetchSingleItem,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });
};
