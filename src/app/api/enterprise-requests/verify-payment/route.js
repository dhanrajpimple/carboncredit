import { NextResponse } from "next/server";
import crypto from "crypto";
import { supabaseAdmin } from "@/lib/supabase";

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      requestData,
    } = body;

    const secret = process.env.PAYMENT_SECRET_KEY;
    const shasum = crypto.createHmac("sha256", secret);
    shasum.update(`${razorpay_order_id}|${razorpay_payment_id}`);
    const digest = shasum.digest("hex");

    if (digest !== razorpay_signature) {
      return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
    }

    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL.includes("your_supabase_url")) {
      return NextResponse.json(
        { error: "Payment was successful, but Supabase is not configured to save data yet. Please check .env.local" },
        { status: 500 }
      );
    }

    const insertData = {
      organization_name: requestData.organizationName,
      organization_type: requestData.organizationType,
      contact_name: requestData.contactName,
      email: requestData.email,
      phone: requestData.phoneNumber,
      country: "India",
      target_state: requestData.targetState,
      target_district: requestData.targetDistrict,
      target_acres: Number(requestData.targetAcres || 0),
      farmer_count: Number(requestData.farmerCount || 0),
      planting_timeline: requestData.plantingTimeline,
      project_goal: requestData.projectGoal,
      notes: requestData.notes,
      razorpay_order_id,
      razorpay_payment_id,
      payment_status: "paid",
      status: "active",
    };

    const { data: dbData, error: dbError } = await supabaseAdmin
      .from("enterprise_farmer_requests")
      .insert([insertData])
      .select();

    if (dbError) {
      console.error("Enterprise request Supabase insert error:", dbError);
      return NextResponse.json({ error: "Error saving request to database" }, { status: 500 });
    }

    return NextResponse.json(
      { message: "Payment verified and request saved", data: dbData },
      { status: 200 }
    );
  } catch (error) {
    console.error("Enterprise request verification error:", error);
    return NextResponse.json({ error: "Error verifying payment" }, { status: 500 });
  }
}
