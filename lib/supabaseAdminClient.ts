import { createClient } from "@supabase/supabase-js";

// Admin Client oluştur
const supabaseAdmin = createClient(
  process.env.SUPABASE_URL || "https://jxtylyvebibmuvnjccdq.supabase.co",
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp4dHlseXZlYmlibXV2bmpjY2RxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczNjQzMzM3NywiZXhwIjoyMDUyMDA5Mzc3fQ.ipIFsd-OTj2gDNTYLPXlTKtkOuAYBC5zxrMiIldMtLE"
);

export default supabaseAdmin;
