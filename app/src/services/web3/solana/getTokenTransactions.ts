/* eslint-disable @typescript-eslint/no-explicit-any */
import { PublicKey } from "@solana/web3.js";
import { getDateTime } from "../../../helpers";
import { BLOCKCHAIN_CONNECTION } from "@/config";

const TOKEN = "THEIA";
const SYMBOL = "THEIA";
const TX_LIMIT = 10;

export interface TokenTransaction {
  date: string;
  time: string;
  signature: string;
  type: string;
  sender: string;
  receiver: string;
  amount: number;
  symbol: string;
  token: string;
}

export const getTokenTransactions = async (
  _token: string = TOKEN,
  _symbol: string = SYMBOL,
  _txLimit: number = TX_LIMIT
): Promise<Array<TokenTransaction>> => {
  const signatures =
    await BLOCKCHAIN_CONNECTION.getConfirmedSignaturesForAddress2(
      new PublicKey(_token),
      { limit: _txLimit }
    );
  console.log("trans", signatures);
  const signatureList = signatures.map(
    (transaction: any) => transaction.signature
  );
  const transactionDetails = await BLOCKCHAIN_CONNECTION.getParsedTransactions(
    signatureList
  );
  console.log("trans details", transactionDetails);
  const transactions: Array<TokenTransaction> = [];
  transactionDetails.forEach((transaction: any) => {
    const date = new Date(transaction.blockTime * 1000);
    const dateTimeStr = getDateTime(date);
    const dateTimeArr = dateTimeStr.split(" ");
    const txLogs = transaction.meta.logMessages;
    let txType = "⛏️ Mint";
    // let sender = '';
    // let receiver = '';
    // let amount = 0;
    txLogs.forEach((log: string) => {
      if (log == "Program log: Instruction: TransferChecked") {
        txType = "💸 Transfer";
      } else if (log == "Program log: Instruction: Mint") {
        txType = "⛏️ Mint";
      } else if (log == "Program log: Instruction: Burn") {
        txType = "🔥 Burn";
      }
    });
    const tx: TokenTransaction = {
      date: dateTimeArr[0],
      time: dateTimeArr[1],
      signature: transaction.transaction.signatures[0],
      type: txType,
      sender:
        transaction.meta.preTokenBalances.length === 2
          ? transaction.meta.preTokenBalances[1].owner
          : transaction.meta.preTokenBalances[0].owner,
      receiver:
        transaction.meta.postTokenBalances.length === 2
          ? transaction.meta.postTokenBalances[0].owner
          : transaction.meta.preTokenBalances[0].owner,
      amount:
        transaction.meta.preTokenBalances.length === 2 &&
        transaction.meta.postTokenBalances.length === 2
          ? Math.abs(
              transaction.meta.preTokenBalances[1].uiTokenAmount.uiAmount -
                transaction.meta.postTokenBalances[1].uiTokenAmount.uiAmount
            )
          : transaction.meta.preTokenBalances[0].uiTokenAmount.uiAmount,
      symbol: _symbol,
      token: _token,
    };
    transactions.push(tx);
  });
  console.log("out", transactions);
  return transactions;
};
