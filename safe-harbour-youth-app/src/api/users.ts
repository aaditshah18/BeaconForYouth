import Cookies from "js-cookie";
const USER_TOKEN_NAME = "Token";

export type loginPayload = {
  email: string;
  password: string;
};

export const login = async (payload: loginPayload) => {
  const res = await fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  const { data, result, msg } = await res.json();

  if (data && data.token) {
    Cookies.set(USER_TOKEN_NAME, data.token);
  }

  if (!result) {
    throw new Error(msg);
  }

  return {
    msg,
  };
};
