import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/apiProducts";
import { useSearchParams } from "react-router-dom";

export function useProducts() {
  const [searchParams] = useSearchParams();
  const filterValue = searchParams.get("discount") || "all";
  const sortBy = searchParams.get("sortBy") || "";

  const {
    isLoading,
    error,
    data: products,
  } = useQuery({
    queryKey: ["products", sortBy, filterValue],
    queryFn: () => getProducts({ sortBy, filter: filterValue }),
  });

  return { isLoading, error, products };
}
