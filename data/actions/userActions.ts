"use server";
import supabase from "@/lib/supabaseClient";
export async function signUpNewUser(email: string, password: string) {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) throw error;
    return data;
  } catch (err) {
    console.error("signUpNewUser.error:", err);
    throw err;
  }
}

export async function signInUser(email: string, password: string) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;

    if (!data.user?.email_confirmed_at) {
      throw new Error(
        "E-posta henüz onaylanmamış. Lütfen e-postanızı kontrol edin."
      );
    }

    return data;
  } catch (err) {
    console.error("signInUser.error:", err);
    throw err;
  }
}

export async function authGetUser() {
  const { data, error } = await supabase.auth.getUser();
  if (data?.user?.email_confirmed_at) {
    console.log("E-posta onaylanmış.");
  } else {
    console.log("E-posta onaylanmamış.");
  }
}

export async function getUserId() {
  try {
    const { data, error } = await supabase.auth.getSession();

    if (error || !data.session) {
      throw new Error(
        "Kullanıcı oturumu bulunamadı! Lütfen tekrar giriş yapın."
      );
    }

    console.log("Giriş yapan kullanıcının ID'si:", data.session.user.id);
    return data.session.user.id;
  } catch (err) {
    console.error("getUserId.error:", err);
    throw err;
  }
}
