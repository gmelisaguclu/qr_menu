import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true, // Oturumu kaydet
    autoRefreshToken: true, // Token yenileme açık olsun
    detectSessionInUrl: true, // URL'den oturum bilgisi al
  },
});

export default supabase;
