"use server";

import { fetchTokens } from "../api/Api";
import { headers } from "next/headers";

export async function fetchHoldersData(token: string) {
  const data = await fetchTokens(token);
  return data.data;
}
