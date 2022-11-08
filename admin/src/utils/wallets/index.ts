import { Web3Storage } from "web3.storage";
import axios from "axios";
import { tronlinkMethods } from "./tronlink";

const getUsdKoef = async (
  blockchain: string, // currencyTypes
  setUsdtKoef?: (price: number) => void
) => {
  const { data } = await axios.get(
    `https://api.coingecko.com/api/v3/simple/price?ids=${blockchain}&vs_currencies=usd`
  );

  setUsdtKoef && data[blockchain] && setUsdtKoef(+data[blockchain].usd);
  if (data[blockchain]) return +data[blockchain].usd;
  return 0;
};

export const makeStorageClient = () => {
  return new Web3Storage({ token: process.env.REACT_APP_STORAGE_TOKEN || "" });
};

export { tronlinkMethods, getUsdKoef };
