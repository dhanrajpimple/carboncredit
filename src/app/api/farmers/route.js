import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = 20;
    const start = (page - 1) * limit;
    const end = start + limit - 1;

    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL.includes("your_supabase_url")) {
      return NextResponse.json(
        { error: "Supabase not configured" },
        { status: 500 }
      );
    }

    const { data: farmers, error, count } = await supabaseAdmin
      .from("registered_farms")
      .select("*", { count: "exact" })
      .order("created_at", { ascending: true })
      .range(start, end);

    if (error) {
      console.error("Supabase fetch error:", error);
      return NextResponse.json(
        { error: "Failed to fetch farmers" },
        { status: 500 }
      );
    }

    // Map DB schema to existing JSON schema for frontend compatibility
    const formattedData = farmers.map((f) => ({
      id: f.id,
      name: f.farmer_name,
      country: f.country,
      state: f.state,
      district: f.district || "N/A",
      pincode: f.pincode,
      phone: f.phone,
      email: f.email,
      land_acres: f.land_acres,
      carbon_credits: f.estimated_credits,
      created_at: f.created_at
    }));

    return NextResponse.json({
      data: formattedData,
      total: count,
      page,
      limit,
      totalPages: Math.ceil(count / limit)
    }, { status: 200 });
  } catch (error) {
    console.error("Fetch farmers error:", error);
    return NextResponse.json(
      { error: "Error fetching farmers" },
      { status: 500 }
    );
  }
}
