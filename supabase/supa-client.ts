import { createClient } from "@supabase/supabase-js";

const supabaseUrl = (import.meta as any).env.VITE_SUPABASE_API_KEY;
const supabaseKey = (import.meta as any).env.VITE_SUPABASE_ANON_KEY;

export const supaClient = createClient(supabaseUrl, supabaseKey);