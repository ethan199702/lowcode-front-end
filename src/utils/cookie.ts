import Cookies from "js-cookie";

const TokenKey = "authorization";

export const getCookie = () => {
  return Cookies.get(TokenKey);
};

export const setCookie = (k: string) => {
  Cookies.set(TokenKey, k);
};
