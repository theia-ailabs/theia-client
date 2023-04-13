// import { computed } from "vue";
import { useAnchorWallet } from "./useAnchorWallet";
import { useWallet } from "./useWallet";
import { Connection } from "@solana/web3.js";
import { BLOCKCHAIN_CONNECTION } from "../../../../config";
import {
  BraveWalletAdapter,
  PhantomWalletAdapter,
  CoinbaseWalletAdapter,
  SlopeWalletAdapter,
  TrustWalletAdapter,
  HyperPayWalletAdapter,
  SolflareWalletAdapter,
  GlowWalletAdapter,
  SolletExtensionWalletAdapter,
  SolletWalletAdapter,
  TorusWalletAdapter,
  ExodusWalletAdapter,
  Coin98WalletAdapter,
  SolongWalletAdapter,
  StrikeWalletAdapter,
  MathWalletAdapter,
  LedgerWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { initWallet } from "./useWallet";
import { createWalletStore, WalletStoreProps } from "./createWalletStore";
// import useStore from "../../../services/store";

const walletOptions = {
  wallets: [
    new BraveWalletAdapter(),
    new PhantomWalletAdapter(),
    new CoinbaseWalletAdapter(),
    new SolflareWalletAdapter(),
    new SlopeWalletAdapter(),
    new HyperPayWalletAdapter(),
    new TrustWalletAdapter(),
    new GlowWalletAdapter(),
    new SolletWalletAdapter(),
    new SolletExtensionWalletAdapter(),
    new TorusWalletAdapter(),
    new ExodusWalletAdapter(),
    new Coin98WalletAdapter(),
    new SolongWalletAdapter(),
    new StrikeWalletAdapter(),
    new MathWalletAdapter(),
    new LedgerWalletAdapter(),
  ],
  autoConnect: true,
};

createWalletStore(walletOptions);
initWallet(walletOptions as WalletStoreProps);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let workspace: any;
export const useSolana = () => workspace;
export const initSolana = () => {
  const { publicKey } = useWallet();
  const wallet = useAnchorWallet();
  const connection: Connection = BLOCKCHAIN_CONNECTION;
  workspace = {
    wallet,
    connection,
    publicKey,
  };
  // const store = useStore();
  // const publicKeyBase58 = computed(() => publicKey.value?.toBase58());
  // if (wallet.value || publicKeyBase58.value) {
  //   console.log("Wallet connected");
  //   store.pubkey = publicKeyBase58.value as string;
  // };
};
