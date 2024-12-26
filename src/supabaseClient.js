// src/supabaseClient.js

import { createClient } from '@supabase/supabase-js';

// Replace these with your own Supabase URL and Anon Key
const SUPABASE_URL = 'https://fpxkgdftfqxcabatotpq.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZweGtnZGZ0ZnF4Y2FiYXRvdHBxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUyMTYzOTEsImV4cCI6MjA1MDc5MjM5MX0.hKf3p1mH_hdCzxYRyDQk4pH-u09xeqUY6g8IDEfM_fU';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default supabase;
