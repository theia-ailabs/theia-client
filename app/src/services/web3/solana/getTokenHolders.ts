/* eslint-disable @typescript-eslint/no-explicit-any */
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { PublicKey } from "@solana/web3.js";
import { formatPercentage } from "../../../helpers";
import { BLOCKCHAIN_CONNECTION } from "@/config";

export interface TokenHolder {
  holder: string;
  flag: string;
  account: string;
  lamports: number;
  token: string;
  decimals: number;
  supply: number;
  amount: number;
  allocation: string;
  ranking: number;
}

export const getTokenHolders = async (
  _token: string
): Promise<Array<TokenHolder>> => {
  const rawAccounts = await BLOCKCHAIN_CONNECTION.getParsedProgramAccounts(
    new PublicKey(TOKEN_PROGRAM_ID), // new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA")
    {
      filters: [
        {
          dataSize: 165, // number of bytes
        },
        {
          memcmp: {
            offset: 0, // number of bytes
            bytes: _token, // base58 encoded string
          },
        },
      ],
    }
  );
  let supply = 0;
  const holders: Array<TokenHolder> = [];
  rawAccounts.forEach((acc: any) => {
    const holder: TokenHolder = {
      holder: acc.account.data.parsed.info.owner,
      flag: "🏴‍☠️",
      account: acc.pubkey.toBase58(),
      lamports: acc.account.lamports,
      token: acc.account.data.parsed.info.mint,
      decimals: acc.account.data.parsed.info.tokenAmount.decimals,
      supply: 0,
      amount: acc.account.data.parsed.info.tokenAmount.uiAmount,
      allocation: "",
      ranking: -1,
    };
    supply += holder.amount;
    holders.push(holder);
  });
  holders.sort((a, b) => (a.amount < b.amount ? 1 : -1));
  let i = 1;
  holders.map((acc: TokenHolder) => {
    acc.supply = supply;
    acc.allocation = formatPercentage(
      Math.floor((acc.amount / supply) * 10 ** (acc.decimals * 2)) /
        10 ** acc.decimals
    );
    acc.ranking = i;
    i++;
  });
  return holders;
};
