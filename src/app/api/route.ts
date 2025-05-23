import { NextRequest, NextResponse } from "next/server";
import { sendDirectCast } from "./Api";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    console.log({ body });

    await sendDirectCast(body.message);
  } catch (error: any) {
    if (error.response) {
      console.error(
        "Error message:",
        error.response.data?.message || error.response.statusText
      );
      console.error("Status code:", error.response.status);
    } else if (error.request) {
      console.error("Network error:", error.message);
    } else {
      console.error("Error:", error.message);
    }
  }

  return NextResponse.json({
    success: true,
  });
}
