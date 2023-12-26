import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://twqwpjcrnqzhoapuryje.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR3cXdwamNybnF6aG9hcHVyeWplIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDMxMzY5NDcsImV4cCI6MjAxODcxMjk0N30.YCyYTUEjhcjNFcdfV__RX7L8G2bDbNZ2u_IPeUeWjiI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
