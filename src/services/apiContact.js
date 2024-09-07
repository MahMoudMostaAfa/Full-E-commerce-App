import { supabase } from "./supabase";
export async function createMessage({ name, email, phone, message }) {
  const { data, error } = await supabase
    .from("contact_messages")
    .insert([{ name, email, phone, message }])
    .select();

  if (error) throw new Error(error.message);
  return;
}
