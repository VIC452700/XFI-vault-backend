import { Contract } from "@ethersproject/contracts";
import { web3 } from "../../services/utils/web3";
import ERC721 from "./ERC721.json";

export const getERC721Contract = (address: string) => {
  return new Contract(address, ERC721, web3.getProvider());
};
