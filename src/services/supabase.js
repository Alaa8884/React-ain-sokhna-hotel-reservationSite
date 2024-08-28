import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://ydspjgjucifgmjosqots.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlkc3BqZ2p1Y2lmZ21qb3Nxb3RzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI3ODc5MTQsImV4cCI6MjAzODM2MzkxNH0.bGQsWSWi8y9370rrExOnYyt9dgIRjFbZIKY7GNuyhBw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;




