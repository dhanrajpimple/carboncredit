import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co";
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder_key";

if (!process.env.NEXT_PUBLIC_SUPABASE_URL || supabaseUrl === "your_supabase_url_here") {
  console.warn("⚠️ Supabase environment variables are missing or using placeholder values. Please update .env.local");
}

export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);
