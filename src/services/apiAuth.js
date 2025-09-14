import supabase from "./subabase";

// User Signup
export async function signup({ email, password, newStudent }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: { ...newStudent } },
  });
  if (error) throw new Error(error.message);
  return data;
}

// User Login
export async function signin({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);
  return data;
}

// Get current User
export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);
  return data?.user;
}
