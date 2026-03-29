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

    const { data: farmers, error } = await supabaseAdmin
      .from("registered_farms")
      .select("*")
      .order("created_at", { ascending: false });

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
      district: f.district || "N/A", // Use district if added later, falling back to N/A
      pincode: f.pincode,
      phone: f.phone,
      email: f.email,
      land_acres: f.land_acres,
      carbon_credits: f.estimated_credits,
    }));

    return NextResponse.json(formattedData, { status: 200 });
  } catch (error) {
    console.error("Fetch farmers error:", error);
    return NextResponse.json(
      { error: "Error fetching farmers" },
      { status: 500 }
    );
  }
}
