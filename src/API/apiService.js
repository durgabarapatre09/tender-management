import { myPageApi } from "./baseEndPoint";
export const getLoginAPI = async (payload) => {
  return await myPageApi.post("/login", payload);
};
