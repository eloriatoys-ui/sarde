/* ============================================================
   Supabase client — uses anon key only (safe for browser).
   ============================================================ */
const SUPABASE_URL = "https://yxleyphgkljqzlhxbqab.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl4bGV5cGhna2xqcXpsaHhicWFiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgxNTY1NDIsImV4cCI6MjA5MzczMjU0Mn0.z9sYQd_zZyFMOTXzTofovaZmFga62RwWhd8qOIL335A";

window.sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: { persistSession: true, autoRefreshToken: true }
});

window.SARDE_BUCKET = "menu-images";
