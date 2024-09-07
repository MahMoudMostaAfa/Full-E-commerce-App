import { supabase } from "./supabase";

export async function getProducts({ sortBy, filter }) {
  let query = supabase.from("products").select("*");

  if (sortBy) {
    const [key, order] = sortBy.split("-");
    query = query.order(key, { ascending: order === "asc" });
  }

  if (filter) {
    if (filter === "with-discount") {
      query = query.gt("discount", 0);
    }
    if (filter === "no-discount") {
      query = query.eq("discount", 0);
    }
  }

  const { data, error } = await query;
  if (error) {
    // console.error(error);
    throw new Error("An error occurred while fetching products");
  }
  // console.log(data);
  return data;
}
export async function getProduct(id) {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single();
  if (error) {
    // console.error(error);
    throw new Error("An error occurred while fetching product");
  }
  // console.log(data);
  return data;
}

export async function searchProducts(query) {
  if (!query) return [];

  const { data, error } = await supabase
    .from("products")
    .select("*")
    .ilike("title", `%${query}%`);
  if (error) {
    // console.error(error);
    throw new Error("An error occurred while searching products");
  }
  // console.log(data);
  return data;
}
