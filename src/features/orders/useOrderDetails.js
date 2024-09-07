import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getOrderDetails } from "../../services/apiOrders";

export function useOrderDetails() {
  const { id } = useParams();
  if (!id) throw new Error("id is required");
  const {
    data: order,
    isLoading,
    error,
  } = useQuery({
    queryFn: () => getOrderDetails(id),
    queryKey: ["order", id],
  });

  return { order, isLoading, error };
}
