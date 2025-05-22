import axios from "axios";

export interface Holder {
  wallet_address: string;
  amount: string;
  usd_value: string;
}

interface TokenHolders {
  count: number;
  data: Holder[];
}

export async function fetchTokens(
  tokenAddress: string,
  networkId: string = "8453"
) {
  const response = await axios.get<TokenHolders>(
    `https://api.chainbase.online/v1/token/top-holders?chain_id=${networkId}&contract_address=${tokenAddress}&page=1&limit=20`,
    {
      headers: {
        "x-api-key": process.env.CHAINBASE_API_KEY,
        accept: "application/json",
      },
    }
  );
  if (!Array.isArray(response.data.data))
    throw new Error("Invalid data format");
  return response.data;
}

export async function sendDirectCast(message: string) {
  await axios.put(
    "https://client.warpcast.com/v2/direct-cast-send",
    {
      conversationId: process.env.WARPCAST_GROUP_KEY,
      recipientFids: [725, 2025, 18138],
      messageId: crypto.randomUUID(),
      type: "text",
      message: message,
    },
    {
      headers: {
        accept: "*/*",
        "accept-language": "en-US,en;q=0.9",
        authorization: `Bearer ${process.env.WARPCAST_API_KEY}`,
        "content-type": "application/json; charset=utf-8",
        "idempotency-key": crypto.randomUUID(),
        origin: "https://warpcast.com",
        priority: "u=1, i",
        referer: "https://warpcast.com/",
      },
    }
  );
}
