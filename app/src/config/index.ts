// import dotenv from "dotenv";
// dotenv.config();
// export const SERVER_URL = String(process.env.VUE_APP_SERVER_URL);
// console.log(SERVER_URL);
import { Connection } from "@solana/web3.js";
export const SERVER_URL = "theia-server.onrender.com";
export const SOLANA_RPC_URL =
  "https://powerful-red-pond.solana-mainnet.discover.quiknode.pro/fadce6b2a03b0ae9ebf644a74bf1eb4e9c620736/";
export const BLOCKCHAIN_CONNECTION = new Connection(SOLANA_RPC_URL);
