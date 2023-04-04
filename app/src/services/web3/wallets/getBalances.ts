import { Connection, PublicKey, TokenAccountsFilter } from '@solana/web3.js';

const CONNECTION = new Connection( process.env.VUE_APP_SOLANA_RPC_URL as string)

export async function balanceSOL ( pubkey: PublicKey, logs = false ): Promise<number> {
  try {
    const res = pubkey ? await CONNECTION.getBalance(pubkey) : 0;
    return Math.floor((res/1000000000)*100)/100; // 1 billion lamports to 1 SOL (2 decimals)
  } catch (e) {
    if ( logs ) {
      console.log(e);
      console.log('You have no SOL in your wallet aaccount!');
    }
    return -1;
  }
}

export async function balanceUSDC ( pubkey: PublicKey, logs = false ): Promise<number> {
  try {
    const USDC = new PublicKey('EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v');
    const token: TokenAccountsFilter = { mint: USDC }
    const accounts = await CONNECTION.getTokenAccountsByOwner(pubkey, token);
    const tokenAccount: PublicKey = accounts.value[0].pubkey;
    const tokenBalance = await CONNECTION.getTokenAccountBalance(tokenAccount);
    const balance = tokenBalance.value.amount;
    return Math.floor((Number(balance)/1000000) * 100) / 100;
  } catch (e) {
    if ( logs ) {
      console.log(e);
      console.log('You have no USDC in your wallet aaccount!');
    }
    return 0;
  }
}

export async function balanceBEEN ( pubkey: PublicKey, logs = false ): Promise<number> {
  try {
    const BEEN = new PublicKey('DoA5HLxcNGuqGb4wAfTXJZzAzt1juhgpYCxZpuvzgUTy');
    const token: TokenAccountsFilter = { mint: BEEN }
    const accounts = await CONNECTION.getTokenAccountsByOwner(pubkey, token);
    const tokenAccount: PublicKey = accounts.value[0].pubkey;
    const tokenBalance = await CONNECTION.getTokenAccountBalance(tokenAccount);
    const balance = tokenBalance.value.amount;
    return Math.floor((Number(balance)/100) * 100) / 100;
  } catch (e) {
    if ( logs ) {
      console.log(e);
      console.log('You have no BEEN in your wallet aaccount!');
    }
    return 0;
  }
}
