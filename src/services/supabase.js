import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://uztsmrzxoyespbixqmjc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV6dHNtcnp4b3llc3BiaXhxbWpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYxNTYwOTcsImV4cCI6MjA1MTczMjA5N30.szZSK0s45U17A0E9B_Oj3fd-OWbnyjaj9_26xkwAXNQ";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
