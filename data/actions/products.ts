"use server";

import supabase from "@/lib/supabaseClient";

export const fetchData = async () => {
  try {
    const { data, error } = await supabase.from("restorant").select("*");
    if (error) throw error;
    return data;
  } catch (err) {
    console.error("fetchProduct.error:", err);
    throw err;
  }
};
