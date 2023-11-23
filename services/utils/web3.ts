import { ethers } from "ethers";
import { RPC_URL } from "../../constants/chain";

const getProvider = () => new ethers.providers.JsonRpcProvider(RPC_URL);

const getSigner = (privateKey?: string) =>
  new ethers.Wallet(
    privateKey || process.env.ADMIN_PRIVATE_KEY || "",
    getProvider()
  );

export const web3 = {
  getProvider,
  getSigner,
};
