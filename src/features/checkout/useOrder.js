import { useMutation } from "@tanstack/react-query";
import { createOrder } from "../../services/apiOrders";

export function useOrder() {
  const { mutate: order, isLoading } = useMutation({
    mutationFn: ({ billingDetails, orderItems, totalPrice, payment }) =>
      createOrder({
        billingDetails,
        orderItems,
        totalPrice,
        payment,
      }),
  });

  return { order, isLoading };
}
