import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { mapFarmerRecord } from "@/lib/farmers";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const country = searchParams.get("country")?.trim();
    const state = searchParams.get("state")?.trim();
    const district = searchParams.get("district")?.trim();
    const limit = 20;
    const start = (page - 1) * limit;
    const end = start + limit - 1;

    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL.includes("your_supabase_url")) {
      return NextResponse.json(
        { error: "Supabase not configured" },
        { status: 500 }
      );
    }

    let query = supabaseAdmin
      .from("registered_farms")
      .select("*", { count: "exact" })
      .order("created_at", { ascending: true });

    if (country) query = query.ilike("country", country);
    if (state) query = query.ilike("state", state);
    if (district) query = query.ilike("district", district);

    const { data: farmers, error, count } = await query.range(start, end);

    if (error) {
      console.error("Supabase fetch error:", error);
      return NextResponse.json(
        { error: "Failed to fetch farmers" },
        { status: 500 }
      );
    }

    // Map DB schema to existing JSON schema for frontend compatibility
    const formattedData = (farmers || []).map(mapFarmerRecord);

    return NextResponse.json({
      data: formattedData,
      total: count || 0,
      page,
      limit,
      totalPages: Math.max(1, Math.ceil((count || 0) / limit))
    }, { status: 200 });
  } catch (error) {
    console.error("Fetch farmers error:", error);
    return NextResponse.json(
      { error: "Error fetching farmers" },
      { status: 500 }
    );
  }
}
