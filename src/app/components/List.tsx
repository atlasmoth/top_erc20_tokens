"use client";
import { Holder } from "../api/Api";
import { formatWallet } from "../misc";

export default function List({
  holders,
  token,
}: {
  holders: Holder[];
  token: string;
}) {
  return (
    <main className="bg-[#1B1E28] min-h-screen text-[rgba(255,255,255,0.8)]">
      <div className="container mx-auto p-4">
        <a
          className="font-semibold text-xl"
          href={`https://base.blockscout.com/token/${token}`}
          target="_blank"
        >
          Top 20 Holders of{" "}
          <span className="underline">{formatWallet(token)}</span>
        </a>
        {holders.map((t, index) => (
          <div
            className="flex items-center my-4 justify-between"
            key={t.wallet_address}
          >
            <div className="flex items-center mr-2">
              <p className="mr-2 font-semibold">{index + 1}.</p>
              <a
                href={`https://base.blockscout.com/address/${t.wallet_address}`}
                target="_blank"
                className="underline"
              >
                {formatWallet(t.wallet_address)}
              </a>
            </div>
            <p className="flex-shrink-0">
              {Intl.NumberFormat("en-US", {
                notation: "compact",
                maximumFractionDigits: 4,
                roundingPriority: "morePrecision",
                compactDisplay: "short",
              }).format(parseFloat(t.amount))}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
