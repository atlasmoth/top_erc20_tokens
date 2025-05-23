import { NextRequest, NextResponse } from "next/server";
import { sendDirectCast } from "./Api";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    console.log({ body });

    await sendDirectCast(body.message);
  } catch (error) {
    console.error(error);
  }

  return NextResponse.json({
    success: true,
  });
}
