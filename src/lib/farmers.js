import { supabaseAdmin } from "@/lib/supabase";

export function mapFarmerRecord(record) {
  if (!record) return null;

  const district = record.district?.trim() || "N/A";
  const state = record.state?.trim() || "";
  const country = record.country?.trim() || "India";

  return {
    id: String(record.id),
    name: record.farmer_name,
    country,
    state,
    district,
    pincode: record.pincode,
    phone: record.phone,
    email: record.email,
    land_acres: record.land_acres,
    carbon_credits: record.estimated_credits,
    created_at: record.created_at,
    location_label: [district !== "N/A" ? district : null, state, country].filter(Boolean).join(", "),
    listing_path: `/buy-carbon-credit/${record.id}`,
  };
}

export async function getFarmerById(id) {
  const { data, error } = await supabaseAdmin
    .from("registered_farms")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (error) {
    throw error;
  }

  return mapFarmerRecord(data);
}

export async function getRelatedFarmersByState(state, excludeId, limit = 3) {
  if (!state) return [];

  const { data, error } = await supabaseAdmin
    .from("registered_farms")
    .select("*")
    .eq("state", state)
    .neq("id", excludeId)
    .order("created_at", { ascending: true })
    .limit(limit);

  if (error) {
    throw error;
  }

  return (data || []).map(mapFarmerRecord);
}
