import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://jxtylyvebibmuvnjccdq.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp4dHlseXZlYmlibXV2bmpjY2RxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY0MzMzNzcsImV4cCI6MjA1MjAwOTM3N30.MVhD3Iirg3S926ep24qODMTt9MBeHfRHFOqcEruXGFo"
);

export default supabase;
