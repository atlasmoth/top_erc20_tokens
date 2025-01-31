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
  const response = await axios.get(
    `https://api.chainbase.online/v1/token/top-holders?chain_id=${networkId}&contract_address=${tokenAddress}&page=1&limit=20`,
    {
      headers: {
        "x-api-key": process.env.CHAINBASE_API_KEY,
        accept: "application/json",
      },
    }
  );
  return response.data as Promise<TokenHolders>;
}
