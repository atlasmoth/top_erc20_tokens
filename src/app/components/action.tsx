"use server";

import { fetchTokens } from "./Api";
import { headers } from "next/headers";

export async function fetchHoldersData() {
  const headersList = await headers();
  const referer = headersList.get("referer") || "";
  const url = new URL(referer);

  const data = await fetchTokens(url.searchParams.get("token") || "");
  return data.data;
}
