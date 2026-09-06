import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export async function POST(request) {
  try {
    const body = await request.json();
    
    const { companyName, contactName, email, phone, country, volumeNeeded, purpose, message } = body;

    if (!companyName || !contactName || !email) {
      return NextResponse.json(
        { error: "Company name, contact name, and email are required" },
        { status: 400 }
      );
    }

    // Try to save to Supabase if configured
    if (process.env.NEXT_PUBLIC_SUPABASE_URL && !process.env.NEXT_PUBLIC_SUPABASE_URL.includes("your_supabase_url")) {
      try {
        await supabaseAdmin
          .from("buyer_inquiries")
          .insert([{
            company_name: companyName,
            contact_name: contactName,
            email,
            phone: phone || null,
            country: country || null,
            volume_needed: volumeNeeded || null,
            purpose: purpose || null,
            message: message || null,
            created_at: new Date().toISOString(),
          }]);
      } catch (dbError) {
        // Log but don't fail — the inquiry is still valid
        console.error("Supabase insert error (buyer_inquiries):", dbError);
      }
    }

    return NextResponse.json({ success: true, message: "Inquiry submitted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Buyer inquiry error:", error);
    return NextResponse.json(
      { error: "Failed to process inquiry" },
      { status: 500 }
    );
  }
}
