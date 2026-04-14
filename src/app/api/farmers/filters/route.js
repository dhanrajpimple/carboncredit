import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export async function GET() {
  try {
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL.includes("your_supabase_url")) {
      return NextResponse.json(
        { error: "Supabase not configured" },
        { status: 500 }
      );
    }

    // Fetch unique values for filters
    const { data, error } = await supabaseAdmin
      .from("registered_farms")
      .select("country, state, district");

    if (error) {
       console.error("Supabase fetch filters error:", error);
       return NextResponse.json(
         { error: "Failed to fetch filters" },
         { status: 500 }
       );
    }

    const normalize = (str) => {
      if (!str) return "";
      return str.trim().toLowerCase().replace(/\b\w/g, c => c.toUpperCase());
    };

    const filters = {
      countries: [...new Set(data.map(item => normalize(item.country)).filter(Boolean))].sort(),
      states: [...new Set(data.map(item => normalize(item.state)).filter(Boolean))].sort(),
      districts: [...new Set(data.map(item => normalize(item.district)).filter(Boolean))].sort()
    };

    return NextResponse.json(filters, { status: 200 });
  } catch (error) {
    console.error("Fetch filters error:", error);
    return NextResponse.json(
      { error: "Error fetching filters" },
      { status: 500 }
    );
  }
}
