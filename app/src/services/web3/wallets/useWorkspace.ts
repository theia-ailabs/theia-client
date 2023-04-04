import { computed } from "vue";
import { useAnchorWallet } from "./useAnchorWallet";
import { useWallet } from "./useWallet";
import { Connection } from "@solana/web3.js";
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
// import useStore from "../../store";
// const store = useStore();

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
export const useWorkspace = () => workspace;
export const initWorkspace = () => {
  const { publicKey } = useWallet();
  const wallet = useAnchorWallet();
  const connection = new Connection(process.env.VUE_APP_CLUSTER_URL as string);
  workspace = {
    wallet,
    connection,
  };
  const publicKeyBase58 = computed(() => publicKey.value?.toBase58());
  if (wallet.value || publicKeyBase58.value) {
    console.log("wallet connected");
    // store.dispatch("user/connectWallet", publicKey.value);
    // Update to pinia
  }
};
