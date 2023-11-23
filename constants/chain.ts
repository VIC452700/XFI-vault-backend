export enum ChainId {
  MAINNET = 56,
  TESTNET = 4002,
}

export const DEFAULT_CHAINID = process.env.DEFAULT_CHAINID || 56;

const rpcUrls = {
  56: "https://bsc-dataseed3.ninicoin.io",
  4002: "https://rpc.testnet.fantom.network",
};

export const RPC_URL = rpcUrls[DEFAULT_CHAINID as ChainId];
