import axios, { AxiosInstance } from "axios";
import MockAdapter from "axios-mock-adapter";
import { FAKE_API_POST_URL } from "utils/contants";

const apiInstance: AxiosInstance = axios.create();
const mock = new MockAdapter(apiInstance, { delayResponse: 20000 });

mock
  .onPost(FAKE_API_POST_URL)
  .reply(200, { message: "Purchase submitted successfully" });

export default apiInstance;
