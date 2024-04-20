import { setResponse } from "./response-handler.js";

import { handleLogin } from "../services/users.js";

export const post = async (request, response) => {
  const loginData = await handleLogin(request.body);
  setResponse(loginData, response);
};
