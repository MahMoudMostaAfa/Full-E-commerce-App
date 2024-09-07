import { supabase } from "./supabase";
export async function login({ email, password }) {
  const {
    data: { user },
    error,
  } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw new Error(error.message);
  // console.log(user);
  return user;
}
export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}
export async function signup({ email, password, fullName }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
      },
    },
  });
  if (error) throw new Error(error.message);

  const { error2 } = await supabase.from("user_settings").insert([
    {
      firstName: fullName.split(" ").at(0),
      lastName: fullName.split(" ").at(1),
      address: "",
      email: data.user.email,
    },
  ]);

  if (error2) throw new Error(error2.message);

  return data;
}
export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  if (error) throw new Error(error.message);
  return user;
}

export async function getUserSettings() {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  if (error) throw new Error(error.message);

  const { data: user_settings, error2 } = await supabase
    .from("user_settings")
    .select("*")
    // Filters
    .eq("userId", user.id)
    .single();

  if (error2) throw new Error(error2.message);
  return user_settings;
}
export async function updateUserSettings({ firstName, lastName, address }) {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  if (error) throw new Error(error.message);

  const { error2 } = await supabase
    .from("user_settings")
    .update({ firstName, lastName, address })
    .eq("userId", user.id);
  if (error) throw new Error(error.message);
}

export async function updatePassword({ password }) {
  const { error } = await supabase.auth.updateUser({
    password,
  });

  if (error) throw new Error(error.message);
}
