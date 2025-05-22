import { NextRequest, NextResponse } from "next/server";
import { sendDirectCast } from "./Api";

export async function POST(request: NextRequest) {
  const body = await request.json();

  await sendDirectCast(body.message);
  return NextResponse.json({
    success: true,
  });
}
