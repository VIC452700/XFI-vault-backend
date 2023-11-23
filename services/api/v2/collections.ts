import { getTokenURI } from "./../../utils/index";
import { getERC721Contract } from "../../../constants/abis";
import { IAPIGatewayEvent } from "../../../types/response.type";
import handler from "../../utils/handler";
import { getModel } from "../../utils/mongo";
import { responseError, responseSuccess } from "../../utils/response";

export const create = handler(async (event: IAPIGatewayEvent) => {
  try {
    const Collection = await getModel("Collection");

    const body = event.body;

    const collection = new Collection(JSON.parse(body));

    const data = await collection.save();

    return responseSuccess({ data: data._doc });
  } catch (error) {
    return responseError(error.message);
  }
});

export const refresh = handler(async (event: IAPIGatewayEvent) => {
  try {
    const { collection_address, nft_id } = JSON.parse(event.body);
    console.log({
      collection_address,
      nft_id,
    });

    const erc721Contract = getERC721Contract(collection_address);

    const ipfs = await erc721Contract.functions.tokenURI(nft_id);

    const ipfsResponse = await fetch(
      `https://ipfs.io/ipfs/${ipfs[0].split("ipfs://")[1]}`
    );

    const ipfsData = await ipfsResponse.json();

    const Nft = await getModel("Nft");

    const nft = new Nft({
      ...ipfsData,
      collection_address,
    });

    const saveNftResponse = await nft.save();

    return responseSuccess({
      data: saveNftResponse._doc,
    });
  } catch (error) {
    return responseError(error.message);
  }
});

export const configureFilter = handler(async (event: IAPIGatewayEvent) => {
  return responseSuccess("");
});

export const filter = handler(async (event: IAPIGatewayEvent) => {
  return responseSuccess("");
});
