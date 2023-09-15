import fakeApi from "fakeApi";
import { Purchase } from "types/purchase";
import { FAKE_API_POST_URL } from "utils/contants";

export const submitPurchase = async (purchase: Purchase) => {
  const { data } = await fakeApi.post(FAKE_API_POST_URL, { purchase });

  return data;
};
