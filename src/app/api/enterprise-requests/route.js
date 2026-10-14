import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { mapEnterpriseRequest } from "@/lib/enterpriseRequests";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const state = searchParams.get("state")?.trim();
    const district = searchParams.get("district")?.trim();
    const limit = 12;
    const start = (page - 1) * limit;
    const end = start + limit - 1;

    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL.includes("your_supabase_url")) {
      return NextResponse.json({ error: "Supabase not configured" }, { status: 500 });
    }

    let query = supabaseAdmin
      .from("enterprise_farmer_requests")
      .select("*", { count: "exact" })
      .eq("payment_status", "paid")
      .eq("status", "active")
      .order("created_at", { ascending: false });

    if (state) query = query.ilike("target_state", state);
    if (district) query = query.ilike("target_district", district);

    const { data, error, count } = await query.range(start, end);

    if (error) {
      console.error("Enterprise requests fetch error:", error);
      return NextResponse.json({ error: "Failed to fetch requests" }, { status: 500 });
    }

    return NextResponse.json({
      data: (data || []).map(mapEnterpriseRequest),
      total: count || 0,
      page,
      limit,
      totalPages: Math.max(1, Math.ceil((count || 0) / limit)),
    }, { status: 200 });
  } catch (error) {
    console.error("Fetch enterprise requests error:", error);
    return NextResponse.json({ error: "Error fetching requests" }, { status: 500 });
  }
}
