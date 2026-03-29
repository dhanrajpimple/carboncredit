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
      farmerData,
    } = body;

    const secret = process.env.PAYMENT_SECRET_KEY;
    
    // Verify signature
    const shasum = crypto.createHmac("sha256", secret);
    shasum.update(`${razorpay_order_id}|${razorpay_payment_id}`);
    const digest = shasum.digest("hex");

    if (digest !== razorpay_signature) {
      return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
    }

    // Prepare data for Supabase
    const insertData = {
      farmer_name: farmerData.farmerName,
      country: farmerData.country,
      state: farmerData.state,
      district: farmerData.district,
      pincode: farmerData.pincode,
      phone: farmerData.phoneNumber,
      email: farmerData.email,
      land_acres: Number(farmerData.totalLand),
      estimated_credits: Number(farmerData.estimatedCredits),
      razorpay_order_id,
      razorpay_payment_id,
      payment_status: "paid"
    };

    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL.includes("your_supabase_url")) {
       return NextResponse.json(
         { error: "Payment was successful, but Supabase is not configured to save data yet! Please check .env.local" },
         { status: 500 }
       );
    }

    // Store in Supabase
    const { data: dbData, error: dbError } = await supabaseAdmin
      .from("registered_farms")
      .insert([insertData])
      .select();

    if (dbError) {
      console.error("Supabase insert error:", dbError);
      return NextResponse.json(
        { error: "Error saving to database" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Payment verified and data saved", data: dbData },
      { status: 200 }
    );
  } catch (error) {
    console.error("Verification error:", error);
    return NextResponse.json(
      { error: "Error verifying payment" },
      { status: 500 }
    );
  }
}
