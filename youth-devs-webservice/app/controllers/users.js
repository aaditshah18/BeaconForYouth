import { setResponse } from "./response-handler.js";

import { handleLogin } from "../services/users.js";

export const login = async (request, response) => {
  try {
    const loginData = await handleLogin(request.body);
    setResponse(loginData, response);

    response.status(200).json({
      msg: `Welcome, ${data.firstName}.`,
      data: {
        token: data.token,
      },
      result: true,
    });
  } catch (err) {
    response.status(403).json({
      msg: err.message,
      result: false,
    });
  }
};
