("use client");

import Axios from "axios";
export const baseURLm = process.env.REACT_BACKEND_BASE_URL || baseURL;

const getToken = () => {
  if (typeof window !== "undefined") {
    return Boolean(window?.localStorage?.getItem("token")?.trim())
      ? window?.localStorage?.getItem("token")
      : "";
  }
  return "";
};

export const myPageApi = Axios.create({
  // headers: {
  //   "ngrok-skip-browser-warning": true,
  //   Authorization: `Bearer ${getToken()}`,
  // },
  baseURL: process.env.REACT_BACKEND_BASE_URL || baseURL,
});
