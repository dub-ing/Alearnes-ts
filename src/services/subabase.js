import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://wbeiymnoonpbojywyadr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndiZWl5bW5vb25wYm9qeXd5YWRyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY5MzMxMjIsImV4cCI6MjA3MjUwOTEyMn0.4pb9ZgEPs3r22MMkFTqtA-XT6tbwb4XkL54tX3al0Zc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase
