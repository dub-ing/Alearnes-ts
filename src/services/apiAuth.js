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

// Forget password
export async function forgetPassword(email) {
  console.log(email);

  let { data, error } = await supabase.auth.resetPasswordForEmail(email);
  console.log(data, error);
  if (error) throw new Error(error.message);
  return data;
}

// Reset password and update user
export async function resetPassword(password) {
  console.log(password);
  
  let updateUserInfo;
  if (password) updateUserInfo = { password };
  const { data, error } = await supabase.auth.updateUser(updateUserInfo);
  console.log(data, error);

  if (error) throw new Error(error.message);
  return data;
}
