import { supabaseAdmin } from "@/lib/supabase";

export function mapEnterpriseRequest(record) {
  if (!record) return null;

  const district = record.target_district?.trim() || "Any district";
  const state = record.target_state?.trim() || "";
  const country = record.country?.trim() || "India";

  return {
    id: String(record.id),
    organization_name: record.organization_name,
    organization_type: record.organization_type,
    contact_name: record.contact_name,
    email: record.email,
    phone: record.phone,
    country,
    state,
    district,
    target_acres: record.target_acres,
    farmer_count: record.farmer_count,
    planting_timeline: record.planting_timeline,
    project_goal: record.project_goal,
    status: record.status || "active",
    created_at: record.created_at,
    location_label: [district !== "Any district" ? district : null, state, country].filter(Boolean).join(", "),
  };
}

export async function getEnterpriseRequests(limit = 12) {
  const { data, error } = await supabaseAdmin
    .from("enterprise_farmer_requests")
    .select("*")
    .eq("payment_status", "paid")
    .eq("status", "active")
    .order("created_at", { ascending: false })
    .limit(limit);

  if (error) {
    throw error;
  }

  return (data || []).map(mapEnterpriseRequest);
}
