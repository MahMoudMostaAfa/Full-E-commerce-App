import { supabase } from "./supabase";

export async function createOrder({
  billingDetails,
  orderItems,
  totalPrice,
  payment,
}) {
  const { error } = await supabase
    .from("orders")
    .insert([
      {
        billingDetails,
        orderItems,
        totalPrice,
        payment,
        // userId: user.id,
      },
    ])
    .select();

  if (error) throw new Error("cannot create order");
}

export async function getOrders() {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  if (error) throw new Error(error.message);

  const { data: orders, error2 } = await supabase
    .from("orders")
    .select("*")
    .eq("userId", user.id);

  if (error2) throw new Error(error2.message);

  return orders;
}

export async function getOrderDetails(id) {
  const { data: order, error } = await supabase
    .from("orders")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw new Error(error.message);

  return order;
}
