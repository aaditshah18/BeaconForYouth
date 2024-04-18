import { setResponse } from "./response-handler.js";

import { handleLogin } from "../services/users.js";

export const post = async (request, response) => {
  try {
    const loginData = await handleLogin(request.body);
    // setResponse(loginData, response);

    response.status(200).json({
      msg: `Welcome, ${loginData.name}.`,
      loginData: {
        token: loginData.token,
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
