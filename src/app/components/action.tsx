"use server";

import { fetchTokens } from "./Api";
import { headers } from "next/headers";

export async function fetchHoldersData(token: string) {
  const data = await fetchTokens(token);
  return data.data;
}
