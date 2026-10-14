import { NextResponse } from "next/server";
import Razorpay from "razorpay";

const REQUEST_FEE_INR = 199;

export async function POST() {
  try {
    const razorpay = new Razorpay({
      key_id: process.env.NEXT_PUBLIC_PAYMENT_KEY || "build_dummy_key",
      key_secret: process.env.PAYMENT_SECRET_KEY || "build_dummy_secret",
    });

    const order = await razorpay.orders.create({
      amount: REQUEST_FEE_INR * 100,
      currency: "INR",
      receipt: `enterprise_request_${Date.now()}`,
      notes: {
        purpose: "enterprise_farmer_request",
      },
    });

    return NextResponse.json(order, { status: 200 });
  } catch (error) {
    console.error("Enterprise request Razorpay order error:", error);
    return NextResponse.json({ error: "Error creating order" }, { status: 500 });
  }
}
